---
title: Design Resources
type: source
domain: dev
sources:
  - misc/Design.md
related:
  - Design & Aesthetics
  - Developer Resources
  - Bookmarks - Design & Frontend
  - Design Thinking
  - Dev Resources
  - Bookmarks - Media & Inspiration
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - design
  - tools
  - ui-ux
  - animation
  - typography
  - components
  - inspiration
  - webgl
summary: "Erlin's design link bank: tools, component kits, animation, type, colour, 3D and WebGL experiments, and websites worth studying, each described."
review_status: archive
---

# Design Resources

Erlin's design note: a running list of design tools, component libraries, animation resources, typefaces, colour tools, 3D and WebGL experiments, and websites saved as visual references. Most entries carry a short label ("hero design", "infinite motion") rather than a review, so the descriptions below say what each link is and why it was saved. The strongest material is the component and animation libraries and the interaction references from X, where @spottedinprod and @zzzzshawn recur. The wider design bookmark bank is [[Bookmarks - Design & Frontend]]; the ideas behind it are in [[Design_and_Aesthetics|Design & Aesthetics]].

## Design tools and AI design

Paper is listed as a design tool and Air OS as an OS design system; both appear below through the posts saved for them.

- [Framer](https://www.framer.com/) — Visual website builder and design tool.
- [Figma](https://www.figma.com/) — Collaborative interface design tool.
- [Figma Capture bookmarklet](https://mcp.figma.com/mcp/html-to-design/capture.js) — Script that converts a live HTML page into a Figma design. The note says to save it as a bookmark; the full bookmarklet is below.
- [Design with Google (Stitch)](https://stitch.withgoogle.com/) — Google's AI interface design tool.
- [Variant](https://variant.com/) — Saved with the line "Endless designs for your ideas, just scroll."
- [Butterfly.so](https://www.butterfly.so/) — Listed with the design tools; saved without a note.
- [Paper snapshot](https://x.com/stephenhaney/status/2036485780961669214) — Post saved as "paper snapshot", for Paper, the design tool. _(@stephenhaney)_
- [AirOS](https://x.com/slavakornilov/status/2028885781448671325) — Post on AirOS, an OS design system. _(@slavakornilov)_
- [Peel](https://peel.studio/) — Extracts a design from an image.
- [AI Designer](https://www.aidesigner.ai/) — AI design tool, by its name; saved without a note.
- [Toolfolio](https://toolfolio.io/) — Directory of design tools.
- [Impeccable](https://impeccable.style/) — Style prompts.
- [Liquid Glass Editor](https://liquidglasseditor.vercel.app/) — Editor for liquid glass effects.
- [Hotkeys.design](https://hotkeys.design/) — Reference of design-tool keyboard shortcuts.
- [Defuddle](https://defuddle.md/) — Converts a web page to Markdown.

The Figma Capture bookmarklet, as saved in the note:

```
javascript:(function(){var s=document.createElement('script');s.src='https://mcp.figma.com/mcp/html-to-design/capture.js';document.head.appendChild(s);setTimeout(function(){window.location.hash='figmacapture&figmadelay=1000';var s2=document.createElement('script');s2.src='https://mcp.figma.com/mcp/html-to-design/capture.js';document.head.appendChild(s2);},500);})();
```

## Component libraries and UI kits

Shadcn UI is the base component library several of these build on. Storybook is listed for component-driven design systems, with no link saved.

- [shadcn/ui patterns (ReUI)](https://reui.io/) — Ready-made patterns built on shadcn/ui.
- [interfacesds.com](https://interfacesds.com/) — Refined shadcn components.
- [Shadcn Blocks](https://www.shadcnblocks.com/blocks) — Prebuilt page blocks for shadcn/ui.
- [Spell.sh](https://spell.sh/) — UI components.
- [Base UI](https://base-ui.com/) — Unstyled React component library.
- [Detail.design](https://detail.design/) — Detailed component references.
- [Interface Craft](https://www.interfacecraft.dev/) — Interface craft resource for UI detail.
- [OpenUI](https://github.com/thesysdev/openui) — OpenUI repository from Thesys on GitHub.
- [cmdk](https://github.com/dip/cmdk) — Command-menu component for React, on GitHub.
- [Lucide icons](https://lucide.dev/) — Open-source icon set.
- [SVGL](https://svgl.app/) — Library of brand logos as SVGs.
- [mapcn](https://www.mapcn.dev/) — Map components.
- [SVG loading indicators](https://magecdn.com/tools/svg-loaders) — Collection of SVG loaders on MageCDN.
- [Nexvyn UI components](https://ui.nexvyn.dev/components) — Component collection from Nexvyn UI.
- [Moumen Lab components](https://lab.moumen.dev/components) — Component experiments from Moumen's lab.
- [Liquid UI](https://www.arlan.me/vault/liquid-ui) — Liquid UI piece in Arlan's vault.
- [Amicro](https://amicro.vercel.app/) — Interaction and component reference; saved without a note.
- [Jib](https://jib.design/) — Interaction and component reference; saved without a note.

## Interaction and micro-animation references

Small interactions saved to copy or learn from. CodePen is listed as a source of interactive code examples.

- [Liquid loading indicator](https://x.com/wabi/status/2033617109184614676) — Post showing a liquid-style loading indicator. _(@wabi)_
- [Infinite motion](https://x.com/uixamjad/status/2034571576235208709) — Post saved as an "infinite motion" reference. _(@uixamjad)_
- [Navbar corner design](https://x.com/diegohaz/status/2016364636875186658) — Post on a navbar corner treatment. _(@diegohaz)_
- [Activities component](https://x.com/zzzzshawn/status/2035631893866295523) — Post showing an activities component. _(@zzzzshawn)_
- [Folder interaction](https://x.com/zzzzshawn/status/2035261382481076662) — Post showing a folder interaction. _(@zzzzshawn)_
- [Embedded preview](https://x.com/NCResq/status/2038214423756849269) — Post showing an embedded preview pattern. _(@NCResq)_
- [Time card opening](https://codepen.io/dilums/full/NWodZMd) — CodePen demo of a time card opening animation.
- [Small card micro-animation](https://sorenblank.com/snippets/small-card-micro-animation) — Snippet from Soren Blank's site.
- [Soren Blank](https://sorenblank.com/) — Site with component snippets.
- [Hover animation](https://brianharms.design/) — Brian Harms's site, saved for its hover animation.
- [Cursor background effect](https://hackathon.tempo.xyz/) — Tempo hackathon site, saved for its cursor-driven background.
- [Card swipe](https://lab.tobi.computer/card-swipe) — Card-swipe experiment from lab.tobi.computer.
- [Card expand](https://rselmi.com/lab/card-expand) — Romain Selmi's expanding-card experiment.
- [UI experiment 3](https://lab01.dev/#ui-experiment-3) — UI experiment from lab01.dev.
- [Introducing Loops](https://linear.app/now/introducing-loops) — Linear's post introducing Loops.

## Animation libraries and learning

Rive is listed as an animation tool, with no link saved.

- [GSAP](https://gsap.com/) — JavaScript animation library.
- [Made With GSAP](https://madewithgsap.com/) — Showcase of effects built with GSAP.
- [Motion](https://motion.dev/) — Production-grade animation library.
- [Transitions.dev](https://transitions.dev/) — Copy-ready web UI transitions with CSS and React implementations, plus an agent skill for Claude, Cursor and Codex, installed with `npx skills add Jakubantalik/transitions.dev`. The repository does not declare a license, so check its terms before copying or vendoring code.
- [Emil Kowalski — UI](https://emilkowal.ski/ui/) — Emil Kowalski's UI and animation writing.
- [Animations.dev](https://animations.dev/) — Animation resource, by its name.
- [Easing.dev](https://www.easing.dev/) — Easing curves resource.
- [Make It Animated](https://makeitanimated.dev/) — Animation resource; saved without a note.
- [Lottie Lab templates](https://www.lottielab.com/templates) — Animation templates from Lottie Lab.
- [12 Principles of Animation](https://www.raphaelsalaja.com/library/12-principles-of-animation) — Raphael Salaja's library page on the twelve principles of animation.

## Typography and fonts

- [Typography Principles](https://typographyprinciples.obys.agency/) — Typography principles site from Obys Agency.
- [Josh Puckett — Locale](https://joshpuckett.me/locale) — Page on Josh Puckett's site, filed under fonts.
- [Type-01](https://type-01.com/) — Typography magazine.
- [Alt Fonts](https://alt-tf.com/) — Fonts site.
- [Departure Mono](https://departuremono.com/) — Monospace typeface, saved for the "departure mono aesthetic" and credited "by » @minor_axis". _(@minor_axis)_
- [Typing experiments](https://typexperiments.vercel.app/) — Type and typing experiments.
- [Dragon text](https://illustrated-manuscript.vercel.app/) — Illustrated-manuscript text experiment.
- [Particle typography](https://x.com/alibey_10/status/2034303164141179388) — Post showing type built from particles. _(@alibey_10)_

### Top fonts

The note's "top fonts" list, as written. Each line appears to run two typeface names together (for example Instrument Serif and DM Mono); the last line looks garbled.

- Awesome Serif Bunch
- Coolvebica Bricolage Grotesque
- Instrument Serif DM Mono
- Helvetica Neue Inter
- DM Serif Display Darker Grotesque
- Caros TUSKep GPOtesK

## Colour

- [Coolors](https://coolors.co/) — Colour palette generator.
- [Saved Coolors palette](https://coolors.co/000000-2a1a1f-764134-ad8350-afa060) — Five-colour palette: #000000, #2a1a1f, #764134, #ad8350, #afa060.
- [ColorAI](https://colorai.app/) — AI colour tool.
- [oklch.fyi](https://oklch.fyi/) — Site named for the OKLCH colour space; saved without a note.
- [Color picker](https://x.com/tbsrnstrm/status/2043275391087849957) — Post showing a colour picker design. _(@tbsrnstrm)_

## 3D, globes and WebGL

Particles and Gaussian splats recur as a theme: the note lists them as "various particle effects".

- [COBE](https://cobe.vercel.app/) — WebGL globe.
- [Motion Core globe](https://motion-core.dev/docs/globe) — Globe component docs on Motion Core.
- [3D globe gallery](https://omma.build/p/globe-gallery-v2-q9speu) — Globe gallery project on omma.build.
- [Poly](https://poly.app/) — 3D models.
- [Morflax Studio upload](https://studio.morflax.com/objects/upload) — Upload page for 3D models in Morflax Studio.
- [3DSVG](https://3dsvg.design/) — 3D SVG design site, by its name.
- [Casberry particles](https://particles.casberry.in/) — 3D particle effects.
- [Particles](https://x.com/spottedinprod/status/2033611347242504326) — Post showing a particle effect. _(@spottedinprod)_
- [Gaussian splat gallery (timefold)](https://github.com/SuveenE/timefold) — GitHub repository for a Gaussian splat gallery.
- [Gaussian splatting](https://x.com/i/status/2035030640299536827) — Post on Gaussian splatting.
- [Three.js piece](https://curllmooha.vercel.app/) — Three.js site, labelled "3js".
- [PlayCanvas demo](https://demo.gracia.ai/playcanvas.html) — PlayCanvas demo page on gracia.ai.
- [HTML in Canvas demos](https://html-in-canvas.dev/demos/) — Demos of HTML rendered inside canvas.

## Shaders, glass and generative visuals

- [Shader orb](https://playground.davidumoru.me/experiments/shader-orb) — Shader experiment in David Umoru's playground.
- [Shader deck](https://experiments.thisiswhitespace.com/shader-deck) — Shader experiment from Whitespace.
- [Code slice hero](https://experiments.thisiswhitespace.com/code-slice-hero) — Hero-section experiment from Whitespace.
- [Liquid glass in CSS and SVG](https://kube.io/blog/liquid-glass-css-svg/) — Blog post on building liquid glass with CSS and SVG.
- [Figma glass visuals](https://x.com/markoilico/status/1950239048674791564) — Post showing glass visuals made in Figma. _(@markoilico)_
- [Space hypnosis](https://x.com/compusophy/status/2033320227216539975) — Post saved as "space hypnosis". _(@compusophy)_
- [Discrete Vectors](https://ekimroyrp.github.io/260323_DiscreteVectors/) — Discrete vectors experiment on GitHub Pages.
- [heerich](https://meodai.github.io/heerich/) — Geometry project by meodai.
- [Geometric grid](https://codepen.io/vanholtzco/pen/bNwBQBY) — CodePen of a geometric grid.
- [Dither Kit](https://www.tripwire.sh/dither-kit) — Dithering kit on tripwire.sh. The note writes this link as `khttps://www.tripwire.sh/dither-kit`, with a stray leading "k".

## Infinite canvas

- [Infinite Canvas tutorial](https://tympanus.net/Tutorials/InfiniteCanvas/) — Codrops tutorial demo of an infinite canvas.
- [Infinite canvas](https://x.com/nonzeroexitcode/status/2025527448536756311) — Post showing an infinite canvas. _(@nonzeroexitcode)_

## Websites and portfolios to study

- [Fluid Glass](https://fluid.glass/) — Saved as a "beautiful real estate website".
- [Vizcom](https://vizcom.com/) — Saved for its hero design.
- [Breakthrough Energy](https://www.breakthroughenergy.org/) — Saved as "another hero".
- [Oryzo](https://oryzo.ai/) — Saved as a "beautiful website".
- [Elcine](https://elcine.runable.site/) — AirPods Max site the note calls a "cool design website".
- [Oxide Computer](https://oxide.computer/) — Saved as a "cool web ui theme".
- [Shopify Design](https://shopify.design/) — Shopify's design site.
- [noon.design](https://noon.design/) — Saved as a "design space".
- [Razorpay — Fix my itch](https://razorpay.com/m/fix-my-itch/) — Razorpay page saved under the label "scratch".
- [Biomap](https://kevinho.com/experiments/biomap/) — Biomap experiment on Kevin Ho's site.
- [Gallery painting wheel](https://oluwasefunmi.com/playground/painting-wheel) — Painting-wheel gallery in Oluwasefunmi's playground.
- [Nor.ma](https://nor.ma/) — Portfolio website.
- [Dany.works](https://dany.works/) — Saved as a "cool portfolio website".
- [Diana Lu — Point n Talk](https://diana.lu/point-n-talk) — Portfolio website.
- [Ricky Zhang](https://rickyzhang.me/) — Immersive portfolio.
- [Rene Wang](https://rene.wang/) — Kindle-like portfolio.
- [Athas](https://athas.dev/) — Listed with the portfolio examples.

## Galleries and inspiration

- [Awwwards](https://www.awwwards.com/) — Web design awards and showcase.
- [CSS Design Awards](https://www.cssdesignawards.com/) — Web design awards gallery.
- [A1 Gallery](https://www.a1.gallery/) — Colourful AI templates; the note calls it the "best websites around".
- [Cargo templates](https://cargo.site/templates) — Website templates from Cargo.
- [Codrops Hub](https://tympanus.net/codrops/hub/) — Web design and code experiments from Codrops.
- [The Brand Identity](https://the-brandidentity.com/) — Branding and identity design publication.
- [Tarot cards design](https://the-brandidentity.com/project/los-york-builds-a-tarot-universe-for-netflixs-biggest-global-campaign) — The Brand Identity on Los York building a tarot universe for Netflix's biggest global campaign.
- [Nordic Design Gallery](https://www.nordicdesign.gallery/) — Design gallery, by its name; saved without a note.
- [deck.gallery](https://deck.gallery/) — Gallery site, by its name; saved without a note.
- [Refero Styles](https://styles.refero.design/) — Styles section of Refero's design reference library.
- [save.design explore](https://save.design/explore) — Explore feed on save.design, a Savee-style inspiration site.
- [save.design page](https://save.design/w/4e748079-6704-4960-82c1-8fb6d8e741df) — A shared page on save.design; saved without a note.
- [The HTML Review 05](https://thehtml.review/05/) — Issue 05 of The HTML Review.
- [Refik Anadol links](https://links.refikanadol.com/) — Refik Anadol's link page, saved under "taste".
- [Taste](https://x.com/Aurelien_Gz/status/2037269161299030221) — Post saved under "taste". _(@Aurelien_Gz)_

## Visual references from X

Objects, buildings, maps and print pieces saved for their look.

- [Postcard design](https://x.com/spottedinprod/status/2031078963280326799) — Post saved as a postcard design reference. _(@spottedinprod)_
- [Tadao Ando architecture](https://x.com/SciFiArchives/status/2031992839597420549) — Post on Tadao Ando's architecture. _(@SciFiArchives)_
- [Karuselli Swivel Chair](https://x.com/interiorsuckerr/status/2033906701359845529) — Karuselli swivel chair by Yrjö Kukkapuro, 1960s. _(@interiorsuckerr)_
- [Amber maps design](https://x.com/youwillmakemaps/status/2033327635980562544) — Post showing an amber map style. _(@youwillmakemaps)_
- [Gallery image](https://x.com/ayushsoni_io/status/2033880374624063863/photo/2) — Second photo of a post, saved as a gallery image. _(@ayushsoni_io)_
- [Mono design](https://x.com/stevelauda_/status/2037343935383929212) — Post saved as a mono design reference. _(@stevelauda_)_

## Data and knowledge visualisation

- [ML knowledge graph](https://the-palindrome.github.io/ml-knowledge-graph/) — Machine-learning knowledge graph from The Palindrome.
- [Dataset design](https://x.com/pritopian/status/2035026611540746746) — Post saved as a dataset design reference. _(@pritopian)_
- [Design dataset](https://x.com/shariar_design/status/2035560264855326871) — Post saved as a design dataset reference. _(@shariar_design)_

## Sound

- [BBC Sound Effects](https://sound-effects.bbcrewind.co.uk/) — Searchable archive of more than 30,000 recordings with a built-in mixer. Free use is generally limited to personal, educational or research projects; commercial use needs separate licensing.
- [BBC Sound Effects FAQs](https://sound-effects.bbcrewind.co.uk/faqs) — The archive's FAQ page.

## Reading on design and craft

- [Developing Taste](https://emilkowal.ski/ui/developing-taste) — Emil Kowalski on developing design taste.
- [Big Ideas](https://frankchimero.com/blog/2010/big-ideas/) — Frank Chimero's 2010 blog post.
- [Stripe dev blog](https://stripe.dev/blog) — Stripe's developer blog, saved for its design thinking.
- [Design Engineer](https://designengineer.io/) — Resource on design plus engineering.
- [School Is Not Enough](https://www.palladiummag.com/2023/06/06/school-is-not-enough) — Palladium Magazine essay, published 6 June 2023.

## Other

- [Piano notes trainer](https://kvyverse.com/piano_notes_trainer) — Piano notes trainer on kvyverse.com.

## Unannotated links

Saved without a note; the line says only what the URL shows.

- [X post](https://x.com/bruce_CQT/status/2040821526623392174) — Saved without a note. _(@bruce_CQT)_
- [X post](https://x.com/alyx_so/status/2043049871826149518) — Saved without a note. _(@alyx_so)_
- [X post](https://x.com/adebola_io/status/2050347511160717666) — Saved without a note. _(@adebola_io)_
- [X post](https://x.com/jonaasw1/status/2064028010345324959) — Saved without a note. _(@jonaasw1)_
- [X post](https://x.com/jonaasw1/status/2068024323915350244) — Saved without a note. _(@jonaasw1)_
- [X post](https://x.com/itsjessyin/status/2066948348611870912?s=20) — Saved without a note. _(@itsjessyin)_
- [X post](https://x.com/Eryth_Studio/status/2069046098287792348) — Saved without a note. _(@Eryth_Studio)_
- [X post](https://x.com/neverwin_cc/status/2069304402838737393) — Saved without a note. _(@neverwin_cc)_
- [X post](https://x.com/guerriero_se/status/2069791907392200784) — Saved without a note. _(@guerriero_se)_
- [X post](https://x.com/imdevPU23/status/2079909963489591794) — Saved without a note; it sits next to the Moumen Lab components link in the note. _(@imdevPU23)_
- [X post](https://x.com/mayvencraft/status/2081907737907114326) — Saved without a note. _(@mayvencraft)_
- [X post](https://x.com/trpfsu/status/2082534124531687602) — Saved without a note. _(@trpfsu)_
- [pencil.dev](https://www.pencil.dev/) — Saved without a note.
- [Makhno Studio](https://makhnostudio.com/) — Studio site; saved without a note.
- [Caligra](https://caligra.com/) — Saved without a note.
- [Degreeless Design](https://www.degreeless.design/) — Saved without a note.
- [Management Craft](https://www.managementcraft.co/) — Saved without a note.
- [Brass Hands](https://brasshands.com/) — Saved without a note.
- [Skyfast — Tower Hamlets](https://skyfast.ai/tower-hamlets-gb) — Skyfast page for Tower Hamlets; saved without a note.
- [Camcraft](https://camcraft.vercel.app/) — Saved without a note.
- [OpenBrand](https://openbrand.sh/) — Saved without a note.
- [ASCII Magic](https://www.ascii-magic.com/) — Saved without a note.
- [Tiny Garden](https://tiny.garden/) — Saved without a note.
- [Yi Liu](https://yiliu.sh/) — Personal site; saved without a note.
- [Sam Gros](https://samgros.com/) — Personal site; saved without a note.
- [Vibe n Build](https://vibenbuild.vercel.app/) — Saved without a note.
- [Cylindrix](https://cylindrix-sigma.vercel.app/) — Saved without a note.
- [Neato Studio](https://studio.neato.fun/) — Saved without a note.
- [Michelle Liu](https://www.liumichelle.com/) — Personal site; saved without a note.
- [Manneskja](https://manneskja.is/) — Saved without a note.
- [Roam](https://roam.neesh.page/) — Saved without a note.
- [Sam Spratt — Story](https://samspratt.com/story) — Story page on Sam Spratt's site; saved without a note.
- [Sotazine](https://www.sotazine.com/) — Saved without a note.
- [Europe 2031](https://europe2031.ai/) — Saved without a note.
- [Poolsuite](https://poolsuite.net/) — Saved without a note.
- [typo.love](https://www.typo.love/) — Saved without a note.
- [End of Day café](https://cafe.endofday.studio/) — Saved without a note.
- [Zoomquilt](https://zzz.zoomquilt.org/) — Saved without a note.
- [Typatone](https://typatone.com/) — Saved without a note.
- [Humanoid Index](https://humanoid-index.com/) — Saved without a note.
- [recent.design](https://recent.design/) — Saved without a note.
- [Virgile Flores](https://www.virgileflores.com/) — Personal site; saved without a note.
- [Clapet](https://clapet.app/d) — Saved without a note.
- [Cuelume](https://cuelume-site.pages.dev/) — Saved without a note.
- [heyiam.dk](https://www.heyiam.dk/) — Saved without a note.

## Related

[[Design_and_Aesthetics|Design & Aesthetics]] · [[Developer_Resources|Developer Resources]] · [[Bookmarks - Design & Frontend]] · [[Design Thinking]] · [[Dev Resources]] · [[Bookmarks - Media & Inspiration]]
