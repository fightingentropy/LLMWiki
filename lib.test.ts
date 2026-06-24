import { test, expect, describe } from "bun:test";
import {
  slugify,
  slugifyHeading,
  extractWikilinks,
  resolveLink,
  buildFileAliases,
  assignUniqueSlugs,
  computeBacklinks,
  computeLint,
  computeTagIndex,
  buildGraphData,
  parseLog,
  searchPages,
  type WikiPage,
} from "./lib";

// --- helpers ---

function mkPage(p: Partial<WikiPage> & { slug: string; title: string }): WikiPage {
  return {
    slug: p.slug,
    title: p.title,
    type: p.type ?? "topic",
    domain: p.domain ?? "test",
    tags: p.tags ?? [],
    sources: p.sources ?? [],
    related: p.related ?? [],
    created: p.created ?? "",
    updated: p.updated ?? "2026-06-01",
    content: p.content ?? "",
    html: p.html ?? "",
    links: p.links ?? [],
    category: p.category ?? "topics",
    path: p.path ?? `topics/${p.slug}.md`,
    wordCount: p.wordCount ?? 10,
    readingTime: p.readingTime ?? 1,
    headings: p.headings ?? [],
    mtime: p.mtime ?? 1_750_000_000_000,
  };
}

const mapOf = (...pages: WikiPage[]) => new Map(pages.map((p) => [p.slug, p]));

// --- slugify ---

describe("slugify", () => {
  test("lowercases, hyphenates spaces and underscores", () => {
    expect(slugify("Hello World")).toBe("hello-world");
    expect(slugify("Body_Optimization")).toBe("body-optimization");
  });
  test("strips punctuation and collapses/trims hyphens", () => {
    expect(slugify("Philosophy & Meaning")).toBe("philosophy-meaning");
    expect(slugify("  --Foo!!  Bar--  ")).toBe("foo-bar");
  });
  test("title vs filename collide on '&' vs 'and'", () => {
    // The exact mismatch the file-alias map exists to bridge.
    expect(slugify("Philosophy & Meaning")).toBe("philosophy-meaning");
    expect(slugify("Philosophy_and_Meaning")).toBe("philosophy-and-meaning");
  });
});

describe("slugifyHeading", () => {
  test("keeps word chars, hyphenates spaces", () => {
    expect(slugifyHeading("Section: One Two")).toBe("section-one-two");
  });
});

// --- extractWikilinks ---

describe("extractWikilinks", () => {
  test("extracts links, resolves aliases, dedupes", () => {
    expect(extractWikilinks("see [[Alpha]] and [[Beta|the beta]] and [[Alpha]]"))
      .toEqual(["Alpha", "Beta"]);
  });
  test("ignores image wikilinks ![[...]]", () => {
    expect(extractWikilinks("text ![[diagram.png]] and [[Real Page]]"))
      .toEqual(["Real Page"]);
  });
});

// --- resolveLink + buildFileAliases ---

describe("resolveLink + buildFileAliases", () => {
  const philosophy = mkPage({
    slug: "philosophy-meaning",
    title: "Philosophy & Meaning",
    path: "topics/Philosophy_and_Meaning.md",
  });
  const pages = mapOf(philosophy);

  test("resolves by slugified title directly", () => {
    expect(resolveLink("Philosophy & Meaning", pages)?.slug).toBe("philosophy-meaning");
  });
  test("resolves by filename alias when title slug differs", () => {
    const aliases = buildFileAliases(pages);
    // filename "Philosophy_and_Meaning" -> "philosophy-and-meaning" aliases to the title slug
    expect(aliases.get("philosophy-and-meaning")).toBe("philosophy-meaning");
    expect(resolveLink("Philosophy_and_Meaning", pages, aliases)?.slug).toBe("philosophy-meaning");
  });
  test("returns undefined for unknown links", () => {
    expect(resolveLink("No Such Page", pages)).toBeUndefined();
  });
});

// --- assignUniqueSlugs (the data-loss-prevention fix) ---

describe("assignUniqueSlugs", () => {
  test("disambiguates same-title pages instead of dropping one", () => {
    const a = mkPage({ slug: "x", title: "Political Commentary", path: "sources/Politics.md" });
    const b = mkPage({ slug: "x", title: "Political Commentary", path: "topics/Political_Commentary.md" });
    const { pages, collisions } = assignUniqueSlugs([b, a]); // pass out of order

    expect(pages.size).toBe(2); // neither page is lost
    // deterministic: sorted by path, "sources/..." < "topics/..." keeps the bare slug
    expect(pages.get("political-commentary")?.path).toBe("sources/Politics.md");
    expect(pages.get("political-commentary-2")?.path).toBe("topics/Political_Commentary.md");
    expect(collisions).toHaveLength(1);
  });
  test("distinct titles get no suffix and no collisions", () => {
    const { pages, collisions } = assignUniqueSlugs([
      mkPage({ slug: "a", title: "Alpha", path: "topics/a.md" }),
      mkPage({ slug: "b", title: "Beta", path: "topics/b.md" }),
    ]);
    expect([...pages.keys()].sort()).toEqual(["alpha", "beta"]);
    expect(collisions).toHaveLength(0);
  });
});

// --- computeBacklinks ---

describe("computeBacklinks", () => {
  test("records inbound links and ignores self-links", () => {
    const a = mkPage({ slug: "a", title: "A", links: ["B", "A"] });
    const b = mkPage({ slug: "b", title: "B", links: [] });
    const backlinks = computeBacklinks(mapOf(a, b));
    expect(backlinks.get("b")?.map((x) => x.slug)).toEqual(["a"]);
    expect(backlinks.get("a")).toBeUndefined(); // no self-backlink
  });
});

// --- computeLint ---

describe("computeLint", () => {
  test("flags orphans, broken links, missing type, duplicate titles", () => {
    const a = mkPage({ slug: "a", title: "A", type: "topic", tags: ["t"], domain: "d", links: ["B", "Ghost"] });
    const b = mkPage({ slug: "b", title: "A", type: "unknown", tags: ["t"], domain: "d" }); // dup title + missing type
    const pages = mapOf(a, b);
    const issues = computeLint(pages, computeBacklinks(pages));
    const kinds = (k: string) => issues.filter((i) => i.kind === k);

    expect(kinds("broken-link").some((i) => i.detail === "Ghost")).toBe(true);
    expect(kinds("missing-type").some((i) => i.slug === "b")).toBe(true);
    expect(kinds("duplicate-title")).toHaveLength(2); // both a and b
    expect(kinds("orphan").some((i) => i.slug === "a")).toBe(true); // nothing links to a
  });
});

// --- computeTagIndex ---

describe("computeTagIndex", () => {
  test("groups by tag, counts, sorts by frequency", () => {
    const idx = computeTagIndex(mapOf(
      mkPage({ slug: "a", title: "A", tags: ["x", "y"] }),
      mkPage({ slug: "b", title: "B", tags: ["x"] }),
    ));
    expect(idx[0]).toMatchObject({ tag: "x", count: 2 });
    expect(idx.find((t) => t.tag === "y")?.count).toBe(1);
  });
});

// --- buildGraphData ---

describe("buildGraphData", () => {
  test("builds nodes and dedupes bidirectional edges", () => {
    const a = mkPage({ slug: "a", title: "A", links: ["B"] });
    const b = mkPage({ slug: "b", title: "B", links: ["A"] }); // A<->B is one edge
    const g = buildGraphData(mapOf(a, b));
    expect(g.nodes).toHaveLength(2);
    expect(g.edges).toHaveLength(1);
  });
});

// --- parseLog ---

describe("parseLog", () => {
  test("parses entries newest-first with op and detail", () => {
    const log = [
      "## [2026-01-01] ingest | added alpha",
      "body one",
      "## [2026-02-01] edit | tweaked beta",
      "body two",
    ].join("\n");
    const entries = parseLog(log);
    expect(entries.map((e) => e.date)).toEqual(["2026-02-01", "2026-01-01"]);
    expect(entries[0]).toMatchObject({ op: "edit", detail: "tweaked beta" });
    expect(entries[1].body).toBe("body one");
  });
});

// --- searchPages ---

describe("searchPages", () => {
  test("ranks title matches above content matches and returns snippets", () => {
    const exact = mkPage({ slug: "market", title: "Market", content: "about markets" });
    const body = mkPage({ slug: "other", title: "Other", content: "a market reference here" });
    const results = searchPages(mapOf(body, exact), "market");
    expect(results[0].slug).toBe("market"); // title hit wins
    expect(results.every((r) => typeof r.snippet === "string")).toBe(true);
  });
});
