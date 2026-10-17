---
title: Design Resources
type: source
domain: dev
summary: "Design link bank: tools, component kits, animation, type, colour, 3D and shader experiments, and websites worth studying, each described in a line."
tags: [design, dev, bookmarks]
related: [Design & Aesthetics, Bookmarks - Design & Frontend, Bookmarks - Media & Inspiration, Dev Resources, Developer Resources]
sources:
  - misc/Design.md
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-17'
review_status: archive
---

# Design Resources

Design tools, component libraries, animation and type resources, colour tools, 3D and WebGL experiments, and websites kept as visual references. The wider design bookmark bank is [[Bookmarks - Design & Frontend]]; the ideas behind it are on [[Design & Aesthetics]].

Most links were saved with a short label such as "hero design" or "infinite motion"; each line says what the link is and why it was kept.

## Design tools and AI design

- [Framer](https://www.framer.com/) — Visual website builder and design tool.
- [Figma](https://www.figma.com/) — Collaborative interface design tool.
- [Figma Capture bookmarklet](https://mcp.figma.com/mcp/html-to-design/capture.js) — Script that turns a live HTML page into a Figma design; save the code below as a bookmark.
- [Stitch](https://stitch.withgoogle.com/) — Google's AI interface design tool ("Design with Google").
- [Variant](https://variant.com/) — "Endless designs for your ideas, just scroll."
- [Paper snapshot](https://x.com/stephenhaney/status/2036485780961669214) — Post on Paper, the design tool. _(@stephenhaney)_
- [AirOS](https://x.com/slavakornilov/status/2028885781448671325) — Post on AirOS, an OS design system. _(@slavakornilov)_
- [Peel](https://peel.studio/) — Extracts a design from an image.
- [Impeccable](https://impeccable.style/) — Style prompts.
- [Liquid Glass Editor](https://liquidglasseditor.vercel.app/) — Editor for liquid glass effects.
- [Hotkeys.design](https://hotkeys.design/) — Reference of design-tool keyboard shortcuts.

Also listed here: [Toolfolio](https://toolfolio.io/), a directory of design tools, and [Defuddle](https://defuddle.md/), which turns a page into Markdown; both are described on [[Dev Resources]].

The Figma Capture bookmarklet:

```
javascript:(function(){var s=document.createElement('script');s.src='https://mcp.figma.com/mcp/html-to-design/capture.js';document.head.appendChild(s);setTimeout(function(){window.location.hash='figmacapture&figmadelay=1000';var s2=document.createElement('script');s2.src='https://mcp.figma.com/mcp/html-to-design/capture.js';document.head.appendChild(s2);},500);})();
```

## Component libraries and UI kits

Several of these build on shadcn/ui. [Base UI](https://base-ui.com/) and [SVGL](https://svgl.app/) are also listed; they are described on [[Bookmarks - Developer Tools]] and [[Dev Resources]].

- [ReUI](https://reui.io/) — Ready-made patterns built on shadcn/ui.
- [interfacesds.com](https://interfacesds.com/) — Refined shadcn components.
- [Shadcn Blocks](https://www.shadcnblocks.com/blocks) — Prebuilt page blocks for shadcn/ui.
- [Spell.sh](https://spell.sh/) — UI components.
- [Detail.design](https://detail.design/) — Detailed component references.
- [Interface Craft](https://www.interfacecraft.dev/) — Resource on interface craft and UI detail.
- [OpenUI](https://github.com/thesysdev/openui) — OpenUI repository from Thesys on GitHub.
- [cmdk](https://github.com/dip/cmdk) — Command-menu component for React.
- [Lucide](https://lucide.dev/) — Open-source icon set.
- [mapcn](https://www.mapcn.dev/) — Map components.
- [SVG loaders](https://magecdn.com/tools/svg-loaders) — Collection of SVG loading indicators on MageCDN.
- [Nexvyn UI](https://ui.nexvyn.dev/components) — Component collection from Nexvyn UI.
- [Moumen Lab](https://lab.moumen.dev/components) — Component experiments from Moumen's lab.
- [Liquid UI](https://www.arlan.me/vault/liquid-ui) — Liquid UI piece in Arlan's vault.

## Interaction and micro-animation references

Small interactions to copy or learn from.

- [Liquid loading indicator](https://x.com/wabi/status/2033617109184614676) — Liquid-style loading indicator. _(@wabi)_
- [Infinite motion](https://x.com/uixamjad/status/2034571576235208709) — Saved as an "infinite motion" reference. _(@uixamjad)_
- [Navbar corner design](https://x.com/diegohaz/status/2016364636875186658) — A navbar corner treatment. _(@diegohaz)_
- [Activities component](https://x.com/zzzzshawn/status/2035631893866295523) — An activities component. _(@zzzzshawn)_
- [Folder interaction](https://x.com/zzzzshawn/status/2035261382481076662) — A folder open interaction. _(@zzzzshawn)_
- [Embedded preview](https://x.com/NCResq/status/2038214423756849269) — An embedded preview pattern. _(@NCResq)_
- [Time card opening](https://codepen.io/dilums/full/NWodZMd) — CodePen demo of a time card opening animation.
- [Small card micro-animation](https://sorenblank.com/snippets/small-card-micro-animation) — Card micro-animation snippet from Soren Blank.
- [Soren Blank](https://sorenblank.com/) — Site with component snippets.
- [Brian Harms](https://brianharms.design/) — Personal site, saved for its hover animation.
- [Tempo hackathon](https://hackathon.tempo.xyz/) — Saved for its cursor-driven background effect.
- [Card swipe](https://lab.tobi.computer/card-swipe) — Card-swipe experiment from lab.tobi.computer.
- [Card expand](https://rselmi.com/lab/card-expand) — Romain Selmi's expanding-card experiment.
- [UI experiment 3](https://lab01.dev/#ui-experiment-3) — UI experiment from lab01.dev.
- [Introducing Loops](https://linear.app/now/introducing-loops) — Linear's launch post for Loops.

## Animation libraries and learning

Also listed: [GSAP](https://gsap.com/) (described on [[Dev Resources]]) and [Animations.dev](https://animations.dev/).

- [Made With GSAP](https://madewithgsap.com/) — Showcase of effects built with GSAP.
- [Motion](https://motion.dev/) — Production-grade animation library.
- [Transitions.dev](https://transitions.dev/) — Copy-ready UI transitions in CSS and React, plus an agent skill: `npx skills add Jakubantalik/transitions.dev`. No declared license.
- [Emil Kowalski — UI](https://emilkowal.ski/ui/) — Emil Kowalski's writing on UI and animation.
- [Easing.dev](https://www.easing.dev/) — Easing curves resource.
- [Lottie Lab templates](https://www.lottielab.com/templates) — Animation templates from Lottie Lab.
- [12 Principles of Animation](https://www.raphaelsalaja.com/library/12-principles-of-animation) — Raphael Salaja's page on the twelve principles of animation.

## Typography and fonts

- [Typography Principles](https://typographyprinciples.obys.agency/) — Typography principles site from Obys Agency.
- [Josh Puckett — Locale](https://joshpuckett.me/locale) — Page on Josh Puckett's site, filed under fonts.
- [Type-01](https://type-01.com/) — Typography magazine.
- [Alt Fonts](https://alt-tf.com/) — Fonts site.
- [Departure Mono](https://departuremono.com/) — Monospace typeface, saved for the "departure mono aesthetic". _(@minor_axis)_
- [Typing experiments](https://typexperiments.vercel.app/) — Type and typing experiments.
- [Dragon text](https://illustrated-manuscript.vercel.app/) — Illustrated-manuscript text experiment.
- [Particle typography](https://x.com/alibey_10/status/2034303164141179388) — Type built from particles. _(@alibey_10)_

Top fonts, as written; each line seems to pair two typefaces, and the last is garbled:

- Awesome Serif Bunch
- Coolvebica Bricolage Grotesque
- Instrument Serif DM Mono
- Helvetica Neue Inter
- DM Serif Display Darker Grotesque
- Caros TUSKep GPOtesK

## Colour

- [Coolors](https://coolors.co/) — Colour palette generator.
- [Saved Coolors palette](https://coolors.co/000000-2a1a1f-764134-ad8350-afa060) — Five colours: #000000, #2a1a1f, #764134, #ad8350, #afa060.
- [ColorAI](https://colorai.app/) — AI colour tool.
- [Color picker](https://x.com/tbsrnstrm/status/2043275391087849957) — A colour picker design. _(@tbsrnstrm)_

## 3D, globes and WebGL

Particle effects and Gaussian splats recur. Also listed: [Poly](https://poly.app/) for 3D models, [Morflax Studio](https://studio.morflax.com/objects/upload) and [Casberry particles](https://particles.casberry.in/), all described on [[Dev Resources]].

- [COBE](https://cobe.vercel.app/) — WebGL globe.
- [Motion Core globe](https://motion-core.dev/docs/globe) — Globe component docs on Motion Core.
- [3D globe gallery](https://omma.build/p/globe-gallery-v2-q9speu) — Globe gallery project on omma.build.
- [3DSVG](https://3dsvg.design/) — 3D SVG design site.
- [Particles](https://x.com/spottedinprod/status/2033611347242504326) — A particle effect. _(@spottedinprod)_
- [timefold](https://github.com/SuveenE/timefold) — GitHub repository for a Gaussian splat gallery.
- [Gaussian splatting](https://x.com/i/status/2035030640299536827) — Post on Gaussian splatting.
- [Three.js piece](https://curllmooha.vercel.app/) — Three.js site, labelled "3js".
- [PlayCanvas demo](https://demo.gracia.ai/playcanvas.html) — PlayCanvas demo page on gracia.ai.
- [HTML in Canvas demos](https://html-in-canvas.dev/demos/) — Demos of HTML rendered inside canvas.

## Shaders, glass and generative visuals

- [Shader orb](https://playground.davidumoru.me/experiments/shader-orb) — Shader experiment in David Umoru's playground.
- [Shader deck](https://experiments.thisiswhitespace.com/shader-deck) — Shader experiment from Whitespace.
- [Code slice hero](https://experiments.thisiswhitespace.com/code-slice-hero) — Hero-section experiment from Whitespace.
- [Liquid glass in CSS and SVG](https://kube.io/blog/liquid-glass-css-svg/) — Blog post on building liquid glass with CSS and SVG.
- [Figma glass visuals](https://x.com/markoilico/status/1950239048674791564) — Glass visuals made in Figma. _(@markoilico)_
- [Space hypnosis](https://x.com/compusophy/status/2033320227216539975) — Saved as "space hypnosis". _(@compusophy)_
- [Discrete Vectors](https://ekimroyrp.github.io/260323_DiscreteVectors/) — Discrete vectors experiment on GitHub Pages.
- [heerich](https://meodai.github.io/heerich/) — Geometry project by meodai.
- [Geometric grid](https://codepen.io/vanholtzco/pen/bNwBQBY) — CodePen of a geometric grid.
- [Dither Kit](https://www.tripwire.sh/dither-kit) — Dithering kit on tripwire.sh.

## Infinite canvas

- [Infinite Canvas tutorial](https://tympanus.net/Tutorials/InfiniteCanvas/) — Codrops tutorial demo of an infinite canvas.
- [Infinite canvas](https://x.com/nonzeroexitcode/status/2025527448536756311) — An infinite canvas demo. _(@nonzeroexitcode)_

## Websites and portfolios to study

- [Fluid Glass](https://fluid.glass/) — Saved as a "beautiful real estate website".
- [Vizcom](https://vizcom.com/) — Saved for its hero design.
- [Breakthrough Energy](https://www.breakthroughenergy.org/) — Saved as "another hero".
- [Oryzo](https://oryzo.ai/) — Saved as a "beautiful website".
- [Elcine](https://elcine.runable.site/) — AirPods Max site, saved as a "cool design website".
- [Oxide Computer](https://oxide.computer/) — Saved as a "cool web ui theme".
- [Shopify Design](https://shopify.design/) — Shopify's design site.
- [noon.design](https://noon.design/) — Saved as a "design space".
- [Razorpay — Fix my itch](https://razorpay.com/m/fix-my-itch/) — Razorpay page saved as "scratch".
- [Biomap](https://kevinho.com/experiments/biomap/) — Biomap experiment on Kevin Ho's site.
- [Gallery painting wheel](https://oluwasefunmi.com/playground/painting-wheel) — Painting-wheel gallery in Oluwasefunmi's playground.
- [Nor.ma](https://nor.ma/) — Portfolio website.
- [Dany.works](https://dany.works/) — Saved as a "cool portfolio website".
- [Diana Lu — Point n Talk](https://diana.lu/point-n-talk) — Portfolio website.
- [Ricky Zhang](https://rickyzhang.me/) — Immersive portfolio.
- [Rene Wang](https://rene.wang/) — Kindle-like portfolio.
- [Athas](https://athas.dev/) — Listed with the portfolio examples.

## Galleries and inspiration

Also listed: [CSS Design Awards](https://www.cssdesignawards.com/), described on [[Dev Resources]].

- [Awwwards](https://www.awwwards.com/) — Web design awards and showcase.
- [A1 Gallery](https://www.a1.gallery/) — Colourful AI templates, saved as the "best websites around".
- [Cargo templates](https://cargo.site/templates) — Website templates from Cargo.
- [Codrops Hub](https://tympanus.net/codrops/hub/) — Web design and code experiments from Codrops.
- [The Brand Identity](https://the-brandidentity.com/) — Branding and identity design publication.
- [Tarot cards design](https://the-brandidentity.com/project/los-york-builds-a-tarot-universe-for-netflixs-biggest-global-campaign) — Los York's tarot universe for Netflix's biggest global campaign.
- [Refero Styles](https://styles.refero.design/) — Styles section of Refero's design reference library.
- [save.design explore](https://save.design/explore) — Explore feed on save.design, a Savee-style inspiration site.
- [The HTML Review 05](https://thehtml.review/05/) — Issue 05 of The HTML Review.
- [Refik Anadol links](https://links.refikanadol.com/) — Refik Anadol's link page, saved under "taste".
- [Taste](https://x.com/Aurelien_Gz/status/2037269161299030221) — Post saved under "taste". _(@Aurelien_Gz)_

## Visual references from X

Objects, buildings, maps and print pieces saved for their look.

- [Postcard design](https://x.com/spottedinprod/status/2031078963280326799) — A postcard design. _(@spottedinprod)_
- [Tadao Ando architecture](https://x.com/SciFiArchives/status/2031992839597420549) — Tadao Ando's architecture. _(@SciFiArchives)_
- [Karuselli Swivel Chair](https://x.com/interiorsuckerr/status/2033906701359845529) — Yrjö Kukkapuro's Karuselli swivel chair, 1960s. _(@interiorsuckerr)_
- [Amber maps design](https://x.com/youwillmakemaps/status/2033327635980562544) — An amber map style. _(@youwillmakemaps)_
- [Gallery image](https://x.com/ayushsoni_io/status/2033880374624063863/photo/2) — Second photo of a post, saved as a gallery image. _(@ayushsoni_io)_
- [Mono design](https://x.com/stevelauda_/status/2037343935383929212) — A mono design reference. _(@stevelauda_)_

## Data visualisation

- [ML knowledge graph](https://the-palindrome.github.io/ml-knowledge-graph/) — Machine-learning knowledge graph from The Palindrome.
- [Dataset design](https://x.com/pritopian/status/2035026611540746746) — Saved as a dataset design reference. _(@pritopian)_
- [Design dataset](https://x.com/shariar_design/status/2035560264855326871) — Saved as a design dataset reference. _(@shariar_design)_

## Sound

- [BBC Sound Effects](https://sound-effects.bbcrewind.co.uk/) — Searchable archive of 30,000+ recordings with a mixer; free for personal, educational or research use, not commercial.
- [BBC Sound Effects FAQs](https://sound-effects.bbcrewind.co.uk/faqs) — The archive's FAQ page.

## Reading on design and craft

- [Developing Taste](https://emilkowal.ski/ui/developing-taste) — Emil Kowalski on developing design taste.
- [Big Ideas](https://frankchimero.com/blog/2010/big-ideas/) — Frank Chimero's 2010 blog post.
- [Stripe dev blog](https://stripe.dev/blog) — Stripe's developer blog, saved for its design thinking.
- [Design Engineer](https://designengineer.io/) — Resource on combining design and engineering.
- [School Is Not Enough](https://www.palladiummag.com/2023/06/06/school-is-not-enough) — Palladium Magazine essay, 6 June 2023.

## Other saved links

- [Butterfly.so](https://www.butterfly.so/)
- [AI Designer](https://www.aidesigner.ai/)
- [Amicro](https://amicro.vercel.app/)
- [Jib](https://jib.design/)
- [Make It Animated](https://makeitanimated.dev/)
- [oklch.fyi](https://oklch.fyi/)
- [Nordic Design Gallery](https://www.nordicdesign.gallery/)
- [deck.gallery](https://deck.gallery/)
- [save.design page](https://save.design/w/4e748079-6704-4960-82c1-8fb6d8e741df)
- [pencil.dev](https://www.pencil.dev/)
- [Makhno Studio](https://makhnostudio.com/)
- [Caligra](https://caligra.com/)
- [Degreeless Design](https://www.degreeless.design/)
- [Management Craft](https://www.managementcraft.co/)
- [Brass Hands](https://brasshands.com/)
- [Skyfast — Tower Hamlets](https://skyfast.ai/tower-hamlets-gb)
- [Camcraft](https://camcraft.vercel.app/)
- [OpenBrand](https://openbrand.sh/)
- [ASCII Magic](https://www.ascii-magic.com/)
- [Tiny Garden](https://tiny.garden/)
- [Yi Liu](https://yiliu.sh/)
- [Sam Gros](https://samgros.com/)
- [Vibe n Build](https://vibenbuild.vercel.app/)
- [Cylindrix](https://cylindrix-sigma.vercel.app/)
- [Neato Studio](https://studio.neato.fun/)
- [Michelle Liu](https://www.liumichelle.com/)
- [Manneskja](https://manneskja.is/)
- [Roam](https://roam.neesh.page/)
- [Sam Spratt — Story](https://samspratt.com/story)
- [Sotazine](https://www.sotazine.com/)
- [Europe 2031](https://europe2031.ai/)
- [Poolsuite](https://poolsuite.net/)
- [typo.love](https://www.typo.love/)
- [End of Day café](https://cafe.endofday.studio/)
- [Zoomquilt](https://zzz.zoomquilt.org/)
- [Typatone](https://typatone.com/)
- [Humanoid Index](https://humanoid-index.com/)
- [recent.design](https://recent.design/)
- [Virgile Flores](https://www.virgileflores.com/)
- [Clapet](https://clapet.app/d)
- [heyiam.dk](https://www.heyiam.dk/)
- [@bruce_CQT post](https://x.com/bruce_CQT/status/2040821526623392174)
- [@alyx_so post](https://x.com/alyx_so/status/2043049871826149518)
- [@adebola_io post](https://x.com/adebola_io/status/2050347511160717666)
- [@jonaasw1 post](https://x.com/jonaasw1/status/2064028010345324959)
- [@jonaasw1 post (2)](https://x.com/jonaasw1/status/2068024323915350244)
- [@itsjessyin post](https://x.com/itsjessyin/status/2066948348611870912?s=20)
- [@Eryth_Studio post](https://x.com/Eryth_Studio/status/2069046098287792348)
- [@neverwin_cc post](https://x.com/neverwin_cc/status/2069304402838737393)
- [@guerriero_se post](https://x.com/guerriero_se/status/2069791907392200784)
- [@imdevPU23 post](https://x.com/imdevPU23/status/2079909963489591794)
- [@mayvencraft post](https://x.com/mayvencraft/status/2081907737907114326)
- [@trpfsu post](https://x.com/trpfsu/status/2082534124531687602)
