# Site Web du Club d'Échecs de Sion

Site web officiel du Club d'Échecs de Sion, accessible sur [cesion.ch](https://cesion.ch/), réalisé par [Jeremy Duc](https://github.com/jijiduc) sur la base du travail d'[Arnaud Pannatier](https://github.com/ArnaudPannatier) trouvable [ici](https://github.com/ArnaudPannatier/cesion).

## Informations de dévelopement

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
bun run tailwindcss -i src/css/apply.css -o src/css/tailwind.css --watch
```

### Production

Compiler et minifier les styles pour la production :

```bash
bun run tailwindcss -i src/css/apply.css -o src/css/tailwind.css --minify
```

Voici la structure complète avec les descriptions :

```
├── archives/               # Dossier des archives
│   └── ancien_site/        # Ressources de l'ancien site web du CE Sion
├── node_modules/           # Dépendances du projet
├── src/                    # Code source
│   ├── css/                # Fichiers CSS
│   ├── js/                 # Fichiers JavaScripts
│   └── pages/              # Pages HTML du site
├── static/                 # Ressources statiques
│   ├── picture/            # Images du site (photos, bannières, etc.)
│   ├── favicon/            # Icônes du site pour différentes plateformes
│   └── pieces/             # Pièces d'échecs en format SVG pour les animations
├── .gitignore              # Liste des fichiers à ignorer par Git
├── bun.lock                # Verrouillage des versions des dépendances pour Bun
├── package.json            # Configuration du projet et liste des dépendances
├── README.md               # Documentation du projet
└── tailwind.config.js      # Configuration de Tailwind CSS (thème, plugins, etc.)
```
