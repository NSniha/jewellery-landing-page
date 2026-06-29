<div align="center">
<img width="1280" height="800" alt="Linkedin-Feature (1)" src="https://github.com/user-attachments/assets/ae3ff862-eb1c-4c92-996c-60a6eab084e2" />


<h1>Veloura — Luxury Jewellery Landing Page</h1>

<p>A fully responsive jewellery landing page built with React, Vite, and Tailwind CSS. Designed for a premium jewellery brand with a complete shopping experience including cart, wishlist, quick view, and smooth animations.</p>

<br/>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-AD8440?style=for-the-badge&logo=netlify&logoColor=white)](https://idyllic-sfogliatella-cf2330.netlify.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-jewellery--landing--page-17120D?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NSniha/jewellery-landing-page)

<br/>

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8)](https://tailwindcss.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://netlify.com)

</div>

---

## What is Veloura?

**Veloura** is a luxury jewellery landing page built as a frontend portfolio project. It replicates a real-world jewellery brand website with professional UI, interactive shopping features, and a polished design system using gold accent colors, serif typography, and smooth animations.

This jewellery landing page is ideal as a reference project for anyone building a jewellery store website, ecommerce UI, or luxury brand landing page with React and Tailwind CSS.

---

## Live Preview

🌐 **[https://idyllic-sfogliatella-cf2330.netlify.app](https://idyllic-sfogliatella-cf2330.netlify.app)**

---

## Features

**Shopping Interactions**
- Cart drawer — add, remove, update quantities, subtotal & total
- Wishlist drawer — toggle wishlist, active state indicator
- Quick view modal — image, price, old price, add to cart
- Search popup — filter products by name, suggested categories

**UI & Animations**
- Scroll-reveal animations using native `IntersectionObserver`
- Auto-playing testimonial slider with arrow and dot navigation
- FAQ accordion with smooth height animation and icon rotation
- Toast notifications for cart actions and newsletter form
- Product image hover zoom effect
- Drawer and modal slide-in animation

**Layout & Design**
- Fully responsive — desktop, tablet, and mobile
- Luxury design system — gold accents, serif headings, soft neutral backgrounds
- Component-based React architecture with reusable layout classes
- Semantic HTML and accessible markup

---

## Page Sections

| Section | Description |
|---|---|
| Header | Logo, navigation, search, wishlist, cart, mobile menu |
| Hero | Large image layout, CTA button, decorative elements |
| Categories | Rings, necklaces, earrings with hover effects |
| Story | Brand narrative section with gold background |
| Products | Product cards with quick view, wishlist, cart |
| Services | Brand value propositions |
| Testimonials | Auto-playing customer review slider |
| FAQ | Smooth accordion for common questions |
| CTA Banner | Full-width campaign section |
| Footer | Newsletter, links, social icons, copyright |

---

## Tech Stack

| Technology | Role |
|---|---|
| React | Component-based UI |
| Vite | Build tool and dev server |
| Tailwind CSS | Utility-first styling |
| JavaScript | Interactivity and logic |
| CSS3 | Custom animations and layout |
| Ionicons | UI icon library |

---

## Design System

**Colors**

| Token | Hex |
|---|---|
| Primary Gold | `#AD8440` |
| Warm Gold | `#B48A43` |
| Dark Text | `#252525` |
| Deep Black | `#17120D` |
| Soft Background | `#F8F7F5` |

**Fonts** — Source Serif 4 (headings) · Manrope (body, buttons, nav)

**Global layout classes**

```css
.vel-container {
  width: min(calc(100% - 90px), 1360px);
  margin-inline: auto;
}

.vel-section-padding {
  padding-block: 50px;
}
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/NSniha/jewellery-landing-page.git

# Move into the project folder
cd jewellery-landing-page

# Install dependencies
npm install

# Start the development server
npm run dev
```

```bash
npm run build    # Production build
npm run preview  # Preview the production build
```

Add Ionicons before the closing `</body>` tag in `index.html`:

```html
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
```

---

## Folder Structure

```
jewellery-landing-page/
├── public/
├── src/
│   ├── assets/images/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Categories/
│   │   ├── StoryDetail/
│   │   ├── Products/
│   │   ├── Testimonials/
│   │   ├── FAQ/
│   │   ├── LegacyCTA/
│   │   └── Footer/
│   ├── data/products.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## Responsive Breakpoints

`1199px` · `991px` · `767px` · `575px` · `420px`

---

## Author

**Nobonita Saha Niha** — Frontend Developer
