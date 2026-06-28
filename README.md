<div align="center">

  <h1>💍 Veloura</h1>
  <p><strong>Luxury Jewellery Landing Page</strong></p>
  <p>A premium, fully responsive jewellery brand experience built with React, Vite & Tailwind CSS.</p>

  <br />

  <p>
    <img src="https://img.shields.io/badge/Status-Completed-AD8440?style=for-the-badge" alt="Status" />
    <img src="https://img.shields.io/badge/Type-Landing_Page-17120D?style=for-the-badge" alt="Type" />
    <img src="https://img.shields.io/badge/Responsive-Yes-B48A43?style=for-the-badge" alt="Responsive" />
  </p>

  <p>
    <a href="https://idyllic-sfogliatella-cf2330.netlify.app" target="_blank">
      <img src="https://img.shields.io/badge/🌐 Live Demo-Visit Site-AD8440?style=for-the-badge" alt="Live Demo" />
    </a>
    &nbsp;
    <a href="https://github.com/NSniha/jewellery-landing-page" target="_blank">
      <img src="https://img.shields.io/badge/📁 Source Code-GitHub-17120D?style=for-the-badge" alt="GitHub" />
    </a>
  </p>

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Page Sections](#-page-sections)
- [Design System](#-design-system)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Responsive Breakpoints](#-responsive-breakpoints)
- [Animation System](#-animation-system)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

## 🧭 Overview

**Veloura** is a high-end jewellery brand landing page designed for conversions. It combines a luxury visual direction with modern frontend architecture — delivering a polished, fast, and interactive experience.

The project features a full suite of e-commerce interactions including cart, wishlist, search, and quick view — all built without a backend, using React state management.

> Every section is component-based, making the codebase clean, maintainable, and easy to extend.

---

## 🛠 Tech Stack

<p align="left">
  <img src="https://skillicons.dev/icons?i=react,vite,tailwind,js,html,css" alt="Tech Stack" />
</p>

| Technology    | Purpose                          |
| ------------- | -------------------------------- |
| React         | Component-based UI architecture  |
| Vite          | Fast build tool & dev server     |
| Tailwind CSS  | Utility-first responsive styling |
| JavaScript    | Interactivity & logic            |
| CSS3          | Custom animations & layout       |
| Ionicons      | Icon library                     |

---

## ✨ Features

### 🛒 Shopping Interactions
- Add, remove & update product quantities in **Cart Drawer**
- Add or remove items in **Wishlist Drawer**
- **Quick View Modal** with full product details
- **Search Popup** with product name filtering

### 🎨 UI & Experience
- Smooth **scroll-reveal animations** via `IntersectionObserver`
- **Auto-playing Testimonial Slider** with arrows & dot navigation
- **FAQ Accordion** with icon rotation and smooth height transition
- **Toast Notification** system for cart and newsletter actions
- Responsive **Mobile Navigation Menu**

### 📐 Layout & Architecture
- Fully **responsive** across all screen sizes
- Reusable **container & spacing system**
- Consistent **typography & color tokens**
- **Automatic copyright year** in footer
- Semantic HTML with accessibility best practices

---

## 📄 Page Sections

| Section       | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| **Header**    | Logo, nav links, language selector, search, wishlist, cart, mobile menu     |
| **Hero**      | Full-width luxury image layout with CTA, overlays, and decorative elements  |
| **Categories**| Rings, necklaces, earrings with image hover effects                         |
| **Story**     | Brand craftsmanship narrative with gold background and full-width imagery    |
| **Products**  | Product cards with hover zoom, quick view, wishlist & cart actions          |
| **Services**  | Brand value propositions — craftsmanship, bespoke, limited collections      |
| **Testimonials** | Auto-playing slider with customer quotes, images, and navigation         |
| **FAQ**       | Two-column accordion layout for common customer questions                    |
| **Legacy CTA**| Full-width campaign banner with strong visual background                    |
| **Footer**    | Brand info, newsletter form, navigation links, social icons, copyright       |

---

## 🎨 Design System

### Color Palette

| Token           | Hex       | Preview |
| --------------- | --------- | ------- |
| Primary Gold    | `#AD8440` | 🟡 |
| Warm Gold       | `#B48A43` | 🟡 |
| Dark Text       | `#252525` | ⚫ |
| Deep Black      | `#17120D` | ⚫ |
| Soft Background | `#F8F7F5` | ⬜ |
| White           | `#FFFFFF` | ⬜ |

### Typography

| Role        | Font             |
| ----------- | ---------------- |
| Headings    | Source Serif 4   |
| Body        | Manrope          |
| Buttons     | Manrope          |
| Navigation  | Manrope          |

### Global Layout Utilities

```css
/* Centered, max-width container */
.vel-container {
  width: min(calc(100% - 90px), 1360px);
  margin-inline: auto;
}

/* Consistent vertical section spacing */
.vel-section-padding {
  padding-block: 50px;
}
```

---

## 📁 Folder Structure

```
veloura-jewellery-landing-page/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Header/          → Header.jsx + Header.css
│   │   ├── Hero/            → Hero.jsx + Hero.css
│   │   ├── Categories/      → Categories.jsx + Categories.css
│   │   ├── StoryDetail/     → StoryDetail.jsx + StoryDetail.css
│   │   ├── Products/        → Products.jsx + Products.css
│   │   ├── Testimonials/    → Testimonials.jsx + Testimonials.css
│   │   ├── FAQ/             → FAQ.jsx + FAQ.css
│   │   ├── LegacyCTA/       → LegacyCTA.jsx + LegacyCTA.css
│   │   └── Footer/          → Footer.jsx + Footer.css
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/NSniha/jewellery-landing-page.git

# 2. Navigate into the project
cd jewellery-landing-page

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

### Other Scripts

```bash
npm run build    # Production build
npm run preview  # Preview production build locally
```

### Ionicons Setup

Add these scripts in `index.html` before the closing `</body>` tag:

```html
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Target Device        |
| ---------- | -------------------- |
| `1199px`   | Large laptop         |
| `991px`    | Tablet landscape     |
| `767px`    | Tablet portrait      |
| `575px`    | Large mobile         |
| `420px`    | Small mobile         |

---

## 🎞 Animation System

All animations use native **`IntersectionObserver`** — no animation library required.

| Animation                | Trigger            |
| ------------------------ | ------------------ |
| Fade-up section reveal   | Scroll into view   |
| Staggered card entrance  | Scroll into view   |
| Product image hover zoom | Mouse hover        |
| CTA background zoom      | Mouse hover        |
| Testimonial transition   | Auto / Arrow click |
| Drawer slide-in          | Button click       |
| Modal popup              | Quick view click   |
| Toast notification       | Cart / Newsletter  |
| FAQ accordion            | Item click         |

---

## 🔮 Future Improvements

- [ ] Product details page
- [ ] Checkout page
- [ ] Cart persistence with `localStorage`
- [ ] User authentication
- [ ] Order history
- [ ] Admin product management panel
- [ ] Firebase or Supabase backend integration
- [ ] Payment gateway
- [ ] Blog / journal section
- [ ] SEO metadata for production
- [ ] CMS support for dynamic content

---

## 🚢 Deployment

<p align="left">
  <img src="https://img.shields.io/badge/Netlify-0B172A?style=for-the-badge&logo=netlify&logoColor=00C7B7" alt="Netlify" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=FFFFFF" alt="Vercel" />
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=FFFFFF" alt="GitHub Pages" />
</p>

Compatible with **Netlify**, **Vercel**, and **GitHub Pages**.

---

## 👩‍💻 Author

**Nobonita Saha Niha**

Frontend Developer specializing in responsive websites, React interfaces, Tailwind CSS layouts, landing pages, and modern frontend implementation.

<p align="left">
  <a href="https://github.com/NSniha">
    <img src="https://img.shields.io/badge/GitHub-NSniha-17120D?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

---

## 📜 Copyright

**© 2026 Veloura. All rights reserved.**

All design, layout, frontend implementation, written content, UI components, and brand experience are protected. Unauthorized copying, redistribution, resale, or commercial use without permission is strictly prohibited.

> *Designed and developed with care for timeless elegance, responsible luxury, and refined digital jewellery experiences.*
