# Innovation Ireland — website

SvelteKit + TypeScript + plain CSS. No Tailwind, no animation library, no CMS yet.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run check    # svelte-check (types + unused CSS)
```

## What's here

This first pass is the complete homepage plus the reusable visual system it's built from.
No auth, no database, no admin — all content lives in typed arrays under `src/lib/data/`.

```
src/
  app.css                     design tokens: colour, type scale, spacing, motion
  app.html                    fonts (Archivo / Instrument Sans / Caveat / Space Mono)
  lib/
    actions.ts                inView — adds data-inview so drawings draw themselves on
    data/                     temporary content arrays (see "Content" below)
    components/
      Nav.svelte  Footer.svelte  Button.svelte  PhotoSlot.svelte
      art/                    the rough-drawing system (hand-authored SVG, no icon library)
      sections/               one component per homepage section
  routes/
    +layout.svelte            nav + footer + document head
    +page.svelte              the homepage, section by section
```

## Design rules

- Deep navy `--navy`, warm cream `--cream`, Irish green `--green`, orange `--orange` in small doses.
- **No gradients, no glows, no glass.** Flat colour, hard 2.5px borders, hard offset shadows.
- Heavy uppercase Archivo for display, Instrument Sans for body, Caveat for handwriting,
  Space Mono for small labels.
- Drawings are only used where they say something. Whitespace is part of the design —
  if a doodle isn't directing attention or adding personality, it doesn't go in.
- Everything animated is small: a 1–2° photo rotation, a marker drawing itself, a button
  moving 3px when pressed. All of it is switched off under `prefers-reduced-motion`.

## The rough art system

Reusable SVG components in `src/lib/components/art/`. The paths are hand-written with
deliberate imperfections — don't "clean them up", and don't swap them for an icon library.

| Component | Notes |
| --- | --- |
| `RoughUnderline` | `reveal="hover"` waits for an ancestor to set `--draw: 1` (see below) |
| `RoughCircle` | same reveal behaviour; circles a word twice, overshooting |
| `RoughArrow` | `dir="down\|right\|swoop\|hook"`, `wiggle`, `flip` |
| `StarDoodle` | four-pointed spark, optional `spin` |
| `IrelandSketch` | the island, drawn from memory. Not a map UI — don't make it accurate |
| `MapPin` | a scrawled ✕, used on the map |
| `Tape` | torn masking tape for photos |
| `Scribble` | `variant="wave\|loop\|cross"` |
| `RoughFrame` | absolutely-positioned wobbly box, for framing a slot |
| `HandNote` | a handwritten margin note, with an optional arrow |

### Drawing something on as it scrolls in

`RoughUnderline` / `RoughCircle` with `reveal="hover"` inherit a `--draw` value (0 → 1):

```svelte
<h2 use:inView>
  Big line
  <span class="line"><RoughUnderline reveal="hover" /></span>
</h2>

<style>
  .line { --draw: 0; }                        /* undrawn by default   */
  :global([data-inview]) .line { --draw: 1; } /* drawn once in view   */
  h2:hover .line { --draw: 1; }               /* or on hover, if useful */
</style>
```

## Photos

`PhotoSlot` treats a photo like a physical object: paper border, hard shadow, a degree or
two off straight, optional tape, handwritten caption.

```svelte
<PhotoSlot
  src="/img/hackathon-room.jpg"
  alt="The main room at the hackathon"
  caption="3am, still going"
  tilt={-1.5}
  ratio="4 / 3"
  tape="one"
/>
```

Drop real files in `static/img/` and pass `src` + `alt`. **Without `src` it renders an
honest placeholder slot** describing the photo we still need, which is how the whole site
currently ships. Replace them in:

- `src/lib/data/events.ts` — past events
- `src/lib/data/projects.ts` — project wall
- `OriginStory.svelte` — the clubhouse room
- `PhotoBreak.svelte` — the full-width event photo

## Content still to come

Everything below is deliberately unfinished rather than invented. Search for `TODO`.

- Real join / start-a-community links (`src/lib/data/site.ts` → `links`)
- A contact email, socials and nonprofit registration details (`Footer.svelte`)
- Community descriptions written by the people who run each community
- Real member projects: name, builder, one-sentence description, photo
- Partner names and logos — nobody gets listed until they've said yes
- The Dublin hackathon date, once it's fixed
