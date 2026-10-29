---
name: Electric Intelligence
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#b0c8eb'
  on-secondary: '#19324d'
  secondary-container: '#314865'
  on-secondary-container: '#9fb7d9'
  tertiary: '#eef7ff'
  on-tertiary: '#00354a'
  tertiary-container: '#aee0ff'
  on-tertiary-container: '#00668b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#d2e4ff'
  secondary-fixed-dim: '#b0c8eb'
  on-secondary-fixed: '#001c37'
  on-secondary-fixed-variant: '#314865'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
  canvas-base: '#060A12'
  surface-panel: '#0C1527'
  surface-card: '#111C35'
  surface-card-hover: '#162343'
  border-subtle: '#1E2D4A'
  border-interactive: '#2A3F66'
  text-primary: '#F8FAFC'
  text-secondary: '#94A3B8'
  text-muted: '#64748B'
  status-success: '#10B981'
  status-warning: '#F59E0B'
  status-error: '#EF4444'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-eyebrow:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system establishes an ultra-refined, deep-tech B2B digital environment for high-velocity software engineering, artificial intelligence integration, and enterprise transformation. The visual identity bridges the precision of mission-critical engineering with the clarity demanded by enterprise leaders and growing SMEs. The target audience comprises founders, CTOs, and operational executives seeking dependable digital delivery without corporate vanity metrics or speculative gimmicks.

The design movement balances **Dark Contemporary Tech** with **Luminous Glassmorphic Accents**. Visual layers sit on rich, ink-black and deep-navy canvas grounds, illuminated by electric cyan light emitters, surgical hairline borders, and translucent composite panels. The overall atmosphere conveys technical authority, structural rigor, and forward-looking momentum—eliminating consumer transactional clutter in favor of focused, high-trust conversion pathways.

## Colors

The palette leverages a dark-first foundation designed to minimize eye fatigue during high-density evaluation while drawing immediate optical attention to conversion thresholds and technical highlights.

- **Primary (`#00F0FF`)**: Electric cyan. Acts as the primary energy source of the interface—reserved for primary CTAs, interactive indicators, active glows, key architectural diagrams, and focus rings. Never used as large solid text blocks.
- **Secondary (`#0A2540`)**: Deep maritime navy. Used as a grounding tonal anchor across structured headers, interactive container fills, and elevated module backdrops.
- **Tertiary (`#38BDF8`)**: Sky cyan. Supplies intermediate hierarchy within multi-tiered data structures, subheadings, and secondary interactive link accents.
- **Neutral (`#0F172A`)**: Slate ink. Provides structural depth through section dividers, baseline body cards, and input background fills.

### Color Rules & Hierarchy
1. High-contrast white (`text-primary`, `#F8FAFC`) is strictly mandated for H1 through H3 tags and critical value metrics.
2. Supporting technical specifications, pricing items, and body descriptions employ slate (`text-secondary`, `#94A3B8`) to retain clear visual hierarchy.
3. Interactive borders (`border-interactive`, `#2A3F66`) elevate on hover to electric cyan with low-opacity alpha falloff (`rgba(0, 240, 255, 0.3)`).
4. Status feedback colors are purely informational and maintain a minimum contrast ratio of 4.5:1 against slate backgrounds.

## Typography

The typographic hierarchy pairs **Plus Jakarta Sans** for structural display and section headings with **Inter** for dense technical documentation, commercial feature lists, and operational microcopy.

- **Display & Headings (Plus Jakarta Sans)**: Delivers an assertive, modern, architectural character. Tight tracking (`-0.03em` to `-0.015em`) binds headline words into compact visual units that command visual priority.
- **Body & Controls (Inter)**: Built for neutral, precise readability. Provides uncompromised clarity when reading complex scope requirements, technical solution specs, and multi-line value propositions.
- **Eyebrows & Micro-badges**: Rendered in uppercase `label-eyebrow` with generous tracking (`0.08em`) to act as concise categorization anchors before major section titles.
- **Invariants**: Exactly one `display-hero` (`H1`) per view. Display sizes degrade seamlessly on viewport widths under 768px via dedicated mobile scale tokens.

## Layout & Spacing

The layout model utilizes a fluid 12-column structural grid system bounded by a maximum desktop container width of `1280px` (`80rem`). This architecture enforces generous vertical separation between service chapters while organizing modular capabilities into balanced card arrays.

### Grid Reflow Behaviors
- **Desktop (>= 1024px)**: 12-column layout with 24px (`1.5rem`) gutters. 6-card commercial offers, capability matrixes, and solution decks resolve into 3 columns × 2 rows.
- **Tablet (768px - 1023px)**: 8-column layout with 24px gutters. Modular cards reflow cleanly into 2 columns × 3 rows.
- **Mobile (< 768px)**: 4-column layout with 16px (`1rem`) gutters and 20px outer margin. Modular cards stack vertically in a single unified column.

### Spatial Rhythm
- Section padding between core thematic zones uses `space-3xl` (`6rem`) on desktop and collapses to `space-2xl` (`4rem`) on mobile screens to preserve momentum.
- Intra-component spacing (card headers to lists, icon badges to titles) strictly adheres to the modular steps: `space-xs` (4px), `space-sm` (8px), `space-md` (16px), and `space-lg` (24px).

## Elevation & Depth

Visual depth is achieved through layered tonal substrates, translucent glass surfaces, and localized cyan luminous dissipation, avoiding heavy opaque drop-shadows typical of generic software suites.

### Surface Tiers
1. **Canvas Layer (`#060A12`)**: The foundational void. Non-interactive background housing structural section dividers and low-intensity canvas particle meshes.
2. **Structural Tier (`#0C1527`)**: Base section blocks, alternating zones, and contextual headers.
3. **Card & Panel Tier (`#111C35`)**: Distinct elevated interactive units. Configured with a `1px` border (`#1E2D4A`) and faint ambient inset rim lighting (`inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`).
4. **Interactive Hover Tier (`#162343`)**: On hover, cards lift subtly with a diffuse cyan luminescence: `box-shadow: 0 12px 32px -8px rgba(0, 240, 255, 0.12), 0 0 0 1px rgba(0, 240, 255, 0.3)`.
5. **Floating Overlay Tier**: Modals, drawer controls, and isolated widgets leverage a `16px` backdrop blur (`backdrop-filter: blur(16px)`) backed by `rgba(6, 10, 18, 0.82)`.

### Layer Isolation Rules
- Floating communication nodes (WhatsApp gateway vs. internal consultation chat) maintain explicit coordinate isolation: Internal chat sits docked at bottom-right (`bottom: 24px; right: 24px; z-index: 40`), while the WhatsApp launch bubble docks at bottom-left (`bottom: 24px; left: 24px; z-index: 40`) to eliminate trigger collisions.
- The global B2B conversion modal commands top-level overlay dominance (`z-index: 100`) alongside its blurred dark scrim (`z-index: 90`).

## Shapes

The design system implements a controlled, technical curvature (`roundedness: 2`). This choice avoids playful ultra-pill geometries in large structural components while preventing harsh visual sharpness, communicating engineered precision.

- **Panels, Modals & Cards**: Base curvature of `0.5rem` (`8px`) for compact units and `1rem` (`16px`) for primary cards and content surfaces (`rounded-lg`).
- **Input Fields & Action Controls**: Standard `0.5rem` (`8px`) radius provides unified alignment between text boxes, dropdown triggers, and CTA buttons.
- **Eyebrow Tags & Status Pills**: Retain full organic rounding (`9999px`) purely for micro-labels and status indicators, distinguishing operational metadata from clickable surface cards.

## Components

### Buttons
- **Primary CTA**: Electric cyan fill (`#00F0FF`), dark slate text (`#060A12`), font weight 600 (`label-lg`). Resting state includes subtle perimeter glow. On hover: scales smoothly to `transform: scale(1.04)`, transition duration `180ms ease-out`, box shadow `0 0 20px rgba(0, 240, 255, 0.4)`. Focus state reveals a 2px offset cyan focus ring.
- **Secondary CTA**: Translucent slate background (`rgba(15, 23, 42, 0.6)`), 1px border (`#2A3F66`), crisp white text (`#F8FAFC`). On hover: background shifts to `rgba(22, 35, 67, 0.9)`, border color illuminates to `rgba(0, 240, 255, 0.5)`, scales to `1.03`.
- **Text / Micro Action**: Understated cyan link typography with animated underline expand-from-left on hover.

### Commercial Offer & Solution Cards
- Formatted with `#111C35` background, `1px` subtle border (`#1E2D4A`), and `24px` internal padding.
- Includes fixed icon container (`44px × 44px`) displaying pure SVG Lucide iconography with 1.75px stroke width.
- Feature lists within pricing and commercial cards follow structured dividers (`#1E2D4A`). Pricing models enforce the progressive disclosure rule: the first 8 capabilities remain visible by default, while items 9 through 14 expand smoothly via a toggled text control (*"Ver desglose completo"* / *"Ocultar detalles"*).

### Input Fields & Selectors
- Background: `#0C1527` with a baseline border of `#1E2D4A`. Text: `#F8FAFC`, placeholder: `#64748B`.
- Padding: `12px 16px`, height: `48px`.
- Active focus state: border shifts immediately to `#00F0FF` accompanied by `box-shadow: 0 0 0 3px rgba(0, 240, 255, 0.15)`.
- Error state: border shifts to `#EF4444` with inline red microcopy underneath.

### Checkboxes & Radio Controls
- Base: 20px square/circle with `#0C1527` surface and `#2A3F66` perimeter.
- Checked: Electric cyan fill with slate checkmark vector. Never relies on default browser accents.

### Chips & Eyebrow Badges
- Encased in `rounded-full` contours with height `26px`.
- Padding: `4px 12px`. Background: `rgba(0, 240, 255, 0.08)`, border: `1px solid rgba(0, 240, 255, 0.25)`, typography: `label-eyebrow` in `#00F0FF`.

### Unified Lead Conversion Modal
- Eliminates any shopping carts, direct payment gates, or checkout steps.
- Parameter-aware modal header updates dynamically according to origin CTA (*"Cotizar Servicio"*, *"Solicitar Propuesta de Software"*, *"Integración IA"*).
- Houses a streamlined multi-field qualification form (Full Name, Corporate Email, Project Scope, Budget Window) wrapped in deep-glass elevation.