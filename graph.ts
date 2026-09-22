export function graphNeighborhood<T extends {id:string;type:string;domain?:string}>(
  nodes:T[], edges:{source:string;target:string}[], options:{focus?:string;hops:number;domain?:string;includeCatalog?:boolean}
) {
  const eligible = nodes.filter(n => (options.includeCatalog || !['index','log'].includes(n.type)) &&
    (!options.domain || options.domain === 'all' || n.domain === options.domain || n.id === options.focus));
  const allowed = new Set(eligible.map(n=>n.id));
  const links = edges.filter(e=>allowed.has(e.source)&&allowed.has(e.target));
  if (!options.focus || !allowed.has(options.focus) || !Number.isFinite(options.hops)) return {nodes:eligible,edges:links};
  const keep = new Set([options.focus]);
  for (let hop=0;hop<options.hops;hop++) {
    const frontier = new Set(keep);
    for (const e of links) {
      if (frontier.has(e.source)) keep.add(e.target);
      if (frontier.has(e.target)) keep.add(e.source);
    }
  }
  return {nodes:eligible.filter(n=>keep.has(n.id)),edges:links.filter(e=>keep.has(e.source)&&keep.has(e.target))};
}
