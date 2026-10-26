# ny64.kr Design System

## 1. Identity
Existing compact, monochrome personal profile. The optional maimai introduction follows the supplied white-aria DXTransition source; https://nozoki.soki.moe/ supplies the color reference.

## 2. Color
Existing light/dark tokens remain in styles/globals.css. The intro owns scoped tokens: background #4ec0f8, center #c3ffff, slide pink #fea3c1, slide yellow #fed821, slide white #fff, hold #d2f1ff, side back #a7eaff, side front #fff. These reference colors are intentionally independent of the page theme.

## 3. Typography
Wanted Sans Variable / Wanted Sans / system sans. Existing header 28px (32px from sm), body 14px, footer 12px. Intro contains SVG artwork only.

## 4. Spacing & Layout
Existing page max-width 56rem; 16px mobile and 24px desktop gutters; section spacing 28px/32px. Intro is fixed to the viewport, z-index 500, clipped within its own bounds. Center size 40vmin; patterns use the original viewport proportions. JavaScript supplies viewport aspect ratios to avoid CSS typed-division compatibility limitations.

## 5. Components
Existing shared Header, Footer, Badge, SocialLinks and profile sections retain their styles. DXTransition composes reusable Background, Side, Slide, SlideLong, Hold and Center SVG primitives. Its states are entering, leaving, removed; every primitive uses the same lifecycle. Render it outside Routes so navigation does not restart it. No focusable intro content, aria-hidden, pointer-events none. Document remains the scroll owner.

The standalone Games section sits between Education and SideNotes and uses a single-column list. GameProfileCard is the shared shell for future games. Each flat row shows one underlined account link combining the game title and nickname with a 14px external-link arrow; there is no game icon or surrounding card surface. Desktop metadata sits to the right; mobile puts it on the following line with an 8px gap. MaimaiProfile retrieves its rating from the same-origin API and shows the last sync time with the shared shadcn/ui Radix Tooltip. The trigger matches the text height and the tooltip uses zero side offset. The friend code selects and copies on click, with an absolutely positioned checkmark that does not reserve horizontal space. Loading and unavailable states never fabricate a rating.

## 6. Motion & Interaction
Query presence `?maimai` opts in at initial mount, irrespective of value. Enter 600ms, hold 100ms, leave 600ms. Patterns: enter cubic-bezier(0,0,.1,1), exit cubic-bezier(.9,0,1,1). Center rotates -180deg and scales 13→1 on entry, 1→13 on exit. Mosaic/side movement 500ms. Preserve source easing and geometry. Reduced motion uses a short opacity fade without rotation, translation or scaling. Timers and resize handlers clean up on unmount, including React StrictMode.

The optional introduction remains available through the initial /?maimai query; five friend-code clicks within two seconds navigate to /?maimai and replay it. Profile links open maishift in a new tab. Copy/check opacity feedback follow the action-swap reference (https://beui.dev/r/action-swap/raw) with 150ms CSS fades; no spatial motion or extra animation library. Rating is retrieved through the same-origin Bun API with a server-only key, 15-minute success cache, shared in-flight requests and a 60-second retry cooldown. Cached data served after a refresh failure is labelled as a previous record.

## 7. Depth & Surface
Existing neutral borders and radius token .6rem remain. Intro uses flat SVG layers and no shadows. It adds no page surface styles.

## 8. Accessibility Constraints & Verification
Decorative intro never takes focus or blocks input. Reduced motion replaces spatial motion with opacity. Verify query absence/presence, one playback per document, removal, mobile/desktop, light/dark and reduced motion. No unrelated layout changes are part of this work.
