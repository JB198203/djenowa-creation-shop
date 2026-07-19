# Djenowa Création

Site vitrine pour **Djenowa Création**, créatrice de bijoux tribaux artisanaux
(colliers, bracelets, boucles d'oreilles, bagues).

## Stack

Site statique — HTML / CSS / JavaScript vanilla, sans build step.

## Structure

```
.
├── index.html        # Page unique (accueil, collections, à propos, contact)
├── css/style.css      # Styles
├── js/main.js         # Menu mobile, année du footer, formulaire de contact
└── images/            # Visuels (à ajouter)
```

## Développement local

Aucune dépendance à installer. Ouvrez simplement `index.html` dans un
navigateur, ou lancez un petit serveur local :

```bash
python3 -m http.server 8000
```

Puis rendez-vous sur http://localhost:8000

## Déploiement

Site 100% statique, déployable tel quel sur **Netlify** ou **Vercel** :

- **Netlify** : connecter le repo, build command vide, publish directory `.`.
  Le formulaire de contact utilise `data-netlify="true"` et fonctionne
  nativement sans backend une fois déployé sur Netlify.
- **Vercel** : connecter le repo comme projet statique (aucune configuration
  nécessaire). Le formulaire de contact devra alors être branché sur un
  service externe (ex. Formspree) puisque la gestion de formulaire Netlify
  ne fonctionne pas sur Vercel.

## À faire

- [ ] Remplacer les visuels placeholder (dégradés CSS) par de vraies photos
      des créations
- [ ] Rédiger le texte définitif de la section "À propos"
- [ ] Ajouter les liens réseaux sociaux (Instagram, Facebook)
- [ ] Choisir et configurer l'hébergement (Netlify ou Vercel)
