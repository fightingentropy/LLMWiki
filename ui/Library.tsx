import React, {useEffect, useMemo, useState} from 'react';
import {searchDocuments, type SearchDocument} from '../search';

type Bookmark = {id:string;title:string;url:string;annotation:string;html:string;category:string;domain:string;sourceId:string;sourcePath:string;capturedAt:string|null;identifiers:string[]};
export type CaptureStatus = {lastCapturedAt:string|null;lastIngestedAt:string|null;sourceCount:number;bookmarkCount:number};
export function useJson<T>(url:string) {
 const [data,setData]=useState<T|null>(null),[error,setError]=useState(''),[attempt,setAttempt]=useState(0);
 useEffect(()=>{const controller=new AbortController();setData(null);setError('');
 fetch(url,{signal:controller.signal}).then(r=>{if(!r.ok)throw Error(r.status===404?'This item could not be found.':'Could not load this item.');return r.json();}).then(setData).catch(e=>{if(e.name!=='AbortError')setError(e.message);});
 return ()=>controller.abort();},[url,attempt]);
 return {data,error,retry:()=>setAttempt(n=>n+1)};
}
export function LoadState({error,retry}:{error:string;retry:()=>void}) {return <div className="main"><div className="empty" role={error?'alert':'status'}>{error||'Loading…'}{error&&<p><button onClick={retry}>Try again</button> · <a href="/">Home</a></p>}</div></div>}
const date=(s:string|null)=>s?new Date(s).toLocaleString(undefined,{dateStyle:'medium',timeStyle:'short'}):'Not recorded';

export function BookmarksView({id}:{id?:string}) {
 const {data:items,error,retry}=useJson<Bookmark[]>('/data/bookmarks.json');
 const [query,setQuery]=useState(''),[category,setCategory]=useState('all'),[limit,setLimit]=useState(40);
 const docs=useMemo<SearchDocument[]>(()=> (items||[]).map(b=>({slug:b.id,title:b.title,type:'bookmark',category:b.category,domain:b.domain,tags:[b.category],content:b.annotation+' '+b.url,href:'/bookmarks/'+b.id,identifiers:b.identifiers})),[items]);
 const filtered=useMemo(()=>{
 const candidates=(items||[]).filter(b=>category==='all'||b.category===category);
 if(!query.trim())return candidates;
 const eligible=new Set(candidates.map(b=>b.id));
 const hits=searchDocuments(docs.filter(d=>eligible.has(d.slug)),query,{limit:items?.length||1000});
 const rank=new Map(hits.map((h,i)=>[h.slug,i]));return candidates.filter(b=>rank.has(b.id)).sort((a,b)=>rank.get(a.id)!-rank.get(b.id)!);
 },[items,docs,query,category]);
 useEffect(()=>setLimit(40),[query,category]);
 if(!items)return <LoadState error={error} retry={retry}/>;
 const selected=id?items.find(b=>b.id===id):null;
 if(id&&!selected)return <LoadState error="This bookmark could not be found." retry={retry}/>;
 if(selected)return <div className="main"><article className="library-detail">
  <div className="breadcrumb"><a href="/bookmarks">Bookmarks</a><span>/</span><span>{selected.category}</span></div>
  <h1>{selected.title}</h1><div className="page-meta"><span className="page-badge">Saved bookmark</span><span>{selected.domain}</span></div>
  <div className="page-content" dangerouslySetInnerHTML={{__html:selected.html}}/>
  <div className="reader-note">Saved annotations retain their original context and caveats. A saved item is not a verified recommendation.</div>
  <div className="source-actions"><a href={selected.url} target="_blank" rel="noopener noreferrer">Open original link ↗</a><a href={'/source/'+selected.sourceId}>View captured source</a></div>
  <p className="page-date">Source captured {date(selected.capturedAt)}</p>
 </article></div>;
 return <div className="main"><div className="home-hero"><h1>Bookmarks</h1><p>{items.length.toLocaleString()} saved items, with original links and annotations.</p></div>
  <div className="browse-controls"><input aria-label="Search bookmarks" placeholder="Search titles, notes or post IDs…" value={query} onChange={e=>setQuery(e.target.value)}/>
  <select aria-label="Bookmark category" value={category} onChange={e=>setCategory(e.target.value)}><option value="all">All categories</option>{[...new Set(items.map(b=>b.category))].sort().map(c=><option key={c}>{c}</option>)}</select></div>
  <p className="result-count" role="status">{filtered.length} {filtered.length===1?'bookmark':'bookmarks'}{query&&` matching “${query}”`}</p>
  {!filtered.length&&<div className="empty">No matching bookmarks. Try a shorter phrase or another category.</div>}
  <div className="bookmark-list">{filtered.slice(0,limit).map(b=><article key={b.id} className="bookmark-row"><div className="page-date">{b.category}</div><h2><a href={'/bookmarks/'+b.id}>{b.title}</a></h2><p>{b.annotation}</p><div className="source-actions"><a href={b.url} target="_blank" rel="noopener noreferrer">Original ↗</a><a href={'/source/'+b.sourceId}>Source</a></div></article>)}</div>
  {filtered.length>limit&&<button className="page-action load-more" onClick={()=>setLimit(n=>n+40)}>Show 40 more · {filtered.length-limit} remaining</button>}
 </div>;
}

type Source = {id:string;title:string;path:string;logicalPath:string;capturedAt:string|null;html:string;sha256:string;versions:{id:string;path:string;capturedAt:string|null}[];referencedBy:{slug:string;title:string}[]};
export function SourceView({id}:{id:string}) {
 const {data:source,error,retry}=useJson<Source>('/data/sources/'+encodeURIComponent(id)+'.json');
 if(!source)return <LoadState error={error} retry={retry}/>;
 return <div className="main"><article className="library-detail"><div className="breadcrumb"><a href="/sources">Sources</a><span>/</span><span>{source.title}</span></div>
  <h1>{source.title}</h1><p className="reader-note">Original captured note. Its wording and claims are preserved as source material.</p>
  <div className="page-meta"><span className="page-badge">Original source</span><span>Captured {date(source.capturedAt)}</span></div>
  {source.versions.length>1&&<div className="source-actions">{source.versions.map(v=><a key={v.id} href={'/source/'+v.id} aria-current={v.id===id?'page':undefined}>{v.capturedAt?date(v.capturedAt):'Earlier capture'}{v.id===id?' · viewing':''}</a>)}</div>}
  {!!source.referencedBy.length&&<div className="source-actions"><span>Used by</span>{source.referencedBy.map(p=><a key={p.slug} href={'/page/'+p.slug}>{p.title}</a>)}</div>}
  <div className="page-content original-source" dangerouslySetInnerHTML={{__html:source.html.replace(/^\s*<h1(?: [^>]*)?>[\s\S]*?<\/h1>/i,'')}}/>
  <details className="source-details"><summary>Source record</summary><p>{source.path}</p><code>SHA-256: {source.sha256}</code></details>
 </article></div>;
}
export function SourcesView({status}:{status:CaptureStatus|null}) {
 const {data:sources,error,retry}=useJson<Source[]>('/data/sources.json'); const [query,setQuery]=useState(''),[history,setHistory]=useState(false);
 const latest=useMemo(()=>{const m=new Map<string,Source>();for(const s of sources||[]){const old=m.get(s.logicalPath);if(!old||(s.capturedAt||'')>(old.capturedAt||''))m.set(s.logicalPath,s);}return [...m.values()];},[sources]);
 if(!sources)return <LoadState error={error} retry={retry}/>;
 const list=(history?sources:latest).filter(s=>`${s.title} ${s.logicalPath}`.toLowerCase().includes(query.toLowerCase()));
 return <div className="main"><div className="home-hero"><h1>Sources</h1><p>Captured originals and their preserved revisions.</p></div>
  {status&&<div className="capture-status"><span>Last capture: {date(status.lastCapturedAt)}</span><span>Last synthesis: {date(status.lastIngestedAt)}</span></div>}
  <div className="browse-controls"><input aria-label="Filter sources" placeholder="Find a source…" value={query} onChange={e=>setQuery(e.target.value)}/><label><input type="checkbox" checked={history} onChange={e=>setHistory(e.target.checked)}/> Include earlier versions</label></div>
  <p className="result-count">{list.length} source records</p><div className="home-list">{list.map(s=><a className="home-list-item" key={s.id} href={'/source/'+s.id}><span className="home-list-title">{s.title}<small className="source-path">{s.logicalPath}</small></span><span className="home-list-date">{s.capturedAt?new Date(s.capturedAt).toLocaleDateString():'Earlier capture'}</span></a>)}</div>
  {!list.length&&<p className="empty">No matching sources.</p>}
 </div>;
}
