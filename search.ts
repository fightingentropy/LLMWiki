import Fuse from "fuse.js";
export interface SearchDocument {
  slug: string; title: string; type: string; domain: string; category: string;
  tags: string[]; content: string; href: string; identifiers?: string[];
  sections?: { id: string; title: string; content: string }[];
}
export interface SearchHit extends SearchDocument { snippet: string; score: number; anchor?: string; }
export function plainText(markdown: string): string {
  return markdown.replace(/^---\n[\s\S]*?\n---\n/, "")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, name, alias) => alias || name)
    .replace(/\[([^\]]+)\]\((?:[^()]|\([^)]*\))*\)/g, "$1")
    .replace(/<[^>]*>/g, " ").replace(/^[\s#>*-]+/gm, "")
    .replace(/[`*_~]/g, "").replace(/\s+/g, " ").trim();
}
const normalize = (s: string) => s.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
export function searchDocuments(docs: SearchDocument[], query: string, options: { kind?: string; domain?: string; limit?: number } = {}): SearchHit[] {
  const q = normalize(query.trim());
  if (!q) return [];
  const words = q.split(/\s+/).filter(Boolean);
  const candidates = docs.filter(d => (!options.kind || options.kind === "all" || (options.kind === "bookmark" ? d.type === "bookmark" : d.type !== "bookmark")) && (!options.domain || options.domain === "all" || d.domain === options.domain));
  const scored = candidates.map(doc => {
    const title = normalize(doc.title), content = normalize(doc.content), tags = normalize(doc.tags.join(" "));
    let score = 0;
    if (doc.identifiers?.some(id => id === q) || normalize(doc.href) === q) score = 120;
    else if (title === q) score = 100;
    else if (title.includes(q)) score = 85;
    else if (words.every(w => title.includes(w))) score = 75;
    else if (content.includes(q)) score = 55;
    else if (words.every(w => `${title} ${content} ${tags}`.includes(w))) score = 35;
    return { doc, score };
  }).filter(r => r.score > 0);
  if (!scored.length && q.length > 3) {
    const fuse = new Fuse(candidates, { keys: ["title"], threshold: 0.23, ignoreLocation: true, includeScore: true });
    for (const r of fuse.search(query)) scored.push({ doc: r.item, score: 15 * (1 - (r.score || 0)) });
  }
  return scored.sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title))
    .slice(0, options.limit || 30).map(({ doc, score }) => {
      const section = doc.sections?.find(s => normalize(s.content).includes(q)) || doc.sections?.find(s => words.every(w => normalize(s.content).includes(w)));
      const text = section?.content || doc.content, idx = normalize(text).indexOf(q), start = Math.max(0, idx - 65);
      const snippet = (start ? "…" : "") + text.slice(start, start + 190) + (text.length > start + 190 ? "…" : "");
      return { ...doc, score, snippet, anchor: section?.id, href: doc.href + (section ? `#${section.id}` : "") };
    });
}
export const TAG_ALIASES: Record<string, string> = { twitter: "x", "x-twitter": "x", "ai-agents": "agents", "artificial-intelligence": "ai", "risk-management": "risk", "uk-regs": "uk-regulations", "electrical-standards": "standards", self_improvement: "self-improvement" };
export const canonicalTag = (tag: string) => TAG_ALIASES[tag.toLowerCase()] || tag.toLowerCase();
