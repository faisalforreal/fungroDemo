# FunGro — India's Experiential Learning & Teen Earning Platform 🚀

A modern, high-performance web clone of the FunGro platform, built with **React 19, Vite, and Tailwind CSS v4**.

This project has been extensively optimized for **production-grade SEO** and **Core Web Vitals** through a custom **Static Site Generation (SSG)** architecture, ensuring extremely fast load times and perfect indexability by search engines.

### 🔗 Live Deployment
**[View the Live Demo on Vercel](https://fungro-demo.vercel.app/)**  
*(Note: Vercel project link: [https://vercel.com/md-faisal-aftab/fungro-demo](https://vercel.com/md-faisal-aftab/fungro-demo))*

---

## ✨ Key Features & Architecture

- **React 19 & Tailwind CSS 4**: Built using the latest modern frontend stack for rapid styling and optimized component rendering.
- **Custom SSG (Static Site Generation)**: Pre-renders all public routes into static `index.html` files at build time (`prerender.js`). This eliminates the blank-page loading state of traditional SPAs, improving Largest Contentful Paint (LCP).
- **Google Search Central SEO Compliance**:
  - Valid **JSON-LD Schema Markup** injected directly into the HTML `<head>` (`Organization`, `WebSite`, `Article`, `FAQPage`, `BreadcrumbList`).
  - Explicit canonical URLs, unique Meta Titles, Descriptions, and OpenGraph/Twitter Cards for every route.
- **Core Web Vitals Optimized**:
  - Explicit `width`, `height`, and `loading="lazy"` attributes on images to eliminate Cumulative Layout Shift (CLS).
  - Proper HTML semantics with correct heading hierarchy (H1 -> H2 -> H3) for accessibility.
- **React Helmet Async**: Dynamically manages document head tags, fully integrated with the SSG engine to extract and hoist tags during the build step.
- **Zero-Config Vercel Ready**: Out-of-the-box compatibility with Vercel's standard Vite deployment pipeline.

## 🛠️ Tech Stack

- **Framework**: React 19
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **SEO & Meta**: React Helmet Async
- **Icons**: Lucide React

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

### Building for Production
To build the static HTML files (SSG) and the client bundle:
```bash
npm run build
```
This runs the TypeScript compiler, the Vite client/server builds, and the custom `prerender.js` script to generate static HTML for all routes into the `dist` folder.

You can preview the production build locally:
```bash
npm run preview
```

---

*Designed and optimized with ❤️ for young Indian creators and top brands.*
