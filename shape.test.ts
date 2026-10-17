import { describe, expect, test } from "bun:test";
import { checkShape } from "./shape";
import type { WikiPage } from "./lib";

const page = (p: Partial<WikiPage> & { slug: string; content: string }): WikiPage => ({
  title: p.slug, type: "topic", domain: "dev", tags: ["dev"], sources: [], related: [], created: "", updated: "",
  html: "", links: [], category: "topics", path: `topics/${p.slug}.md`, headings: [], mtime: 0, readingTime: 1,
  summary: "A short summary.", wordCount: 0, ...p,
} as WikiPage);

describe("checkShape", () => {
  test("accepts a short page with one-line link descriptions", () => {
    const pages = new Map([["a", page({ slug: "a", content: "Intro.\n\n- [Tool](https://example.com/a) — A small tool for one job. _(@someone)_" })]]);
    expect(checkShape(pages).filter((i) => i.level === "error")).toEqual([]);
  });
  test("flags long descriptions, hedges, Related sections, bad tags and oversized topics", () => {
    const long = Array.from({ length: 30 }, (_, i) => `word${i}`).join(" ");
    const big = Array.from({ length: 1500 }, () => "word").join(" ");
    const pages = new Map([["b", page({ slug: "b", tags: ["misc"], related: ["1", "2", "3", "4", "5", "6"],
      content: `${big}\n\n- [X](https://example.com/b) — ${long}\n\nVerify the release before installing.\n\n## Related\n` })]]);
    const details = checkShape(pages).map((i) => i.detail).join("\n");
    expect(details).toContain("link description has 30 words");
    expect(details).toContain("hedge");
    expect(details).toContain("Related section");
    expect(details).toContain('tag "misc"');
    expect(details).toContain("related pages (max 5)");
    expect(details).toMatch(/words \(limit 1400/);
  });
  test("warns when the same link is described on two pages", () => {
    const pages = new Map([
      ["c", page({ slug: "c", content: "- [Same](https://example.com/same) — First description." })],
      ["d", page({ slug: "d", content: "- [Same](https://example.com/same) — Second description." })],
    ]);
    expect(checkShape(pages).filter((i) => i.level === "warning").length).toBe(2);
  });
});
