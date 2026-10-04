<div align="center">

# 👓 Dilip Optics Grand

### Modern, mobile-first website for an optical showroom in Rajahmundry

<p>
  <a href="https://dilip-opticals-website.vercel.app"><img src="https://img.shields.io/badge/Live_Demo-Visit_Site-0B2545?style=for-the-badge&logo=vercel&logoColor=D4A017" alt="Live Demo" /></a>
</p>

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-0F172A?style=flat-square&logo=tailwindcss&logoColor=38BDF8" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Oxlint-0B2545?style=flat-square&logo=oxc&logoColor=D4A017" alt="Oxlint" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p>
  <img src="https://img.shields.io/badge/Responsive-Mobile_First-D4A017?style=flat-square" alt="Responsive" />
  <img src="https://img.shields.io/badge/SEO-Meta_%2B_JSON--LD-0B2545?style=flat-square" alt="SEO" />
  <img src="https://img.shields.io/badge/Images-WebP_Optimized-16A34A?style=flat-square" alt="WebP" />
  <img src="https://img.shields.io/badge/Lint-0_errors-16A34A?style=flat-square" alt="Lint" />
</p>

</div>

---

## ✨ Overview

A fast, static front-end website for **Dilip Optics Grand** (JN Road, Rajahmundry). It presents the showroom, eye testing and optical services, a browsable eyewear catalogue, and makes it easy for customers to **enquire on WhatsApp**, **request an appointment**, and **get directions**.

Built with a navy and gold visual identity, a serif display font for headings, and a clean, content-first layout.

---

## 🚀 Features

| | Feature | Details |
|---|---|---|
| 🏠 | **Home** | Hero with real storefront photo, featured collections, services preview, store info |
| 🛍️ | **Products** | 8 eyewear styles with category tabs, Quick View modal, WhatsApp enquiry per product |
| 🩺 | **Services** | Eye testing, prescription glasses, contact lenses, frame adjustment and cleaning |
| 📅 | **Contact** | Appointment request form, WhatsApp and call buttons, address, hours, map |
| 📱 | **Mobile first** | Responsive grid, sticky filter bar, touch-friendly buttons |
| 🔎 | **SEO ready** | Title and meta tags, Open Graph and Twitter cards, LocalBusiness JSON-LD, `sitemap.xml`, `robots.txt` |
| ⚡ | **Performance** | WebP images, lazy loading, code kept lean with no heavy UI libraries |
| ♿ | **Accessibility** | Alt text, aria-labels, visible focus states, semantic HTML |

---

## 🎨 Design System

| Token | Colour | Hex |
|---|---|---|
| **Primary (Navy)** | ![#0B2545](https://img.shields.io/badge/-%20%20%20%20%20%20-0B2545?style=flat-square) | `#0B2545` |
| **Accent (Gold)** | ![#D4A017](https://img.shields.io/badge/-%20%20%20%20%20%20-D4A017?style=flat-square) | `#D4A017` |
| **Surface** | ![#F2F3F5](https://img.shields.io/badge/-%20%20%20%20%20%20-F2F3F5?style=flat-square) | `#F2F3F5` |
| **WhatsApp** | ![#25D366](https://img.shields.io/badge/-%20%20%20%20%20%20-25D366?style=flat-square) | `#25D366` |

**Typography:** Serif display font for headings, Inter for body text.

---

## 🧱 Tech Stack

- **React** with **Vite** for fast development and builds
- **Tailwind CSS v4** (configured in `src/index.css` with `@theme`)
- **React Router** for client-side routing (SPA rewrites in `vercel.json`)
- **Lucide React** icons
- **Oxlint** for linting
- **Vercel** for hosting

---

## 📁 Project Structure

```text
Opticals/
├── public/                  # favicon, sitemap.xml, robots.txt, social image
├── src/
│   ├── assets/
│   │   └── products/        # optimized WebP product images
│   ├── components/          # Navbar, Hero, Footer, TrustedBrands, ...
│   ├── data/
│   │   └── business.js      # single source of truth for business details
│   ├── pages/               # Home, About, Services, Products, Contact, NotFound
│   ├── index.css            # Tailwind v4 theme tokens
│   └── main.jsx
├── index.html               # meta tags, Open Graph, JSON-LD
├── vercel.json              # clean URLs and SPA rewrites
└── package.json
```

---

## 🛠️ Getting Started

**Prerequisites:** Node.js 18 or newer.

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd Opticals

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

---

## ⚙️ Configuration

All business details live in **`src/data/business.js`**: name, phone, WhatsApp number, address, opening hours, social links, and image paths. Update this one file and the whole site follows.

Marketing claims (years in business, customer counts, guarantees) are stored under `business.claims` and are **`null` by default**. A claim is only shown on the site once a verified value is filled in.

---

## 🖼️ Screenshots

> Add screenshots to `docs/screenshots/` and link them here.

| Home | Products |
|---|---|
| `docs/screenshots/home.png` | `docs/screenshots/products.png` |

---

## 📝 Content Notes

- Product images are **illustrative**. Replace them with photos of actual showroom stock by dropping new WebP files into `src/assets/products/` with the same filenames.
- The brand filter is switched off with `SHOW_BRAND_FILTER = false` in `Products.jsx` until brand-to-product mapping is confirmed.

---

## 🗺️ Roadmap

- [ ] Replace illustrative images with real showroom photography
- [ ] Add Google Maps embed with the verified location
- [ ] Add a verified brands list and re-enable the brand filter
- [ ] Add Telugu language toggle
- [ ] Lighthouse pass for mobile performance and accessibility

---

## 📄 License

This project was built for **Dilip Optics Grand**. All business names, logos, and brand marks belong to their respective owners.

<div align="center">

Made with ☕ and 💛 in Andhra Pradesh
