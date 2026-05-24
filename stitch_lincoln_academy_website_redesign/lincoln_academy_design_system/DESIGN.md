---
name: Lincoln Academy Design System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d7dae5'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3fe'
  surface-container: '#ebedf9'
  surface-container-high: '#e5e8f3'
  surface-container-highest: '#dfe2ed'
  on-surface: '#181c23'
  on-surface-variant: '#41474f'
  inverse-surface: '#2c3039'
  inverse-on-surface: '#edf0fc'
  outline: '#717880'
  outline-variant: '#c1c7d1'
  surface-tint: '#1f6297'
  primary: '#003b63'
  on-primary: '#ffffff'
  primary-container: '#005387'
  on-primary-container: '#91c7ff'
  inverse-primary: '#9acbff'
  secondary: '#835500'
  on-secondary: '#ffffff'
  secondary-container: '#fdb241'
  on-secondary-container: '#6e4600'
  tertiary: '#003b65'
  on-tertiary: '#ffffff'
  tertiary-container: '#00528a'
  on-tertiary-container: '#93c5ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe4ff'
  primary-fixed-dim: '#9acbff'
  on-primary-fixed: '#001d34'
  on-primary-fixed-variant: '#004a79'
  secondary-fixed: '#ffddb4'
  secondary-fixed-dim: '#ffb954'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#633f00'
  tertiary-fixed: '#d1e4ff'
  tertiary-fixed-dim: '#9dcaff'
  on-tertiary-fixed: '#001d35'
  on-tertiary-fixed-variant: '#00497c'
  background: '#f9f9ff'
  on-background: '#181c23'
  surface-variant: '#dfe2ed'
  background-alt: '#F8FAFC'
  whatsapp-green: '#25D366'
  surface-border: '#E2E8F0'
typography:
  headline-xl:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max-width: 1200px
---

## Brand & Style

This design system embodies a **Modern Academic** aesthetic, bridging the gap between traditional prestige and contemporary educational innovation. The brand personality is scholarly, inclusive, and forward-thinking, targeting a global community of parents and students who value excellence and cultural diversity.

The style leverages **Corporate Modernism** with a soft, human-centric touch. It utilizes generous whitespace to reduce cognitive load and emphasize the academy's pillars. Key visual characteristics include:
- **Refined Authority:** Traditional typographic cues mixed with high-performance UI patterns.
- **Friendly Professionalism:** Softened geometry and subtle depth to remain approachable for families.
- **Structured Clarity:** A rigid underlying grid that ensures the trilingual curriculum and extracurricular details are digestible and organized.

## Colors

The palette is a sophisticated refinement of the original school colors, optimized for digital accessibility and modern contrast standards.

- **Primary Blue (#005387):** A deep, institutional blue used for headers, primary buttons, and navigational elements to signal stability and trust.
- **Secondary Gold (#D08C19):** A warm, metallic gold used sparingly for high-impact callouts, active states, and highlighting key differentiators like "Inscripciones abiertas."
- **Tertiary Blue (#0170B9):** A more vibrant blue reserved for interactive links and secondary UI accents.
- **Neutral Charcoal (#4B4F58):** A soft dark grey used for body text and labels to improve legibility over pure black.
- **Backgrounds:** Use pure white for main content areas and `background-alt` (#F8FAFC) for sectional contrast to keep the interface feeling light and airy.

## Typography

The typography strategy pairs **Source Serif 4** for headlines with **Manrope** for body text. This contrast establishes a clear hierarchy between the "Academic Heritage" and the "Modern Facility."

- **Headlines:** Set in Source Serif 4. Use these for all page titles and section headers. The serif nature conveys authority and the "Lincoln" legacy.
- **Body & UI:** Set in Manrope. Its geometric yet friendly character ensures clarity for long-form content regarding curriculum details and administrative forms.
- **Rhythm:** Maintain high line-heights (1.5x for body) to preserve the "inclusive atmosphere" and ensure readability for non-native English/Spanish speakers.

## Layout & Spacing

The design system utilizes a **12-column fixed grid** on desktop (max-width 1200px) that transitions to a **4-column fluid grid** on mobile devices.

- **Vertical Rhythm:** Follow a strict 8px baseline grid. Section spacing should be generous (80px to 120px) to distinguish the trilingual curriculum from extracurricular activities.
- **Reflow Rules:**
  - **Desktop:** 3-column layouts for "Feature Cards" (Small Groups, Trilingualism, etc.).
  - **Tablet:** 2-column wrapping.
  - **Mobile:** 1-column stack with center-aligned headings.
- **Safe Zones:** Always maintain a minimum 16px gutter between columns to prevent visual clutter, especially in data-heavy sections like the extracurricular lists.

## Elevation & Depth

Visual hierarchy is managed through **Tonal Layers** and **Ambient Shadows** to create a clean, tactile feel without the heaviness of traditional skeuomorphism.

- **Planes:** The main page body is the base layer (Level 0).
- **Cards & Inputs:** Use a very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.05)) to lift content slightly above the surface.
- **Interactive Elements:** On hover, buttons and feature cards should increase their shadow spread slightly to provide tactile feedback.
- **Outlines:** Use subtle 1px borders (#E2E8F0) for form fields and container divisions to maintain structure without relying solely on shadows.

## Shapes

To reinforce the welcoming and friendly environment, this design system uses **Rounded (0.5rem)** as its base geometric logic.

- **Standard Components:** Buttons, form inputs, and small cards use 0.5rem (8px).
- **Large Containers:** Section containers and highlight cards (like the Admissions Form block) use 1rem (16px) to appear softer and more integrated.
- **Icon Backgrounds:** Use circles or high-roundedness (1.5rem+) for feature icons to create a playful, accessible visual rhythm.

## Components

### Buttons
- **Primary:** Solid Primary Blue background with white text. Rounded corners (8px). Large padding (12px 24px) for high touch-targets.
- **Secondary (Inscripciones):** Solid Secondary Gold. Used for urgent CTA buttons only.
- **Floating Action (WhatsApp):** Circular green button with white icon, fixed to bottom-right with a medium-intensity shadow.

### Input Fields
- **Design:** Clean white background with a light grey border (#E2E8F0). On focus, the border transitions to Primary Blue with a 2px outer glow.
- **Labels:** Positioned above the field in `label-md` Manrope.

### Feature Cards
- **Structure:** Vertical alignment. Icon on top (circled), followed by H5 Headline (Source Serif), then body text (Manrope).
- **Style:** No border, soft shadow on hover, 16px padding.

### Lists
- Use custom bullet points in Primary Blue or Secondary Gold to break away from browser defaults and align with the academic theme.

### Admissions Form Block
- A high-contrast container using Primary Blue background with white text and gold CTAs. This creates a "destination" feel at the bottom of the page, signaling the final step in the user journey.