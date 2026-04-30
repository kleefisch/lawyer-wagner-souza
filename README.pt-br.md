<p align="right">
  <a href="README.md">🇺🇸 English</a> &nbsp;·&nbsp;
  <a href="README.pt-br.md"><strong>🇧🇷 Português</strong></a>
</p>

<p align="center">
  <img src="public/wagner-hero-1.png" alt="Wagner Souza Advocacia" width="280" />
</p>

<h1 align="center">Wagner Souza Advocacia</h1>

<p align="center">
  <strong>Website institucional de alto impacto para escritório de advocacia especializado em Direito Criminal e Previdenciário.</strong>
</p>

<p align="center">
  <a href="https://wagnersouzaadvocacia.com.br">🌐 Demo ao Vivo</a> •
  <a href="#-stack-técnica">⚙️ Stack</a> •
  <a href="#-funcionalidades">✨ Funcionalidades</a> •
  <a href="#-arquitetura">🏗️ Arquitetura</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2-black?logo=nextdotjs" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4.x-06B6D4?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript" />
  <img src="https://img.shields.io/badge/Framer%20Motion-11-FF0050?logo=framer" />
</p>

---

## 📋 Sobre o Projeto

Website institucional desenvolvido para o escritório **Wagner Souza Advocacia**, com foco em:

- **SEO agressivo** para ranqueamento orgânico em Goiânia, Goiás e todo o Brasil
- **Google Ads ready** com Google Tag Manager + Consent Mode v2
- **Conformidade LGPD/OAB** com banner de cookies, política de privacidade e termos de uso
- **Design premium** com estética executiva (navy + bronze) que transmite autoridade e confiança

### 🎯 Objetivo de Negócio

Gerar leads qualificados via WhatsApp para consultas jurídicas nas áreas de Direito Criminal e Previdenciário, com atuação nacional e foco regional em Goiás.

---

## ⚙️ Stack Técnica

| Tecnologia | Versão | Propósito |
|-----------|--------|-----------|
| **Next.js** | 16.2 | Framework React com SSG, otimização de imagens e routing |
| **React** | 19.x | UI components com hooks modernos |
| **TypeScript** | 5.x | Type safety em todo o projeto |
| **Tailwind CSS** | 4.x | Utility-first CSS com design system customizado |
| **Framer Motion** | 11.x | Animações fluidas e micro-interações |
| **Radix UI** | latest | Componentes acessíveis (Accordion, Tabs) |
| **@next/third-parties** | latest | Integração otimizada com Google Tag Manager |

---

## ✨ Funcionalidades

### 🔍 SEO & Performance
- **Schema markup (JSON-LD)** — `LegalService` + `FAQPage` para rich snippets no Google
- **Meta tags otimizadas** — Title, description, keywords, OpenGraph, Twitter Cards
- **Canonical URL** e `sitemap.xml` gerado automaticamente
- **Otimização de imagens** via `next/image` com lazy loading e formatos modernos (WebP/AVIF)
- **Static Site Generation (SSG)** — páginas pré-renderizadas para máxima velocidade

### 📊 Analytics & Ads
- **Google Tag Manager** (GTM-MW2HHJZ5) integrado via `@next/third-parties`
- **Google Consent Mode v2** — default-deny com atualização granular por categoria
- **DataLayer events** — tracking centralizado de cliques no WhatsApp com `button_location`
- **Pronto para Google Ads** — conversões configuráveis via GTM

### 🔒 Compliance & Segurança
- **LGPD** — banner de cookies com consentimento granular (essencial/analytics/marketing)
- **Modais legais** — Política de Privacidade, Termos de Uso, Política de Cookies
- **Security headers** — X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- **Conformidade OAB** — seguindo o Provimento 205/2021 sobre publicidade na advocacia

### 🎨 Design & UX
- **Design system** — paleta corporativa (Navy Deep, Bronze Accent, Sand Light) com variáveis CSS
- **Mobile-first** — layout responsivo com breakpoints otimizados
- **Micro-animações** — animações ativadas por scroll, hover effects, transições de cards
- **Widget WhatsApp** — popup inteligente com timer de 15s + botão flutuante com pulse
- **Menu mobile** — slide-in drawer com spring animations
- **Scroll to top** — botão contextual com fade-in/out

---

## 🏗️ Arquitetura

```
src/
├── app/
│   ├── layout.tsx          # Root layout — SEO, JSON-LD schemas, GTM
│   ├── page.tsx            # Home page (composição de seções)
│   ├── robots.ts           # robots.txt dinâmico
│   └── sitemap.ts          # sitemap.xml dinâmico
├── components/
│   ├── sections/           # Seções da página (9 componentes)
│   │   ├── NavBar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AreasSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── DiferenciaisSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── ContactSection.tsx
│   ├── shared/             # Componentes reutilizáveis globais
│   │   ├── CTABanner.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── ScrollToTopButton.tsx
│   │   ├── CookieBanner.tsx
│   │   ├── LegalModals.tsx
│   │   ├── Footer.tsx
│   │   └── ClientModalsWrapper.tsx
│   └── ui/                 # Primitivos de UI (Radix wrappers)
│       ├── accordion.tsx
│       ├── tabs.tsx
│       ├── specialty-card.tsx
│       └── mobile-menu.tsx
├── lib/
│   ├── constants.ts        # Dados centralizados (OAB, telefone, email, WhatsApp)
│   └── analytics.ts        # Funções de tracking GTM
└── styles/
    ├── index.css           # Entry point de estilos
    ├── tailwind.css        # Configuração Tailwind v4
    └── theme.css           # Design tokens e base styles
```

### Decisões Arquiteturais

| Decisão | Razão |
|---------|-------|
| **Dados centralizados em `constants.ts`** | OAB, telefone, email e links de WhatsApp em um único lugar — evita inconsistências |
| **`CTABanner` como componente reutilizável** | O mesmo padrão de CTA aparecia em 4 seções — extraído para eliminar duplicação |
| **`analytics.ts` centralizado** | Todas as seções usam `trackWhatsAppClick()` com localização — consistência no tracking GTM |
| **UI components em `components/ui/`** | Wrappers Radix (Accordion, Tabs) separados dos componentes de negócio |
| **CSS variables + Tailwind** | Design tokens em `:root` para consistência, Tailwind para utility classes |

---

## 🚀 Como Rodar

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

```bash
git clone https://github.com/kleefisch/lawyer-wagner-souza.git
cd lawyer-wagner-souza
pnpm install
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Build de Produção

```bash
pnpm build
pnpm start
```

---

## 🌍 Deploy

Otimizado para deploy na **Vercel**:

1. Conecte o repositório em [vercel.com](https://vercel.com)
2. Configure o domínio customizado
3. SSL/HTTPS é automático
4. Variáveis de ambiente configuráveis via dashboard

---

## 📈 SEO Checklist

- [x] `<title>` com keywords geográficas (Goiânia + Brasil)
- [x] `<meta description>` otimizada com CTA
- [x] OpenGraph + Twitter Cards
- [x] Schema.org `LegalService` com 19 serviços
- [x] Schema.org `FAQPage` para rich snippets
- [x] Canonical URL
- [x] `sitemap.xml` + `robots.txt`
- [x] Image `alt` tags com keywords
- [x] Hierarquia de headings (único `<h1>` por página)
- [x] HTML5 semântico

---

## 📄 Licença

Este projeto é proprietário. Todos os direitos reservados © 2026 Wagner Souza Advocacia.

Desenvolvido por [KleeLabs](https://kleelabs.tech).
