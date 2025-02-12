# Site Web du Club d'Échecs de Sion

Site web officiel du Club d'Échecs de Sion, accessible sur [cesion.ch](https://cesion.ch/), réalisé par [Jeremy Duc](https://github.com/jijiduc) sur la base du travail d'[Arnaud Pannatier](https://github.com/ArnaudPannatier) trouvable [ici](https://github.com/ArnaudPannatier/cesion).

## Licence

Ce travail est sous licence GNU General Public License v3.0

## Structure des fichiers

📁 archives/\
├── 📁 ancien_site/       *# Ressources de l'ancien site web du CE Sion*\
📁 node_modules/          *# Dépendances du projet*\
📁 css/                   *# Fichiers CSS*\
📁 js/                    *# Fichiers JavaScript*\
📁 static/                *# Ressources statiques*\
├── 📁 picture/           *# Images du site (photos, bannières, etc.)*\
├── 📁 favicon/           *# Icônes du site pour différentes plateformes*\
├── 📁 pieces/            *# Pièces d'échecs en format SVG pour les animations*\
└── 📁 video/             *# Pièces d'échecs en format SVG pour les animations*\
📄 .gitignore             *# Liste des fichiers à ignorer par Git*\
📄 bun.lock               *# Verrouillage des versions des dépendances pour Bun*\
📄 package.json           *# Configuration du projet et liste des dépendances*\
📄 README.md              *# Documentation du projet*\
📄 tailwind.config.js     *# Configuration de Tailwind CSS (thème, plugins, etc.)*\
📄 *pages*.html           *# Les différentes pages html du site*\

## Pages du site

- club.html
- comite.html
- cse.html
- csg.html
- cve.html
- ecole.html
- index.html
- programme.html
- tournoi_interne.html

## Informations de dévelopement

### Technologies utilisées

- HTML5
- JavaScript
- CSS avec Tailwind
- Bun comme gestionnaire de paquets

### Prérequis

- [Bun](https://bun.sh/) - Runtime JavaScript et gestionnaire de paquets
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS

### Installation des prérequis

1. Installation de Bun :

```bash
curl -fsSL https://bun.sh/install | bash
```

2. Installation globale de TailwindCSS :

```bash
bun install -g tailwindcss @tailwindcss/cli
```

### Développement

> ⚠️ **Note importante** : Non compatible avec TailwindCSS v4

Lancer le mode développement avec compilation automatique :

```bash
bun run tailwindcss -i css/apply.css -o css/tailwind.css --watch
```

### Production

Compiler et minifier les styles pour la production :

```bash
bun run tailwindcss -i css/apply.css -o css/tailwind.css --minify
```
