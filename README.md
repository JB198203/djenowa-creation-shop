# Djenowa Créations

Site vitrine pour **Djenowa Créations**, créatrice de bijoux artisanaux en
acier inoxydable (pièces 2-en-1, gravures Arbre de Vie).

## Stack

Vite + React + Tailwind CSS.

## Structure

```
.
├── index.html                    # Point d'entrée Vite
├── src/
│   ├── main.jsx                  # Bootstrap React
│   ├── App.jsx                   # Assemblage des sections
│   ├── index.css                 # Directives Tailwind + styles globaux
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx              # Section d'accueil plein écran
│       ├── BentoGrid.jsx         # Grille asymétrique des 3 concepts clés
│       ├── ProductCarousel.jsx   # Carrousel horizontal des produits
│       ├── AboutSplit.jsx        # Section atelier / savoir-faire
│       └── Footer.jsx            # Newsletter + réseaux sociaux
├── tailwind.config.js            # Thème (couleurs, polices)
└── vite.config.js
```

## Développement local

```bash
npm install
npm run dev
```

Puis rendez-vous sur http://localhost:5173

## Build de production

```bash
npm run build
npm run preview
```

## Déploiement

Site déployé sur **Vercel** (framework Vite, build command `npm run build`,
output directory `dist`).

## À faire

- [ ] Remplacer les visuels placeholder (dégradés CSS) par de vraies photos
      des créations
- [ ] Brancher le formulaire newsletter à un service (Mailchimp, Resend...)
- [ ] Ajouter les liens réseaux sociaux réels (Instagram, TikTok, Pinterest)
- [ ] Connecter le repo GitHub au projet Vercel pour le déploiement continu
