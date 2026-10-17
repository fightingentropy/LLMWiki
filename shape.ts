// Content-shape limits that keep the wiki short. `bun run check` fails on errors.
// The thresholds mirror the Writing Style section of AGENTS.md.
import type { WikiPage } from "./lib";

export const TAGS = new Set(("markets crypto macro trading business health fitness adhd electrics regulations dev ai design " +
  "security psychology relationships philosophy politics culture humor people bookmarks").split(" "));

export const LIMITS = {
  topicWords: 1400, entityWords: 450, analysisWords: 1000, proseSourceWords: 1200,
  descriptionWords: 25, summaryWords: 25, related: 5, tags: 3,
};

const BANNED: [RegExp, string][] = [
  [/^#{2,4}\s+Related\s*$/im, "a Related section (the page footer already lists related pages)"],
  [/Saved without a note/i, '"Saved without a note" (list bare links under "Other saved links")'],
  [/\bverify\b[^.\n]{0,40}\bbefore\b/i, 'a "verify … before" hedge'],
  [/\bnot (?:a|an) (?:recommendation|guarantee)\b/i, 'a "not a recommendation" hedge'],
  [/\b(?:author|project|self)[- ]reported\b/i, 'an "author-reported" hedge'],
  [/\b(?:time-sensitive|point-in-time)\b/i, 'a "time-sensitive" hedge'],
  [/retained 20\d\d|archive #\d|this ingest|Capture or edit dates/i, "process narration"],
  [/^#{1,4}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December) 20\d\d/im, "a month-dated heading"],
];

export interface ShapeIssue { level: "error" | "warning"; slug: string; title: string; detail: string }

const words = (s: string) => s.split(/\s+/).filter(Boolean).length;
const LINK_BULLET = /^\s*[-*]\s+\[[^\]]+\]\((https?:[^)\s]+)\)\s*[—–-]\s*(.*)$/;

export function checkShape(pages: Map<string, WikiPage>): ShapeIssue[] {
  const issues: ShapeIssue[] = [];
  const describedOn = new Map<string, Set<string>>();
  for (const page of pages.values()) {
    if (["index", "log", "overview"].includes(page.type)) continue;
    const err = (detail: string) => issues.push({ level: "error", slug: page.slug, title: page.title, detail });
    const lines = page.content.split("\n");
    let linkBullets = 0;
    lines.forEach((line, i) => {
      const m = line.match(LINK_BULLET);
      if (m) {
        linkBullets++;
        const desc = m[2].replace(/_\(@[^)]*\)_\s*$/, "").trim();
        if (words(desc) > LIMITS.descriptionWords) err(`line ${i + 1}: link description has ${words(desc)} words (max ${LIMITS.descriptionWords})`);
        if (desc) (describedOn.get(m[1]) ?? describedOn.set(m[1], new Set()).get(m[1])!).add(page.slug);
      }
      for (const [re, label] of BANNED) if (re.test(line)) err(`line ${i + 1}: ${label}`);
    });
    // Count whitespace-separated words of the Markdown body, so link URLs count once rather than in pieces.
    const n = words(page.content);
    const cap = page.type === "topic" ? LIMITS.topicWords : page.type === "entity" ? LIMITS.entityWords
      : page.type === "analysis" ? LIMITS.analysisWords : page.type === "source" && linkBullets < 20 ? LIMITS.proseSourceWords : null;
    if (cap && n > cap) err(`${n} words (limit ${cap} for this kind of page)`);
    if (!page.summary) err("missing summary");
    else if (words(page.summary) > LIMITS.summaryWords) err(`summary has ${words(page.summary)} words (max ${LIMITS.summaryWords})`);
    if (page.related.length > LIMITS.related) err(`${page.related.length} related pages (max ${LIMITS.related})`);
    if (page.tags.length > LIMITS.tags) err(`${page.tags.length} tags (max ${LIMITS.tags})`);
    for (const t of page.tags) if (!TAGS.has(t)) err(`tag "${t}" is not in the fixed list`);
  }
  for (const [url, slugs] of describedOn) if (slugs.size > 1) for (const slug of slugs) {
    const page = pages.get(slug)!;
    issues.push({ level: "warning", slug, title: page.title, detail: `describes ${url} which is also described on ${[...slugs].filter(s => s !== slug).join(", ")}` });
  }
  return issues;
}
