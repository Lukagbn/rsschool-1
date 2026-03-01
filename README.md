# 🦁 Online Zoo

A fully responsive multi-page website for an online zoo, where users can watch live animal webcams, donate to their favourite pets, and explore an interactive map. Built with vanilla HTML, CSS, and JavaScript.

## 🌐 Live Demo

> [_online zoo](https://lukagbn.github.io/rsschool-1/online-zoo/pages/landing/index.html)

---

## ✨ Features

### 🏠 Landing Page

<img width="1920" height="1080" alt="landing" src="https://github.com/user-attachments/assets/9298c66e-8ae5-4ee1-ba9d-5dd3fbbfc961" />

- Hero section with live cam link
- Animal intro & how-we-work sections
- Quick donate button
- Pets slider with scroll navigation
- Testimonials slider
- Care & feed section

### 🗺️ Interactive Map

<img width="1920" height="1080" alt="map" src="https://github.com/user-attachments/assets/f35ca08e-34cd-425a-8488-8eaedad2078d" />

- SVG-based world map
- Animal location markers (eagle, alligator, lion, gorilla, panda, lemur, tiger, koala)

### 🦒 Zoos Page

- Live webcam embeds for each animal
- 
<img width="1920" height="1080" alt="zoos" src="https://github.com/user-attachments/assets/d5b9ed98-fb61-4428-a93a-96d9780fb5ad" />

### 📬 Contact Page

- Contact form

<img width="1920" height="1080" alt="getintouch" src="https://github.com/user-attachments/assets/cbf0d92e-bd75-47b7-87e8-deab5a139412" />

### 💛 Donation Popup

<img width="1920" height="1080" alt="donation" src="https://github.com/user-attachments/assets/e1a83c6f-fcba-49ed-a3ad-93f245e5d5da" />

- 3-step donation flow: amount → billing → payment
- Stepper navigation with dots
- Pet selector dropdown
- Monthly recurring gift option

### 🐾 Volunteer Donation Dialog

<img width="1920" height="1080" alt="donation2" src="https://github.com/user-attachments/assets/c9f183f9-5bd1-41fa-8431-dba1d4c6f3c1" />

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
