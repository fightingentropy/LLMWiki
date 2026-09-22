import { graphNeighborhood } from '../graph';
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createRoot } from "react-dom/client";
import * as d3 from "d3";
import { searchDocuments, canonicalTag, type SearchDocument, type SearchHit } from "../search";
import { BookmarksView, SourcesView, SourceView, useJson, LoadState, type CaptureStatus } from "./Library";
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
  referencedBy?: number;
  summary?: string;
  updated?: string;
  mtime?: number;
  wordCount?: number;
  readingTime?: number;
}

interface PageDetail extends PageSummary {
  html: string;
  reviewed?: string; reviewStatus?: string; reviewNotes?: string; sourceGaps?: string[];
  sourceLinks?: {name:string;id:string|null;title:string;path:string;capturedAt:string|null}[];
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
  domain?: string;
  priority?: string;
}

interface TimelineEntry {
  date: string;
  op: string;
  detail: string;
  body: string;
  html?: string;
}

interface Meta {
  canEditSources?: boolean;
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
  const shapes: Record<string, React.ReactNode> = {
    source: <><path d="M9 2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6Z"/><path d="M9 2v4h4M6 9h4M6 11.5h3"/></>,
    topic: <><rect x="3" y="2" width="10" height="12" rx="2"/><path d="M6 2v12M8.5 5h2"/></>,
    entity: <><circle cx="8" cy="5" r="2.5"/><path d="M3 14v-1a5 5 0 0 1 10 0v1"/></>,
    analysis: <><path d="M3 2v11h11M6 10V7m3 3V4m3 6V6"/></>,
    overview: <><path d="M8 4C6 2.5 3.5 2.5 1.5 3v10C4 12.5 6 12.5 8 14c2-1.5 4-1.5 6.5-1V3C12.5 2.5 10 2.5 8 4Zm0 0v10"/></>,
    log: <><circle cx="8" cy="8" r="5.5"/><path d="M8 4.5V8l2.5 1.5"/></>,
    index: <><rect x="2.5" y="2.5" width="11" height="11" rx="2"/><path d="M6 2.5v11M6 6h7.5"/></>,
  };
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[type] || shapes.topic}</svg>;
}
function PinIcon() {
  return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 2 7 7-3 1-2 2-4-4 2-2Zm0 8-4 4"/></svg>;
}
function NetworkIcon() {
  return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="m5.5 6 4-2m-4 4 4 3"/><circle cx="4" cy="7" r="2"/><circle cx="11.5" cy="3" r="2"/><circle cx="11.5" cy="12" r="2"/></svg>;
}
function ChevronIcon() {
  return <svg className="section-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m4.5 2.5 3.5 3.5-3.5 3.5"/></svg>;
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
function SyncIcon({ spinning }: { spinning?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={spinning ? "spin" : ""}
    >
      <path d="M2 8a6 6 0 0 1 10.24-4.24L14 5.5" />
      <path d="M14 2v3.5H10.5" />
      <path d="M14 8a6 6 0 0 1-10.24 4.24L2 10.5" />
      <path d="M2 14v-3.5H5.5" />
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
  if (!res.ok) throw new Error("Could not load the wiki. Check the server and try again.");
  _pagesCache = await res.json();
  return _pagesCache!;
}

async function fetchPage(slug: string, signal?: AbortSignal): Promise<PageDetail | null> {
  const res = await fetch(`/data/pages/${encodeURIComponent(slug)}.json`, {signal});
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Could not load this page. Try again.");
  return res.json();
}

async function fetchGraph() {
  if (_graphCache) return _graphCache;
  const res = await fetch("/data/graph.json");
  if (!res.ok) throw new Error("Could not load the graph.");
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

async function fetchSearchIndex(): Promise<any[]> {
  if (_searchCache) return _searchCache;
  const res = await fetch("/data/search.json");
  if (!res.ok) throw new Error("Search is unavailable. Try again.");
  _searchCache = await res.json();
  return _searchCache!;
}

interface PendingSource { path: string; basename: string; size: number; mtime: number; }

async function fetchPendingIngest(): Promise<PendingSource[]> {
  try {
    const res = await fetch("/data/pending-ingest.json");
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

function resetCaches() {
  _pagesCache = null;
  _searchCache = null;

  _graphCache = null;
  _metaCache = null;
}

let _csrfToken: string | null = null;

async function mutationFetch(path: string, init: RequestInit = {}): Promise<Response> {
  if (!_csrfToken) {
    const session = await fetch("/api/session", {
      method: "POST",
      credentials: "same-origin",
      headers: { Accept: "application/json" },
    });
    if (!session.ok) throw new Error("Local wiki session expired — refresh the page and try again");
    const data = await session.json();
    if (typeof data.csrfToken !== "string" || !data.csrfToken) {
      throw new Error("Local wiki session did not provide a CSRF token");
    }
    _csrfToken = data.csrfToken;
  }

  const headers = new Headers(init.headers);
  headers.set("X-CSRF-Token", _csrfToken);
  const response = await fetch(path, {
    ...init,
    method: "POST",
    credentials: "same-origin",
    headers,
  });
  if (response.status === 401 || response.status === 403) _csrfToken = null;
  return response;
}

async function runSync(): Promise<{ ok: boolean; synced: string[]; errors: string[]; pending: number; error?: string }> {
  try {
    const res = await mutationFetch("/api/sync");
    const data = await res.json();
    return {
      ok: !!data.ok,
      synced: data.synced || [],
      errors: data.errors || [],
      pending: data.pending || 0,
      error: data.error,
    };
  } catch (e: any) {
    return { ok: false, synced: [], errors: [String(e?.message || e)], pending: 0, error: String(e) };
  }
}

// --- URL Routing ---
type Route =
  | { view: "home" }
  | { view: "page"; slug: string; anchor?: string }
  | { view: "bookmarks"; id?: string }
  | { view: "sources" }
  | { view: "source"; id: string }
  | { view: "graph"; focus?: string }
  | { view: "tags" }
  | { view: "tag"; tag: string }
  | { view: "timeline" }
  | { view: "lint" }
  | { view: "random" };

function parseRoute(href = window.location.href): Route {
  const url = new URL(href, window.location.origin), path = url.pathname, search = url.searchParams;
  if (path.startsWith("/page/")) return { view: "page", slug: path.slice(6), anchor: url.hash.slice(1) || undefined };
  if (path === "/bookmarks" || path.startsWith("/bookmarks/")) return {view:"bookmarks", id:path.split("/")[2] || undefined};
  if (path === "/sources") return {view:"sources"};
  if (path.startsWith("/source/")) return {view:"source", id:path.slice(8)};
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
    case "page": return `/page/${r.slug}${r.anchor ? "#"+r.anchor : ""}`;
    case "bookmarks": return r.id ? `/bookmarks/${r.id}` : "/bookmarks";
    case "sources": return "/sources";
    case "source": return `/source/${r.id}`;
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

const NAV: {label:string; href:string}[] = [{label:"Home",href:"/"},{label:"Bookmarks",href:"/bookmarks"},{label:"Sources",href:"/sources"},{label:"Graph",href:"/graph"},{label:"Tags",href:"/tags"},{label:"Timeline",href:"/timeline"},{label:"Review",href:"/lint"}];
function useStored<T>(key:string, initial:T) {
  const [value,setValue]=useState<T>(()=>{try {const raw=localStorage.getItem(key);if(!raw)return initial;const parsed=JSON.parse(raw);if(Array.isArray(initial))return (Array.isArray(parsed)&&parsed.every(v=>typeof v==='string')?parsed:initial) as T;return parsed&&typeof parsed==='object'&&!Array.isArray(parsed)?{...initial,...parsed}:initial;}catch{return initial;}});
  useEffect(()=>{try{localStorage.setItem(key,JSON.stringify(value));}catch{}},[key,value]);
  return [value,setValue] as const;
}
function openHeading(id:string) {
  const el=document.getElementById(id); if(!el)return;
  let parent:HTMLElement|null=el;
  while(parent){if(parent instanceof HTMLDetailsElement)parent.open=true;parent=parent.parentElement;}
  el.scrollIntoView({behavior:"auto",block:"start"});
}
// --- Search Component ---
function Search({onNavigate,version}:{onNavigate:(href:string)=>void;version?:string}) {
  const [query,setQuery]=useState(""),[open,setOpen]=useState(false),[active,setActive]=useState(0);
  const [docs,setDocs]=useState<SearchDocument[]|null>(null),[error,setError]=useState(""),[attempt,setAttempt]=useState(0);
  const [kind,setKind]=useState("all"),[domain,setDomain]=useState("all");
  const ref=useRef<HTMLDivElement>(null), input=useRef<HTMLInputElement>(null);
  useEffect(()=>{let alive=true;fetchSearchIndex().then(d=>{if(alive)setDocs(d);}).catch(e=>{if(alive)setError(e.message);});return()=>{alive=false;};},[attempt,version]);
  const results=useMemo(()=>docs?searchDocuments(docs,query,{kind,domain,limit:12}):[],[docs,query,kind,domain]);
  useEffect(()=>setActive(0),[query,kind,domain]);
  useEffect(()=>{if(open)document.getElementById(`search-result-${active}`)?.scrollIntoView({block:"nearest"});},[active,open]);
  useEffect(()=>{const click=(e:MouseEvent)=>{if(!ref.current?.contains(e.target as Node))setOpen(false);};const key=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();input.current?.focus();setOpen(true);}};document.addEventListener('mousedown',click);document.addEventListener('keydown',key);return()=>{document.removeEventListener('mousedown',click);document.removeEventListener('keydown',key);};},[]);
  function pick(hit:SearchHit){onNavigate(hit.href);setOpen(false);setQuery("");input.current?.blur();}
  return <div className="search-wrap" ref={ref}><SearchIcon/><input ref={input} aria-label="Search wiki and bookmarks" role="combobox" aria-expanded={open} aria-controls={open&&results.length?"wiki-search-results":undefined} aria-autocomplete="list" aria-activedescendant={open&&results[active]?`search-result-${active}`:undefined}
    placeholder="Search wiki and bookmarks…" value={query} onChange={e=>{setQuery(e.target.value);setActive(0);setOpen(true);}} onFocus={()=>setOpen(true)}
    onKeyDown={e=>{if(e.key==='ArrowDown'){e.preventDefault();setActive(n=>Math.min(n+1,Math.max(0,results.length-1)));}else if(e.key==='ArrowUp'){e.preventDefault();setActive(n=>Math.max(0,n-1));}else if(e.key==='Enter'&&results[active]){e.preventDefault();pick(results[active]);}else if(e.key==='Escape'){setOpen(false);input.current?.blur();}}}/><kbd className="search-kbd">⌘K</kbd>
    {open&&<div className="search-results"><div className="search-filters"><select aria-label="Search in" value={kind} onChange={e=>setKind(e.target.value)}><option value="all">Everything</option><option value="page">Wiki pages</option><option value="bookmark">Bookmarks</option></select><select aria-label="Search domain" value={domain} onChange={e=>setDomain(e.target.value)}><option value="all">All domains</option>{[...new Set((docs||[]).map(d=>d.domain))].sort().map(d=><option key={d}>{d}</option>)}</select></div>
      {error?<div role="alert" className="search-feedback">{error} <button onClick={()=>{setError('');setAttempt(n=>n+1);}}>Retry</button></div>:!docs?<div className="search-feedback" role="status">Loading search…</div>:!query.trim()?<div className="search-feedback">Search a title, phrase, tool or original post ID.</div>:!results.length?<div className="search-feedback" role="status">No matches for “{query}”. Try a shorter phrase or change the filters.</div>:<div id="wiki-search-results" role="listbox" aria-label="Search results">{results.map((r,i)=><div key={r.slug} id={`search-result-${i}`} role="option" aria-selected={active===i} className={`search-result ${active===i?'active':''}`} onMouseMove={()=>setActive(i)}><a href={r.href} onClick={()=>{setOpen(false);setQuery('');}}><div className="search-result-title">{r.title}</div><div className="search-result-meta">{r.type} · {r.domain}{r.anchor?' · Matching section':''}</div><div className="search-result-snippet">{r.snippet}</div></a></div>)}</div>}
    </div>}
  </div>;
}

// --- Sidebar ---
function Sidebar({pages,current,open,onClose,pins,recents}:{pages:PageSummary[];current:string|null;open:boolean;onClose:()=>void;pins:string[];recents:string[]}) {
 const [filter,setFilter]=useState(''),[type,setType]=useState('all');
 const [mobile,setMobile]=useState(()=>matchMedia('(max-width:720px)').matches);
 useEffect(()=>{const mq=matchMedia('(max-width:720px)'),changed=()=>setMobile(mq.matches);mq.addEventListener('change',changed);return()=>mq.removeEventListener('change',changed);},[]);
 const [collapsed,setCollapsed]=useStored<Record<string,boolean>>('brain-wiki-collapsed',{culture:true,dev:true,electrics:true,health:true,markets:true,personal:true,psychology:true});
 const matches=(p:PageSummary)=>(type==='all'||p.type===type)&&(!filter||`${p.title} ${p.tags.join(' ')}`.toLowerCase().includes(filter.toLowerCase()));
 const groups=useMemo(()=>{const g:Record<string,PageSummary[]>={};for(const p of pages){if(['index','log'].includes(p.type))continue;const key=p.title.startsWith('Bookmarks - ')?'Bookmark collections':p.domain;if(!g[key])g[key]=[];g[key].push(p);}return Object.entries(g).sort(([a],[b])=>a.localeCompare(b));},[pages]);
 const item=(p:PageSummary)=><a key={p.slug} className={`sidebar-item ${current===p.slug?'active':''}`} href={'/page/'+p.slug} aria-current={current===p.slug?'page':undefined} title={p.title}><span className="sidebar-glyph">{typeGlyph(p.type)}</span><span className="sidebar-item-label">{p.title.replace(/^Bookmarks - /,'')}</span></a>;
 return <><aside className={`sidebar ${open?'open':''}`} aria-label="Page navigation" id="page-navigation" inert={mobile&&!open} aria-hidden={mobile&&!open?true:undefined}><nav className="sidebar-global" aria-label="Main navigation">{NAV.map(n=><a key={n.href} href={n.href}>{n.label}</a>)}</nav>
  <div className="sidebar-filter"><input aria-label="Filter pages" placeholder="Find a page…" value={filter} onChange={e=>setFilter(e.target.value)}/>{filter&&<button className="sidebar-filter-clear" onClick={()=>setFilter('')} aria-label="Clear page filter">×</button>}</div>
  <select className="sidebar-type" aria-label="Page type" value={type} onChange={e=>setType(e.target.value)}><option value="all">All page types</option>{['topic','source','entity','analysis'].map(t=><option key={t}>{t}</option>)}</select>
  {[['Pinned',pins],['Recently opened',recents.slice(0,5)]] .map(([name,ids])=>{const found=(ids as string[]).map(id=>pages.find(p=>p.slug===id)).filter((p):p is PageSummary=>!!p&&matches(p));return found.length?<section key={name as string} className="sidebar-section"><div className="sidebar-section-title">{name}</div>{found.map(item)}</section>:null;})}
  {groups.map(([name,items])=>{const shown=items.filter(matches);if(!shown.length)return null;const isOpen=!!filter||!collapsed[name];return <section key={name} className="sidebar-section"><button className="sidebar-section-title section-toggle" aria-expanded={isOpen} onClick={()=>setCollapsed(c=>({...c,[name]:!c[name]}))}><span><ChevronIcon/>{name.charAt(0).toUpperCase()+name.slice(1)}</span><span>{shown.length}</span></button>{isOpen&&shown.sort((a,b)=>a.title.localeCompare(b.title)).map(item)}</section>;})}
  {!pages.some(matches)&&<p className="search-feedback">No matching pages.</p>}
 </aside><div className={`sidebar-backdrop ${open?'visible':''}`} onClick={onClose}/></>;
}

// --- Page Aside (TOC + Backlinks) ---
function PageAside({
  headings,
  backlinks,
  onNavigate,
}: {
  headings: { level: number; text: string; id: string }[];
  backlinks: { slug: string; title: string; type: string }[];
  onNavigate: (slug: string) => void;
}) {
  const [active, setActive] = useState<string | null>(null);
  const showToc = headings.filter(h=>h.level>1).length >= 2;
  const showBacklinks = backlinks.length > 0;

  useEffect(() => {
    if (!showToc) return;
    const observer = new IntersectionObserver(
      (entries) => {
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
  }, [headings, showToc]);

  if (!showToc && !showBacklinks) return null;

  return (
    <aside className="page-aside">
      {showToc && (
        <div className="aside-section toc">
          <div className="aside-title">On this page</div>
          <ul>
            {headings
              .filter((h) => h.level >= 2 && h.level <= 3)
              .map((h) => (
                <li key={h.id} className={`toc-level-${h.level} ${active === h.id ? "active" : ""}`}>
                  <a
                    href={`#${h.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(h.id);
                      if (el) {
                        openHeading(h.id);
                        history.replaceState(null, "", `#${h.id}`);
                      }
                    }}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      )}
      {showBacklinks && (
        <div className="aside-section aside-backlinks">
          <div className="aside-title">Referenced by · {backlinks.length}</div>
          <ul>
            {backlinks.map((b) => (
              <li key={b.slug}>
                <a className="aside-backlink" href={"/page/"+b.slug}>
                  <span className="sidebar-glyph" style={{ color: TYPE_COLORS[b.type] || TYPE_COLORS.unknown }}>
                    {typeGlyph(b.type)}
                  </span>
                  <span className="aside-backlink-title">{b.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}

function ArticleContent({html,collapsed}:{html:string;collapsed:boolean}) {
 const clean=html.replace(/^\s*<h1(?: [^>]*)?>[\s\S]*?<\/h1>/i,'');
 if(!collapsed)return <div className="page-content" dangerouslySetInnerHTML={{__html:clean}}/>;
 const matches=[...clean.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)];
 if(!matches.length)return <div className="page-content" dangerouslySetInnerHTML={{__html:clean}}/>;
 return <div className="page-content"><div dangerouslySetInnerHTML={{__html:clean.slice(0,matches[0].index)}}/>{matches.map((m,i)=><details key={m[1]} id={m[1]} className="archive-section"><summary dangerouslySetInnerHTML={{__html:m[2]}}/><div dangerouslySetInnerHTML={{__html:clean.slice(m.index!+m[0].length,matches[i+1]?.index??clean.length)}}/></details>)}</div>;
}

// --- Page View ---
function PageView({
  slug,
  onNavigate,
  onGraph,
  onTag, anchor, pinned, onPin,
}: {
  slug: string;
  onNavigate: (slug: string) => void;
  onGraph: (slug: string) => void;
  onTag: (tag: string) => void;
  anchor?:string; pinned:boolean; onPin:()=>void;
}) {
  const [page, setPage] = useState<PageDetail | null>(null);
  const [copied, setCopied] = useState(false);
  const [error,setError]=useState("");
  const [attempt,setAttempt]=useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller=new AbortController(); setPage(null);setError('');
    fetchPage(slug,controller.signal).then(p=>{if(!controller.signal.aborted){setPage(p);if(!p)setError('Page not found');}}).catch(e=>{if(e.name!=='AbortError')setError(e.message);});
    const main=document.querySelector('.main');if(main)main.scrollTop=0;
    return ()=>controller.abort();
  },[slug,attempt]);
  useEffect(()=>{if(page&&anchor)requestAnimationFrame(()=>openHeading(anchor));},[page,anchor]);

  function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }

  if (!page) return <div className="main"><div className="loading-state" role={error?"alert":"status"}>{error||"Loading…"}{error&&<p><a href="/">Home</a> · <button onClick={()=>setAttempt(n=>n+1)}>Try again</button></p>}</div></div>;

  return (
    <div className="main">
      <div className="breadcrumb">
        <a href="/">Home</a>
        <span className="breadcrumb-sep">/</span>
        <span className="breadcrumb-cat">{page.category === "root" ? "Wiki" : page.category}</span>
        <span className="breadcrumb-sep">/</span>
        <span>{page.title}</span>
      </div>

      <div className="page-layout">
        <article className="page-article">
          <header className="page-header">
            <div className="page-title-row">
              <h1 className="page-title" id={page.headings[0]?.level===1?page.headings[0].id:undefined}>{page.title}</h1>
              <div className="page-actions"><button className="page-action" aria-label={pinned?"Unpin page":"Pin page"} aria-pressed={pinned} onClick={onPin}><PinIcon/>{pinned?"Pinned":"Pin"}</button>
                <button
                  className="page-action"
                  onClick={copyLink}
                  title="Copy link to this page"
                >
                  <CopyIcon /> {copied ? "Copied" : "Copy link"}
                </button>
                <button className="page-action" onClick={() => onGraph(slug)} title="Show this page in the graph">
                  <NetworkIcon/> Graph
                </button>
              </div>
            </div>
            <div className="page-meta">
              <span className={badgeClass(page.type)}>{page.type}</span>
              {page.domain && page.domain !== "unknown" && <span className="page-domain">{page.domain}</span>}
              {!!page.readingTime && (
                <span className="page-date" title={`${page.wordCount} words`}>
                  {page.readingTime} min read
                </span>
              )}
              {page.updated && <span className="page-date">Edited {formatRelativeDate(page.updated)}</span>}
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

          {page.summary&&<p className="article-summary">{page.summary}</p>}
          {Boolean(page.reviewed||page.reviewNotes||page.sourceGaps?.length)&&<div className="reader-note"><strong>{page.reviewStatus==='verified'?'Evidence reviewed':page.reviewStatus==='archive'?'Source archive':'Review note'}</strong>{page.reviewed&&` · ${page.reviewed}`}<div>{page.reviewNotes}</div>{page.sourceGaps?.map(g=><div key={g}>Historical source unavailable: {g}</div>)}</div>}
          <div ref={contentRef}><ArticleContent html={page.html} collapsed={page.type==='source'&&(page.wordCount||0)>2000}/></div>

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
                            href={"/page/"+r.slug}
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
                    {(page.sourceLinks||page.sources.map(name=>({name,id:null,title:name}))).map((source,i)=>source.id?<a key={i} className="source-item" href={'/source/'+source.id}>{source.title} ↗</a>:<span key={i} className="source-item broken">{source.name} · unavailable</span>)}
                  </div>
                </div>
              )}
            </div>
          )}

        </article>

        <PageAside
          headings={page.headings || []}
          backlinks={page.backlinks || []}
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
}

// --- Home ---
function Home({pages,recents}:{pages:PageSummary[];recents:string[]}) {
 const {data:timelineData,error:timelineError,retry:retryTimeline}=useJson<TimelineEntry[]>('/data/timeline.json');
 const timeline=timelineData||[];
 const content=pages.filter(p=>!['index','log','overview'].includes(p.type));
 const mostReferenced=[...content].sort((a,b)=>(b.referencedBy||0)-(a.referencedBy||0)||a.title.localeCompare(b.title)).slice(0,6);
 const recent=recents.map(slug=>pages.find(p=>p.slug===slug)).filter((p):p is PageSummary=>!!p).slice(0,6);
 const domains=[...new Set(content.map(p=>p.domain))].sort();
 const list=(items:PageSummary[])=><div className="home-list">{items.map(p=><a key={p.slug} className="home-list-item" href={'/page/'+p.slug}><span className="sidebar-glyph">{typeGlyph(p.type)}</span><span className="home-list-title">{p.title}</span><span className="home-list-date">{p.referencedBy||0} references</span></a>)}</div>;
 return <div className="main"><div className="home-hero"><h1>Brain Wiki</h1><p>Ideas, sources and useful answers across {domains.length} subjects.</p><div className="source-actions"><a href="/bookmarks">Browse bookmarks →</a><a href="/sources">Original sources →</a><a href="/page/wiki-overview">Wiki overview →</a></div></div>
  <div className="stats-row">{[['source','Sources'],['entity','Entities'],['topic','Topics'],['analysis','Analyses']].map(([type,label])=><div className="stat" key={type}><div className="stat-number">{pages.filter(p=>p.type===type).length}</div><div className="stat-label">{label}</div></div>)}</div>
  <div className="home-row"><section><div className="domain-title">{recent.length?'Continue reading':'Most referenced'}</div>{list(recent.length?recent:mostReferenced)}</section>
   <section><div className="domain-title">Recent activity<a className="domain-more" href="/timeline">Timeline →</a></div><div className="home-list">{timelineError&&<p role="alert">Recent activity could not load. <button onClick={retryTimeline}>Retry</button></p>}{!timelineData&&!timelineError&&<p role="status">Loading activity…</p>}{timeline.slice(0,3).map((e,i)=><a className="home-list-item activity-item" href="/timeline" key={i}><span className="home-list-title"><small>{e.date} · {e.op}</small>{e.detail}</span></a>)}</div></section></div>
  <div className="domain-title">Explore by subject</div><div className="domain-directory">{domains.map(domain=><details key={domain} className="domain-disclosure"><summary><span>{domain}</span><span>{content.filter(p=>p.domain===domain).length} pages</span></summary><div className="home-list">{content.filter(p=>p.domain===domain).sort((a,b)=>a.title.localeCompare(b.title)).map(p=><a className="home-list-item" key={p.slug} href={'/page/'+p.slug}><span className="home-list-title">{p.title}</span><span className="home-list-date">{p.type}</span></a>)}</div></details>)}</div>
 </div>;
}

// --- Tags ---
function TagsView({ onSelect, onTag }: { onSelect: (slug: string) => void; onTag: (t: string) => void }) {
 const {data:tags,error,retry}=useJson<TagEntry[]>('/data/tags.json');
 const [query,setQuery]=useState(''),[all,setAll]=useState(false);
 if(!tags)return <LoadState error={error} retry={retry}/>;
 const shown=tags.filter(t=>(all||query||t.count>1)&&(t.tag.includes(query.trim().toLowerCase())||t.tag===canonicalTag(query.trim())));
 return <div className="main"><div className="home-hero"><h1>Tags</h1><p>Browse shared subjects, or search all {tags.length} tags. Related spellings share one tag.</p></div><div className="browse-controls"><input aria-label="Find tags" placeholder="Find a tag…" value={query} onChange={e=>setQuery(e.target.value)}/><label><input type="checkbox" checked={all} onChange={e=>setAll(e.target.checked)}/> Include tags used once</label></div><div className="tag-cloud">{shown.map(t=><a className="tag-cloud-item" key={t.tag} href={'/tags/'+encodeURIComponent(t.tag)}>#{t.tag} <span className="tag-cloud-count">{t.count}</span></a>)}</div>{!shown.length&&<p className="empty">No matching tags.</p>}</div>;
}

function TagView({ tag, onSelect, onBack }: { tag: string; onSelect: (slug: string) => void; onBack: () => void }) {
  const {data:tags,error,retry}=useJson<TagEntry[]>('/data/tags.json');
  if(!tags)return <LoadState error={error} retry={retry}/>;
  const entry = tags.find((t) => t.tag === canonicalTag(tag));

  return (
    <div className="main">
      <div className="breadcrumb">
        <a href="/tags">Tags</a>
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
            <a key={p.slug} className="home-card" href={"/page/"+p.slug}>
              <div className="home-card-title">{p.title}</div>
              <div className="home-card-meta">
                <span className={badgeClass(p.type)}>{p.type}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Timeline ---
function TimelineView() {
  const {data:entries,error,retry}=useJson<TimelineEntry[]>('/data/timeline.json');
  if(!entries)return <LoadState error={error} retry={retry}/>;

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
              {e.body && <details className="timeline-details"><summary>View changes</summary><div className="page-content timeline-content" dangerouslySetInnerHTML={{__html:e.html || ""}}/></details>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Lint ---
const LINT_LABELS: Record<string,string> = {'broken-source':'Missing source references','broken-related':'Missing related pages','broken-link':'Broken article links','source-gap':'Pages with unavailable historical sources','needs-review':'Evidence review needed',stale:'Evidence review due',orphan:'Unconnected pages','missing-type':'Missing page type','missing-tags':'Missing tags','missing-domain':'Missing domain','duplicate-title':'Duplicate titles'};
function LintView({onSelect}:{onSelect:(slug:string)=>void}) {
 const {data:issues,error,retry}=useJson<LintIssue[]>('/data/lint.json');
 const [domain,setDomain]=useState('all');
 if(!issues)return <LoadState error={error} retry={retry}/>;
 const loaded=true;
 const filtered=issues.filter(i=>domain==='all'||i.domain===domain);
 const order=['broken-source','broken-related','broken-link','source-gap','needs-review','stale','orphan','missing-type','missing-domain','missing-tags','duplicate-title'];
 return <div className="main"><div className="home-hero"><h1>Review</h1><p>Prioritize missing evidence, consequential claims and scheduled reviews. Editing a page does not mark its claims verified.</p></div><div className="browse-controls"><select aria-label="Review domain" value={domain} onChange={e=>setDomain(e.target.value)}><option value="all">All domains</option>{[...new Set(issues.map(i=>i.domain).filter(Boolean))].sort().map(d=><option key={d}>{d}</option>)}</select><span role="status">{loaded?`${filtered.length} review items`:'Loading…'}</span></div>{error&&<p role="alert">{error}</p>}
 {loaded&&!filtered.length&&<p className="empty">No items in this review queue. Preserved archives do not need review just because they are old.</p>}
 {order.map(kind=>{const group=filtered.filter(i=>i.kind===kind);if(!group.length)return null;return <section className="lint-section" key={kind}><h2 className="lint-title">{LINT_LABELS[kind]} <span className="lint-count">{group.length}</span></h2><div className="lint-list">{group.map((i,n)=><a key={i.slug+n} href={'/page/'+i.slug} className="lint-item"><span className="lint-item-title">{i.title}</span><span className="lint-item-detail">{i.detail}</span></a>)}</div></section>;})}</div>;
}

// --- Graph View ---
function GraphView({ onSelect, focusSlug }: { onSelect: (slug: string) => void; focusSlug?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [graphData, setGraphData] = useState<any>(null);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, text: "" });
  const [filter, setFilter] = useState("all");
  const [focus,setFocus]=useState(focusSlug||'wiki-overview');
  const [hops,setHops]=useState('1');
  const [includeCatalog,setIncludeCatalog]=useState(false);
  const [graphError,setGraphError]=useState('');
  useEffect(()=>{if(focusSlug)setFocus(focusSlug);},[focusSlug]);
  const visible=useMemo(()=>graphData?graphNeighborhood(graphData.nodes,graphData.edges,{focus,hops:hops==='all'?Infinity:Number(hops),domain:filter,includeCatalog}):{nodes:[],edges:[]},[graphData,focus,hops,filter,includeCatalog]);
  // Cache node positions across filter changes so layout isn't thrown away
  const positionsRef = useRef<Map<string, { x: number; y: number }>>(new Map());
  const simRef = useRef<any>(null);
  const hoveredRef = useRef<any>(null);
  const dragRef = useRef<any>(null);
  const transformRef = useRef({ x: 0, y: 0, k: 1 });

  useEffect(() => {
    fetchGraph().then(setGraphData).catch(e=>setGraphError(e.message));
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
    let W = rect.width;
    let H = rect.height;

    let nodes: any[] = visible.nodes.slice(), edges: any[] = visible.edges.slice();

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
          .distance(nodes.length < 40 ? 120 : 80)
      )
      .force("charge", d3.forceManyBody().strength(nodes.length < 40 ? -450 : -200))
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

      const highlighted = hoveredRef.current || (focus ? nodeMap.get(focus) : null);
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

      const labelBoxes:{left:number;top:number;right:number;bottom:number}[]=[];
      [...nodes].sort((a,b)=>Number(b.id===focus)-Number(a.id===focus)).forEach((n: any) => {
        const r = nodeRadius(n);
        const color = TYPE_COLORS[n.type] || TYPE_COLORS.unknown;
        const isHovered = hoveredRef.current?.id === n.id;
        const isFocus = focus === n.id;

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
          ctx.fillStyle = isHovered || isFocus ? "#fafafa" : "#969696";
          ctx.textAlign = "center";
          const y=n.y+r+12/k, width=ctx.measureText(n.label).width;
          const x=Math.max((8-tx)/k+width/2,Math.min(n.x,(r2.width-8-tx)/k-width/2));
          const box={left:x-width/2-5/k,right:x+width/2+5/k,top:y-11/k,bottom:y+4/k};
          if(isHovered||!labelBoxes.some(b=>box.left<b.right&&box.right>b.left&&box.top<b.bottom&&box.bottom>b.top)){
            ctx.fillText(n.label,x,y);labelBoxes.push(box);
          }
        }
      });

      ctx.restore();
    }

    sim.on("tick", draw);

    // If a focus slug is provided, center the view on it after layout settles
    if (focus && nodeMap.has(focus)) {
      const target = nodeMap.get(focus)!;
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
      const next=resize();
      if(next.width!==W||next.height!==H){
        const dx=(next.width-W)/2,dy=(next.height-H)/2;
        for(const n of nodes){n.x+=dx;n.y+=dy;if(n.fx!=null)n.fx+=dx;if(n.fy!=null)n.fy+=dy;}
        W=next.width;H=next.height;
        sim.force('center',d3.forceCenter(W/2,H/2)).alpha(0.25).restart();
      }
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
  }, [graphData, visible, focus]);

  if (!graphData) return <div className="main full-width"><div className="loading-state" role={graphError?'alert':'status'}>{graphError||'Loading graph'}{graphError&&<button onClick={()=>{setGraphError('');fetchGraph().then(setGraphData).catch(e=>setGraphError(e.message));}}>Retry</button>}</div></div>;

  return (
    <div className="main full-width">
      <div className="graph-container" ref={containerRef}>
        <canvas ref={canvasRef} />
        <div className="graph-filter graph-controls">
          <label>Focus <select aria-label="Graph focus" value={focus} onChange={e=>setFocus(e.target.value)}>{graphData.nodes.filter((n:any)=>!['index','log'].includes(n.type)).sort((a:any,b:any)=>a.label.localeCompare(b.label)).map((n:any)=><option key={n.id} value={n.id}>{n.label}</option>)}</select></label>
          <label>Connections <select aria-label="Graph distance" value={hops} onChange={e=>setHops(e.target.value)}><option value="1">One step</option><option value="2">Two steps</option><option value="all">Whole wiki</option></select></label>
          <label>Subject <select aria-label="Graph subject" value={filter} onChange={e=>setFilter(e.target.value)}><option value="all">All subjects</option>{[...new Set(graphData.nodes.map((n:any)=>n.domain))].sort().filter(Boolean).map((d:any)=><option key={d}>{d}</option>)}</select></label>
          <label className="graph-catalog"><input type="checkbox" checked={includeCatalog} onChange={e=>setIncludeCatalog(e.target.checked)}/> Catalog pages</label>
        </div>
        <details className="graph-related"><summary>{visible.nodes.length} connected pages</summary><div>{visible.nodes.map((n:any)=><a key={n.id} href={'/page/'+n.id}>{n.label}</a>)}</div></details>
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
// --- Sync button + pending-ingest modal ---
interface SyncToast { kind: "ok" | "err"; text: string; }

function SyncButton({pending,onSynced,onShowPending}:{pending:PendingSource[];onSynced:()=>void;onShowPending:()=>void}) {
 const [busy,setBusy]=useState(false),[preview,setPreview]=useState<any>(null),[message,setMessage]=useState('');
 useEffect(()=>{if(!preview)return;const previous=document.activeElement as HTMLElement;const dialog=document.querySelector('[aria-labelledby="capture-title"]') as HTMLElement|null;dialog?.querySelector<HTMLButtonElement>('button')?.focus();const key=(e:KeyboardEvent)=>{if(e.key==='Escape'&&!busy){e.preventDefault();setPreview(null);}if(e.key==='Tab'&&dialog){const controls=[...dialog.querySelectorAll<HTMLElement>('button:not(:disabled),a[href],input,select')];if(!controls.length)return;const first=controls[0],last=controls[controls.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}};document.addEventListener('keydown',key);return()=>{document.removeEventListener('keydown',key);previous?.focus();};},[preview,busy]);
 async function inspect(){setBusy(true);setMessage('');try{const r=await fetch('/api/sync/preview');if(!r.ok)throw Error('Could not preview the source capture.');setPreview(await r.json());}catch(e:any){setMessage(e.message);}finally{setBusy(false);}}
 async function capture(){setBusy(true);const r=await runSync();setMessage(r.ok?`${r.synced.length} source revisions captured. Earlier versions are preserved.`:r.error||r.errors.join('; '));setBusy(false);setPreview(null);onSynced();}
 return <div className="sync-wrap"><button className="icon-btn" onClick={inspect} disabled={busy} title="Preview source changes" aria-label="Preview source changes"><SyncIcon spinning={busy}/></button><button className={`pending-badge ${pending.length?"":"is-empty"}`} onClick={onShowPending} title="Sources waiting for synthesis" aria-label="Show pending ingest">{pending.length}</button>
 {message&&<div className="sync-toast" role="status">{message}<button aria-label="Dismiss capture message" onClick={()=>setMessage('')}>×</button></div>}
 {preview&&<div className="overlay" onClick={()=>!busy&&setPreview(null)}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="capture-title" onClick={e=>e.stopPropagation()}><div className="modal-header"><h2 id="capture-title">Capture source changes</h2><button className="modal-close" disabled={busy} onClick={()=>setPreview(null)} aria-label="Close capture preview">×</button></div><div className="modal-hint">{preview.changes?.length||0} new or revised sources. Each change is saved as a new version; previous captures stay available.</div>{preview.errors?.map((e:string)=><p className="reader-note" role="alert" key={e}>{e}</p>)}<ul className="pending-list">{preview.changes?.map((c:any)=><li className="pending-item" key={c.source}><span>{c.source}</span><span className="pending-meta">{c.kind}</span></li>)}</ul><div className="capture-footer"><button className="page-action" onClick={()=>setPreview(null)} disabled={busy}>Close</button><button className="modal-primary" disabled={busy||!preview.changes?.length} onClick={capture}>{busy?'Capturing…':'Capture changes'}</button></div></div></div>}
 </div>;
}

function PendingModal({
  items,
  onClose,
  onIngest,
}: {
  items: PendingSource[];
  onClose: () => void;
  onIngest: (files: string[]) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function fmtSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Pending ingest · {items.length}</h2>
          <div className="modal-header-actions">
            {items.length > 0 && (
              <button
                className="modal-primary"
                onClick={() => onIngest(items.map((i) => i.path))}
                title="Create wiki summaries from the selected sources"
              >
                Ingest all
              </button>
            )}
            <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
          </div>
        </div>
        <div className="modal-hint">
          New or changed source versions waiting to be summarized and connected to wiki pages.
          <span style={{ display: "block", marginTop: 4 }}>
            “Ingest all” prepares summaries and related pages in an isolated workspace, validates them, then publishes the changes. Original sources are preserved.
          </span>
        </div>
        {items.length === 0 ? (
          <div className="modal-empty">All raw sources have been ingested.</div>
        ) : (
          <ul className="pending-list">
            {items.map((it) => (
              <li key={it.path} className="pending-item">
                <span className="pending-path">{it.path}</span>
                <span className="pending-meta">{fmtSize(it.size)}</span>
                <button
                  className="pending-ingest-one"
                  onClick={() => onIngest([it.path])}
                  title="Ingest only this file"
                >
                  Ingest
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// --- Ingest progress panel ---
interface IngestEvent {
  kind: "text" | "tool" | "result" | "stderr" | "system" | "exit" | "other";
  text: string;
  tool?: string;
}

function parseIngestLine(line: string): IngestEvent | null {
  try {
    const ev = JSON.parse(line);
    if (ev.type === "stderr") return { kind: "stderr", text: ev.text };
    if (ev.type === "exit") {
      const detail = ev.error ? ` — ${ev.error}` : "";
      const staged = ev.stagingDir ? ` (staged at ${ev.stagingDir})` : "";
      return { kind: "exit", text: `Exit: ${ev.status} (${ev.exitCode ?? "?"})${detail}${staged}` };
    }
    if (ev.type === "system") return { kind: "system", text: ev.subtype || "system" };
    if (ev.type === "assistant") {
      const content = ev.message?.content;
      if (Array.isArray(content)) {
        const parts: IngestEvent[] = [];
        for (const c of content) {
          if (c.type === "text" && c.text) parts.push({ kind: "text", text: c.text });
          else if (c.type === "tool_use") {
            const name = c.name || "?";
            const input = c.input || {};
            let hint = "";
            if (input.file_path) hint = String(input.file_path);
            else if (input.path) hint = String(input.path);
            else if (input.pattern) hint = String(input.pattern);
            else if (input.command) hint = String(input.command).slice(0, 80);
            parts.push({ kind: "tool", text: hint, tool: name });
          }
        }
        if (parts.length) return parts[parts.length - 1]; // return last part — multiple collapsed for brevity
      }
      return null;
    }
    if (ev.type === "result") return { kind: "result", text: ev.result || "done" };
    return { kind: "other", text: ev.type || "event" };
  } catch {
    return { kind: "stderr", text: line };
  }
}

function IngestPanel({
  files,
  onClose,
  onDone,
}: {
  files: string[];
  onClose: () => void;
  onDone: () => void;
}) {
  const [events, setEvents] = useState<IngestEvent[]>([]);
  const [status, setStatus] = useState<"starting" | "running" | "done" | "failed" | "aborted">("starting");
  const abortRef = useRef<AbortController | null>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    (async () => {
      try {
        const res = await mutationFetch("/api/ingest", {
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ files }),
          signal: ctrl.signal,
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          setEvents((e) => [...e, { kind: "stderr", text: err.error || `HTTP ${res.status}` }]);
          setStatus("failed");
          return;
        }
        setStatus("running");
        const reader = res.body!.getReader();
        const decoder = new TextDecoder();
        let buf = "";
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buf += decoder.decode(value, { stream: true });
          let nl: number;
          while ((nl = buf.indexOf("\n")) !== -1) {
            const line = buf.slice(0, nl);
            buf = buf.slice(nl + 1);
            if (!line) continue;
            const ev = parseIngestLine(line);
            if (!ev) continue;
            if (ev.kind === "exit") {
              setStatus(
                ev.text.includes("done") ? "done" : ev.text.includes("aborted") ? "aborted" : "failed"
              );
            }
            setEvents((prev) => {
              const next = [...prev, ev];
              return next.length > 500 ? next.slice(-500) : next;
            });
          }
        }
      } catch (e: any) {
        if (e.name !== "AbortError") {
          setEvents((prev) => [...prev, { kind: "stderr", text: String(e.message || e) }]);
          setStatus("failed");
        }
      }
    })();
    return () => ctrl.abort();
  }, []);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [events]);

  useEffect(() => {
    if (status === "done" || status === "failed" || status === "aborted") {
      onDone();
    }
  }, [status, onDone]);

  async function abort() {
    await mutationFetch("/api/ingest/abort").catch(() => {});
    abortRef.current?.abort();
    setStatus("aborted");
  }

  const finished = status !== "running" && status !== "starting";

  return (
    <div className="overlay">
      <div className="modal ingest-panel">
        <div className="modal-header">
          <h2>
            Ingest · {files.length} file{files.length === 1 ? "" : "s"}
            <span className={`ingest-status ingest-status-${status}`}>{status}</span>
          </h2>
          <div className="modal-header-actions">
            {!finished && (
              <button className="modal-primary ingest-abort" onClick={abort}>
                Abort
              </button>
            )}
            {finished && (
              <button className="modal-primary" onClick={onClose}>
                Close
              </button>
            )}
          </div>
        </div>
        <div className="ingest-log" ref={logRef}>
          {events.length === 0 && status === "starting" && (
            <div className="ingest-empty">Starting claude CLI…</div>
          )}
          {events.map((ev, i) => (
            <div key={i} className={`ingest-event ingest-event-${ev.kind}`}>
              {ev.kind === "tool" && <span className="ingest-tool-tag">{ev.tool}</span>}
              <span className="ingest-event-text">{ev.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [pages, setPages] = useState<PageSummary[]>([]);
  const [pins,setPins]=useStored<string[]>("brain-wiki-pins",[]);
  const [recents,setRecents]=useStored<string[]>("brain-wiki-recents",[]);
  const [captureStatus,setCaptureStatus]=useState<CaptureStatus|null>(null);
  const [appError,setAppError]=useState("");
  const [route, setRoute] = useState<Route>(parseRoute());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [pending, setPending] = useState<PendingSource[]>([]);
  const [showPending, setShowPending] = useState(false);
  const [ingestFiles, setIngestFiles] = useState<string[] | null>(null);

  function startIngestForFiles(files: string[]) {
    setShowPending(false);
    setIngestFiles(files);
  }

  async function refreshAll() {
    resetCaches();
    const [p, m, capture] = await Promise.all([fetchPages(), fetchMeta(), fetch("/data/capture.json").then(r=>r.json())]);
    const pend = m?.canEditSources === false ? [] : await fetchPendingIngest();
    setCaptureStatus(capture);setAppError("");
    setPages(p);
    setMeta(m);
    setPending(pend);
  }

  useEffect(() => {
    refreshAll().catch(e=>setAppError(e.message));
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

  const navigateHref=useCallback((href:string)=>navigate(parseRoute(href)),[navigate]);
  useEffect(()=>{
    const click=(e:MouseEvent)=>{
      if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
      const a=(e.target as HTMLElement).closest('a[href]') as HTMLAnchorElement|null;
      if(!a||a.target||a.hasAttribute('download'))return;
      const url=new URL(a.href,location.origin);
      if(url.origin!==location.origin||!/^\/(?:$|page\/|bookmarks(?:\/|$)|sources$|source\/|graph$|tags(?:\/|$)|timeline$|lint$|random$)/.test(url.pathname))return;
      e.preventDefault();navigateHref(url.href);
    };
    document.addEventListener('click',click);return()=>document.removeEventListener('click',click);
  },[navigateHref]);
  useEffect(()=>{if(route.view==='page'&&pages.some(p=>p.slug===route.slug))setRecents(old=>[route.slug,...old.filter(s=>s!==route.slug)].slice(0,20));},[route.view,route.view==='page'?route.slug:'',pages.length]);
  useEffect(()=>{setSidebarOpen(false);document.querySelector('.main')?.scrollTo(0,0);},[route.view]);

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
        <button className="sidebar-toggle" onClick={() => setSidebarOpen((o) => !o)} aria-label="Toggle sidebar" aria-expanded={sidebarOpen} aria-controls="page-navigation">
          <MenuIcon />
        </button>
        <a className="topbar-logo" href="/">
          <span className="brand-mark">{typeGlyph("overview")}</span><span className="brand-name">Brain <span>Wiki</span></span>
        </a>
        <Search version={meta?.builtAt} onNavigate={navigateHref} />
        <nav className="nav-tabs" aria-label="Main navigation">{NAV.map(n=><a key={n.href} href={n.href} className={`nav-tab ${routeToPath(route).split('?')[0].split('#')[0]===n.href?'active':''}`}>{n.label}</a>)}</nav>
        <button
          className="icon-btn"
          onClick={() => navigate({ view: "random" })}
          title="Open a random page (g r)"
          aria-label="Random page"
        >
          <DiceIcon />
        </button>
        {meta && meta.canEditSources !== false && <SyncButton
          pending={pending}
          onSynced={refreshAll}
          onShowPending={() => setShowPending(true)}
        />}
      </div>
      {showPending && (
        <PendingModal
          items={pending}
          onClose={() => setShowPending(false)}
          onIngest={startIngestForFiles}
        />
      )}
      {ingestFiles && (
        <IngestPanel
          files={ingestFiles}
          onClose={() => {
            setIngestFiles(null);
            refreshAll();
          }}
          onDone={refreshAll}
        />
      )}
      {appError&&<div className="reader-note" role="alert">{appError} <button onClick={()=>refreshAll().catch(e=>setAppError(e.message))}>Retry</button></div>}
      <div className="layout">
        <Sidebar
          pages={pages}
          current={currentSlug}
          pins={pins} recents={recents}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        {route.view === "home" && <Home pages={pages} recents={recents} />}
        {route.view === "bookmarks" && <BookmarksView key={route.id||"all"} id={route.id}/>}
        {route.view === "sources" && <SourcesView status={captureStatus}/>}
        {route.view === "source" && <SourceView key={route.id} id={route.id}/>}
        {route.view === "page" && (
          <PageView
            slug={route.slug} anchor={route.anchor} pinned={pins.includes(route.slug)} onPin={()=>setPins(old=>old.includes(route.slug)?old.filter(s=>s!==route.slug):[...old,route.slug])}
            onNavigate={goToPage}
            onGraph={(slug) => navigate({ view: "graph", focus: slug })}
            onTag={(tag) => navigate({ view: "tag", tag })}
          />
        )}
        {route.view === "graph" && <GraphView onSelect={goToPage} focusSlug={route.focus || recents[0] || "wiki-overview"} />}
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
              <a href="/sources">{captureStatus?.lastCapturedAt?`Captured ${formatRelativeDate(captureStatus.lastCapturedAt)}`:"Source history"}</a>
              {captureStatus&&<><span className="footer-sep">·</span><a href="/bookmarks">{captureStatus.bookmarkCount} bookmarks</a></>}
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
