import { loadRawSources, buildBookmarks, resolveSource, digest, loadAssetFiles } from './sources';
import { markdownToHtml, injectHeadingIds, extractHeadings, readIngestManifest, buildFileAliases, type WikiPage } from './lib';
import { readCaptureStatus } from './sync';
import type { SearchDocument } from './search';
const renderedSources = new Map<string,{html:string;headings:ReturnType<typeof extractHeadings>}>();

export async function loadCatalog(pages: Map<string, WikiPage>) {
  const raw = await loadRawSources();
  const assetFiles=await loadAssetFiles(), assets=new Set(assetFiles.keys()), aliases=buildFileAliases(pages);
  const context=digest(JSON.stringify([[...pages.values()].map(p=>[p.slug,p.title,p.path]),[...assets].sort()]));
  const bookmarks = buildBookmarks(raw).map(b => ({ ...b, html: markdownToHtml(b.markdown, assets, pages, aliases) }));
  const sources = raw.map(s => {
    const {content, ...summary} = s;
    const key=s.sha256+context;
    let rendered=renderedSources.get(key);
    if(!rendered){const headings=extractHeadings(content);rendered={html:injectHeadingIds(markdownToHtml(content,assets,pages,aliases),headings),headings};renderedSources.set(key,rendered);}
    return { ...summary, ...rendered,
      versions: raw.filter(v => v.logicalPath === s.logicalPath).map(v => ({id:v.id, path:v.path, capturedAt:v.capturedAt})).sort((a,b) => (b.capturedAt || '').localeCompare(a.capturedAt || '')),
      referencedBy: [...pages.values()].filter(p => p.sources.some(ref => resolveSource(ref, raw)?.id === s.id)).map(p => ({slug:p.slug, title:p.title})) };
  });
  const search: SearchDocument[] = bookmarks.map(b => ({ slug:b.id, title:b.title, type:'bookmark', domain:b.domain,
    category:b.category, tags:[b.category], content:`${b.annotation} ${b.url}`, href:`/bookmarks/${b.id}`, identifiers:b.identifiers }));
  const capture = await readCaptureStatus();
  const manifest = await readIngestManifest();
  const ingested = Math.max(0, ...Object.values(manifest).map(m=>m.ingestedAt));
  return { raw, sources, bookmarks, search, assetFiles, status:{ lastCapturedAt:capture.lastCapturedAt, lastIngestedAt:ingested ? new Date(ingested).toISOString() : null, sourceCount:sources.length, bookmarkCount:bookmarks.length } };
}
