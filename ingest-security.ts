import {
  chmod,
  copyFile,
  cp,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  realpath,
  rename,
  rm,
  stat,
  writeFile,
} from "fs/promises";
import { createHash, randomUUID } from "crypto";
import { basename, dirname, extname, isAbsolute, join, relative, resolve, sep } from "path";
import { tmpdir } from "os";
import matter from "gray-matter";
import { extractWikilinks, markdownToHtml, slugify } from "./lib";

export const DEFAULT_INGEST_LIMITS = {
  maxFiles: 50,
  maxFileBytes: 1024 * 1024,
  maxAggregateBytes: 5 * 1024 * 1024,
} as const;

export interface ValidatedIngestFile {
  requestedPath: string;
  relativePath: string;
  displayPath: string;
  realPath: string;
  size: number;
  sha256: string;
}

export interface IngestWorkspace {
  root: string;
  rawDir: string;
  wikiDir: string;
  repoWikiDir: string;
  baselineFingerprint: string;
  baselineFiles: string[];
}

function isPathInside(root: string, candidate: string): boolean {
  const rel = relative(root, candidate);
  return rel !== "" && !rel.startsWith(`..${sep}`) && rel !== ".." && !isAbsolute(rel);
}

function safeRelativePath(path: string): boolean {
  if (!path || path.length > 512 || /[\u0000-\u001f\u007f]/.test(path)) return false;
  const parts = path.replace(/\\/g, "/").split("/");
  return parts.every((part) => part && part !== "." && part !== ".." && !part.startsWith("."));
}

export async function validateIngestFiles(
  requestedFiles: string[],
  options: {
    rawRoot?: string;
    maxFiles?: number;
    maxFileBytes?: number;
    maxAggregateBytes?: number;
  } = {}
): Promise<ValidatedIngestFile[]> {
  const maxFiles = options.maxFiles ?? DEFAULT_INGEST_LIMITS.maxFiles;
  const maxFileBytes = options.maxFileBytes ?? DEFAULT_INGEST_LIMITS.maxFileBytes;
  const maxAggregateBytes = options.maxAggregateBytes ?? DEFAULT_INGEST_LIMITS.maxAggregateBytes;
  if (!Array.isArray(requestedFiles) || requestedFiles.length === 0) {
    throw new Error("No files to ingest");
  }
  if (requestedFiles.length > maxFiles) {
    throw new Error(`Too many ingest files: maximum is ${maxFiles}`);
  }

  const configuredRoot = options.rawRoot || join(import.meta.dir, "raw");
  const rawRoot = await realpath(configuredRoot);
  const seen = new Set<string>();
  const validated: ValidatedIngestFile[] = [];
  let totalBytes = 0;

  for (const requested of requestedFiles) {
    const original = String(requested);
    let candidate: string;
    if (isAbsolute(original)) {
      candidate = original;
    } else {
      let rel = original.replace(/\\/g, "/").trim();
      if (rel.startsWith("raw/")) rel = rel.slice("raw/".length);
      if (!safeRelativePath(rel)) throw new Error(`Invalid ingest path: ${JSON.stringify(original)}`);
      candidate = resolve(rawRoot, rel);
    }

    let canonical: string;
    try {
      canonical = await realpath(candidate);
    } catch {
      throw new Error(`Ingest file does not exist: ${JSON.stringify(original)}`);
    }
    if (!isPathInside(rawRoot, canonical)) {
      throw new Error(`Ingest path escapes raw/: ${JSON.stringify(original)}`);
    }

    const rel = relative(rawRoot, canonical).split(sep).join("/");
    if (!safeRelativePath(rel) || rel.startsWith("assets/")) {
      throw new Error(`Ingest path is not an allowed source: ${JSON.stringify(original)}`);
    }
    if (extname(canonical).toLowerCase() !== ".md") {
      throw new Error(`Unsupported ingest extension (only .md is allowed): ${JSON.stringify(original)}`);
    }
    if (seen.has(canonical)) throw new Error(`Duplicate ingest file: ${JSON.stringify(original)}`);
    seen.add(canonical);

    const fileStat = await stat(canonical);
    if (!fileStat.isFile()) throw new Error(`Ingest path is not a regular file: ${JSON.stringify(original)}`);
    if (fileStat.size > maxFileBytes) {
      throw new Error(`Ingest file exceeds ${maxFileBytes} bytes: ${JSON.stringify(original)}`);
    }
    totalBytes += fileStat.size;
    if (totalBytes > maxAggregateBytes) {
      throw new Error(`Ingest files exceed ${maxAggregateBytes} aggregate bytes`);
    }
    const content = await readFile(canonical);
    if (content.byteLength !== fileStat.size || (await realpath(candidate)) !== canonical) {
      throw new Error(`Ingest file changed during validation: ${JSON.stringify(original)}`);
    }

    validated.push({
      requestedPath: original,
      relativePath: rel,
      displayPath: `raw/${rel}`,
      realPath: canonical,
      size: fileStat.size,
      sha256: createHash("sha256").update(content).digest("hex"),
    });
  }
  return validated;
}

async function collectTreeFiles(root: string): Promise<string[]> {
  const files: string[] = [];
  async function walk(dir: string, prefix: string): Promise<void> {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isSymbolicLink()) throw new Error(`Symbolic links are not allowed in staged wiki: ${rel}`);
      if (entry.isDirectory()) {
        await walk(join(dir, entry.name), rel);
      } else if (entry.isFile()) {
        files.push(rel);
      } else {
        throw new Error(`Unsupported staged wiki entry: ${rel}`);
      }
    }
  }
  await walk(root, "");
  return files.sort();
}

export async function fingerprintTree(root: string): Promise<string> {
  const hash = createHash("sha256");
  for (const rel of await collectTreeFiles(root)) {
    hash.update(rel);
    hash.update("\0");
    hash.update(await readFile(join(root, rel)));
    hash.update("\0");
  }
  return hash.digest("hex");
}

async function makeReadOnlyTree(root: string): Promise<void> {
  const directories: string[] = [];
  async function walk(dir: string): Promise<void> {
    directories.push(dir);
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else await chmod(full, 0o400);
    }
  }
  await walk(root);
  for (const dir of directories.reverse()) await chmod(dir, 0o500);
}

export async function prepareIngestWorkspace(
  files: ValidatedIngestFile[],
  options: { repoRoot?: string; tempRoot?: string } = {}
): Promise<IngestWorkspace> {
  const repoRoot = options.repoRoot || import.meta.dir;
  const repoWiki = join(repoRoot, "wiki");
  const baselineFingerprint = await fingerprintTree(repoWiki);
  const baselineFiles = await collectTreeFiles(repoWiki);
  const root = await mkdtemp(join(options.tempRoot || tmpdir(), "brain-wiki-ingest-"));
  const rawDir = join(root, "raw");
  const wikiDir = join(root, "wiki");
  try {
    await chmod(root, 0o700);
    await mkdir(rawDir, { recursive: true, mode: 0o700 });
    await cp(repoWiki, wikiDir, { recursive: true, force: false, errorOnExist: true });
    await copyFile(join(repoRoot, "AGENTS.md"), join(root, "AGENTS.md"));

    for (const file of files) {
      const destination = join(rawDir, file.relativePath);
      await mkdir(dirname(destination), { recursive: true, mode: 0o700 });
      if ((await realpath(file.realPath)) !== file.realPath) {
        throw new Error(`Ingest source changed before staging: ${file.displayPath}`);
      }
      await copyFile(file.realPath, destination);
      const copiedHash = createHash("sha256").update(await readFile(destination)).digest("hex");
      if (copiedHash !== file.sha256) {
        throw new Error(`Ingest source changed while staging: ${file.displayPath}`);
      }
    }

    // Fail rather than snapshotting a mixed tree if an editor changed wiki/
    // while it was being copied into the staging workspace.
    if ((await fingerprintTree(repoWiki)) !== baselineFingerprint ||
        (await fingerprintTree(wikiDir)) !== baselineFingerprint) {
      throw new Error("wiki/ changed while the ingest workspace was being prepared");
    }
    await makeReadOnlyTree(rawDir);

    return {
      root,
      rawDir,
      wikiDir,
      repoWikiDir: repoWiki,
      baselineFingerprint,
      baselineFiles,
    };
  } catch (error) {
    await rm(root, { recursive: true, force: true }).catch(() => {});
    throw error;
  }
}

const ALLOWED_NEW_WIKI_DIRS = new Set(["sources", "entities", "topics", "analyses"]);

export async function validateStagedWiki(
  workspace: IngestWorkspace,
  requiredSources: ValidatedIngestFile[],
  options: { maxFiles?: number; maxAggregateBytes?: number } = {}
): Promise<{ files: string[]; changedFiles: string[]; totalBytes: number }> {
  const files = await collectTreeFiles(workspace.wikiDir);
  const maxFiles = options.maxFiles ?? Math.max(2000, workspace.baselineFiles.length + 250);
  const maxAggregateBytes = options.maxAggregateBytes ?? 50 * 1024 * 1024;
  if (files.length > maxFiles) throw new Error(`Staged wiki has too many files (${files.length})`);

  const fileSet = new Set(files);
  for (const existing of workspace.baselineFiles) {
    if (!fileSet.has(existing)) throw new Error(`Ingest attempted to delete wiki/${existing}`);
  }
  for (const required of ["INDEX.md", "log.md", "overview.md"]) {
    if (!fileSet.has(required)) throw new Error(`Staged wiki is missing ${required}`);
  }

  const titleSlugs = new Set<string>();
  const fileSlugs = new Set<string>();
  const parsedPages: { rel: string; content: string; data: any }[] = [];
  let totalBytes = 0;
  for (const rel of files) {
    if (!safeRelativePath(rel) || extname(rel).toLowerCase() !== ".md") {
      throw new Error(`Only normal .md files are allowed in staged wiki: ${rel}`);
    }
    if (!workspace.baselineFiles.includes(rel)) {
      const segments = rel.split("/");
      if (segments.length !== 2 || !ALLOWED_NEW_WIKI_DIRS.has(segments[0])) {
        throw new Error(`New wiki page is outside an allowed page directory: ${rel}`);
      }
    }
    const bytes = await readFile(join(workspace.wikiDir, rel));
    if (bytes.byteLength > 2 * 1024 * 1024) throw new Error(`Staged page is too large: ${rel}`);
    totalBytes += bytes.byteLength;
    if (totalBytes > maxAggregateBytes) throw new Error("Staged wiki exceeds the aggregate size limit");

    let source: string;
    try {
      source = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
    } catch {
      throw new Error(`Staged page is not valid UTF-8: ${rel}`);
    }
    let parsed;
    try {
      parsed = matter(source);
    } catch {
      throw new Error(`Staged page has invalid frontmatter: ${rel}`);
    }
    const title = String(parsed.data.title || basename(rel, ".md"));
    titleSlugs.add(slugify(title));
    fileSlugs.add(slugify(basename(rel, ".md")));
    parsedPages.push({ rel, content: parsed.content, data: parsed.data });

    const html = markdownToHtml(parsed.content, new Set());
    if (/<script\b|<[^>]+\son\w+\s*=|(?:href|src)\s*=\s*["']?\s*(?:javascript|data)\s*:/i.test(html)) {
      throw new Error(`Unsafe rendered HTML survived validation in ${rel}`);
    }
  }

  for (const page of parsedPages) {
    for (const link of extractWikilinks(page.content)) {
      const slug = slugify(link);
      if (!titleSlugs.has(slug) && !fileSlugs.has(slug)) {
        throw new Error(`Staged wiki has a broken link in ${page.rel}: [[${link}]]`);
      }
    }
  }

  const citedSources = new Set<string>();
  for (const page of parsedPages) {
    const sources = Array.isArray(page.data.sources)
      ? page.data.sources
      : page.data.sources ? [page.data.sources] : [];
    for (const source of sources) citedSources.add(String(source).replace(/^raw\//, ""));
  }
  for (const source of requiredSources) {
    if (!citedSources.has(source.relativePath) && !citedSources.has(basename(source.relativePath))) {
      throw new Error(`Ingest did not cite its source in wiki frontmatter: ${source.displayPath}`);
    }
  }

  const changedFiles: string[] = [];
  for (const rel of files) {
    const staged = await readFile(join(workspace.wikiDir, rel));
    let current: Buffer | null = null;
    try {
      current = await readFile(join(workspace.repoWikiDir, rel));
    } catch {}
    if (!current || !staged.equals(current)) changedFiles.push(rel);
  }
  if (changedFiles.length === 0) throw new Error("Ingest produced no wiki changes");

  return { files, changedFiles, totalBytes };
}

export async function publishStagedWiki(
  workspace: IngestWorkspace,
  changedFiles: string[],
  options: { repoRoot?: string } = {}
): Promise<void> {
  const repoWiki = options.repoRoot ? join(options.repoRoot, "wiki") : workspace.repoWikiDir;
  if ((await fingerprintTree(repoWiki)) !== workspace.baselineFingerprint) {
    throw new Error("wiki/ changed while ingest was running; staged output was not published");
  }

  // Every file is written beside its destination and atomically renamed only
  // after the complete staged tree has passed validation. Keep in-memory
  // originals so a mid-publish I/O failure can roll the already-written subset
  // back instead of leaving a half-applied ingest.
  const repoWikiReal = await realpath(repoWiki);
  const originals = new Map<string, Buffer | null>();
  const published: string[] = [];
  try {
    for (const rel of changedFiles) {
      const destination = join(repoWiki, rel);
      const destinationDir = dirname(destination);
      await mkdir(destinationDir, { recursive: true });
      const canonicalParent = await realpath(destinationDir);
      if (!isPathInside(repoWikiReal, join(canonicalParent, "placeholder"))) {
        throw new Error(`Publish path escapes wiki/: ${rel}`);
      }
      originals.set(rel, await readFile(destination).catch(() => null));
      const temporary = join(destinationDir, `.${basename(rel)}.${randomUUID()}.tmp`);
      try {
        await copyFile(join(workspace.wikiDir, rel), temporary);
        await rename(temporary, destination);
      } catch (error) {
        await rm(temporary, { force: true }).catch(() => {});
        throw error;
      }
      published.push(rel);
    }
  } catch (error) {
    for (const rel of published.reverse()) {
      const destination = join(repoWiki, rel);
      const original = originals.get(rel) ?? null;
      if (original === null) {
        await rm(destination, { force: true }).catch(() => {});
      } else {
        const rollback = join(dirname(destination), `.${basename(rel)}.${randomUUID()}.rollback`);
        await writeFile(rollback, original);
        await rename(rollback, destination);
      }
    }
    throw error;
  }
}

export async function removeIngestWorkspace(workspace: IngestWorkspace): Promise<void> {
  // raw/ was made read-only, so restore owner permissions before cleanup.
  async function makeWritable(dir: string): Promise<void> {
    await chmod(dir, 0o700).catch(() => {});
    for (const entry of await readdir(dir, { withFileTypes: true }).catch(() => [])) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) await makeWritable(full);
      else await chmod(full, 0o600).catch(() => {});
    }
  }
  await makeWritable(workspace.root);
  await rm(workspace.root, { recursive: true, force: true });
}

export async function writeStagedDiff(
  workspace: IngestWorkspace,
  diffText: string
): Promise<string> {
  const path = join(workspace.root, "ingest.diff");
  await writeFile(path, diffText, { mode: 0o600 });
  return path;
}
