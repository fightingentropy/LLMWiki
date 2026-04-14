import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// --- Color helpers (muted, monochrome-leaning) ---
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

// --- Icons ---
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="7" r="4.5" />
      <line x1="10.5" y1="10.5" x2="14" y2="14" />
    </svg>
  );
}

// --- API ---
async function fetchPages() {
  const res = await fetch("/data/pages.json");
  return res.json();
}

async function fetchPage(slug: string) {
  const res = await fetch(`/data/pages/${slug}.json`);
  if (!res.ok) return null;
  return res.json();
}

async function fetchGraph() {
  const res = await fetch("/data/graph.json");
  return res.json();
}

// --- Search via server API ---
async function fetchSearch(q: string) {
  const res = await fetch(`/data/search.json`);
  const pages: any[] = await res.json();
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
      const snippet = si !== -1
        ? (start > 0 ? "..." : "") + p.content.slice(start, end).replace(/\n/g, " ") + (end < p.content.length ? "..." : "")
        : p.content.slice(0, 120).replace(/\n/g, " ") + "...";
      return { slug: p.slug, title: p.title, type: p.type, domain: p.domain, category: p.category, snippet, score };
    })
    .filter(Boolean)
    .sort((a: any, b: any) => b.score - a.score)
    .slice(0, 10);
}

// --- URL Routing ---
function parseRoute(): { view: string; slug: string | null } {
  const path = window.location.pathname;
  if (path.startsWith("/page/")) {
    return { view: "page", slug: path.slice("/page/".length) };
  }
  if (path === "/graph") {
    return { view: "graph", slug: null };
  }
  return { view: "home", slug: null };
}

function pushRoute(view: string, slug?: string | null) {
  let path = "/";
  if (view === "page" && slug) path = `/page/${slug}`;
  else if (view === "graph") path = "/graph";
  window.history.pushState({ view, slug }, "", path);
}

// --- Search Component ---
function Search({ onSelect }: { onSelect: (slug: string) => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const t = setTimeout(async () => {
      const r = await fetchSearch(query);
      setResults(r.slice(0, 8));
      setOpen(true);
    }, 200);
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
        ref.current?.querySelector("input")?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  function highlightSnippet(snippet: string, q: string) {
    if (!q) return snippet;
    const regex = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    return snippet.replace(regex, "<mark>$1</mark>");
  }

  return (
    <div className="search-wrap" ref={ref}>
      <SearchIcon />
      <input placeholder="Search wiki... (⌘K)" value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => results.length && setOpen(true)} />
      {open && results.length > 0 && (
        <div className="search-results">
          {results.map((r) => (
            <div
              key={r.slug}
              className="search-result"
              onClick={() => {
                onSelect(r.slug);
                setOpen(false);
                setQuery("");
              }}
            >
              <div className="search-result-title">{r.title}</div>
              <div className="search-result-meta">
                <span className={badgeClass(r.type)}>{r.type}</span> {r.domain}
              </div>
              <div className="search-result-snippet" dangerouslySetInnerHTML={{ __html: highlightSnippet(r.snippet, query) }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Sidebar ---
function Sidebar({ pages, current, onSelect }: { pages: any[]; current: string | null; onSelect: (slug: string) => void }) {
  const grouped = useMemo(() => {
    const g: Record<string, any[]> = { sources: [], entities: [], topics: [] };
    pages.forEach((p) => {
      if (g[p.category]) g[p.category].push(p);
      else if (p.category === "root" && p.type !== "index" && p.type !== "log") g.topics.push(p);
    });
    Object.values(g).forEach((arr) => arr.sort((a, b) => a.title.localeCompare(b.title)));
    return g;
  }, [pages]);

  return (
    <div className="sidebar">
      {Object.entries(grouped).map(
        ([cat, items]) =>
          items.length > 0 && (
            <div key={cat} className="sidebar-section">
              <div className="sidebar-section-title">
                {cat} ({items.length})
              </div>
              {items.map((p) => (
                <div key={p.slug} className={`sidebar-item ${current === p.slug ? "active" : ""}`} onClick={() => onSelect(p.slug)}>
                  <div className="sidebar-dot" style={{ background: TYPE_COLORS[p.type] || TYPE_COLORS.unknown }} />
                  {p.title}
                </div>
              ))}
            </div>
          )
      )}
    </div>
  );
}

// --- Page View ---
function PageView({ slug, onNavigate }: { slug: string; onNavigate: (slug: string) => void }) {
  const [page, setPage] = useState<any>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchPage(slug).then(setPage);
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

  if (!page) return <div className="main"><div className="loading-state">Loading</div></div>;

  return (
    <div className="main">
      <div className="page-header">
        <div className="page-title">{page.title}</div>
        <div className="page-meta">
          <span className={badgeClass(page.type)}>{page.type}</span>
          {page.domain && <span className="page-domain">{page.domain}</span>}
          {page.updated && <span className="page-date">Updated {page.updated}</span>}
        </div>
        {page.tags?.length > 0 && (
          <div className="tag-list">
            {page.tags.map((t: string) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="page-content" ref={contentRef} dangerouslySetInnerHTML={{ __html: page.html }} />
      {page.backlinks?.length > 0 && (
        <div className="backlinks">
          <div className="backlinks-title">Backlinks</div>
          <div className="backlinks-list">
            {page.backlinks.map((b: { slug: string; title: string }) => (
              <span key={b.slug} className="backlink-item" onClick={() => onNavigate(b.slug)}>
                {b.title}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// --- Home ---
function Home({ pages, onSelect }: { pages: any[]; onSelect: (slug: string) => void }) {
  const stats = useMemo(
    () => ({
      total: pages.length,
      sources: pages.filter((p) => p.type === "source").length,
      entities: pages.filter((p) => p.type === "entity").length,
      topics: pages.filter((p) => p.type === "topic").length,
    }),
    [pages]
  );

  const domains = useMemo(() => {
    const d: Record<string, any[]> = {};
    pages.forEach((p) => {
      const dom = p.domain?.split(",")[0]?.trim() || "other";
      if (!d[dom]) d[dom] = [];
      d[dom].push(p);
    });
    return d;
  }, [pages]);

  return (
    <div className="main">
      <div className="home-hero">
        <h1>Brain Wiki</h1>
        <p>Personal knowledge base — {stats.total} pages across {Object.keys(domains).length} domains</p>
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
      </div>

      {Object.entries(domains)
        .sort()
        .map(([domain, domPages]) => (
          <div key={domain} className="domain-section">
            <div className="domain-title">
              {domain.charAt(0).toUpperCase() + domain.slice(1)}
              <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{domPages.length}</span>
            </div>
            <div className="home-grid">
              {domPages
                .sort((a: any, b: any) => a.title.localeCompare(b.title))
                .map((p: any) => (
                  <div key={p.slug} className="home-card" onClick={() => onSelect(p.slug)}>
                    <div className="home-card-title">{p.title}</div>
                    <div className="home-card-meta">
                      <span>{p.type}</span>
                      {p.linkCount > 0 && <span> · {p.linkCount} links</span>}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}

// --- Graph View ---
function GraphView({ onSelect }: { onSelect: (slug: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [graphData, setGraphData] = useState<any>(null);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, text: "" });
  const [filter, setFilter] = useState("all");
  const simRef = useRef<any>(null);
  const hoveredRef = useRef<any>(null);
  const dragRef = useRef<any>(null);
  const transformRef = useRef({ x: 0, y: 0, k: 1 });

  useEffect(() => {
    fetchGraph().then(setGraphData);
  }, []);

  useEffect(() => {
    if (!graphData || !canvasRef.current || !containerRef.current) return;

    // Dynamically load d3 if not present
    const d3 = (window as any).d3;
    if (!d3) return;

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

    let nodes: any[], edges: any[];
    if (filter === "all") {
      nodes = graphData.nodes.map((n: any) => ({ ...n, x: W / 2 + (Math.random() - 0.5) * 400, y: H / 2 + (Math.random() - 0.5) * 400 }));
      edges = [...graphData.edges];
    } else {
      const keep = new Set(graphData.nodes.filter((n: any) => n.category === filter || n.type === filter).map((n: any) => n.id));
      graphData.edges.forEach((e: any) => {
        if (keep.has(e.source) || keep.has(e.target)) {
          keep.add(e.source);
          keep.add(e.target);
        }
      });
      nodes = graphData.nodes.filter((n: any) => keep.has(n.id)).map((n: any) => ({ ...n, x: W / 2 + (Math.random() - 0.5) * 400, y: H / 2 + (Math.random() - 0.5) * 400 }));
      edges = graphData.edges.filter((e: any) => keep.has(e.source) && keep.has(e.target));
    }

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
      const { x: tx, y: ty, k } = transformRef.current;
      const rect = container.getBoundingClientRect();
      const w = rect.width;

      ctx.resetTransform();
      const dpr2 = window.devicePixelRatio || 1;
      ctx.scale(dpr2, dpr2);
      ctx.clearRect(0, 0, w, rect.height);
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

      if (hoveredRef.current) {
        const hid = hoveredRef.current.id;
        ctx.lineWidth = 1.5 / k;
        ctx.strokeStyle = "rgba(250, 250, 250, 0.2)";
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

        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#fff" : color;
        ctx.fill();

        if (isHovered) {
          ctx.strokeStyle = color;
          ctx.lineWidth = 2 / k;
          ctx.stroke();
        }

        if (isHovered || (k > 0.6 && n.linkCount > 5)) {
          ctx.font = `400 ${Math.max(10, 11 / k)}px Inter, system-ui, sans-serif`;
          ctx.fillStyle = isHovered ? "#fafafa" : "#666666";
          ctx.textAlign = "center";
          ctx.fillText(n.label, n.x, n.y + r + 12 / k);
        }
      });

      ctx.restore();
    }

    sim.on("tick", draw);

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
        setTooltip({ show: true, x: mx + 12, y: my - 8, text: `${node.label} (${node.type})` });
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
  }, [graphData, filter]);

  if (!graphData) return <div className="main"><div className="loading-state">Loading graph</div></div>;

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
          <div style={{ marginTop: 10, color: "var(--text-muted)", fontSize: 11, lineHeight: 1.5 }}>Double-click to open<br/>Scroll to zoom · Drag to pan</div>
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

// --- App ---
function App() {
  const [pages, setPages] = useState<any[]>([]);
  const [view, setView] = useState("home");
  const [currentSlug, setCurrentSlug] = useState<string | null>(null);

  // Initialize from URL
  useEffect(() => {
    const route = parseRoute();
    setView(route.view);
    setCurrentSlug(route.slug);
    fetchPages().then(setPages);
  }, []);

  // Handle browser back/forward
  useEffect(() => {
    const handler = () => {
      const route = parseRoute();
      setView(route.view);
      setCurrentSlug(route.slug);
    };
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = useCallback((slug: string) => {
    setCurrentSlug(slug);
    setView("page");
    pushRoute("page", slug);
  }, []);

  const goHome = useCallback(() => {
    setView("home");
    setCurrentSlug(null);
    pushRoute("home");
  }, []);

  const goGraph = useCallback(() => {
    setView("graph");
    pushRoute("graph");
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="topbar-logo" onClick={goHome}>
          Brain <span>Wiki</span>
        </div>
        <Search onSelect={navigate} />
        <div className="nav-tabs">
          <button className={`nav-tab ${view === "home" ? "active" : ""}`} onClick={goHome}>
            Home
          </button>
          <button className={`nav-tab ${view === "graph" ? "active" : ""}`} onClick={goGraph}>
            Graph
          </button>
        </div>
      </div>
      <div className="layout">
        <Sidebar pages={pages} current={currentSlug} onSelect={navigate} />
        {view === "home" && <Home pages={pages} onSelect={navigate} />}
        {view === "page" && currentSlug && <PageView slug={currentSlug} onNavigate={navigate} />}
        {view === "graph" && <GraphView onSelect={navigate} />}
      </div>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
