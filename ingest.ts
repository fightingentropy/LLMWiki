import { spawn } from "bun";
import type { Subprocess } from "bun";

// Spawns the `claude` CLI headless to ingest one or more raw source files
// into the wiki. Uses the user's Claude Max subscription (no API key) —
// auth comes from ~/.claude/ on the host machine.

export interface IngestJob {
  id: string;
  startedAt: number;
  files: string[];
  proc: Subprocess<"ignore", "pipe", "pipe">;
  status: "running" | "done" | "failed" | "aborted";
  exitCode: number | null;
  log: string[]; // tail of structured events (for late subscribers / status polls)
}

let currentJob: IngestJob | null = null;

export function getCurrentJob(): IngestJob | null {
  return currentJob;
}

function buildPrompt(files: string[]): string {
  const list = files.map((f) => `- ${f}`).join("\n");
  return `You are the wiki maintainer for this project. Follow the Ingest workflow in CLAUDE.md.

Ingest these raw source files into the wiki. They live under raw/ and are not yet referenced by any wiki page's sources: frontmatter.

${list}

For each file:
1. Read it completely.
2. Create a source summary page in wiki/sources/ (title after the source, type: source, list the file in frontmatter sources:).
3. Create or update entity pages in wiki/entities/ for any specific people, tools, accounts, or resources mentioned.
4. Create or update topic pages in wiki/topics/ for broader subjects and themes.
5. Cross-link pages using [[wikilinks]]. Every new page should link to related existing pages where sensible.
6. Update wiki/INDEX.md to list new/changed pages under the appropriate section.
7. Append a single entry to wiki/log.md in the format: ## [YYYY-MM-DD] ingest | <short summary>

A single source may touch 5–15 wiki pages — be thorough but factual.

When done, print a brief summary of what you created/updated.`;
}

export function startIngest(files: string[]): IngestJob {
  if (currentJob && currentJob.status === "running") {
    throw new Error("An ingest is already running");
  }
  if (files.length === 0) {
    throw new Error("No files to ingest");
  }

  const prompt = buildPrompt(files);
  const proc = spawn({
    cmd: [
      "claude",
      "-p",
      prompt,
      "--output-format",
      "stream-json",
      "--verbose",
      "--permission-mode",
      "acceptEdits",
    ],
    cwd: import.meta.dir,
    stdout: "pipe",
    stderr: "pipe",
    stdin: "ignore",
    env: { ...process.env },
  });

  const job: IngestJob = {
    id: `ing_${Date.now()}`,
    startedAt: Date.now(),
    files,
    proc,
    status: "running",
    exitCode: null,
    log: [],
  };
  currentJob = job;

  proc.exited.then((code) => {
    job.exitCode = code;
    if (job.status === "running") {
      job.status = code === 0 ? "done" : "failed";
    }
  });

  return job;
}

// Merge stdout + stderr into a single byte stream of newline-delimited JSON
// (or raw lines for stderr). The UI parses per-line; unparseable lines are
// surfaced as { type: "stderr", text }.
export function jobStream(job: IngestJob): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  async function pump(
    reader: ReadableStreamDefaultReader<Uint8Array>,
    tag: "stdout" | "stderr",
    controller: ReadableStreamDefaultController<Uint8Array>
  ) {
    let buf = "";
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        let nl: number;
        while ((nl = buf.indexOf("\n")) !== -1) {
          const line = buf.slice(0, nl);
          buf = buf.slice(nl + 1);
          if (!line) continue;
          if (tag === "stdout") {
            // Pass through stream-json lines verbatim; the UI will parse each.
            controller.enqueue(encoder.encode(line + "\n"));
            if (job.log.length < 2000) job.log.push(line);
          } else {
            const wrapped = JSON.stringify({ type: "stderr", text: line });
            controller.enqueue(encoder.encode(wrapped + "\n"));
            if (job.log.length < 2000) job.log.push(wrapped);
          }
        }
      }
      if (buf.trim()) {
        const wrapped = tag === "stdout" ? buf : JSON.stringify({ type: "stderr", text: buf });
        controller.enqueue(encoder.encode(wrapped + "\n"));
      }
    } catch (e) {
      // Reader cancelled (client disconnect) — fine.
    }
  }

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      const outReader = job.proc.stdout.getReader();
      const errReader = job.proc.stderr.getReader();
      await Promise.all([
        pump(outReader, "stdout", controller),
        pump(errReader, "stderr", controller),
      ]);
      await job.proc.exited;
      const summary = JSON.stringify({
        type: "exit",
        status: job.status,
        exitCode: job.exitCode,
      });
      controller.enqueue(encoder.encode(summary + "\n"));
      controller.close();
    },
    cancel() {
      // Client disconnected before completion — let the job continue running
      // in the background so partial work still lands.
    },
  });
}

export function abortCurrent(): boolean {
  if (!currentJob || currentJob.status !== "running") return false;
  try {
    currentJob.proc.kill("SIGTERM");
    currentJob.status = "aborted";
    return true;
  } catch {
    return false;
  }
}
