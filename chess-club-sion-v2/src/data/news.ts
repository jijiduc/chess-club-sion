export interface NewsItem {
  date: Date
  title: string
  description?: string
  text: string
  icon: 'trophy' | 'graduation-cap' | 'award'
  hasLink?: boolean
  link?: string
  linkText?: string
  hasImage?: boolean
  image?: {
    src: string
    alt?: string
  }
}

export const newsItems: NewsItem[] = [
  {
    date: new Date('2025-05-17T12:00:00'),
    title: "4ème ronde du CSE : Nouvelle victoire pour Sion 2",
    description: "Sion 2 s'impose face à Renens 1 et confirme sa progression, tandis que Sion 1 s'incline face au leader Genève 2.",
    text: `La 4ème ronde du Championnat Suisse par Équipe s'est déroulée le 17 mai avec des résultats contrastés pour nos équipes.

Sion 1 s'est incliné 2½:5½ face au leader Genève 2, une équipe invaincue qui domine le groupe. Malgré le score, notre équipe première a lutté avec détermination face à des adversaires de très haut niveau.

Sion 2 continue sur sa lancée positive en s'imposant 3½:2½ contre Renens 1. Après leur victoire en ronde 2, cette deuxième victoire confirme la progression de l'équipe et leur permet de se maintenir dans le milieu de tableau.

Classements après 4 rondes :
- Sion 1 occupe la 8ème place de 1ère ligue avec 0 point de match et 10½ points individuels
- Sion 2 se positionne à la 5ème place de 3ème ligue avec 4 points de matchs et 11 points individuels

Cette deuxième victoire de Sion 2 est très encourageante et montre que l'équipe trouve ses marques dans cette compétition. L'objectif sera de continuer sur cette dynamique positive lors des prochaines rondes.`,
    icon: "trophy",
  },
  {
    date: new Date('2025-05-03T12:00:00'),
    title: "Doublé lors des finales du CVE !",
    description: "Sion 1 remporte les deux titres lors des finales valaisannes par équipes, s'imposant en parties lentes et rapides.",
    text: `Lors de la journée des finales valaisannes de compétitions par équipe, Sion 1 à ramené les 2 titres en jeu !

Le matin, lors des finales par équipes de parties lentes, Sion 1 s'est imposé 2.5 - 1.5 contre Martigny pour remporter la compétition.
Appariements:
1. Lovey - Sola (1-0)
2. Roduit - Floure (0-1)
3. Perruchoud - Rappaz (0.5-0.5)
4. Duc - Moret (1-0)

Sion 2 s'est également imposé, sur le score de 3-1 contre Riddes pour la 7ème place.
Appariements:
1. Crettenand - Bonvin (1-0)
2. Vouillamoz - Cortada (0.5-0.5)
3. Ben Salem - Favre (0.5-0.5)
4. Droz - Moerschell (1-0)

L'après-midi, dans la compétition de parties rapides par équipe, Sion (composée de Riand, Rappaz, Sola et Duc) c'est imposée dans ses 4 matchs de poules et lors de la finale pour le doublé.`,
    icon: "trophy",
  },
  {
    date: new Date('2025-04-26T12:00:00'),
    title: "3ème ronde du CSE",
    description: "Défaites pour Sion 1 et Sion 2 lors de la 3ème journée du Championnat Suisse par Équipe 2025.",
    text: `Lors de la 3ème journée du Championnat Suisse par Equipe 2025, Sion 1 s'est incliné 3:5 face à Köniz-Bubenberg 1.

Sion 2 a connu la défaite 1½:4½ contre Grand Echiquier 2.

Au classement, Sion 1 occupe désormais la dernière place de 1ère ligue avec 0 point de matchs et 7 points individuels, tandis que Sion 2 se retrouve à la 6ème place de 3ème ligue avec 2 points de matchs et 7½ points individuels.

Ce début de championnat s'avère difficile pour nos équipes, particulièrement pour Sion 1 qui cherche encore son premier point après trois journées. Un sursaut sera nécessaire lors des prochaines rondes pour améliorer ces positions au classement.`,
    icon: "trophy"
  }
]