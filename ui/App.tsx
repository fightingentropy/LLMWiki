import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createRoot } from "react-dom/client";
import * as d3 from "d3";
import "./index.css";

// --- Types (loose — server-shaped) ---
interface PageSummary {
  slug: string;
  title: string;
  type: string;
  domain: string;
  tags: string[];
  category: string;
  linkCount: number;
  updated?: string;
  mtime?: number;
  wordCount?: number;
  readingTime?: number;
}

interface PageDetail extends PageSummary {
  html: string;
  sources: string[];
  related: { name: string; slug: string | null; title: string; type: string; resolved: boolean }[];
  created?: string;
  headings: { level: number; text: string; id: string }[];
  backlinks: { slug: string; title: string; type: string }[];
  links: string[];
}

interface TagEntry {
  tag: string;
  count: number;
  pages: { slug: string; title: string; type: string }[];
}

interface LintIssue {
  kind: string;
  slug: string;
  title: string;
  detail?: string;
}

interface TimelineEntry {
  date: string;
  op: string;
  detail: string;
  body: string;
}

interface Meta {
  builtAt: string;
  pageCount: number;
  sourceCount: number;
  entityCount: number;
  topicCount: number;
  analysisCount: number;
  totalWords: number;
  domains: { name: string; count: number }[];
}

// --- Color helpers ---
const TYPE_COLORS: Record<string, string> = {
  source: "#4ade80",
  entity: "#a78bfa",
  topic: "#60a5fa",
  analysis: "#facc15",
  overview: "#22d3ee",
  index: "#666666",
  log: "#666666",
  unknown: "#666666",
};

function badgeClass(type: string) {
  return `page-badge badge-${type || "index"}`;
}

function typeGlyph(type: string) {
  switch (type) {
    case "source": return "S";
    case "entity": return "E";
    case "topic": return "T";
    case "analysis": return "A";
    case "overview": return "O";
    case "index": return "I";
    case "log": return "L";
    default: return "·";
  }
}

// --- Icons ---
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="7" r="4.5" />
      <line x1="10.5" y1="10.5" x2="14" y2="14" />
    </svg>
  );
}
function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="5" width="9" height="9" rx="1" />
      <path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5" />
    </svg>
  );
}
function DiceIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="12" height="12" rx="2" />
      <circle cx="5.5" cy="5.5" r="0.7" fill="currentColor" />
      <circle cx="10.5" cy="10.5" r="0.7" fill="currentColor" />
      <circle cx="10.5" cy="5.5" r="0.7" fill="currentColor" />
      <circle cx="5.5" cy="10.5" r="0.7" fill="currentColor" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="2" y1="4" x2="14" y2="4" />
      <line x1="2" y1="8" x2="14" y2="8" />
      <line x1="2" y1="12" x2="14" y2="12" />
    </svg>
  );
}

// --- Data fetching (cached where it makes sense) ---
let _pagesCache: PageSummary[] | null = null;
let _searchCache: any[] | null = null;
let _graphCache: any = null;
let _metaCache: Meta | null = null;

async function fetchPages(): Promise<PageSummary[]> {
  if (_pagesCache) return _pagesCache;
  const res = await fetch("/data/pages.json");
  _pagesCache = await res.json();
  return _pagesCache!;
}

async function fetchPage(slug: string): Promise<PageDetail | null> {
  const res = await fetch(`/data/pages/${slug}.json`);
  if (!res.ok) return null;
  return res.json();
}

async function fetchGraph() {
  if (_graphCache) return _graphCache;
  const res = await fetch("/data/graph.json");
  _graphCache = await res.json();
  return _graphCache;
}

async function fetchMeta(): Promise<Meta | null> {
  if (_metaCache) return _metaCache;
  try {
    const res = await fetch("/data/meta.json");
    if (!res.ok) return null;
    _metaCache = await res.json();
    return _metaCache;
  } catch {
    return null;
  }
}

async function fetchTags(): Promise<TagEntry[]> {
  const res = await fetch("/data/tags.json");
  return res.json();
}

async function fetchLint(): Promise<LintIssue[]> {
  const res = await fetch("/data/lint.json");
  return res.json();
}

async function fetchTimeline(): Promise<TimelineEntry[]> {
  try {
    const res = await fetch("/data/timeline.json");
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

async function fetchSearchIndex(): Promise<any[]> {
  if (_searchCache) return _searchCache;
  const res = await fetch("/data/search.json");
  _searchCache = await res.json();
  return _searchCache!;
}

async function runSearch(q: string) {
  const pages = await fetchSearchIndex();
  const lq = q.toLowerCase();
  return pages
    .map((p) => {
      let score = 0;
      if (p.title.toLowerCase().includes(lq)) score += 10;
      if (p.title.toLowerCase() === lq) score += 20;
      if (p.tags?.some((t: string) => t.toLowerCase().includes(lq))) score += 5;
      const idx = p.content.toLowerCase().indexOf(lq);
      if (idx !== -1) score += 3;
      if (score === 0) return null;
      const si = p.content.toLowerCase().indexOf(lq);
      const start = Math.max(0, si - 60);
      const end = Math.min(p.content.length, (si === -1 ? 0 : si) + q.length + 60);
      const snippet =
        si !== -1
          ? (start > 0 ? "..." : "") + p.content.slice(start, end).replace(/\n/g, " ") + (end < p.content.length ? "..." : "")
          : p.content.slice(0, 120).replace(/\n/g, " ") + "...";
      return { slug: p.slug, title: p.title, type: p.type, domain: p.domain, category: p.category, snippet, score };
    })
    .filter(Boolean)
    .sort((a: any, b: any) => b.score - a.score)
    .slice(0, 10);
}

// --- URL Routing ---
type Route =
  | { view: "home" }
  | { view: "page"; slug: string }
  | { view: "graph"; focus?: string }
  | { view: "tags" }
  | { view: "tag"; tag: string }
  | { view: "timeline" }
  | { view: "lint" }
  | { view: "random" };

function parseRoute(): Route {
  const path = window.location.pathname;
  const search = new URLSearchParams(window.location.search);
  if (path.startsWith("/page/")) return { view: "page", slug: path.slice("/page/".length) };
  if (path === "/graph") {
    const focus = search.get("focus") || undefined;
    return { view: "graph", focus };
  }
  if (path === "/tags") return { view: "tags" };
  if (path.startsWith("/tags/")) return { view: "tag", tag: decodeURIComponent(path.slice("/tags/".length)) };
  if (path === "/timeline") return { view: "timeline" };
  if (path === "/lint") return { view: "lint" };
  if (path === "/random") return { view: "random" };
  return { view: "home" };
}

function routeToPath(r: Route): string {
  switch (r.view) {
    case "page": return `/page/${r.slug}`;
    case "graph": return r.focus ? `/graph?focus=${encodeURIComponent(r.focus)}` : "/graph";
    case "tags": return "/tags";
    case "tag": return `/tags/${encodeURIComponent(r.tag)}`;
    case "timeline": return "/timeline";
    case "lint": return "/lint";
    case "random": return "/random";
    default: return "/";
  }
}

function pushRoute(r: Route) {
  window.history.pushState(r, "", routeToPath(r));
}

// --- Utility ---
function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function formatRelativeDate(d?: string | number): string {
  if (!d) return "";
  const t = typeof d === "number" ? d : new Date(d).getTime();
  if (Number.isNaN(t)) return "";
  const diff = Date.now() - t;
  const days = Math.floor(diff / 86400000);
  if (days < 0) return "in the future";
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

function updatedTime(p: PageSummary): number {
  if (p.updated) {
    const t = new Date(p.updated).getTime();
    if (!Number.isNaN(t)) return t;
  }
  return p.mtime || 0;
}

// --- Search Component ---
function Search({ onSelect }: { onSelect: (slug: string) => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [recents, setRecents] = useState<PageSummary[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Populate recents/top-pages for the empty state
  useEffect(() => {
    fetchPages().then((pages) => {
      const top = [...pages]
        .filter((p) => p.type !== "index" && p.type !== "log")
        .sort((a, b) => (b.linkCount || 0) - (a.linkCount || 0))
        .slice(0, 6);
      setRecents(top);
    });
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const t = setTimeout(async () => {
      const r = await runSearch(query);
      setResults(r.slice(0, 8));
      setActiveIdx(0);
      setOpen(true);
    }, 150);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  function highlightSnippet(snippet: string, q: string) {
    if (!q) return snippet;
    const regex = new RegExp(`(${escapeRegExp(q)})`, "gi");
    return snippet.replace(regex, "<mark>$1</mark>");
  }

  function pick(slug: string) {
    onSelect(slug);
    setOpen(false);
    setQuery("");
    inputRef.current?.blur();
  }

  function onKey(e: React.KeyboardEvent) {
    const items = query.trim() ? results : recents;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const r = items[activeIdx];
      if (r) pick(r.slug);
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  }

  const showing = query.trim() ? results : open && !query.trim() ? recents : [];
  const isRecents = !query.trim();

  return (
    <div className="search-wrap" ref={ref}>
      <SearchIcon />
      <input
        ref={inputRef}
        placeholder="Search wiki... (⌘K)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKey}
        onFocus={() => setOpen(true)}
      />
      <kbd className="search-kbd">⌘K</kbd>
      {open && showing.length > 0 && (
        <div className="search-results">
          {isRecents && <div className="search-results-header">Top pages</div>}
          {showing.map((r, i) => (
            <div
              key={r.slug}
              className={`search-result ${i === activeIdx ? "active" : ""}`}
              onMouseEnter={() => setActiveIdx(i)}
              onClick={() => pick(r.slug)}
            >
              <div className="search-result-title">{r.title}</div>
              <div className="search-result-meta">
                <span className={badgeClass(r.type)}>{r.type}</span>
                {r.domain && <span>{r.domain}</span>}
                {isRecents && typeof r.linkCount === "number" && <span>{r.linkCount} links</span>}
              </div>
              {!isRecents && (
                <div className="search-result-snippet" dangerouslySetInnerHTML={{ __html: highlightSnippet(r.snippet, query) }} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Sidebar ---
function Sidebar({
  pages,
  current,
  onSelect,
  open,
  onClose,
}: {
  pages: PageSummary[];
  current: string | null;
  onSelect: (slug: string) => void;
  open: boolean;
  onClose: () => void;
}) {
  const [filter, setFilter] = useState("");

  const grouped = useMemo(() => {
    const g: Record<string, PageSummary[]> = { sources: [], entities: [], topics: [], analyses: [] };
    pages.forEach((p) => {
      if (g[p.category]) g[p.category].push(p);
      else if (p.category === "root" && p.type !== "index" && p.type !== "log") g.topics.push(p);
    });
    Object.values(g).forEach((arr) => arr.sort((a, b) => a.title.localeCompare(b.title)));
    return g;
  }, [pages]);

  const lowerFilter = filter.trim().toLowerCase();
  const matches = (p: PageSummary) =>
    !lowerFilter ||
    p.title.toLowerCase().includes(lowerFilter) ||
    (p.tags || []).some((t) => t.toLowerCase().includes(lowerFilter));

  return (
    <>
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-filter">
          <input
            type="text"
            placeholder="Filter pages..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          {filter && (
            <button className="sidebar-filter-clear" onClick={() => setFilter("")} aria-label="Clear">
              ×
            </button>
          )}
        </div>
        {Object.entries(grouped).map(([cat, items]) => {
          const filtered = items.filter(matches);
          if (items.length === 0) return null;
          if (lowerFilter && filtered.length === 0) return null;
          return (
            <div key={cat} className="sidebar-section">
              <div className="sidebar-section-title">
                {cat} <span className="sidebar-section-count">({filtered.length})</span>
              </div>
              {filtered.map((p) => (
                <div
                  key={p.slug}
                  className={`sidebar-item ${current === p.slug ? "active" : ""}`}
                  onClick={() => {
                    onSelect(p.slug);
                    onClose();
                  }}
                  title={p.title}
                >
                  <span className="sidebar-glyph" style={{ color: TYPE_COLORS[p.type] || TYPE_COLORS.unknown }}>
                    {typeGlyph(p.type)}
                  </span>
                  <span className="sidebar-item-label">{p.title}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className={`sidebar-backdrop ${open ? "visible" : ""}`} onClick={onClose} />
    </>
  );
}

// --- Table of Contents ---
function TableOfContents({ headings }: { headings: { level: number; text: string; id: string }[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the first visible heading as active
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(e.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <aside className="toc">
      <div className="toc-title">On this page</div>
      <ul>
        {headings
          .filter((h) => h.level >= 1 && h.level <= 3)
          .map((h) => (
            <li key={h.id} className={`toc-level-${h.level} ${active === h.id ? "active" : ""}`}>
              <a
                href={`#${h.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(h.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    history.replaceState(null, "", `#${h.id}`);
                  }
                }}
              >
                {h.text}
              </a>
            </li>
          ))}
      </ul>
    </aside>
  );
}

// --- Page View ---
function PageView({
  slug,
  onNavigate,
  onGraph,
  onTag,
}: {
  slug: string;
  onNavigate: (slug: string) => void;
  onGraph: (slug: string) => void;
  onTag: (tag: string) => void;
}) {
  const [page, setPage] = useState<PageDetail | null>(null);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPage(null);
    fetchPage(slug).then(setPage);
    // Scroll to top when the page changes
    const main = document.querySelector(".main");
    if (main) main.scrollTop = 0;
  }, [slug]);

  useEffect(() => {
    if (!contentRef.current) return;
    const handler = (e: Event) => {
      const link = (e.target as HTMLElement).closest("a.wikilink") as HTMLAnchorElement | null;
      if (link) {
        e.preventDefault();
        onNavigate(link.dataset.slug!);
      }
    };
    const el = contentRef.current;
    el.addEventListener("click", handler);
    return () => el.removeEventListener("click", handler);
  }, [page, onNavigate]);

  // Deep-link: if the URL has a hash, scroll to it after the page renders
  useEffect(() => {
    if (!page || !window.location.hash) return;
    const id = window.location.hash.slice(1);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }, [page]);

  function copyLink() {
    navigator.clipboard.writeText(window.location.origin + `/page/${slug}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }

  if (!page) return <div className="main"><div className="loading-state">Loading</div></div>;

  return (
    <div className="main">
      <div className="breadcrumb">
        <a onClick={() => onNavigate("")}>Home</a>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-cat">{page.category === "root" ? "Wiki" : page.category}</span>
        <span className="breadcrumb-sep">/</span>
        <span>{page.title}</span>
      </div>

      <div className="page-layout">
        <article className="page-article">
          <header className="page-header">
            <div className="page-title-row">
              <h1 className="page-title">{page.title}</h1>
              <div className="page-actions">
                <button
                  className="page-action"
                  onClick={copyLink}
                  title="Copy link to this page"
                >
                  <CopyIcon /> {copied ? "Copied" : "Copy link"}
                </button>
                <button className="page-action" onClick={() => onGraph(slug)} title="Show this page in the graph">
                  Graph
                </button>
              </div>
            </div>
            <div className="page-meta">
              <span className={badgeClass(page.type)}>{page.type}</span>
              {page.domain && page.domain !== "unknown" && <span className="page-domain">{page.domain}</span>}
              {page.readingTime && (
                <span className="page-date">
                  {page.readingTime} min read · {page.wordCount} words
                </span>
              )}
              {page.updated && <span className="page-date">Updated {formatRelativeDate(page.updated)}</span>}
            </div>
            {page.tags?.length > 0 && (
              <div className="tag-list">
                {page.tags.map((t) => (
                  <button key={t} className="tag tag-clickable" onClick={() => onTag(t)} title={`Browse pages tagged "${t}"`}>
                    #{t}
                  </button>
                ))}
              </div>
            )}
          </header>

          <div className="page-content" ref={contentRef} dangerouslySetInnerHTML={{ __html: page.html }} />

          {(page.related?.length > 0 || page.sources?.length > 0) && (
            <div className="page-footer-blocks">
              {page.related?.length > 0 && (
                <div className="page-block">
                  <div className="page-block-title">Related</div>
                  <div className="page-block-list">
                    {page.related.map((r, i) => {
                      if (r.resolved && r.slug) {
                        return (
                          <a
                            key={i}
                            className="related-item"
                            onClick={() => onNavigate(r.slug!)}
                          >
                            <span className="sidebar-glyph" style={{ color: TYPE_COLORS[r.type] || TYPE_COLORS.unknown }}>
                              {typeGlyph(r.type)}
                            </span>
                            {r.title}
                          </a>
                        );
                      }
                      return (
                        <span key={i} className="related-item broken" title="No page with this name">
                          {r.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
              {page.sources?.length > 0 && (
                <div className="page-block">
                  <div className="page-block-title">Sources</div>
                  <div className="page-block-list">
                    {page.sources.map((s, i) => (
                      <span key={i} className="source-item">{s}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {page.backlinks?.length > 0 && (
            <div className="backlinks">
              <div className="backlinks-title">Backlinks · {page.backlinks.length}</div>
              <div className="backlinks-list">
                {page.backlinks.map((b) => (
                  <button
                    key={b.slug}
                    className="backlink-item"
                    onClick={() => onNavigate(b.slug)}
                  >
                    <span className="sidebar-glyph" style={{ color: TYPE_COLORS[b.type] || TYPE_COLORS.unknown }}>
                      {typeGlyph(b.type)}
                    </span>
                    {b.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </article>

        <TableOfContents headings={page.headings || []} />
      </div>
    </div>
  );
}

// --- Home ---
function Home({ pages, onSelect, onGoto }: { pages: PageSummary[]; onSelect: (slug: string) => void; onGoto: (r: Route) => void }) {
  const [meta, setMeta] = useState<Meta | null>(null);
  useEffect(() => {
    fetchMeta().then(setMeta);
  }, []);

  const stats = useMemo(
    () => ({
      total: pages.length,
      sources: pages.filter((p) => p.type === "source").length,
      entities: pages.filter((p) => p.type === "entity").length,
      topics: pages.filter((p) => p.type === "topic").length,
    }),
    [pages]
  );

  const recentlyUpdated = useMemo(() => {
    return [...pages]
      .filter((p) => p.type !== "index" && p.type !== "log")
      .sort((a, b) => updatedTime(b) - updatedTime(a))
      .slice(0, 8);
  }, [pages]);

  const mostLinked = useMemo(() => {
    return [...pages]
      .filter((p) => p.type !== "index" && p.type !== "log")
      .sort((a, b) => (b.linkCount || 0) - (a.linkCount || 0))
      .slice(0, 8);
  }, [pages]);

  const domains = useMemo(() => {
    const d: Record<string, PageSummary[]> = {};
    pages.forEach((p) => {
      const dom = p.domain?.split(",")[0]?.trim() || "other";
      if (dom === "unknown") return;
      if (!d[dom]) d[dom] = [];
      d[dom].push(p);
    });
    return d;
  }, [pages]);

  return (
    <div className="main">
      <div className="home-hero">
        <h1>Brain Wiki</h1>
        <p>
          Personal knowledge base — {stats.total} pages across {Object.keys(domains).length} domains
          {meta && ` · ${meta.totalWords.toLocaleString()} words`}
        </p>
      </div>

      <div className="stats-row">
        <div className="stat">
          <div className="stat-number">{stats.sources}</div>
          <div className="stat-label">Sources</div>
        </div>
        <div className="stat">
          <div className="stat-number">{stats.entities}</div>
          <div className="stat-label">Entities</div>
        </div>
        <div className="stat">
          <div className="stat-number">{stats.topics}</div>
          <div className="stat-label">Topics</div>
        </div>
        <div className="stat">
          <div className="stat-number">{pages.filter((p) => p.type === "analysis").length}</div>
          <div className="stat-label">Analyses</div>
        </div>
      </div>

      <div className="home-row">
        <div className="home-row-item">
          <div className="domain-title">
            Recently updated
            <a className="domain-more" onClick={() => onGoto({ view: "timeline" })}>Timeline →</a>
          </div>
          <div className="home-list">
            {recentlyUpdated.map((p) => (
              <div key={p.slug} className="home-list-item" onClick={() => onSelect(p.slug)}>
                <span className="sidebar-glyph" style={{ color: TYPE_COLORS[p.type] || TYPE_COLORS.unknown }}>
                  {typeGlyph(p.type)}
                </span>
                <span className="home-list-title">{p.title}</span>
                <span className="home-list-date">{formatRelativeDate(updatedTime(p))}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="home-row-item">
          <div className="domain-title">
            Most linked
            <a className="domain-more" onClick={() => onGoto({ view: "graph" })}>Graph →</a>
          </div>
          <div className="home-list">
            {mostLinked.map((p) => (
              <div key={p.slug} className="home-list-item" onClick={() => onSelect(p.slug)}>
                <span className="sidebar-glyph" style={{ color: TYPE_COLORS[p.type] || TYPE_COLORS.unknown }}>
                  {typeGlyph(p.type)}
                </span>
                <span className="home-list-title">{p.title}</span>
                <span className="home-list-date">{p.linkCount} links</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {Object.entries(domains)
        .sort((a, b) => b[1].length - a[1].length)
        .map(([domain, domPages]) => (
          <div key={domain} className="domain-section">
            <div className="domain-title">
              {domain.charAt(0).toUpperCase() + domain.slice(1)}
              <span className="domain-count">{domPages.length}</span>
            </div>
            <div className="home-grid">
              {domPages
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((p) => (
                  <div key={p.slug} className="home-card" onClick={() => onSelect(p.slug)}>
                    <div className="home-card-title">{p.title}</div>
                    <div className="home-card-meta">
                      <span className={badgeClass(p.type)}>{p.type}</span>
                      {p.linkCount > 0 && <span className="home-card-dot">· {p.linkCount} links</span>}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}

// --- Tags ---
function TagsView({ onSelect, onTag }: { onSelect: (slug: string) => void; onTag: (t: string) => void }) {
  const [tags, setTags] = useState<TagEntry[]>([]);
  useEffect(() => {
    fetchTags().then(setTags);
  }, []);

  return (
    <div className="main">
      <div className="home-hero">
        <h1>Tags</h1>
        <p>{tags.length} tags · click a tag to see its pages</p>
      </div>
      <div className="tag-cloud">
        {tags.map((t) => (
          <button
            key={t.tag}
            className="tag-cloud-item"
            onClick={() => onTag(t.tag)}
            style={{ fontSize: `${12 + Math.min(t.count, 10)}px` }}
          >
            #{t.tag} <span className="tag-cloud-count">{t.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function TagView({ tag, onSelect, onBack }: { tag: string; onSelect: (slug: string) => void; onBack: () => void }) {
  const [tags, setTags] = useState<TagEntry[]>([]);
  useEffect(() => {
    fetchTags().then(setTags);
  }, []);
  const entry = tags.find((t) => t.tag === tag.toLowerCase());

  return (
    <div className="main">
      <div className="breadcrumb">
        <a onClick={onBack}>Tags</a>
        <span className="breadcrumb-sep">/</span>
        <span>#{tag}</span>
      </div>
      <div className="home-hero">
        <h1>#{tag}</h1>
        <p>{entry ? `${entry.count} pages tagged` : "No pages found"}</p>
      </div>
      {entry && (
        <div className="home-grid">
          {entry.pages.map((p) => (
            <div key={p.slug} className="home-card" onClick={() => onSelect(p.slug)}>
              <div className="home-card-title">{p.title}</div>
              <div className="home-card-meta">
                <span className={badgeClass(p.type)}>{p.type}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Timeline ---
function TimelineView() {
  const [entries, setEntries] = useState<TimelineEntry[]>([]);
  useEffect(() => {
    fetchTimeline().then(setEntries);
  }, []);

  return (
    <div className="main">
      <div className="home-hero">
        <h1>Timeline</h1>
        <p>Log of wiki operations, newest first</p>
      </div>
      {entries.length === 0 && <div className="empty">No timeline entries.</div>}
      <div className="timeline">
        {entries.map((e, i) => (
          <div key={i} className="timeline-entry">
            <div className="timeline-date">{e.date}</div>
            <div className="timeline-body">
              <div className="timeline-head">
                <span className="timeline-op">{e.op}</span>
                <span className="timeline-sep">—</span>
                <span className="timeline-detail">{e.detail}</span>
              </div>
              {e.body && <pre className="timeline-content">{e.body}</pre>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Lint ---
const LINT_LABELS: Record<string, string> = {
  orphan: "Orphan pages",
  "broken-link": "Broken wikilinks",
  "missing-type": "Missing type",
  "missing-tags": "Missing tags",
  "missing-domain": "Missing domain",
  stale: "Stale (>90d)",
  "duplicate-title": "Duplicate titles",
};

const LINT_DESCRIPTIONS: Record<string, string> = {
  orphan: "No other page links to these. Either add cross-references or consider whether the page is still needed.",
  "broken-link": "Wikilinks that point to a page that doesn't exist. Either create the page or fix the link.",
  "missing-type": "Frontmatter is missing `type:` — the page won't be categorised correctly.",
  "missing-tags": "No `tags:` in frontmatter — harder to discover via tag browse.",
  "missing-domain": "No `domain:` in frontmatter — won't appear on the home page domain grids.",
  stale: "Frontmatter `updated:` is more than 90 days old. Review for accuracy.",
  "duplicate-title": "Multiple pages share this title. Wikilinks may resolve to the wrong one.",
};

function LintView({ onSelect }: { onSelect: (slug: string) => void }) {
  const [issues, setIssues] = useState<LintIssue[]>([]);
  useEffect(() => {
    fetchLint().then(setIssues);
  }, []);

  const grouped = useMemo(() => {
    const g: Record<string, LintIssue[]> = {};
    for (const i of issues) {
      if (!g[i.kind]) g[i.kind] = [];
      g[i.kind].push(i);
    }
    return g;
  }, [issues]);

  const order: string[] = ["broken-link", "orphan", "missing-type", "missing-domain", "missing-tags", "stale", "duplicate-title"];

  return (
    <div className="main">
      <div className="home-hero">
        <h1>Lint</h1>
        <p>
          {issues.length === 0
            ? "No issues. Wiki is clean."
            : `${issues.length} issue${issues.length === 1 ? "" : "s"} across ${Object.keys(grouped).length} categor${
                Object.keys(grouped).length === 1 ? "y" : "ies"
              }`}
        </p>
      </div>
      {order
        .filter((k) => grouped[k])
        .map((kind) => (
          <div key={kind} className="lint-section">
            <div className="lint-title">
              {LINT_LABELS[kind] || kind}
              <span className="lint-count">{grouped[kind].length}</span>
            </div>
            <div className="lint-desc">{LINT_DESCRIPTIONS[kind]}</div>
            <div className="lint-list">
              {grouped[kind].map((i, idx) => (
                <div key={idx} className="lint-item" onClick={() => onSelect(i.slug)}>
                  <span className="lint-item-title">{i.title}</span>
                  {i.detail && <span className="lint-item-detail">{i.detail}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

// --- Graph View ---
function GraphView({ onSelect, focusSlug }: { onSelect: (slug: string) => void; focusSlug?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [graphData, setGraphData] = useState<any>(null);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, text: "" });
  const [filter, setFilter] = useState("all");
  // Cache node positions across filter changes so layout isn't thrown away
  const positionsRef = useRef<Map<string, { x: number; y: number }>>(new Map());
  const simRef = useRef<any>(null);
  const hoveredRef = useRef<any>(null);
  const dragRef = useRef<any>(null);
  const transformRef = useRef({ x: 0, y: 0, k: 1 });

  useEffect(() => {
    fetchGraph().then(setGraphData);
  }, []);

  useEffect(() => {
    if (!graphData || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.scale(dpr, dpr);
      return rect;
    }

    const rect = resize();
    const W = rect.width;
    const H = rect.height;

    // Filter nodes + edges
    let nodes: any[], edges: any[];
    if (filter === "all") {
      nodes = graphData.nodes.slice();
      edges = graphData.edges.slice();
    } else {
      const keep = new Set(
        graphData.nodes
          .filter((n: any) => n.category === filter || n.type === filter)
          .map((n: any) => n.id)
      );
      graphData.edges.forEach((e: any) => {
        if (keep.has(e.source) || keep.has(e.target)) {
          keep.add(e.source);
          keep.add(e.target);
        }
      });
      nodes = graphData.nodes.filter((n: any) => keep.has(n.id));
      edges = graphData.edges.filter((e: any) => keep.has(e.source) && keep.has(e.target));
    }

    // Restore cached positions if available; otherwise seed near center
    nodes = nodes.map((n: any) => {
      const cached = positionsRef.current.get(n.id);
      return {
        ...n,
        x: cached?.x ?? W / 2 + (Math.random() - 0.5) * 400,
        y: cached?.y ?? H / 2 + (Math.random() - 0.5) * 400,
      };
    });

    const nodeMap = new Map(nodes.map((n: any) => [n.id, n]));
    transformRef.current = { x: 0, y: 0, k: 1 };

    const sim = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(edges.map((e: any) => ({ source: nodeMap.get(e.source), target: nodeMap.get(e.target) })))
          .id((d: any) => d.id)
          .distance(80)
      )
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(W / 2, H / 2))
      .force("collide", d3.forceCollide(20))
      .alphaDecay(0.02);

    simRef.current = sim;

    function nodeRadius(n: any) {
      return Math.max(4, Math.min(12, 3 + n.linkCount * 0.8));
    }

    function draw() {
      // Save positions into cache so re-filter keeps layout
      for (const n of nodes) positionsRef.current.set(n.id, { x: n.x, y: n.y });

      const { x: tx, y: ty, k } = transformRef.current;
      const r2 = container.getBoundingClientRect();

      ctx.resetTransform();
      const dpr2 = window.devicePixelRatio || 1;
      ctx.scale(dpr2, dpr2);
      ctx.clearRect(0, 0, r2.width, r2.height);
      ctx.save();
      ctx.translate(tx, ty);
      ctx.scale(k, k);

      const resolvedEdges = sim.force("link").links();
      ctx.lineWidth = 0.5 / k;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
      resolvedEdges.forEach((e: any) => {
        ctx.beginPath();
        ctx.moveTo(e.source.x, e.source.y);
        ctx.lineTo(e.target.x, e.target.y);
        ctx.stroke();
      });

      const highlighted = hoveredRef.current || (focusSlug ? nodeMap.get(focusSlug) : null);
      if (highlighted) {
        const hid = highlighted.id;
        ctx.lineWidth = 1.5 / k;
        ctx.strokeStyle = "rgba(250, 250, 250, 0.3)";
        resolvedEdges.forEach((e: any) => {
          if (e.source.id === hid || e.target.id === hid) {
            ctx.beginPath();
            ctx.moveTo(e.source.x, e.source.y);
            ctx.lineTo(e.target.x, e.target.y);
            ctx.stroke();
          }
        });
      }

      nodes.forEach((n: any) => {
        const r = nodeRadius(n);
        const color = TYPE_COLORS[n.type] || TYPE_COLORS.unknown;
        const isHovered = hoveredRef.current?.id === n.id;
        const isFocus = focusSlug === n.id;

        ctx.beginPath();
        ctx.arc(n.x, n.y, r + (isFocus ? 2 : 0), 0, Math.PI * 2);
        ctx.fillStyle = isHovered || isFocus ? "#fff" : color;
        ctx.fill();

        if (isHovered || isFocus) {
          ctx.strokeStyle = color;
          ctx.lineWidth = 2 / k;
          ctx.stroke();
        }

        if (isHovered || isFocus || (k > 0.6 && n.linkCount > 5)) {
          ctx.font = `400 ${Math.max(10, 11 / k)}px Inter, system-ui, sans-serif`;
          ctx.fillStyle = isHovered || isFocus ? "#fafafa" : "#666666";
          ctx.textAlign = "center";
          ctx.fillText(n.label, n.x, n.y + r + 12 / k);
        }
      });

      ctx.restore();
    }

    sim.on("tick", draw);

    // If a focus slug is provided, center the view on it after layout settles
    if (focusSlug && nodeMap.has(focusSlug)) {
      const target = nodeMap.get(focusSlug)!;
      // Fix position temporarily so it settles in the middle
      target.fx = W / 2;
      target.fy = H / 2;
      setTimeout(() => {
        target.fx = null;
        target.fy = null;
      }, 400);
    }

    function screenToWorld(sx: number, sy: number) {
      const { x: tx, y: ty, k } = transformRef.current;
      return { x: (sx - tx) / k, y: (sy - ty) / k };
    }

    function findNode(mx: number, my: number) {
      const { x: wx, y: wy } = screenToWorld(mx, my);
      const { k } = transformRef.current;
      for (let i = nodes.length - 1; i >= 0; i--) {
        const n = nodes[i];
        const r = (nodeRadius(n) / k) * 1.5 + 4;
        const dx = n.x - wx;
        const dy = n.y - wy;
        if (dx * dx + dy * dy < r * r * k * k) return n;
      }
      return null;
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      if (dragRef.current) {
        if (dragRef.current.type === "pan") {
          transformRef.current.x += e.movementX;
          transformRef.current.y += e.movementY;
        } else if (dragRef.current.type === "node") {
          const { x, y } = screenToWorld(mx, my);
          dragRef.current.node.fx = x;
          dragRef.current.node.fy = y;
        }
        draw();
        return;
      }

      const node = findNode(mx, my);
      hoveredRef.current = node;
      canvas.style.cursor = node ? "pointer" : "grab";

      if (node) {
        const domainLine = node.domain && node.domain !== "unknown" ? ` · ${node.domain}` : "";
        setTooltip({
          show: true,
          x: mx + 12,
          y: my - 8,
          text: `${node.label} (${node.type}${domainLine}) · ${node.linkCount} links`,
        });
      } else {
        setTooltip((t) => (t.show ? { ...t, show: false } : t));
      }
      draw();
    };

    const onMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const node = findNode(mx, my);

      if (node) {
        dragRef.current = { type: "node", node };
        node.fx = node.x;
        node.fy = node.y;
        sim.alphaTarget(0.1).restart();
      } else {
        dragRef.current = { type: "pan" };
      }
      canvas.style.cursor = "grabbing";
    };

    const onMouseUp = () => {
      if (dragRef.current?.type === "node") {
        dragRef.current.node.fx = null;
        dragRef.current.node.fy = null;
        sim.alphaTarget(0);
      }
      dragRef.current = null;
      canvas.style.cursor = hoveredRef.current ? "pointer" : "grab";
    };

    const onDblClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const node = findNode(e.clientX - rect.left, e.clientY - rect.top);
      if (node) onSelect(node.id);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const factor = e.deltaY > 0 ? 0.92 : 1.08;
      const t = transformRef.current;
      const newK = Math.max(0.1, Math.min(4, t.k * factor));
      t.x = mx - (mx - t.x) * (newK / t.k);
      t.y = my - (my - t.y) * (newK / t.k);
      t.k = newK;
      draw();
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("dblclick", onDblClick);
    canvas.addEventListener("wheel", onWheel, { passive: false });

    const resizeObs = new ResizeObserver(() => {
      resize();
      draw();
    });
    resizeObs.observe(container);

    return () => {
      sim.stop();
      resizeObs.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("dblclick", onDblClick);
      canvas.removeEventListener("wheel", onWheel);
    };
  }, [graphData, filter, focusSlug]);

  if (!graphData) return <div className="main full-width"><div className="loading-state">Loading graph</div></div>;

  return (
    <div className="main full-width">
      <div className="graph-container" ref={containerRef}>
        <canvas ref={canvasRef} />
        <div className="graph-filter">
          {["all", "sources", "entities", "topics"].map((f) => (
            <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        <div className="graph-legend">
          {Object.entries(TYPE_COLORS)
            .filter(([k]) => !["unknown", "log", "index"].includes(k))
            .map(([type, color]) => (
              <div key={type} className="graph-legend-item">
                <div className="graph-legend-dot" style={{ background: color }} />
                {type}
              </div>
            ))}
          <div className="graph-legend-hint">
            Double-click to open
            <br />
            Scroll to zoom · Drag to pan
          </div>
        </div>
        {tooltip.show && (
          <div className="graph-tooltip" style={{ left: tooltip.x, top: tooltip.y, display: "block" }}>
            {tooltip.text}
          </div>
        )}
      </div>
    </div>
  );
}

// --- Keyboard shortcuts overlay ---
function ShortcutsOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  const rows: [string, string][] = [
    ["⌘K", "Focus search"],
    ["↑ / ↓", "Navigate search results"],
    ["Enter", "Open selected"],
    ["g h", "Go home"],
    ["g g", "Graph view"],
    ["g t", "Tags"],
    ["g l", "Lint"],
    ["g m", "Timeline"],
    ["g r", "Random page"],
    ["?", "This help"],
    ["Esc", "Close"],
  ];
  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-panel" onClick={(e) => e.stopPropagation()}>
        <div className="overlay-title">Keyboard shortcuts</div>
        <table className="overlay-table">
          <tbody>
            {rows.map(([key, desc]) => (
              <tr key={key}>
                <td><kbd>{key}</kbd></td>
                <td>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="overlay-footer">Press Esc to close</div>
      </div>
    </div>
  );
}

// --- App ---
function App() {
  const [pages, setPages] = useState<PageSummary[]>([]);
  const [route, setRoute] = useState<Route>(parseRoute());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [meta, setMeta] = useState<Meta | null>(null);

  useEffect(() => {
    fetchPages().then(setPages);
    fetchMeta().then(setMeta);
  }, []);

  useEffect(() => {
    const handler = () => setRoute(parseRoute());
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = useCallback((r: Route) => {
    setRoute(r);
    pushRoute(r);
    setSidebarOpen(false);
  }, []);

  const goToPage = useCallback(
    (slug: string) => {
      if (!slug) {
        navigate({ view: "home" });
      } else {
        navigate({ view: "page", slug });
      }
    },
    [navigate]
  );

  // Handle the /random pseudo-route by redirecting to a real page
  useEffect(() => {
    if (route.view === "random" && pages.length > 0) {
      const candidates = pages.filter((p) => p.type !== "index" && p.type !== "log");
      const pick = candidates[Math.floor(Math.random() * candidates.length)];
      if (pick) {
        // Replace in history so back doesn't loop
        const target: Route = { view: "page", slug: pick.slug };
        setRoute(target);
        window.history.replaceState(target, "", routeToPath(target));
      }
    }
  }, [route, pages]);

  // Global keyboard shortcuts (g-prefixed + help)
  useEffect(() => {
    let gPending: number | null = null;
    const clearG = () => {
      if (gPending) {
        clearTimeout(gPending);
        gPending = null;
      }
    };
    const inInput = () => {
      const t = document.activeElement;
      return t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || (t as HTMLElement).isContentEditable);
    };

    const handler = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (inInput()) {
        if (e.key === "Escape") (document.activeElement as HTMLElement).blur();
        return;
      }
      if (e.key === "?") {
        e.preventDefault();
        setShowHelp(true);
        return;
      }
      if (e.key === "Escape") {
        setShowHelp(false);
        return;
      }
      if (gPending !== null) {
        clearG();
        if (e.key === "h") navigate({ view: "home" });
        else if (e.key === "g") navigate({ view: "graph" });
        else if (e.key === "t") navigate({ view: "tags" });
        else if (e.key === "l") navigate({ view: "lint" });
        else if (e.key === "m") navigate({ view: "timeline" });
        else if (e.key === "r") navigate({ view: "random" });
        return;
      }
      if (e.key === "g") {
        gPending = window.setTimeout(clearG, 1000);
      }
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
      clearG();
    };
  }, [navigate]);

  const currentSlug = route.view === "page" ? route.slug : null;

  return (
    <>
      <div className="topbar">
        <button className="sidebar-toggle" onClick={() => setSidebarOpen((o) => !o)} aria-label="Toggle sidebar">
          <MenuIcon />
        </button>
        <div className="topbar-logo" onClick={() => navigate({ view: "home" })}>
          Brain <span>Wiki</span>
        </div>
        <Search onSelect={goToPage} />
        <div className="nav-tabs">
          <button
            className={`nav-tab ${route.view === "home" ? "active" : ""}`}
            onClick={() => navigate({ view: "home" })}
          >
            Home
          </button>
          <button
            className={`nav-tab ${route.view === "graph" ? "active" : ""}`}
            onClick={() => navigate({ view: "graph" })}
          >
            Graph
          </button>
          <button
            className={`nav-tab ${route.view === "tags" || route.view === "tag" ? "active" : ""}`}
            onClick={() => navigate({ view: "tags" })}
          >
            Tags
          </button>
          <button
            className={`nav-tab ${route.view === "timeline" ? "active" : ""}`}
            onClick={() => navigate({ view: "timeline" })}
          >
            Timeline
          </button>
          <button
            className={`nav-tab ${route.view === "lint" ? "active" : ""}`}
            onClick={() => navigate({ view: "lint" })}
          >
            Lint
          </button>
        </div>
        <button
          className="icon-btn"
          onClick={() => navigate({ view: "random" })}
          title="Open a random page (g r)"
          aria-label="Random page"
        >
          <DiceIcon />
        </button>
      </div>
      <div className="layout">
        <Sidebar
          pages={pages}
          current={currentSlug}
          onSelect={goToPage}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        {route.view === "home" && <Home pages={pages} onSelect={goToPage} onGoto={navigate} />}
        {route.view === "page" && (
          <PageView
            slug={route.slug}
            onNavigate={goToPage}
            onGraph={(slug) => navigate({ view: "graph", focus: slug })}
            onTag={(tag) => navigate({ view: "tag", tag })}
          />
        )}
        {route.view === "graph" && <GraphView onSelect={goToPage} focusSlug={route.focus} />}
        {route.view === "tags" && <TagsView onSelect={goToPage} onTag={(t) => navigate({ view: "tag", tag: t })} />}
        {route.view === "tag" && <TagView tag={route.tag} onSelect={goToPage} onBack={() => navigate({ view: "tags" })} />}
        {route.view === "timeline" && <TimelineView />}
        {route.view === "lint" && <LintView onSelect={goToPage} />}
        {route.view === "random" && <div className="main"><div className="loading-state">Picking a page…</div></div>}
      </div>
      <footer className="app-footer">
        <div>
          {meta && (
            <>
              <span>{meta.pageCount} pages</span>
              <span className="footer-sep">·</span>
              <span>Built {formatRelativeDate(meta.builtAt)}</span>
            </>
          )}
        </div>
        <div>
          <button className="footer-link" onClick={() => setShowHelp(true)}>
            Shortcuts (?)
          </button>
        </div>
      </footer>
      <ShortcutsOverlay open={showHelp} onClose={() => setShowHelp(false)} />
    </>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
