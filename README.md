<p align="right">
  <a href="README.md"><strong>🇺🇸 English</strong></a> &nbsp;·&nbsp;
  <a href="README.pt-br.md">🇧🇷 Português</a>
</p>

<p align="center">
  <img src="public/wagner-hero-1.png" alt="Wagner Souza Advocacia" width="280" />
</p>

<h1 align="center">Wagner Souza Advocacia</h1>

<p align="center">
  <strong>High-impact institutional website for a law firm specializing in Criminal and Social Security Law.</strong>
</p>

<p align="center">
  <a href="https://wagnersouzaadvocacia.com.br">🌐 Live Demo</a> •
  <a href="#-tech-stack">⚙️ Stack</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-architecture">🏗️ Architecture</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2-black?logo=nextdotjs" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4.x-06B6D4?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript" />
  <img src="https://img.shields.io/badge/Framer%20Motion-11-FF0050?logo=framer" />
</p>

---

## 📋 About

Institutional website built for **Wagner Souza Advocacia**, focused on:

- **Aggressive SEO** for organic ranking across Goiânia, Goiás, and Brazil
- **Google Ads ready** with Google Tag Manager + Consent Mode v2
- **LGPD/OAB compliance** with a cookie consent banner, privacy policy, and terms of use
- **Premium design** using an executive aesthetic (navy + bronze) to convey authority and trust

### 🎯 Business Goal

Generate qualified leads via WhatsApp for legal consultations in Criminal and Social Security Law, with national reach and a regional focus on Goiás.

---

## ⚙️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16.2 | React framework — SSG, image optimization, routing |
| **React** | 19.x | UI components with modern hooks |
| **TypeScript** | 5.x | Type safety across the entire project |
| **Tailwind CSS** | 4.x | Utility-first CSS with a custom design system |
| **Framer Motion** | 11.x | Smooth animations and micro-interactions |
| **Radix UI** | latest | Accessible primitives (Accordion, Tabs) |
| **@next/third-parties** | latest | Optimized Google Tag Manager integration |

---

## ✨ Features

### 🔍 SEO & Performance
- **JSON-LD Schema markup** — `LegalService` + `FAQPage` for Google rich snippets
- **Optimized meta tags** — Title, description, keywords, OpenGraph, Twitter Cards
- **Canonical URL** and auto-generated `sitemap.xml`
- **Image optimization** via `next/image` with lazy loading and modern formats (WebP/AVIF)
- **Static Site Generation (SSG)** — pre-rendered pages for maximum speed

### 📊 Analytics & Ads
- **Google Tag Manager** (GTM-MW2HHJZ5) integrated via `@next/third-parties`
- **Google Consent Mode v2** — default-deny with granular category updates
- **DataLayer events** — centralized WhatsApp click tracking with `button_location`
- **Google Ads ready** — conversions configurable via GTM

### 🔒 Compliance & Security
- **LGPD** — cookie banner with granular consent (essential/analytics/marketing)
- **Legal modals** — Privacy Policy, Terms of Use, Cookie Policy
- **Security headers** — X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- **OAB compliance** — follows Provimento 205/2021 on legal advertising

### 🎨 Design & UX
- **Design system** — corporate palette (Navy Deep, Bronze Accent, Sand Light) with CSS variables
- **Mobile-first** — responsive layout with optimized breakpoints
- **Micro-animations** — scroll-triggered animations, hover effects, card transitions
- **WhatsApp widget** — smart popup with 15s timer + pulsing floating button
- **Mobile menu** — slide-in drawer with spring animations
- **Scroll to top** — contextual button with fade-in/out

---

## 🏗️ Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout — SEO, JSON-LD schemas, GTM
│   ├── page.tsx            # Home page (section composition)
│   ├── robots.ts           # Dynamic robots.txt
│   └── sitemap.ts          # Dynamic sitemap.xml
├── components/
│   ├── sections/           # Page sections (9 components)
│   │   ├── NavBar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AreasSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── DiferenciaisSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── ContactSection.tsx
│   ├── shared/             # Global reusable components
│   │   ├── CTABanner.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── ScrollToTopButton.tsx
│   │   ├── CookieBanner.tsx
│   │   ├── LegalModals.tsx
│   │   ├── Footer.tsx
│   │   └── ClientModalsWrapper.tsx
│   └── ui/                 # UI primitives (Radix wrappers)
│       ├── accordion.tsx
│       ├── tabs.tsx
│       ├── specialty-card.tsx
│       └── mobile-menu.tsx
├── lib/
│   ├── constants.ts        # Centralized data (OAB, phone, email, WhatsApp)
│   └── analytics.ts        # GTM tracking helpers
└── styles/
    ├── index.css           # Style entry point
    ├── tailwind.css        # Tailwind v4 config
    └── theme.css           # Design tokens and base styles
```

### Architectural Decisions

| Decision | Reason |
|----------|--------|
| **Centralized data in `constants.ts`** | OAB number, phone, email, and WhatsApp links in one place — prevents inconsistencies |
| **`CTABanner` as a reusable component** | The same CTA pattern appeared in 4 sections — extracted to eliminate duplication |
| **Centralized `analytics.ts`** | All sections use `trackWhatsAppClick()` with location context — consistent GTM tracking |
| **UI components in `components/ui/`** | Radix wrappers (Accordion, Tabs) separated from business components |
| **CSS variables + Tailwind** | Design tokens in `:root` for consistency; Tailwind for utility classes |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
git clone https://github.com/kleefisch/lawyer-wagner-souza.git
cd lawyer-wagner-souza
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
pnpm build
pnpm start
```

---

## 🌍 Deploy

Optimized for **Vercel**:

1. Connect the repository at [vercel.com](https://vercel.com)
2. Set a custom domain
3. SSL/HTTPS is automatic
4. Configure environment variables via the dashboard if needed

---

## 📈 SEO Checklist

- [x] `<title>` with geographic keywords (Goiânia + Brazil)
- [x] Optimized `<meta description>` with CTA
- [x] OpenGraph + Twitter Cards
- [x] Schema.org `LegalService` with 19 services
- [x] Schema.org `FAQPage` for rich snippets
- [x] Canonical URL
- [x] `sitemap.xml` + `robots.txt`
- [x] Image `alt` tags with keywords
- [x] Proper heading hierarchy (single `<h1>` per page)
- [x] Semantic HTML5

---

## 📄 License

This project is proprietary. All rights reserved © 2026 Wagner Souza Advocacia.

Developed by [KleeLabs](https://kleelabs.tech).
