---
title: Design & Aesthetics
type: topic
domain: dev
sources:
  - misc/Design.md
  - misc/Thoughts.md
  - misc/Youtube.md
  - misc/X-Bookmarks.md
  - bookmarks/Design & Frontend.md
  - bookmarks/Media & Inspiration.md
  - clippings/bookmark-updates-2026-09-22/Design & Frontend.md
  - misc/Dev.md
  - bookmarks/Developer Tools.md
related:
  - Youtube
  - X-Bookmarks
  - Developer Resources
  - Philosophy & Meaning
  - Thoughts and Observations
  - Compositor
  - Bookmarks - Design & Frontend
  - Design Thinking
  - Design Resources
  - Thoughts & Observations
  - Bookmarks - Media & Inspiration
  - Bookmarks - Developer Tools
created: 2026-04-12T00:00:00.000Z
updated: '2026-10-15'
tags:
  - design
  - aesthetics
  - ui-ux
  - taste
  - tools
  - motion
  - typography
summary: Notes on taste, tension, motion and rule-based design, plus a sorted bank of saved design tools, libraries, type, colour, 3D and galleries.
---

# Design & Aesthetics

This page holds Erlin's notes on taste and interface craft, and the tools, libraries, galleries and portfolios saved as design reference. The ideas come first: taste as self-revelation, beauty that carries tension, motion that is intentional, and systems built from rules. The Resources section sorts the saved links by kind. Most are inspiration rather than endorsements, so check licence, accessibility and performance before reusing a pattern. The wiki's thinking about how to approach design is in [[Design Thinking]]; the full link lists are in [[Design Resources]] and [[Bookmarks - Design & Frontend]].

## Taste and character

> Your aesthetic taste is a map of your inner world projected outward. What you're drawn to reveals which parts of your spirit are awake. Aesthetic taste is an unconscious confession.

(a line in the note, from [[Thoughts & Observations]])

Design taste is character revelation: what you build reveals who you are.

Another line in the same note applies the idea to a person: "Geniuses have blind spots, one of Elon's is beauty. He has bad taste and doesn't understand the power or political utility of image. It's why the women are mid, the logos are cringe, the jokes are bad, etc." (from [[Thoughts & Observations]])

## Beauty with tension

Saved via [[Youtube]]: [Daisy Gray's cover of Chris Isaak's "Wicked Game"](https://www.youtube.com/watch?v=L4VU-AwxzSY&lc=Ugy8WDwPpqxtPfUrth94AaABAg). The creator's comment saved with the link says the cigarette is a tribute to "the 90’s aesthetic and culture" and a deliberate juxtaposition "between beauty and toxicity (as in the relationship that Chris Isaak wrote about) the beauty of the ocean, mixed with the toxicity of the smoking." The comment opens with a PSA that the creator does not smoke or support promoting it, and ends "Smoking is not cool guys."

Design note: strong aesthetic often lives on the edge of something uncomfortable. Safe beauty reads as stock photography; beauty with tension sticks.

## Developing taste

Getting good at design takes aesthetic sensitivity, not just technical skill. The list of where to look:

- Ralph Lauren: brand identity.
- Tadao Ando: architecture and minimalism. The note saves a post under the label ["Tadao Ando Architecture"](https://x.com/SciFiArchives/status/2031992839597420549) _(@SciFiArchives)_.
- Motion design studios.
- Typography practitioners.
- Brand-driven design systems.

The historic and editorial references saved alongside are listed under Resources.

## Interaction and motion

Movement, animation and micro-interactions should feel intentional, not decorative. Study GSAP and motion principles.

- **Design engineering is not animations.** @bossadizenith's post reads "design engineering is not animations": craft of the medium beats motion flourish. [Post](https://x.com/bossadizenith/status/2032822810188689507). A companion list of "Design Engineer Tools" for web-focused design engineers, by @jmswrnr, was shared by @remvze: [post](https://x.com/remvze/status/2032795865375555767). (from [[X-Bookmarks]])
- **Ink calligraphy interface.** [Ben Lau's prototype](https://x.com/benlaudesign/status/2082434477536530619) makes a traditional craft explorable through free writing, character tracing and stroke-order teaching, with plain, grid and scroll surfaces and controls for ink weight, wetness, speed, formality and generative seed, without overwhelming the canvas. _(@benlaudesign)_
- **Native-feeling motion.** Three saved references: a [progressive-blur header and footer for Expo](https://x.com/davidmokos_/status/2082582252110643643) that softens the transition between scrolling content and fixed chrome (install with `npx shadcn@latest add davidmokos/beautiful-expo/progressive-blur`); a [receipt-printer interaction](https://x.com/insporadesign/status/2087475430865383598) by dqnamo for tactile motion, constrained typography and skeuomorphic feedback; and [Emil Kowalski's small details that make mobile interfaces feel native](https://x.com/emilkowalski/status/2087150812761858367). They belong in a real-device checklist: reduced motion, reduced transparency, touch latency, keyboard access and semantics.

## Systems over decoration

Component thinking: break designs into the smallest reusable units. Scalable systems beat one-off designs.

- **Munich 1972.** [Olympic information design](https://x.com/stallboerger/status/2086428724417740868): tickets, passes, schedules, pictograms, restrained typography and event-specific colours form one system that stays legible across many formats. It shows modular grids, multilingual hierarchy, wayfinding and event identity expressed through rules rather than decorative variation. _(@stallboerger)_
- **Component QA at scale.** [How shadcn curates component quality](https://x.com/shadcn/status/2019108736904884540) is a design-system checklist covering spacing, animation, themes, typography and icons. _(@shadcn)_
- **Soft UI and squircles.** CSS squircles trade sharp corners for soft, continuous curvature; @AliGrids' post says they turn "sharp UIs into soft, modern bliss." A taste signal from the 2026 feed, not a measured trend. [Post](https://x.com/AliGrids/status/2032008241446801840). (from [[X-Bookmarks]])

## Working with generated design

- **Specs for agents.** Google's Stitch ships a `DESIGN.md` markdown spec alongside generated design systems, so downstream agents can reproduce the aesthetic. @_davideast's post: "New in the Stitch Vibe Design launch: DESIGN.md. Design consistency specified." [Post](https://x.com/_davideast/status/2034427349010121153). (from [[X-Bookmarks]])
- **Figma, then generation, then Figma.** [Nate Watkin's avatar workflow](https://x.com/NateWatkin/status/2082068768914632825) starts with a simple Figma orb and asks Codex: "I want to generate some default avatars for an app. I created this quick mockup in Figma but I want to turn it into an image that feels more real — orb-like with dimension, texture and layers." It finishes in Figma with a duplicated layer in Screen blend mode at 65% opacity. Generation supplies texture and dimension while the designer keeps composition and finishing. _(@NateWatkin)_
- **Image first, then code.** [Anshu reports](https://x.com/anshuc/status/2068051570319933582) better AI-built interface results by generating the visual direction first and then asking the coding model to reproduce that screenshot, rather than designing from a blank prompt. _(@anshuc)_
- **Scroll-driven landing pages.** [Fred Moon's "AI-doomsday scroll experiment"](https://x.com/fw3d/status/2021899216248070220) ("scroll, human") is described as "50% @framer + 50% @hiunicornstudio". _(@fw3d, from [[X-Bookmarks]])_
- **Vendor claims.** [OpenDesign Harness](https://x.com/OpenDesignHQ/status/2096923399792595438) is a vendor announcement for a design-generation strategy meant to give more complete results with fewer prompts and tokens. Its quality, cost and survey results are self-reported. _(@OpenDesignHQ)_

## Art direction

- A [Valentino fragrance-film reference](https://x.com/B__Daily/status/2093130863538004140) uses vintage cars, tactile keys, close-ups, warm night light and red accents to convey intimacy. The poster's comment frames the older car as an antidote to sterile contemporary design; that is an aesthetic opinion. The [quoted film](https://x.com/rayliuhk/status/2092859175705391510) was shared as a Dakota Johnson and Alexander Skarsgård Valentino campaign, with credits as supplied by the repost. _(@B__Daily, from [[Bookmarks - Media & Inspiration]])_
- A [Tate McRae / Calvin Klein jeans ad](https://x.com/OldRowSwig/status/2092392749181939788) is saved as a media and styling reference. The repost asks whether woke culture is over; that is commentary, and a single campaign cannot establish a broad cultural return. _(@OldRowSwig)_

## Reading saved references

[[Compositor]] combines two saved releases into one product page while keeping both source posts: the [launch](https://x.com/robbietilton/status/2100946395972976843) and [v1.1](https://x.com/robbietilton/status/2101714382665519192). The surrounding bookmarks add component directories, brand SVGs, Lissajous generation, spatial interfaces, flipbook presentation, stationery and navigation motion.

The useful question for each reference is what it contributes: hierarchy, material, timing, feedback or interaction. A Wallet concept, a keyboard complaint or an impressive generated interface is evidence of taste or an observation, not proof of platform support, accessibility or measured usability. The [animated boarding pass in Apple Wallet](https://x.com/heydamir/status/2094779813072363554) combines familiar Wallet hierarchy with animated detail; confirm real PassKit capabilities and avoid motion that hides travel-critical information. The [iPhone keypad typo complaint](https://x.com/kenzietuff/status/2097721435045151081) is an anecdotal friction report, not evidence of a documented keypad change. OpenDesign quality and efficiency claims stay vendor reports. The unannotated gallery URLs below are unresolved references. (from [[Bookmarks - Design & Frontend]])

## Resources

### Design tools and systems

- [Framer](https://www.framer.com/) — No-code design system with strong animation support.
- [Framer interaction rebuild tutorial](https://x.com/learnframer/status/2031323252384268755) — Process-oriented tutorial showing how a difficult interaction is reconstructed from scratch. _(Framer University, @learnframer)_
- **Figma** — Collaborative design tool with browser-native implementation. No link saved.
- [Figma glass visuals](https://x.com/markoilico/status/1950239048674791564) — Saved under the label "figma glass visuals". _(@markoilico)_
- [Figsor Figma-to-animated-SVG workflow](https://x.com/akbuilds_/status/2033689709377978648) — A practical bridge from static design assets to reusable web animation. _(@akbuilds_)_
- [Google Stitch](https://stitch.withgoogle.com/) — Saved as "Design with google". The [launch post](https://x.com/stitchbygoogle/status/2034332847893574080) lists five upgrades: an AI-native canvas, a smarter design agent, voice, instant prototypes, and design systems with DESIGN.md. _(@stitchbygoogle)_
- [Google Stitch DESIGN.md export](https://x.com/_davideast/status/2034427349010121153) — A design-system workflow that turns generated work into a portable specification. _(@_davideast)_
- [getdesign.md](https://getdesign.md/) — Publishes reusable analyses of real sites covering colour, typography, spacing, components and the reasoning behind them, meant to keep agent-built pages within a specific visual language. Adapt it; do not copy a brand's protected identity or assets. _(found via Idan Mann, @mann_idan)_
- [Variant](https://variant.com/) — The note's tagline: "Endless designs for your ideas, just scroll."
- [VariantUI generation gallery](https://x.com/hckmstrrahul/status/2030729762298277970) — A source of generated-interface patterns and visual exploration. _(Rahul Chakraborty, @hckmstrrahul)_
- [VariantUI Style Dropper](https://x.com/bnj/status/2021330958671380625) — A design tool that transfers the visual character of a reference into new interfaces. _(Ben South, @bnj)_
- [Air OS](https://x.com/slavakornilov/status/2028885781448671325) — OS-level design language. Saved as "AirOS". _(@slavakornilov)_
- [Pencil](https://www.pencil.dev/) — Saved without a note.
- [Butterfly](https://www.butterfly.so/) — Saved without a note.
- [Toolfolio](https://toolfolio.io/) — Saved as "design tools".
- [Design Engineer Tools list](https://x.com/remvze/status/2032795865375555767) — A list of useful tools for web-focused design engineers, curated by @jmswrnr. _(shared by @remvze)_

Figma capture, saved as a browser bookmarklet. It injects Figma's HTML-to-design capture script into the current page:

```
javascript:(function(){var s=document.createElement('script');s.src='https://mcp.figma.com/mcp/html-to-design/capture.js';document.head.appendChild(s);setTimeout(function(){window.location.hash='figmacapture&figmadelay=1000';var s2=document.createElement('script');s2.src='https://mcp.figma.com/mcp/html-to-design/capture.js';document.head.appendChild(s2);},500);})();
```

### Quick-iteration tools

- [Defuddle](https://defuddle.md/) — Get the main content of any page as Markdown.
- [Mockdown](https://www.mockdown.design/) — Quick mockup generation.
- [Peel](https://peel.studio/) — Saved as "extract design from image".
- [Hotkeys.design](https://hotkeys.design/) — Design tool keyboard shortcuts.
- [Ultramock cinematic UI mockups](https://x.com/joshmillgate/status/2038786557772005793) — A browser tool for quickly producing polished cinematic interface presentations. _(@joshmillgate)_
- [Compositor](https://robbietilton.com/compositor) — Presented as a free, open-source, 12 MB Photoshop-like editor focused on essential compositing tools; v1.1 added a text tool and layer effects. _(@robbietilton)_

### Component and UI libraries

- **Shadcn UI** — Component library with a customizable design system. See the QA checklist above.
- [Shadcn Blocks](https://www.shadcnblocks.com/blocks) — Pre-built component compositions.
- [Refined shadcn components](https://interfacesds.com/) — Saved with that label.
- [Interface Craft](https://www.interfacecraft.dev/) — Crafted interface components. Saved as "interface craft".
- [Spell UI component collection](https://x.com/tomm_ui/status/2029502240709550311) — A reusable collection of polished components for modern interfaces. _(tom, @tomm_ui)_
- **Detail.design** — Detailed, refined components. No link saved.
- [Base UI](https://base-ui.com/) — Unstyled React component library built for composability, styling freedom and accessible behaviour.
- [X's web interface using Base UI](https://x.com/colmtuite/status/2082075686580146249) — A short clip showing X's web interface built with Base UI components; a point-in-time adoption signal, with the official documentation as the durable resource. _(Colm Tuite, @colmtuite)_
- [UI component-library directory](https://x.com/codebydinil/status/2099719772871209209) — Curated component and motion resources including libraries.dev, transitions.dev, ASTRYX and React collections. _(@codebydinil)_
- [OpenSourceUI](https://opensourceui.in/) — Collects open-source interface components and motion patterns. The [post that surfaced it](https://x.com/BidyutKundu12/status/2095873776500232389) calls it an interaction-pattern gallery. _(Bidyut, @BidyutKundu12)_
- [EvilCharts](https://evilcharts.com/docs) — An open-code gallery of opinionated animated chart components built with shadcn/ui, Recharts, SVG and Motion. A copyable visual and interaction reference, not a new charting engine. _(found via Gurbinder, @legionsdev)_
- [mapcn](https://www.mapcn.dev/) — Saved as "map components".
- [cmdk](https://github.com/dip/cmdk) — GitHub repository. Saved without a note.
- [Lucide](https://lucide.dev/) — Icon set. Saved as "lucide icons".

### Animation and motion

- [GSAP](https://gsap.com/) — Professional animation library. Saved as "animation library".
- [Made with GSAP](https://madewithgsap.com/) — Saved without a note; the domain points to a GSAP showcase.
- **Motion.dev** — Production-grade web animation. No link saved for the library itself.
- [Spring overshoot along CSS motion paths](https://x.com/motiondotdev/status/2031370992237334685) — An offsetPath and offsetDistance technique that preserves room for spring overshoot. _(Motion, @motiondotdev)_
- **Rive** — Interactive animation tool. Saved examples: [faux 3D in Rive](https://x.com/radbar_1/status/2031255940729622590) (a lightweight spatial-motion technique), [sci-fi components in Rive](https://x.com/radbar_1/status/2033138118665150601) _(@radbar_1)_, [sand-writing effect in Rive](https://x.com/hansonerere2/status/2038994818979037448) for granular handwriting and reveal effects _(@hansonerere2)_, and a [skeuomorphic After Effects plugin UI](https://x.com/jkorenman/status/2031185987859079626) with responsive data-bound desktop controls _(@jkorenman)_.
- **Lottie** — Vector animation framework. Saved: [Lottielab templates](https://www.lottielab.com/templates) and a [circle-to-bento Lottie transition](https://x.com/darel023/status/2031356158628217107), a clean motion reference connecting geometric forms to a bento-layout reveal _(Daryl Patigas, @darel023)_.
- **Emil Kowalski's resources** — Advanced UI animation techniques. See [Animations on the Web](https://animations.dev/) and the [mobile native-feel details](https://x.com/emilkowalski/status/2087150812761858367) above.
- [Codrops Hub](https://tympanus.net/codrops/hub/) — Experimental web design interactions.
- [Codrops Infinite Canvas tutorial](https://tympanus.net/Tutorials/InfiniteCanvas/) — Saved without a note; the path names an infinite-canvas tutorial.
- [Transitions.dev](https://transitions.dev/) — Copy-ready web UI transitions with CSS and React implementations, plus an agent skill for Claude, Cursor and Codex, installed with `npx skills add Jakubantalik/transitions.dev`. The repository does not currently declare a licence, so check its terms before copying or vendoring code.
- [Details That Make Interfaces Feel Better](https://x.com/jakubkrehel/status/2031414681043186004) — A focused resource on high-leverage interaction polish. _(@jakubkrehel)_
- [Polish through small UI details](https://x.com/adamwathan/status/2031805167796998430) — A practical before-and-after reference for cumulative interface refinement. _(@adamwathan)_
- [Tab choreography with anticipatory motion](https://x.com/msllrs/status/2050483859070808312) — Breaks a tab transition into small signals: the active pill leans toward the hovered target, icons compress on press, the label enters with slight blur, and only dividers along the pill's path disappear. _(matt, @msllrs)_
- [Proximity-driven cursor interactions](https://x.com/gabriell_lab/status/2060336070059864461) — Maps cursor distance to nearby elements' scale and tone, giving a continuum instead of a binary hover state. _(Gabriel, @gabriell_lab)_
- [Navigation animation showcase](https://x.com/koppkev/status/2100106559011352585) — A compact reference for an animated navigation treatment. _(@koppkev)_
- [Smooth transition video](https://x.com/DailyBlondess/status/2100077195553276107) — A transition reference for motion and editing inspiration; little context beyond the clip. _(@DailyBlondess)_
- [Login-to-dashboard transition](https://x.com/kairevicius/status/2034238200990855366) — A motion pattern that keeps continuity between authentication and app state. _(@kairevicius)_
- [Cavalry](https://cavalry.studio/en/) — Real-time 2D animation tool for procedural rigs, generative motion, data-driven sequences, text animation, dynamics and Lottie export on macOS and Windows. The official site says it is free for individuals. _(found via Talley, @__Talley__)_

### Typography and type systems

- [Typography Principles](https://typographyprinciples.obys.agency/) — Design methodology.
- **Type-01 Magazine** — A typography-focused publication. Saved specimens: [ALT Gumbo typeface](https://x.com/type01_/status/2031977740287496446), a high-contrast neo-grotesque, and [T1 Zirbal variable type system](https://x.com/type01_/status/2033074215100784802), spanning multiple widths and weights. _(@type01_)_
- [Josh Puckett's font collection](https://joshpuckett.me/locale) — Curated typography. Saved as "fonts".
- **Alt Fonts** — Alternative typeface exploration. No link saved.
- [Typography color and grid fundamentals](https://x.com/Olianishka/status/2029860600487051646) — A durable learning resource built on fundamentals rather than trends. _(Olha Olianishyna, @Olianishka)_
- [Fonttrio shadcn font-pair registry](https://x.com/kapish_dima/status/2030354980394430579) — A reusable font-pairing and setup collection for shadcn and Next.js projects. _(KapishDima, @kapish_dima)_
- [Geist Mono at small mobile sizes](https://x.com/almonk/status/2024935498322411977) — A typography reference for terminals and compact iPhone UI. _(almonk, @almonk)_
- [Pretext high-performance web typography](https://x.com/JoshKale/status/2037900758750761053) — A layout library that flows text around images, into columns and through arbitrary shapes at interactive speed. _(@JoshKale)_
- [SVGL](https://svgl.app/) — SVG logo collection. Saved as "logos svgs".
- [theSVG](https://thesvg.org/) — A broad brand-SVG library, and a more durable entry point than one-off icon-result links.
- [Lissajous Curve SVG Generator](https://lissajous.ky.fyi/) — A small, distinctive SVG-generation utility.

### Colour and palettes

- [Coolors](https://coolors.co/000000-2a1a1f-764134-ad8350-afa060) — Colour palette generator. The saved URL is a five-colour palette.
- **ColorAI** — AI-powered colour selection. No link saved.
- **Impeccable.style** — Aesthetic style prompts. No link saved.
- [OKLCH](https://oklch.fyi/) — Saved without a note; the domain points to OKLCH colour.
- [Color picker](https://x.com/tbsrnstrm/status/2043275391087849957) — Saved under the label "color picker". _(@tbsrnstrm)_

### 3D, particles and shader effects

- [Poly.app](https://poly.app/) — 3D model library.
- [Cobe](https://cobe.vercel.app/) — WebGL globe implementation. Saved as "webgl globe".
- [3DSVG.design](https://3dsvg.design/) — 3D SVG design.
- [Studio Morflax 3D upload](https://studio.morflax.com/objects/upload) — 3D model uploading. Saved as "3d models upload".
- [Casberry particles](https://particles.casberry.in/) — Particle effects. Saved under the label "3d".
- [Particles post](https://x.com/spottedinprod/status/2033611347242504326) — Saved under the label "particles". _(@spottedinprod)_
- [Particle typography](https://x.com/alibey_10/status/2034303164141179388) — Saved under that label. _(@alibey_10)_
- [Timefold](https://github.com/SuveenE/timefold) — Saved as "gausian splat gallery".
- [Gaussian splatting post](https://x.com/i/status/2035030640299536827) — Saved under the label "gausian splatting".
- [Open-source 4D splats in PlayCanvas](https://x.com/willeastcott/status/2039660562800423362) — The primary integration reference for streaming temporal Gaussian splats in a web engine. _(@willeastcott)_
- [Fisheye Gaussian splatting in PlayCanvas](https://x.com/ValigurskyM/status/2039723464198590878) — Renders a 180-degree field of view inside a browser splat scene. _(@ValigurskyM)_
- [Playable multiplayer Gaussian-splat world](https://x.com/arrival_space_/status/2038967332593078662) — Combines scanned reality, board physics, multiplayer and remixing. _(@arrival_space_)_
- [Basement Shader Lab](https://eng.basement.studio/tools/shader-lab) — A browser compositor for stacking, animating and exporting WebGPU and Three.js shader effects; its open-source package can carry a composition into a React scene as post-processing; it needs browser WebGPU support. _(@basementstudio)_
- [Interactive Three.js learning guide](https://x.com/hasan_ab_hasan/status/2038662746598723907) — Hands-on browser playgrounds covering geometry, materials, cameras, lighting, controls and post-processing. _(@hasan_ab_hasan)_
- [Liquid Glass Editor](https://liquidglasseditor.vercel.app/) — Saved as "liquid glass".
- [Liquid glass in CSS and SVG](https://kube.io/blog/liquid-glass-css-svg/) — A kube.io blog post, saved under the label "liquid glass".

### Galleries and inspiration

Treat these as inspiration queues, not accessibility or production-quality guarantees.

- [Awwwards annual awards 2025: ecommerce site of the year](https://www.awwwards.com/annual-awards-2025/ecommerce-site-of-the-year) — Awwwards is a design awards and showcase site. The note carries the hint "icon hover over name".
- [CSS Design Awards](https://www.cssdesignawards.com/) — Frontend design focus. Its account posted the [SUTERA website by Okey Studio](https://x.com/cssdesignawards/status/2034177980222869639), a web-design reference with a canonical project link. _(@cssdesignawards)_
- [A1.Gallery](https://www.a1.gallery/) — A gallery of websites, saved as "best websites around".
- [The Brand Identity: tarot universe for Netflix](https://the-brandidentity.com/project/los-york-builds-a-tarot-universe-for-netflixs-biggest-global-campaign) — Brand and design studio work. Saved as "tarot cards design".
- [Cargo templates](https://cargo.site/templates) — Portfolio platform with templates.
- [Beautiful UI interaction gallery](https://beautiful-ui-five.vercel.app/) — A compact visual reference of polished web-interface treatments. _(via @suraj_sharma14)_
- [Details: inspo](https://www.details.so/inspo) — Saved without a note.
- [Details: vault](https://www.details.so/vault) — Saved without a note.
- [Rare UI components](https://www.rareui.com/components) — Saved without a note.
- [Cuelume](https://cuelume-site.pages.dev/) — Saved without a note.
- [High-signal web design reference directories](https://x.com/craftworkdesign/status/2039656294676664515) — An index of curated galleries for heroes, footers, navbars, CTAs, portfolios and interaction details. _(@craftworkdesign)_
- [Design inspiration directory list](https://x.com/UiSavior/status/2021218205109195223) — A compact list spanning web, SaaS, navigation, CTA, animation, apps, brands, icons and systems. _(UI/UX Savior, @UiSavior)_
- [Rotimi Design](https://www.rotimi.design/) — Product-design portfolio and inspiration source.
- [Curated Supply](https://www.curated.supply/) — Curated design-supply and inspiration reference.
- [Spatial by 44xdesign](https://www.44xdesign.com/spatial) — Spatial-interface reference.
- [Flipbook](https://flipbook.page/) — Interaction and presentation reference built around flipbook-style pages.
- [macOS 27 concept](https://macos27.kimi.page/) — Visual inspiration, not a platform or roadmap reference.
- [Something Big: New York](https://somethingbig.ai/world/) — An interactive city and world experience, kept for art direction and interface inspiration.
- [Choosing Keeping](https://choosingkeeping.com/) — A Covent Garden stationery shop and design reference spanning paper, writing tools, art materials, office and archival objects, and considered retail presentation. Product and material inspiration.

### Portfolios and sites

- **Ricky Zhang** — Immersive interactive portfolio. No link saved.
- [Soren Blank: small card micro-animation](https://sorenblank.com/snippets/small-card-micro-animation) — Refined components and interactions.
- [Dany.works](https://dany.works/) — Contemporary design direction. Saved as "cool portfolio website".
- **Athas.dev** — Developer and designer hybrid work. No link saved.
- [Nor.ma](https://nor.ma/) — Saved as "portfolio website".
- [Diana Lu: point-n-talk](https://diana.lu/point-n-talk) — Saved as "portfolio website".
- [Oryzo.ai](https://oryzo.ai/) — Saved as "beautiful website".
- [Fluid](https://fluid.glass/) — Saved as "beautiful real estate website".
- [Vizcom](https://vizcom.com/) — Saved as "hero design".
- [Breakthrough Energy](https://www.breakthroughenergy.org/) — Saved as "another hero".
- [Oxide Computer](https://oxide.computer/) — Saved as "cool web ui theme".
- [Sam Spratt's rabbit-hole portfolio architecture](https://samspratt.com/skulls/skulls) — Spratt designed the site so a simple artwork becomes an entry point into linked works, collections, people, psalms, contributions and their relationships. A strong information-architecture reference for portfolios that reward exploration without flattening everything into a gallery grid. _(@SamSpratt)_

### Historic and editorial references

- [Postcard design](https://x.com/spottedinprod/status/2031078963280326799) — Saved under that label. _(@spottedinprod)_
- [Karuselli Swivel Chair by Yrjö Kukkapuro, 1960's](https://x.com/interiorsuckerr/status/2033906701359845529) — Saved with that caption. _(@interiorsuckerr)_
- [Polish Solaris poster lettering](https://x.com/Posteritati/status/2031746182796521701) — 1972 hand-cut typography by Andrzej Bertrandt. _(@Posteritati)_
- [Bloomberg Businessweek cover and opener](https://x.com/enigmatriz/status/2032828222337863941) — An editorial and motion-design reference. _(@enigmatriz)_
- [Punto de Inflexion opening system](https://x.com/aescripts/status/2031357184924176810) — A motion case that derives an entire visual language from a circle. _(@aescripts)_
- [3x3 Leuchtstabe light work](https://x.com/Noahbolanowski/status/2031891512225562964) — A physical-light installation by Sebastian Hempel. _(@Noahbolanowski)_
- [Midjourney studio renders with style codes](https://x.com/TweetsByTBI/status/2032215164800655388) — A reusable art-direction recipe for clean modern-tech object renders. _(@TweetsByTBI)_
- [VariantUI gadget render style code](https://x.com/bnj/status/2032194346632839279) — Reusable style-reference code for consistent product-object imagery. _(@bnj)_
- [Kimi K3 one-shot WebGL landing page](https://x.com/KilianW146391/status/2078936950992675210) — A generated-design benchmark combining a modelled 3D scene with scroll-triggered WebGL motion. The claimed one-shot cost is anecdotal. _(Killian, @KilianW146391)_

### Unannotated gallery links

Saved without a note; unresolved references.

- [inspora.design](https://www.inspora.design/)
- [ui.spectrumhq.in](https://ui.spectrumhq.in/)
- [loading.dev](https://loading.dev/)

## Related

[[Design Thinking]] · [[Design Resources]] · [[Bookmarks - Design & Frontend]] · [[Bookmarks - Media & Inspiration]] · [[Bookmarks - Developer Tools]] · [[Compositor]] · [[Youtube]] · [[X-Bookmarks]] · [[Developer_Resources|Developer Resources]] · [[Philosophy_and_Meaning|Philosophy & Meaning]] · [[Thoughts_and_Observations|Thoughts and Observations]] · [[Thoughts & Observations]]
