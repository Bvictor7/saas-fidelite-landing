# Fidelite Pro — Site Vitrine

Site de presentation du SaaS Fidelite Pro. Site statique construit avec React + Vite + Tailwind CSS.

## Stack

- React 18 + Vite
- Tailwind CSS 3
- Deploye sur Render (Static Site)

## Structure

```
saas-fidelite-landing/
├── public/
│   └── _redirects        # Routing SPA pour Render
├── src/
│   ├── components/
│   │   ├── Navbar.jsx    # Navigation fixe avec menu mobile
│   │   ├── Hero.jsx      # Section principale avec mockup dashboard
│   │   ├── Features.jsx  # Grille des fonctionnalites
│   │   ├── Pricing.jsx   # Plans tarifaires (Gratuit / Starter / Pro)
│   │   ├── FAQ.jsx       # Questions frequentes accordeon
│   │   └── Footer.jsx    # Pied de page
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Installation

```bash
git clone https://github.com/Bvictor7/saas-fidelite-landing.git
cd saas-fidelite-landing
npm install
npm run dev
```

## Deploiement

Le site se deploie automatiquement sur Render a chaque push sur `main`.

- **Build** : `npm install && npm run build`
- **Publish** : `dist/`
- **URL** : https://saas-fidelite-landing.onrender.com

## Liens

- **App** : https://saas-fidelite-client.onrender.com
- **API** : https://saas-fidelite-api.onrender.com
- **Code app** : https://github.com/Bvictor7/cartes-fidelite-b2b