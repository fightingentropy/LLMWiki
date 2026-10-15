---
title: Bookmarks - Design & Frontend
type: source
domain: dev
sources:
  - snapshots/1790804551519-8f428ba1884a/bookmarks/Design & Frontend.md
  - bookmarks/Design & Frontend.md
  - clippings/bookmark-updates-2026-09-22/Design & Frontend.md
  - snapshots/1790106580663-52486e8a0a4c/bookmarks/Design & Frontend.md
related:
  - Evergreen Lessons from X - September 2026
  - Design Thinking
  - X-Bookmarks
  - Design & Aesthetics
  - Compositor
  - Developer Resources
  - Personal Knowledge Management
  - Design Resources
  - Bookmarks - AI & Agents
  - Bookmarks - Developer Tools
  - Bookmarks - Media & Inspiration
created: '2026-09-22'
updated: '2026-10-15'
tags:
  - bookmarks
  - september-2026
  - design
  - frontend
  - motion
  - image-editing
  - references
  - typography
  - webgl
  - components
review_status: archive
summary: "Every saved design and frontend link by theme: interface polish, motion, components, typography, WebGL, splats, AI design workflows and galleries."
---

# Bookmarks - Design & Frontend

This category is Erlin's design and frontend reference library: interface polish and motion examples, component libraries, type specimens, Three.js, WebGL and Gaussian-splat demos, AI-assisted design workflows, and inspiration directories. The strongest material is the practical polish writing (Jakub Krehel, Adam Wathan, Emil Kowalski, shadcn's QA checklist), the shader and splat demos that ship with source, and the DESIGN.md workflows for keeping agent-built pages on one visual language. Recurring authors are @d__raptis, @AliGrids, @radbar_1, @dmvrg, @AhmedShahnab, @Aurelien_Gz, @type01_ and @robbietilton.

Most entries are X posts. Use them as references for hierarchy, feedback and craft; a polished clip does not establish accessibility, platform support or a usable licence. Older X bookmarks on the same subjects are in [[X-Bookmarks]], and the wider design reading is in [[Design_and_Aesthetics|Design & Aesthetics]] and [[Design Resources]].

## Interface polish and microinteractions

Small details that make an interface feel finished. Treat them as a review checklist, not universal rules, and test against platform conventions, reduced motion and real devices.

- [Details That Make Interfaces Feel Better](https://x.com/jakubkrehel/status/2031414681043186004) — Focused resource on high-leverage interaction polish. _(@jakubkrehel)_
- [Polish through small UI details](https://x.com/adamwathan/status/2031805167796998430) — Before-and-after examples of how small refinements add up across an interface. _(@adamwathan)_
- [Small details that make mobile interfaces feel native](https://x.com/emilkowalski/status/2087150812761858367) — Emil Kowalski collects interaction details, including motion and touch behaviour, that improve how well an app fits its platform. Credited in the note to [Animations on the Web](https://animations.dev/). _(@emilkowalski)_
- [Tab choreography with anticipatory motion](https://x.com/msllrs/status/2050483859070808312) — Matt breaks a polished tab transition into small coordinated signals: the active pill leans toward the hovered target, icons compress on press, the label enters with slight blur, and only the dividers along the pill's path disappear. Reuse selectively; hover-driven parts need a touch-input fallback. _(@msllrs)_
- [Proximity-driven cursor interactions](https://x.com/gabriell_lab/status/2060336070059864461) — Gabriel maps cursor distance to nearby elements' scale and tone, giving a responsive continuum instead of a binary hover state. A compact pattern to borrow. _(@gabriell_lab)_
- [Playful logo-hover animation](https://x.com/d__raptis/status/2025136971979653149) — Jim Raptis adds delight to a brand mark with a hover microinteraction. _(@d__raptis)_
- [Flutter streak indicator polish](https://x.com/pomis172/status/2031438309201731642) — Microinteraction reference for habit and progress UI, built in Flutter. _(@pomis172)_
- [Toggle-pill component](https://x.com/zzzzshawn/status/2031640056696582500) — Focused component and motion reference for a toggle pill. _(@zzzzshawn)_
- [Receipt Printer interaction](https://x.com/insporadesign/status/2087475430865383598) — A physical-receipt-inspired interface by dqnamo, shared by Inspora: tactile motion, constrained typography and skeuomorphic feedback. Borrow the idea rather than the execution; check keyboard access and printing assumptions. _(@insporadesign)_

## Interaction patterns and UX ideas

Ideas about how an interface behaves, not just how it looks.

- [Teach a mechanism by letting the user change it](https://x.com/RyanSael/status/2102591147927654847) — A camera-focus lab where a person changes parameters and sees the consequence. The lesson for any explanation: expose the inputs, the assumptions and clear readouts. Open the [camera-focus lab example](https://sael.net/plane-of-focus/). The lab's physical accuracy and the post's model, cost and one-shot claims are unverified; the lesson is drawn out in [[Evergreen Lessons from X - September 2026]]. _(@RyanSael)_
- [Conversation minimap for support chat](https://x.com/raunofreiberg/status/2031794945896378820) — A minimap pattern for navigating long support conversations. _(@raunofreiberg)_
- [Rabbithole branching learning canvas](https://x.com/shloked/status/2074214043997605972) — Shlok Khemani's alternative to linear chat: questions branch spatially from selected material, so deep side explorations do not lose the main learning path. _(@shloked)_
- [Dispatch an autonomous ride before destination entry](https://x.com/pbeisel/status/1915149302638498044) — An autonomous fleet can start sending an available vehicle as soon as the rider taps “Pick Me Up”, then collect the destination en route, because a vehicle is less sensitive to the destination than a human driver. A latency-hiding pattern, limited by routing, safety, pricing, service-area and cancellation rules. _(@pbeisel)_
- [Hand-shielded reveal interface](https://x.com/om_patel5/status/2068904351821623518) — Om Patel's native iOS privacy interaction reveals only the content under the user's hand, using multitouch detection and no camera access. _(@om_patel5)_
- [Ink: a Chinese calligraphy art and learning interface](https://x.com/benlaudesign/status/2082434477536530619) — Ben Lau's prototype combines free writing and character tracing with stroke-order teaching, plain, grid and scroll surfaces, and controls for ink weight, wetness, speed, formality and generative seed. A strong reference for making a physical craft explorable without crowding the canvas. _(@benlaudesign)_
- [Writer Markdown editor diagram presentation](https://writer.computer/) — Joel's Writer puts Mermaid diagrams and charts into a Markdown editor without them feeling bolted on. Interaction and presentation inspiration; the post gives no implementation recipe. _(@joelbqz)_
- [Research-grade medical AI workflow](https://x.com/ivanboroja/status/2032084946823573787) — Context-aware research interface with section-level statistical guidance. _(@ivanboroja)_

## Motion and animation

Motion examples and techniques, including Rive and Framer work. Plan reduced-motion fallbacks for anything borrowed from here.

- [Navigation animation showcase](https://x.com/koppkev/status/2100106559011352585) — Compact reference for an animated navigation treatment. _(@koppkev)_
- [Login-to-dashboard transition](https://x.com/kairevicius/status/2034238200990855366) — A motion pattern that keeps continuity between signing in and the app state that follows. _(@kairevicius)_
- [Smooth minimal website animations](https://x.com/d__raptis/status/2040342925658521858) — Reference for restrained motion and polished interaction design. _(@d__raptis)_
- [Smooth transition video](https://x.com/DailyBlondess/status/2100077195553276107) — Visual transition reference for motion and editing inspiration; the post has little searchable context beyond the clip. _(@DailyBlondess)_
- [AIM smooth-scroll website](https://x.com/LenisSmooth/status/2032483032729272794) — Credited website reference for controlled scroll motion. _(@LenisSmooth)_
- [Spring overshoot along CSS motion paths](https://x.com/motiondotdev/status/2031370992237334685) — Motion's `offsetPath` and `offsetDistance` technique that leaves room for spring overshoot along a path. _(@motiondotdev)_
- [Unicode Braille UI animation](https://x.com/AliGrids/status/2033002433753002390) — Unusual, lightweight technique that uses Unicode Braille characters for textured, terminal-like motion. _(@AliGrids)_
- [Proof agentic document-editor hero](https://x.com/lucas__crespo/status/2031796027599306874) — Product-motion reference: the hero for Proof, an agentic document editor. _(@lucas__crespo)_
- [Faux 3D in Rive](https://x.com/radbar_1/status/2031255940729622590) — Lightweight technique for spatial motion in Rive. _(@radbar_1)_
- [Sci-fi components in Rive](https://x.com/radbar_1/status/2033138118665150601) — Reusable motion-interface inspiration built in Rive. _(@radbar_1)_
- [Sand-writing effect in Rive](https://x.com/hansonerere2/status/2038994818979037448) — How to make granular handwriting and reveal effects in Rive. _(@hansonerere2)_
- [Skeuomorphic After Effects plugin UI](https://x.com/jkorenman/status/2031185987859079626) — Rive reference for responsive, data-bound desktop controls. _(@jkorenman)_
- [Framer interaction rebuild tutorial](https://x.com/learnframer/status/2031323252384268755) — Framer University shows, step by step, how a difficult interaction is rebuilt from scratch. _(@learnframer)_

## Components and design systems

Libraries, registries and galleries to borrow from. Check licence, dependencies, accessibility, maintenance and bundle cost before reusing any component.

- [OpenSourceUI interaction-pattern gallery](https://x.com/BidyutKundu12/status/2095873776500232389) — Bidyut's [opensourceui.in](https://opensourceui.in/) collects open-source interface components and motion patterns; an implementation and inspiration reference. _(@BidyutKundu12)_
- [UI component-library directory](https://x.com/codebydinil/status/2099719772871209209) — Curated component and motion resources, including libraries.dev, transitions.dev, ASTRYX and React collections. _(@codebydinil)_
- [How shadcn curates component quality](https://x.com/shadcn/status/2019108736904884540) — shadcn's design-system QA checklist for spacing, animation, themes, typography and icons at scale. _(@shadcn)_
- [Spell UI component collection](https://x.com/tomm_ui/status/2029502240709550311) — Collection of polished components for modern interfaces. _(@tomm_ui)_
- [Next.js design-system resource](https://x.com/tom_doerr/status/2031249458910916659) — Reusable design-system resource for Next.js applications, shared by Tom Dörr. _(@tom_doerr)_
- [CSS squircle components](https://x.com/AliGrids/status/2032008241446801840) — CSS technique for softer, squircle-shaped component geometry. _(@AliGrids)_
- [Neumorphic UI components](https://x.com/AliGrids/status/2031959590041239696) — Material and component-style reference for neumorphic UI. _(@AliGrids)_
- [Custom dials with ChromaDial](https://x.com/sinasamaki/status/2032921770437538033) — Tutorial on building polished custom dial controls with ChromaDial. _(@sinasamaki)_

## Typography

Type specimens, pairing and layout tools, and fundamentals.

- [Typography color and grid fundamentals](https://x.com/Olianishka/status/2029860600487051646) — Olha Olianishyna's design-learning resource built on fundamentals (typography, colour, grids) rather than trends. _(@Olianishka)_
- [Two typography resource sites](https://x.com/vansh1029/status/2033173872909209669) — Two font-discovery sites for web typography. _(@vansh1029)_
- [Fonttrio shadcn font-pair registry](https://x.com/kapish_dima/status/2030354980394430579) — Font pairings with their setup, packaged for shadcn and Next.js projects. _(@kapish_dima)_
- [Pretext high-performance web typography](https://x.com/JoshKale/status/2037900758750761053) — Layout library that flows text around images, into columns and through arbitrary shapes at interactive speed. _(@JoshKale)_
- [Geist Mono at small mobile sizes](https://x.com/almonk/status/2024935498322411977) — Geist Mono at small sizes in terminals and compact iPhone UI. _(@almonk)_
- [ALT Gumbo typeface](https://x.com/type01_/status/2031977740287496446) — Specimen of a high-contrast neo-grotesque typeface. _(@type01_)_
- [T1 Zirbal variable type system](https://x.com/type01_/status/2033074215100784802) — Type specimen spanning multiple widths and weights. _(@type01_)_
- [Xilem variable-font editor](https://x.com/eliheuer/status/2031241314097037571) — Eli Heuer's promising open font-production tool, with transform controls and OpenType support. _(@eliheuer)_
- [Black-and-white type hierarchy study](https://x.com/happydesign_/status/2031279314109673530) — Exploration of hierarchy through scale and contrast, in black and white only. _(@happydesign_)_
- [Exploratory typography board](https://x.com/SesoHQ/status/2031094760656744675) — Study of distortion, skew, perspective and expressive type. _(@SesoHQ)_
- [ASCII web section](https://x.com/praveenisomer/status/2032418900298887633) — Distinctive ASCII typographic treatment for a web section. _(@praveenisomer)_
- [Interactive p5.js vortex typography](https://x.com/vamsibatchuk/status/2031192210037751990) — Vamsi Batchu's creative-coding piece in p5.js, with controls for font, speed, text and vortex. _(@vamsibatchuk)_
- [Fluid-to-structured WebGL typography](https://x.com/Sirokos/status/1813690513704583491) — Interaction that turns fluid shader forms into readable Three.js text. _(@Sirokos)_

## AI-assisted design

Workflows for getting better interfaces out of generative tools. Cost, quality and one-shot claims in these posts are self-reported.

- [Image-gen first, then implement from the screenshot](https://x.com/anshuc/status/2068051570319933582) — Anshu reports better AI-built interfaces from generating the visual direction first and then asking the coding model to reproduce that screenshot, instead of designing from a blank prompt. _(@anshuc)_
- [DESIGN.md catalog for coding agents](https://getdesign.md/) — getdesign.md publishes analyses of real sites covering colour, typography, spacing, components and the reasoning behind them, so agent-built pages stay within one visual language. Adapt rather than copy a brand's protected identity or assets. _(via @mann_idan)_
- [Google Stitch DESIGN.md export](https://x.com/_davideast/status/2034427349010121153) — Design-system workflow that turns work generated in Google Stitch into a portable DESIGN.md specification. _(@_davideast)_
- [Figma → Codex → Figma avatar workflow](https://x.com/NateWatkin/status/2082068768914632825) — Start with a simple Figma orb, then ask Codex: “I want to generate some default avatars for an app. I created this quick mockup in Figma but I want to turn it into an image that feels more real — orb-like with dimension, texture and layers.” Finish in Figma with a duplicated layer in Screen blend mode at 65% opacity. Generation supplies the texture; the designer keeps composition and finishing. _(@NateWatkin)_
- [VariantUI Style Dropper](https://x.com/bnj/status/2021330958671380625) — Ben South's tool that transfers the visual character of a reference into new interfaces. _(@bnj)_
- [VariantUI generation gallery](https://x.com/hckmstrrahul/status/2030729762298277970) — Gallery of generated-interface patterns and visual exploration. _(@hckmstrrahul)_
- [Design vibe receipt](https://x.com/yanliudesign/status/2069982591311303156) — Yan Liu's playful Claude Design artifact combining hand-drawn doodles, passport stamps, sticky tape and handwritten notes. _(@yanliudesign)_
- [Kimi K3 one-shot WebGL landing page](https://x.com/KilianW146391/status/2078936950992675210) — Generated-design benchmark: a modelled 3D scene with scroll-triggered WebGL motion. _(@KilianW146391)_
- [OpenDesign Harness](https://x.com/OpenDesignHQ/status/2096923399792595438) — Vendor announcement of a design-generation strategy meant to produce more complete results with fewer prompts and tokens; its quality, cost and survey results are the vendor's own. _(@OpenDesignHQ)_
- [Google Pomelli product Photoshoot](https://x.com/GoogleLabs/status/2024529795548102667) — Google Labs' generative product-photography tool, for marketing and visual prototyping. _(@GoogleLabs)_
- [Fuser Compositor architecture workflow](https://x.com/fuserstudio/status/2031037293189120167) — Sketch-to-render workflow in Fuser for fast architectural visualisation. _(@fuserstudio)_
- [TITLES artist-model creative studio](https://titles.xyz/) — Image and video studio built around models trained and offered by individual artists, with the platform promising attribution and compensation when their styles are used. Those claims are vendor-stated; check each model's training consent, licence, output rights and terms before production use. _(@titlesxyz)_

## Design, image and motion tools

Standalone tools for image editing, SVG, motion and mockups.

- [Compositor open-source image editor](https://x.com/robbietilton/status/2100946395972976843) — [Compositor](https://robbietilton.com/compositor) is presented as a free, open-source, 12 MB Photoshop-like editor focused on essential compositing tools. Check the repository, platform support, file compatibility and licence before adopting it. More on [[Compositor]]. _(@robbietilton)_
- [Compositor v1.1](https://x.com/robbietilton/status/2101714382665519192) — Follow-up release of the same editor, adding a text tool, layer effects and smaller improvements. _(@robbietilton)_
- [Cavalry procedural motion-design software](https://cavalry.studio/en/) — Real-time 2D animation tool for procedural rigs, generative motion, data-driven sequences, text animation, dynamics and Lottie export, on macOS and Windows. The official site says it is free for individuals; confirm account and usage terms before building a workflow on it. _(via @__Talley__)_
- [Basement Shader Lab](https://eng.basement.studio/tools/shader-lab) — Browser compositor for stacking, animating and exporting WebGPU and Three.js shader effects; its open-source package carries a composition into a React scene as post-processing. Check WebGPU browser support and generated-code performance on the target device. _(@basementstudio)_
- [Ultramock cinematic UI mockups](https://x.com/joshmillgate/status/2038786557772005793) — Browser tool for quickly producing polished, cinematic presentations of an interface. _(@joshmillgate)_
- [Figsor Figma-to-animated-SVG workflow](https://x.com/akbuilds_/status/2033689709377978648) — Practical bridge from static Figma assets to reusable animated SVG for the web. _(@akbuilds_)_
- [Lissajous Curve SVG Generator](https://lissajous.ky.fyi/) — Small, distinctive utility that generates Lissajous-curve SVGs.
- [theSVG](https://thesvg.org/) — Broad library of brand SVGs; a more durable entry point than one-off icon search results.

## Native and mobile interfaces

iOS, macOS and mobile references. Confirm what the platform actually supports before designing around a concept clip.

- [Animated boarding pass in Apple Wallet](https://x.com/heydamir/status/2094779813072363554) — Damir's boarding-pass concept combines familiar Wallet hierarchy with animated visual details. Confirm real PassKit capabilities, and keep motion from obscuring travel-critical information. _(@heydamir)_
- [Progressive-blur header and footer for Expo](https://x.com/davidmokos_/status/2082582252110643643) — David Mokos's reusable feathered blur softens the edge between scrolling content and fixed header and footer chrome. Install with `npx shadcn@latest add davidmokos/beautiful-expo/progressive-blur`; test platform support, reduced-transparency behaviour and scroll performance on older devices first. _(@davidmokos_)_
- [React Native WebGPU animation reference](https://x.com/reactiive_/status/2040511285998313827) — Mobile animation built on WebGPU instead of ordinary view-layer animation. _(@reactiive_)_
- [SwiftUI Apple TV animated carousel](https://x.com/_Kavsoft/status/2032945324273316024) — Apple TV-style animated carousel built natively in SwiftUI as a ScrollView. _(@_Kavsoft)_
- [iOS 1 Cover Flow recreation](https://x.com/Aurelien_Gz/status/2033957588832784457) — Implementation and motion reference recreating Cover Flow, a classic interface. _(@Aurelien_Gz)_
- [Expanded artwork on macOS](https://x.com/henrikruscon/status/2034267541632127185) — Native media-interface reference showing expanded artwork on macOS. _(@henrikruscon)_
- [Glass web effects and macOS dock](https://x.com/EthanLipnik/status/2033061798887436382) — Glass treatments and dock behaviour. _(@EthanLipnik)_
- [Brink liquid-glass folders](https://x.com/gow88_/status/2034164388039622914) — How to give liquid-glass UI objects, here folders, physical behaviour. _(@gow88_)_
- [Dark-mode podcast player reference](https://x.com/disarto_max/status/2018011472173904307) — Playback hierarchy, controls and dark-mode treatment in a podcast player. _(@disarto_max)_
- [Desktop-to-mobile pixel-art UI adaptation](https://x.com/shaderism/status/2031393534012526935) — How a dense pixel-art tool was compressed into a usable mobile layout. _(@shaderism)_
- [macOS 27 concept](https://macos27.kimi.page/) — A macOS 27 concept page; visual inspiration, not a platform or roadmap reference.
- [iPhone keypad typo complaint](https://x.com/kenzietuff/status/2097721435045151081) — Anecdotal product friction: one user perceives a change in iPhone typing accuracy. A UX signal, not evidence of a documented keypad change. _(@kenzietuff)_

## Websites and portfolios

Sites and portfolio concepts to study for structure, navigation and art direction.

- [Sam Spratt's rabbit-hole portfolio architecture](https://samspratt.com/skulls/skulls) — Spratt built his site so one artwork leads into linked works, collections, people, psalms, contributions and their relationships. An information-architecture reference for portfolios that reward exploration instead of flattening everything into a gallery grid. _(@SamSpratt)_
- [Hand-controlled macOS portfolio](https://x.com/emili_iv/status/2031451625307394258) — Framer portfolio that combines gesture input with desktop metaphors. _(@emili_iv)_
- [iOS 14 Safari portfolio interface](https://x.com/vldsvrk/status/2069098069459943921) — Vlad's portfolio presented as an iOS 14 Safari interface with a liquid-glass treatment. _(@vldsvrk)_
- [Unique portfolio interaction](https://x.com/d__raptis/status/2032748379558785510) — Portfolio-navigation inspiration. _(@d__raptis)_
- [Claude-built 3D gallery prototype](https://x.com/Aurelien_Gz/status/2031458793611993526) — Spatial portfolio prototyped with Claude; a reference for both 3D galleries and rapid prototyping. _(@Aurelien_Gz)_
- [Three.js infinite gallery reference](https://x.com/curllmooha/status/2031378867366273058) — Vipin Pathak's infinite gallery in Three.js, for spatial gallery and portfolio interfaces. _(@curllmooha)_
- [Rotimi Design](https://www.rotimi.design/) — Product-design portfolio and inspiration source.
- [SUTERA website by Okey Studio](https://x.com/cssdesignawards/status/2034177980222869639) — Credited web-design showcase with a link to the project. _(@cssdesignawards)_
- [Grid-led Framer experiments](https://x.com/creativemints/status/2031775666106970606) — Framer examples of grid structure and content planning in web composition. _(@creativemints)_
- [Remixable explosive-gradient hero](https://x.com/arynadesigns/status/2031599362149855451) — Hero treatment built in Framer and Unicorn Studio, with remix source. _(@arynadesigns)_
- [Original footer interaction](https://x.com/Tony_dsgn/status/2031922111145464287) — Footer-composition reference. _(@Tony_dsgn)_
- [Flipbook](https://flipbook.page/) — Interaction and presentation reference built around flipbook-style pages.
- [Something Big — New York](https://somethingbig.ai/world/) — Interactive city and world experience, for art direction and interface inspiration.

## Brand, identity and information design

- [Munich 1972 Olympic information design](https://x.com/stallboerger/status/2086428724417740868) — Tickets, passes, schedules, pictograms, restrained typography and event-specific colours form a coherent system that stays legible across many formats. A reference for modular grids, multilingual hierarchy, wayfinding, and identity expressed through rules rather than decoration. _(@stallboerger)_
- [Dawn mental-health AI brand and web](https://x.com/hunterthompson/status/2031405605752295922) — Credited case study spanning strategy, brand, web, motion and implementation for a mental-health AI product. _(@hunterthompson)_
- [Thirtytwo visual identity](https://x.com/rebrandgallery/status/2032415413523407150) — Identity and motion work by YEAHNICE. _(@rebrandgallery)_
- [Shopify Renaissance Edition](https://x.com/awwwards/status/2031038602046525921) — Awarded case combining generative paintings with product-update storytelling. _(@awwwards)_
- [Paper visuals for Stripe annual letter](https://x.com/paper/status/2032199109206274243) — Credited case study: visuals for Stripe's annual letter made in Paper with filters, image tools and a CMYK halftone shader. _(@paper)_
- [Tile-pattern branding effect](https://x.com/arlanoska/status/2085028305364037816) — Arlan turns a small brand mark into a repeating tile that becomes a more dimensional background or identity surface, and links reusable code through the post. Check contrast and rendering cost before production use. _(@arlanoska)_
- [Choosing Keeping](https://choosingkeeping.com/) — Covent Garden stationery shop covering paper, writing tools, art materials, office and archival objects, with considered retail presentation. A product and material reference.

## Data visualisation and dashboards

- [Prediction-market dashboard redesign](https://x.com/notnotstorm/status/2032139206869622937) — Visualisation pattern for navigating high-dimensional market data. _(@notnotstorm)_
- [Global market analytics dashboard](https://x.com/masuderrahaman9/status/2031656573668614245) — Dense-data dashboard layout reference. _(@masuderrahaman9)_
- [EvilCharts design-first chart components](https://evilcharts.com/docs) — Open-code gallery of opinionated, animated chart components built with shadcn/ui, Recharts, SVG and Motion. A copyable visual and interaction reference, not a new charting engine. _(via @legionsdev)_
- [USGS river-flow WebGL visualization](https://x.com/AhmedShahnab/status/2031346836577898885) — Shahnab Ahmed's data-visualisation stack and shader treatment that turns live river-flow data into an expressive display. _(@AhmedShahnab)_
- [Interactive Morse-code binary tree](https://x.com/AhmedShahnab/status/2032790596729938286) — Data-visualisation build combining R3F (React Three Fiber) and Web Audio. _(@AhmedShahnab)_
- [StonkRider: ride a stock chart](https://stonkrider.com/) — Free browser game that maps a chosen stock or crypto price series into motocross terrain; a memorable example of turning ordinary time-series data into play. _(via @hrdktwt)_

## 3D, WebGL and shaders

Browser 3D and shader work, much of it with live demos or source.

- [Interactive Three.js learning guide](https://x.com/hasan_ab_hasan/status/2038662746598723907) — Hands-on browser playgrounds covering geometry, materials, cameras, lighting, controls and post-processing. _(@hasan_ab_hasan)_
- [Fast GPU erosion filter with source](https://x.com/runevision/status/2038902062251970679) — Excellent procedural-terrain resource that bundles a demo, an explainer, a blog post and the shader source. _(@runevision)_
- [Three.js Water Pro demo](https://x.com/dangreenheck/status/2038626888352993283) — Drop-in realistic water shader for the web, with a playable demo. _(@dangreenheck)_
- [Three.js glass particle skeleton](https://x.com/taylor_sntx/status/2032541931301920892) — Browser shader combining refraction, reflection and particles. _(@taylor_sntx)_
- [Interactive Three.js solar-system explorer](https://x.com/thebuggeddev/status/2039675306982961369) — Live demo and code using hybrid DOM, WebGL masking, cinematic cameras and Fresnel effects. _(@thebuggeddev)_
- [Game-like Google Maps with Three.js](https://x.com/jameslevicf/status/2040337726193742120) — Interactive map with controllable lighting, clouds and location, rendered in Three.js. _(@jameslevicf)_
- [Path-traced art-fair booth layouts](https://x.com/QuentinArragon/status/2031000754664722892) — Three.js path tracing applied to planning art-fair booth layouts. _(@QuentinArragon)_
- [WebGPU particle-life demo](https://x.com/EIiasNajarro/status/2039008288252019164) — Interactive browser demo built with WebGPU and WGSL. _(@EIiasNajarro)_
- [Interactive texture and refraction study](https://x.com/muhammadepoju/status/2031061180869914744) — Material experiment in texture and refraction to inspect and reuse. _(@muhammadepoju)_
- [Interactive bending light rays](https://x.com/hiunicornstudio/status/2031832987000553890) — Unicorn Studio material and motion reference. _(@hiunicornstudio)_

## Spatial interfaces, AR and Gaussian splats

- [Open-source 4D splats in PlayCanvas](https://x.com/willeastcott/status/2039660562800423362) — Primary reference for streaming temporal Gaussian splats in a web engine. _(@willeastcott)_
- [Fisheye Gaussian splatting in PlayCanvas](https://x.com/ValigurskyM/status/2039723464198590878) — Rendering a 180-degree field of view inside a browser splat scene. _(@ValigurskyM)_
- [Playable multiplayer Gaussian-splat world](https://x.com/arrival_space_/status/2038967332593078662) — Combines scanned reality, board physics, multiplayer and remixing in the browser. _(@arrival_space_)_
- [Spatial AR controls with hand tracking](https://x.com/dmvrg/status/1706409567620596127) — Interaction reference for mid-air sliders, surface gestures and a 3D magnifying glass. _(@dmvrg)_
- [Physical-controller AR interface study](https://x.com/dmvrg/status/1935568479891157243) — An M5Stack hardware controller paired with a spatial augmented-reality interface. _(@dmvrg)_
- [Ferrari Luce mechanical-digital interfaces](https://x.com/SebCornelius/status/2032708011106644482) — High-quality prototype of a control system that mixes physical and digital controls. _(@SebCornelius)_
- [Spatial by 44xdesign](https://www.44xdesign.com/spatial) — Spatial-interface reference from 44xdesign.

## Inspiration directories and galleries

- [High-signal web design reference directories](https://x.com/craftworkdesign/status/2039656294676664515) — Index of curated galleries for heroes, footers, navbars, CTAs, portfolios and interaction details. _(@craftworkdesign)_
- [Design inspiration directory list](https://x.com/UiSavior/status/2021218205109195223) — Compact list spanning web, SaaS, navigation, CTA, animation, apps, brands, icons and design systems. _(@UiSavior)_
- [Four web-design inspiration sites](https://x.com/remvze/status/2031780015273058805) — Four curated links for visual research. _(@remvze)_
- [Personal interaction-pattern library](https://x.com/chiquwch/status/2037951867469300215) — A method and source list for collecting reusable interaction patterns from courses and open projects. _(@chiquwch)_
- [Curated Supply](https://www.curated.supply/) — Curated design-supply and inspiration site.

## Unannotated links

Saved without notes; descriptions come from the URL only. A reading queue, not endorsements.

- [Inspora](https://www.inspora.design/) — Inspora's design site; Inspora (@insporadesign) shared the Receipt Printer interaction above. Saved without a note.
- [Spectrum UI](https://ui.spectrumhq.in/) — UI site on the spectrumhq.in domain. Saved without a note.
- [details.so vault](https://www.details.so/vault) — The vault page on details.so. Saved without a note.
- [details.so inspo](https://www.details.so/inspo) — The inspiration page on details.so. Saved without a note.
- [RareUI components](https://www.rareui.com/components) — Components page on rareui.com. Saved without a note.
- [Kobra input OTP](https://kobra.systems/components/input-otp) — One-time-password input component page on kobra.systems. Saved without a note.
- [loading.dev](https://loading.dev/) — Saved without a note.
- [Cuelume](https://cuelume-site.pages.dev/) — Site named Cuelume, hosted on Cloudflare Pages. Saved without a note.
- [a-g-i.org](https://a-g-i.org/) — Saved without a note.
- [noechague-site](https://noechague-site.vercel.app/) — Site hosted on Vercel. Saved without a note.
- [@loficosmos1 post](https://x.com/loficosmos1/status/2084025812886376481) — Saved without a note. _(@loficosmos1)_
- [@cmnijhof post](https://x.com/cmnijhof/status/2084271925119906241) — Saved without a note. _(@cmnijhof)_
- [@raul_dronca post](https://x.com/raul_dronca/status/2084572141815509009) — Saved without a note. _(@raul_dronca)_
- [@AdamKPx post](https://x.com/AdamKPx/status/2103953289411002578) — Saved without a note. _(@AdamKPx)_

## Related

[[X-Bookmarks]] · [[Design_and_Aesthetics|Design & Aesthetics]] · [[Design Thinking]] · [[Design Resources]] · [[Compositor]] · [[Developer Resources]] · [[Personal Knowledge Management]] · [[Evergreen Lessons from X - September 2026]] · [[Bookmarks - AI & Agents]] · [[Bookmarks - Developer Tools]] · [[Bookmarks - Media & Inspiration]]
