import { spawn, $ } from "bun";
import type { Subprocess } from "bun";
import { join } from "path";
import { existsSync } from "fs";

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
  snapshot: string | null; // git SHA capturing wiki/ before the run, for recovery
  log: string[]; // tail of structured events (for late subscribers / status polls)
}

let currentJob: IngestJob | null = null;

// Jobs currently being torn down by abortCurrent(). While a job is in here the
// proc.exited handler defers final-status reconciliation to abortCurrent(),
// which sets the real exit code first, so the two don't race on job.status.
const aborting = new WeakSet<IngestJob>();

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

// Capture the current repo state (including wiki/) as a git object WITHOUT
// touching the working tree, index, or stash list, so a bad ingest is
// recoverable with `git checkout <sha> -- wiki/`. Best-effort: returns null if
// git is unavailable or this is not a repo.
async function snapshotWiki(): Promise<string | null> {
  try {
    let sha = (await $`git stash create`.cwd(import.meta.dir).quiet().nothrow().text()).trim();
    if (!sha) {
      // Nothing uncommitted — HEAD already represents the current state.
      sha = (await $`git rev-parse HEAD`.cwd(import.meta.dir).quiet().nothrow().text()).trim();
    }
    return sha || null;
  } catch {
    return null;
  }
}

export async function startIngest(
  files: string[],
  onComplete?: (job: IngestJob) => void
): Promise<IngestJob> {
  if (currentJob && currentJob.status === "running") {
    throw new Error("An ingest is already running");
  }
  if (files.length === 0) {
    throw new Error("No files to ingest");
  }

  // The ingest prompt instructs the agent to follow the schema in CLAUDE.md.
  // Without it, page types/frontmatter/layout are left to improvisation, so
  // fail loudly here rather than silently degrade wiki quality.
  if (!existsSync(join(import.meta.dir, "CLAUDE.md"))) {
    throw new Error(
      "CLAUDE.md (the wiki schema) is missing — ingest needs it. Restore it: git checkout HEAD -- CLAUDE.md"
    );
  }

  // Snapshot wiki/ before the agent (running in acceptEdits mode) can rewrite it.
  const snapshot = await snapshotWiki();
  if (snapshot) {
    console.log(
      `Pre-ingest snapshot ${snapshot.slice(0, 10)} — revert wiki with: git checkout ${snapshot} -- wiki/`
    );
  } else {
    console.warn("Could not snapshot wiki/ before ingest — run is not auto-revertible");
  }

  const prompt = buildPrompt(files);
  // Launch claude inside a brand-new session/process group (pgid == its own
  // pid) so an abort can signal the WHOLE tree — claude plus any child tool
  // processes / in-flight writes it spawned — via kill(-pgid). A plain SIGTERM
  // to just the parent would orphan those children. Bun.spawn keeps the child
  // in our group by default and exposes no `detached` option, so we prepend a
  // tiny `perl POSIX::setsid` shim that calls setsid(2) then exec's the real
  // command. Because it exec's (no extra layer), proc.pid IS the group leader.
  const proc = spawn({
    cmd: [
      "perl",
      "-e",
      "use POSIX qw(setsid); setsid(); exec @ARGV or die $!;",
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
    snapshot,
    log: [],
  };
  currentJob = job;

  proc.exited.then((code) => {
    job.exitCode = code;
    // Reconcile final status from the real exit code. A clean exit 0 is "done"
    // even mid-abort (claude finished before our signal landed); otherwise an
    // aborting job is "aborted" and any other non-zero exit is "failed".
    if (aborting.has(job)) {
      job.status = code === 0 ? "done" : "aborted";
    } else if (job.status === "running") {
      job.status = code === 0 ? "done" : "failed";
    }
    onComplete?.(job);
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

// Signal a whole process group, swallowing ESRCH (group already gone).
function killGroup(pgid: number, signal: NodeJS.Signals): void {
  try {
    // Negative pid targets the entire process group (claude + its children).
    process.kill(-pgid, signal);
  } catch {
    // Group already exited (ESRCH) or not permitted — nothing more to do.
  }
}

// Abort the running ingest by tearing down its whole process group, then wait
// for the process to actually exit before reporting back. Returns true if a
// running job was found and signalled. The job's final status is reconciled
// from the real exit code by the proc.exited handler in startIngest.
export async function abortCurrent(): Promise<boolean> {
  const job = currentJob;
  if (!job || job.status !== "running") return false;

  aborting.add(job);
  // proc.pid is the group leader (we exec'd claude under setsid), so signalling
  // -pid reaches claude and every child tool process it spawned.
  const pgid = job.proc.pid;

  // Graceful first: SIGTERM the group, then await exit with a short grace
  // window. If claude (or a stuck child) is still alive, SIGKILL the group.
  killGroup(pgid, "SIGTERM");

  const KILL_TIMEOUT_MS = 3000;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<"timeout">((resolve) => {
    timer = setTimeout(() => resolve("timeout"), KILL_TIMEOUT_MS);
  });

  const winner = await Promise.race([job.proc.exited.then(() => "exited" as const), timeout]);
  if (winner === "timeout") {
    killGroup(pgid, "SIGKILL");
    await job.proc.exited; // SIGKILL is uncatchable; this resolves promptly.
  }
  if (timer) clearTimeout(timer);

  // proc.exited has now resolved, so the startIngest handler has already set
  // job.status (aborted/done) and fired onComplete exactly once.
  return true;
}
