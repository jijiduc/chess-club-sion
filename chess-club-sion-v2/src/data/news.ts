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
    text: `La 4ème ronde du Championnat Suisse par Équipe s'est déroulée le 17 mai 2025 avec des résultats contrastés pour nos deux équipes sédunoises.

**Sion 1 en 1ère ligue**
Notre première équipe s'est inclinée 2½ - 5½ face au leader incontesté Genève 2. Face à une formation invaincue qui domine largement le groupe, nos joueurs ont néanmoins fait preuve de combativité et de détermination malgré l'écart de niveau.

**Sion 2 en 3ème ligue**
Excellente performance de notre deuxième équipe qui s'impose 3½ - 2½ contre Renens 1 ! Après leur belle victoire en ronde 2, cette nouvelle réussite confirme les progrès de l'équipe et leur permet de se maintenir confortablement dans le milieu de tableau.

**Classements après 4 rondes**
• Sion 1 : 8ème place (1ère ligue) - 0 point de match, 10½ points individuels
• Sion 2 : 5ème place (3ème ligue) - 4 points de matchs, 11 points individuels

Si la situation reste délicate pour Sion 1, la dynamique positive de Sion 2 est très encourageante. L'équipe a trouvé ses marques et peut viser une place honorable en fin de saison.

→ Voir tous les résultats et classements du CSE : /competitions/cse`,
    icon: "trophy",
  },
  {
    date: new Date('2025-05-03T12:00:00'),
    title: "Final du CVE : victoires en cadence lente et rapide !",
    description: "Sion 1 remporte les deux titres lors des finales valaisannes par équipes, s'imposant en parties lentes et rapides.",
    text: `Journée historique pour le Club d'Échecs de Sion ! Lors des finales valaisannes par équipes du 3 mai 2025, notre club a réalisé un doublé exceptionnel en remportant les deux titres mis en jeu.

**🏆 FINALE PARTIES LENTES - Victoire de Sion 1**

Sion 1 remporte le titre valaisan en s'imposant 2½ - 1½ face à Martigny !

• Échiquier 1 : Benoît Perruchoud - Pierre-Marie Rappaz (½-½)
• Échiquier 2 : Yves Roduit - Hugo Floure (0-1) 
• Échiquier 3 : Jean-Marie Lovey - Flavien Sola (1-0)
• Échiquier 4 : Jeremy Duc - Brice Moret (1-0)

Dans le match pour la 7ème place, Sion 2 s'impose largement 3-1 contre Riddes :

• Échiquier 1 : Olivier Crettenand - Pierre Bonvin (1-0)
• Échiquier 2 : Damien Vouillamoz - Roberto Cortada (½-½)
• Échiquier 3 : Akram Ben Salem - Christophe Favre (½-½)
• Échiquier 4 : Alain Droz - Romuald Moerschell (1-0)

**🏆 FINALE PARTIES RAPIDES - Nouveau sacre sédunois**

L'après-midi, l'équipe sédunoise composée de Jean-Yves Riand, Pierre-Marie Rappaz, Flavien Sola et Jeremy Duc a dominé la compétition de parties rapides. Vainqueurs de leurs 4 matchs de poule, ils ont ensuite remporté la finale pour compléter un doublé mémorable !

→ Voir tous les résultats et classements du CVE : /competitions/cve`,
    icon: "trophy",
  },
  {
    date: new Date('2025-04-26T12:00:00'),
    title: "3ème ronde du CSE: une 3ème journée dans le dure...",
    description: "Défaites pour Sion 1 et Sion 2 lors de la 3ème journée du Championnat Suisse par Équipe 2025.",
    text: `Journée difficile pour nos équipes lors de la 3ème ronde du Championnat Suisse par Équipe, disputée à domicile le 26 avril 2025.

**Sion 1 - Köniz-Bubenberg 1 : 3-5**

Malgré la défaite, plusieurs joueurs se sont distingués :

✓ Victoires :
• Échiquier 3 : Flavien Sola
• Échiquier 8 : Olivier Ulmann

= Nulles :
• Échiquier 5 : Vlad Popescu
• Échiquier 7 : Yann Bourban

✗ Défaites :
• Échiquier 1 : Jean-Yves Riand
• Échiquier 2 : Jeremy Duc
• Échiquier 4 : Jean-Michel Paladini
• Échiquier 6 : Yves Roduit

**Sion 2 - Grand Echiquier 2 : 1½-4½**

Une seule victoire mais de la combativité :

✓ Victoire :
• Échiquier 3 : Alexandre Briguet

= Nulle :
• Échiquier 1 : Olivier Crettenand

✗ Défaites :
• Échiquier 2 : Mazlum Tosun
• Échiquier 4 : Claude Bétrisey
• Échiquier 5 : Akram Ben Salem
• Échiquier 6 : Sandro Bétrisey

**Situation au classement**
Après trois rondes, Sion 1 occupe la 8ème place (dernière) en 1ère ligue avec 0 point de match. Sion 2 est 6ème en 3ème ligue avec 2 points de matchs. 

Malgré ce début de championnat compliqué, les équipes gardent le moral et sont déterminées à inverser la tendance. Prochain rendez-vous le 21 juin avec Sion 1 - Neuchâtel 1 et Sion 2 - Monthey 1.

→ Voir tous les résultats et classements du CSE : /competitions/cse`,
    icon: "trophy"
  }
]