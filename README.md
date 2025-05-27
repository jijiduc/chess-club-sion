# Club d'Échecs de Sion

Site web officiel du Club d'Échecs de Sion, accessible sur [cesion.ch](https://cesion.ch/), développé avec React, TypeScript et Vite.

Réalisé par [Jeremy Duc](https://github.com/jijiduc) sur la base du travail d'[Arnaud Pannatier](https://github.com/ArnaudPannatier) trouvable [ici](https://github.com/ArnaudPannatier/cesion).

## Licence

Ce travail est sous licence GNU General Public License v3.0

## Structure du Projet

```
chess-club-sion/
├── README.md                    # Ce fichier
├── chess-club-sion-v2/          # Application web principale
│   ├── src/                     # Code source React/TypeScript
│   ├── public/                  # Ressources statiques
│   │   └── archives/            # Archives historiques du club
│   ├── package.json             # Dépendances du projet
│   └── ...                      # Autres fichiers de configuration
├── web-scrapper-FSE-ligue/      # Outil d'extraction des données FSE
└── web-scrapper-fide/           # Outil d'extraction des classements FIDE
```

## Application Web (chess-club-sion-v2)

### Technologies Utilisées

- **Frontend**: React 18 avec TypeScript
- **Build Tool**: Vite.js
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Fonctionnalités Principales

- **Page d'accueil**: Actualités du club, informations pratiques
- **Membres**: Liste des membres avec classements Elo
- **Compétitions**: 
  - Championnat Suisse par Équipes (CSE)
  - Championnat Valaisan par Équipes (CVE)
  - Coupe Suisse par Équipes (CSG)
- **Programme**: Calendrier des événements et tournois
- **École d'échecs**: Informations sur les cours pour jeunes
- **Galerie**: Photos historiques du club
- **Archives**: Documents historiques (tournois, résultats, photos)

### Installation et Développement

1. Naviguer vers le dossier du projet:
   ```bash
   cd chess-club-sion-v2
   ```

2. Installer les dépendances:
   ```bash
   npm install
   ```

3. Lancer le serveur de développement:
   ```bash
   npm run dev
   ```

4. Construire pour la production:
   ```bash
   npm run build
   ```

### Outils de Données

- **web-scrapper-FSE-ligue**: Extrait les données du championnat FSE depuis le site officiel
- **web-scrapper-fide**: Récupère les classements Elo FIDE des membres du club

## Déploiement

Le site est conçu pour être déployé comme une application statique. Les fichiers de production sont générés dans le dossier `chess-club-sion-v2/dist/`.

## Contribution

Pour contribuer au projet:
1. Créer une branche pour votre fonctionnalité
2. Faire vos modifications
3. Tester localement
4. Créer une pull request
