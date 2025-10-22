# SmartFlow Automation Agency - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from modern SaaS landing pages like Linear, Vercel, and Stripe - emphasizing clean minimalism, purposeful whitespace, and subtle interactions that feel premium yet approachable for small business audiences.

## Core Design Principles
- **Clean Minimalism**: Generous whitespace, clear hierarchy, uncluttered layouts
- **Professional Approachability**: Balance technical credibility with small-business friendliness
- **Smooth Interactions**: Subtle animations that enhance rather than distract
- **Trust & Clarity**: Transparent pricing, clear value propositions

---

## Color Palette

**Light Mode (Primary)**
- Background: 0 0% 98% (soft off-white)
- Surface: 0 0% 100% (pure white for cards)
- Primary (Teal): 180 65% 45%
- Primary Hover: 180 65% 38%
- Text Primary: 220 15% 15%
- Text Secondary: 220 10% 45%
- Border: 220 10% 90%

**Accent & Highlights**
- Success/Feature: 180 65% 45% (teal)
- Subtle Accent: 200 70% 50% (bright blue for CTAs)
- Shadow: 220 15% 25% at 5% opacity for soft depth

---

## Typography

**Font Families**
- Headings: 'Inter', sans-serif (weights: 600, 700)
- Body: 'Inter', sans-serif (weights: 400, 500)
- Use Google Fonts CDN

**Type Scale**
- Hero H1: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- Section H2: text-3xl md:text-4xl, font-semibold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body: text-base md:text-lg, leading-relaxed
- Small/Meta: text-sm, text-secondary

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding vertical: py-16 md:py-24 lg:py-32
- Section padding horizontal: px-6 md:px-8 lg:px-12
- Card padding: p-8 md:p-10
- Element gaps: gap-6, gap-8, gap-12

**Container Widths**
- Max content width: max-w-7xl mx-auto
- Text content: max-w-3xl
- Hero content: max-w-4xl

**Grid Patterns**
- Pricing cards: grid-cols-1 md:grid-cols-3 gap-8
- Feature icons: grid-cols-2 md:grid-cols-4 gap-6
- Single column for mobile, expand on tablet+

---

## Component Library

### Navigation Header
- Sticky header with backdrop-blur
- Logo (left), nav links (center: Services, Pricing, Contact), CTA button (right)
- Smooth scroll to sections on click
- Border bottom: border-b border-border
- Background: bg-background/80 backdrop-blur-md

### Hero Section
- Full-width container with centered content
- Large headline + supporting subheadline
- Primary CTA button (teal, rounded-full, px-8 py-4)
- Small icon row below CTA (automation, AI, chat, time icons using Heroicons)
- **Hero Image**: Abstract tech/automation visual (flowing lines, nodes, or dashboard mockup) positioned on right side or as background pattern
- Height: min-h-[600px] md:min-h-[700px]

### Animated Logo Carousel
- Infinite horizontal scroll animation (duplicate logos for seamless loop)
- Grayscale logos at 60% opacity, hover to full color
- Gradient fade at left/right edges (from background to transparent)
- Logo height: h-12 md:h-16
- Animation speed: 30-40 seconds per full cycle
- Use CSS keyframe animation for smooth infinite scroll

### Pricing Cards
- White cards with rounded-2xl, shadow-lg
- Hover: transform scale-105, shadow-xl (smooth transition)
- Card structure: Plan name, large price, feature list, CTA button
- Border accent on "Medium" card (border-2 border-primary)
- Button: outline variant for Basic/Pro, solid for Medium (recommended)

### Contact Form
- Two-column layout on desktop (form left, info right)
- Input styling: rounded-lg, border-border, focus:ring-2 ring-primary
- Large textarea for automation description
- Primary button to open Calendly (external link)
- Contact details below with icon prefixes (email, location)

### Why Choose Us
- Four cards in grid with centered icons
- Icons: Heroicons (ChatBubbleLeftRightIcon, CurrencyDollarIcon, SparklesIcon, BoltIcon)
- Icon size: h-10 w-10, color: text-primary
- Card: subtle border, minimal padding, hover lift effect

---

## Images

**Hero Section**: Right-side illustration or background pattern showing:
- Abstract automation workflow visualization (nodes connected by flowing lines)
- Or: Clean dashboard mockup with AI/automation elements
- Or: Geometric pattern suggesting connectivity and flow
- Style: Modern, minimal, using teal/blue color scheme
- Format: SVG or PNG with transparency
- Placement: Absolute positioned on right 40% of hero, or as background with low opacity overlay

**Logo Carousel**: Use actual brand logos (n8n, Zapier, Make.com, OpenAI, etc.) in PNG/SVG format, displayed in grayscale by default

---

## Animations & Interactions

**Scroll Animations**: Fade-up on section entry (subtle, 0.3s ease-out)
- Apply to section headings and card groups
- Use Intersection Observer or scroll-triggered CSS

**Button Interactions**
- Primary CTA: hover shadow-xl + scale-105
- Outline buttons on images: backdrop-blur-sm bg-white/20
- All transitions: transition-all duration-300

**Logo Carousel**: Continuous horizontal scroll, no pause
**Pricing Cards**: Hover lift (translateY -0.5rem) + enhanced shadow

**Smooth Scroll**: Native CSS scroll-behavior: smooth for anchor links

---

## Accessibility & Responsive

- Maintain WCAG AA contrast ratios (text on white background)
- Focus states: ring-2 ring-primary ring-offset-2
- Mobile-first responsive design
- Stack multi-column layouts to single column on mobile
- Readable font sizes (minimum 16px base)
- Alt text for all images and icons

---

## Section-Specific Details

**About Section**: Single column, centered text, max-w-3xl, simple and clean

**Testimonials** (if implemented): Two-column cards with:
- Avatar placeholder circles
- 5-star rating (gold stars)
- Quote text + client name/company

**Footer**: Minimal with copyright, optional social links, teal accent on hover

---

This design creates a professional, trustworthy landing page that balances technical credibility with approachability for small business owners, using proven SaaS design patterns adapted for the automation agency context.