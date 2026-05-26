# Ascoyo — Agentic CRM Marketing Site

A complete React + TypeScript + Vite + Tailwind CSS implementation of the Ascoyo agentic CRM marketing website. Built end-to-end from 20 Figma design screens with component-wise pages, full routing, and responsive layouts for mobile, tablet, and desktop.

## Tech Stack

- React 18 + TypeScript (strict)
- Vite (build / dev server)
- Tailwind CSS v3 (custom theme: ink / brand / lilac / mint palette)
- React Router v6 (multi-page routing)
- lucide-react (icon set)
- Fonts: Plus Jakarta Sans, Bricolage Grotesque, JetBrains Mono (Google Fonts)

## Quick Start

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production build to ./dist
npm run preview      # preview the production build
```

## Project Structure

```
src/
├── components/
│   ├── layout/        Navbar (with mega-menu), Footer, Layout shell
│   ├── modals/        Login, Signup, Success, Error, base Modal
│   └── ui/            Logo, Section, FeatureCard
├── pages/
│   ├── HomePage.tsx                Hero, agent system, security, CTA
│   ├── PlatformPage.tsx            4-module overview grid
│   ├── platform/
│   │   ├── AccountManagementPage   Module 01
│   │   ├── ContactManagementPage   Module 02
│   │   ├── LeadOpportunityPage     Module 03
│   │   └── ActivityTaskPage        Module 04
│   ├── AgentsPage.tsx              5 AI agents (tabbed)
│   ├── PricingPage.tsx             Early bird registration
│   ├── ResourcesPage.tsx           Whitepaper library with download flow
│   ├── ContactPage.tsx             Contact form + success/error states
│   ├── OnboardingPage.tsx          Industry selection / stepper
│   ├── ChainEffectPage.tsx         In-app workflow visualization
│   ├── LegalPage.tsx               Privacy / Terms / Security / API docs
│   └── NotFoundPage.tsx
├── App.tsx            Routes
├── main.tsx           Entry (BrowserRouter)
└── index.css          Tailwind + font imports + utility classes
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/platform` | Platform overview |
| `/platform/account-management` | Module 01 |
| `/platform/contact-management` | Module 02 |
| `/platform/lead-opportunity` | Module 03 |
| `/platform/activity-task` | Module 04 |
| `/agents` | AI agents (5-agent system) |
| `/pricing` | Early bird access form |
| `/resources` | Whitepapers library |
| `/contact` | Contact form |
| `/onboarding` | Industry onboarding |
| `/chain-effect` | Agent workflow demo |
| `/privacy` `/terms` `/security` `/api` | Legal pages |

## Features

- Mega-menu navigation — Platform dropdown lists 4 CRM modules + 5 AI agents
- Login & Signup modals — triggered from anywhere in the nav
- Form flows — Pricing and Contact pages validate and trigger success/error modals
- Whitepaper download flow — Resources page → 2-pane download form → ready modal
- Mobile-first responsive — hamburger drawer, stacked grids, all breakpoints
- Custom design system — Tailwind config extends with brand colors, fonts, shadows, animations

## Design System

Brand tokens live in `tailwind.config.js`. Key colors:

- `brand-600` (#2547e0) — primary CTA blue
- `ink-950` — dark sections, footer
- `lilac-50` to `lilac-200` — soft backgrounds
- `mint-500/600` — success states

Component utility classes (in `index.css`):

- `.btn-primary` / `.btn-secondary` / `.btn-ghost`
- `.card` — bordered white card with hover lift
- `.input` / `.label` — form controls
- `.pill` — rounded badge
- `.eyebrow` — small uppercase accent text
- `.container-x` — page horizontal container

## Notes

- All UI mocks are pure CSS/SVG (no image assets) for fast load and faithful wireframe aesthetic.
- Tailwind v3 was chosen (over v4) for stability and broad PostCSS support.
- No localStorage / sessionStorage — all state is in-memory React state.
