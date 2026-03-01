# 🦁 Online Zoo

A fully responsive multi-page website for an online zoo, where users can watch live animal webcams, donate to their favourite pets, and explore an interactive map. Built with vanilla HTML, CSS, and JavaScript.

## 🌐 Live Demo

> _Add your GitHub Pages link here_

---

## ✨ Features

### 🏠 Landing Page

- Hero section with live cam link
- Animal intro & how-we-work sections
- Quick donate button
- Pets slider with scroll navigation
- Testimonials slider
- Care & feed section

### 🗺️ Interactive Map

- SVG-based world map
- Animal location markers (eagle, alligator, lion, gorilla, panda, lemur, tiger, koala)

### 🦒 Zoos Page

- Live webcam embeds for each animal

### 📬 Contact Page

- Contact form

### 💛 Donation Popup

- 3-step donation flow: amount → billing → payment
- Stepper navigation with dots
- Pet selector dropdown
- Monthly recurring gift option

### 🐾 Volunteer Donation Dialog

- Triggered from multiple buttons across all pages
- Shared across landing, map, contact, and zoos pages

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Markup & semantic structure |
| CSS3 | Styling & responsive layouts |
| Vanilla JavaScript | Interactivity & DOM manipulation |
| SVG | Map markers & icons |
| Google Fonts (Montserrat) | Typography |

---

## 📁 Project Structure

```
online-zoo/
├── index.html               ← GitHub Pages redirect
├── assets/
│   ├── icons/
│   └── images/
└── pages/
    ├── landing/
    │   ├── index.html
    │   ├── app.js
    │   └── style.css
    ├── map/
    │   ├── index.html
    │   ├── app.js
    │   └── style.css
    ├── zoos/
    │   ├── index.html
    │   └── style.css
    └── contact/
        ├── index.html
        └── style.css
```

---

## 🚀 Getting Started

No installation needed — just open in browser:

```
open pages/landing/index.html
```

Or visit the live GitHub Pages link above.

---

## 📝 Notes

- Frontend-only project, no backend
- Donation flow is UI only, no real payments
- Live cams link to external zoo webcam sources
