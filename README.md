# Visit Taniti — D479 Prototype

A responsive, interactive tourism website prototype for Taniti Island, showcasing destination information, accommodations, experiences, and travel planning resources.

## 🌴 Project Overview

**Visit Taniti** is a modern tourism website designed to attract visitors to Taniti, a small tropical island in the Pacific. The site features comprehensive travel information, booking resources, and cultural experiences.

**Status:** Prototype  
**Language:** HTML5 / CSS3 / Vanilla JavaScript  
**Type:** Static Site  
**Primary Language:** HTML

## 📋 Pages & Features

### Core Pages
- **Home (index.html)** — Hero section, About Taniti, why visit cards, and FAQ accordion
- **Travel (travel.html)** — Transportation and getting around information
- **Stay (stay.html)** — Accommodation options (resorts, hotels, B&Bs)
- **Experience (experience.html)** — Activities and attractions (Food, Entertainment, Sightseeing)
- **Contact (contact.html)** — Contact information and inquiry form

### Key Features

#### 🎨 Interactive Components
- **Accordion FAQ** — Expandable common questions with smooth animations
- **Tabbed Interface** — Experience sections (Food, Entertainment, Sightseeing) with tab switching
- **Responsive Navigation** — Sticky navbar with search functionality
- **Hero Sections** — Eye-catching landing areas with overlays

#### 🔍 User Features
- Global search bar in navigation
- Contact form with validation
- Accessible form controls
- Mobile-responsive design

## 🗂️ Project Structure

```
D479-Prototype/
├── index.html          # Home page
├── travel.html         # Travel information
├── stay.html           # Accommodation guide
├── experience.html     # Activities & attractions
├── contact.html        # Contact & inquiry form
├── styles.css          # Global styling & layout
├── accordion.js        # FAQ accordion functionality
├── tabs.js             # Experience tabs functionality
├── contact.js          # Contact form handling
├── Images/             # Asset directory
│   ├── IndexHero.jpeg
│   ├── IndexAbout.jpeg
│   ├── IndexBeach.jpeg
│   ├── IndexForest.jpeg
│   └── IndexFood.jpeg
└── .gitattributes      # Git configuration
```

## 🎨 Design System

### Color Palette
- **Navy** (#0b3d6b) — Primary brand color
- **Ocean** (#1a6fa8) — Interactive elements
- **Sky** (#4db6e8) — Accents
- **Seafoam** (#a8dde9) — Light accents
- **Sand** (#f5f0e8) — Section backgrounds
- **Coral** (#e8734a) — Call-to-action buttons
- **White** (#ffffff) — Clean backgrounds

### Typography
- **Font Family:** Segoe UI, system-ui, sans-serif
- **Responsive sizing** — Scales with viewport (using CSS clamp)

### Components
- **Cards** — Image + content with hover effects
- **Buttons** — Primary, outline, and ocean variants
- **Forms** — Input fields, textareas, selects with focus states
- **Badges** — Resort, hotel, B&B type indicators

## 🚀 Getting Started

### No Build Process Required
This is a static HTML/CSS/JavaScript site. Simply:

1. Clone the repository
```bash
git clone https://github.com/Smb7/D479-Prototype.git
cd D479-Prototype
```

2. Open in a browser
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or serve locally:
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- **Desktop:** 900px+ (full navigation)
- **Tablet:** 600px-900px
- **Mobile:** <600px (optimized layout)

## 🧩 JavaScript Modules

### accordion.js
Handles FAQ accordion expansion/collapse:
- Click handlers on accordion buttons
- Auto-closes previous accordion when opening new one
- Updates `aria-expanded` for accessibility

### tabs.js
Manages Experience section tab switching:
- Switches between Food, Entertainment, Sightseeing content
- Updates active states and `aria-selected` attributes
- Uses data attributes for tab targeting

### contact.js
Manages contact form interactions

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA attributes (`aria-expanded`, `aria-selected`)
- Form labels and proper input associations
- Accessible color contrast
- Keyboard navigation support

## 🖼️ Images

All images on the site are **AI-generated** using Google Gemini (retrieved March 27, 2026). Images include:
- Beach panoramas
- Island landscapes
- Rainforest scenes
- Local cuisine

## 📧 Contact Information

Located in footer and contact page:
- Email address
- Phone number
- Physical address
- Social media links (optional)

## 📝 License

© 2025 Taniti Tourism Board. All rights reserved.

## 🤝 Contributing

This is a prototype. For modifications or improvements, create a branch and submit a pull request.

## 📌 Notes

- Search functionality in navbar is a placeholder (no backend integration)
- All contact form submissions are currently unhandled (requires backend)
- Images use placeholder paths and may need adjustment depending on deployment

---

**Last Updated:** May 18, 2026
