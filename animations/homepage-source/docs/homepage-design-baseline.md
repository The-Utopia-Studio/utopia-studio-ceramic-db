# Studio design baseline

The homepage is the reference for shared public-site components. Token changes are intentional and reviewable in `app/token-source.css`; `/design-system` documents the public roles.

- Typeface: TWK Lausanne, 350 for hero/body and 500 for section/card headings.
- Hierarchy: hero `--type-h1` (36–64px), section `--type-h2` (28–48px), feature `--type-h3` (22–32px), compact card `--type-h4` (20px). Sentence case; uppercase is reserved for eyebrows and navigation.
- Geometry: `--radius-card` 24px; `--radius-media` and `--radius-control` 16px. Grouped logo/testimonial grids round the outer frame, not each cell. Circular portraits and icon/status dots retain their purpose-specific shapes.
- Surfaces: page uses `--color-bg-default`; dark cards use `--color-bg-showcase` with paired `--color-text-on-showcase*` roles. Never pair a fixed dark surface with theme-dependent dark text.
- Entrance: `--motion-reveal-duration` 840ms, `--motion-reveal-distance` 24px, `--motion-stagger` 180ms, `--motion-reveal-ease`. Repeat on viewport re-entry; use at most a row of delays so long lists never wait seconds for content.
- CSS consumers use motion tokens; Framer consumers import `lib/site-motion.ts` (seconds and px equivalents). Keep these numerical equivalents aligned when updating the contract.
- Shared CardGrid uses Reveal; filter results mount with the same entrance. Keyboard focus must not wait for a reveal. Reduced-motion users receive visible content without spatial motion.
- Nav hides on downward scroll and returns on upward scroll. Keep open menus and keyboard focus visible.
- Hero astrolabe and the opaque film cover/zoom are homepage-specific storytelling, not default page transitions.

Do not wrap a whole grid in another entrance animation when its children already reveal individually.

## Site-wide token contract

`app/token-source.css` is the source of truth for page styles, including typography,
color roles, spacing, control/card geometry, and motion. Pages consume semantic
roles; white navigation/footer surfaces use fixed light-theme roles so they remain
legible inside the dark site. Component-specific illustration and layout measures
are namespaced here instead of scattered through page files.

`npm run tokens:generate` exports the numeric motion settings and token catalogue
into `lib/generated-style-tokens.ts`. Do not edit that generated file. Framer Motion
consumes `lib/site-motion.ts`; the design-system catalogue reads the generated values.
`npm run tokens:check` checks synchronization and rejects raw UI colors, spacing,
radii and typography in public page/component styles. It runs as part of `npm run check`.

Structural values (zero resets, percentages, responsive breakpoints, grid fractions,
SVG/WebGL coordinates, opacity and animation progress) remain expressions, rather
than arbitrary design tokens. The server-rendered share image uses the generated
palette because CSS custom properties are unavailable in ImageResponse.

## Keyboard focus

All interactive components use the shared `:focus-visible` policy in `app/globals.css`.
The canonical tokens are `--focus-ring-color` (`currentColor`),
`--focus-ring-width` (the 2px focus border role), and `--focus-ring-offset`
(the 4px spacing role). The generated token catalogue and `/design-system`
document these values directly from the canonical source.

Use one outline, without a box-shadow halo or an additional Tailwind focus ring.
The legacy `--shadow-focus` token resolves to `none` for compatibility.
Keep focus visible for keyboard navigation; do not disable it to simplify a design.
Text inputs may also show focus-visible for pointer interaction, as determined by
browser accessibility heuristics. Error borders remain separate validation states.
