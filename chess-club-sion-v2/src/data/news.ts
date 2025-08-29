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
    date: new Date('2025-08-29T10:00:00'),
    title: "Annonce : L'Activ Chess de Sion revient le 26 octobre 2025 !",
    description: "Le traditionnel tournoi rapide du Club d'Échecs de Sion est de retour ! 9 rondes de 15+3. Inscriptions ouvertes, places limitées.",
    text: `Le Club d'Échecs de Sion a le plaisir d'annoncer son grand tournoi annuel, l'Activ Chess, qui se tiendra le **dimanche 26 octobre 2025** au bâtiment scolaire de Champsec à Sion.

Ce tournoi rapide, homologué FIDE, se jouera en **9 rondes** à la cadence de **15 minutes + 3 secondes par coup**. Il comptera pour le championnat valaisan de parties rapides 2025-26 ainsi que pour le Grand Prix Valaisan Jeunes U20.

La compétition est ouverte à tous les joueurs, des GMI aux amateurs, avec des prix spéciaux pour les différentes catégories (Top 10, Valaisans, Juniors, Féminine, Elo <2000 et <1600).

Le nombre de participants est **limité à 100 joueurs**. Une restauration sur place sera proposée avec un menu complet pour la pause de midi.

Ne manquez pas ce rendez-vous incontournable des échecs en Valais !`,
    icon: "trophy",
    hasLink: true,
    link: "/competitions/activ-chess",
    linkText: "Consulter les détails du tournoi"
  },
  {
    date: new Date('2025-08-23T12:00:00'),
    title: "CSE R6 : Nul tardif pour Sion 1, défaite logique pour Sion 2",
    description: "Lors de la 6ème ronde, Sion 1 a obtenu un match nul 4-4 à Echallens, tandis que Sion 2 s'est incliné 1-5 face au leader de son groupe, Crazy Horse 1.",
    text: `La 6ème ronde du Championnat Suisse par Équipe, qui s'est déroulée le samedi 23 août 2025, a apporté des résultats contrastés pour nos équipes.

**Sion 1 en 1re ligue : Un nul qui envoit de bons signaux**
En déplacement à Echallens, Sion 1 a décroché un match nul sur le score de 4-4. Ce résultat, obtenu grâce entre autre aux victoires de Vlad Popescu et Jean-Yves Riand ainsi qu'aux nulles de 
ne suffira malheuresement pas à l'équipe pour se maintenir, une ronde avant la fin. Cependant, ce résultat démontre que la rage de vaincre ne s'est pas estompée malgré la relégation à venir.

**Sion 2 en 3e ligue : Défaite face au leader**
À domicile, Sion 2 affrontait le leader incontesté du groupe, Crazy Horse 1. Comme l'indiquait le capitaine Sandro Betrisey, l'équipe n'a "malheureusement pas fait le poids contre les premiers du classement". La rencontre s'est soldée par une défaite 1-5. Les deux demi-points de l'équipe ont été obtenus par Simon Moerschell et Sandro, montrant l'exemple dans son rôle de capitaine.
Malgré cette défaite attendue, Sion 2 reste en bonne position pour assurer son maintien. `,
    icon: "trophy",
    hasLink: true,
    link: "/competitions/cse",
    linkText: "Voir tous les résultats et classements du CSE"
  },
  {
    date: new Date('2025-08-09T09:00:00'),
    title: "Félicitations à nos 2 champions valaisans 2024-25 de parties rapides ! ",
    description: "Au terme d'une saison 2024-25 de 3 tournois de parties rapides, Max devient champion valaisan cat. junior et Flavien champion valaisan cat. actif",
    text: `La saison 2024-2025 de parties rapides s'est achevée avec le tournoi de Martigny ce samedi 9 août 2025, et nous sommes fiers d'annoncer que deux de nos membres ont été titrés champions valaisans ! Au terme des trois tournois de la saison, **Flavien Sola** est sacré champion valaisan dans la catégorie active, tandis que **Max Chappaz** remporte le titre en catégorie junior.

**Format de la compétition**

Pour la saison 2024-2025, les titres de champions valaisans de parties rapides ont été attribués en additionnant les deux meilleurs classements obtenus par les joueurs valaisans lors de trois tournois clés :
* Le tournoi de Bagnes, le 12 janvier 2025
* Le 17ème Active Chess du Bouveret, le 23 février 2025
* Le 33ème tournoi de Martigny, le 9 août 2025

**Le parcours de nos champions**

**Flavien Sola**, notre nouveau champion valaisan actif, a su se démarquer grâce à des performances solides. Sa campagne a été particulièrement marquée par un excellent résultat au tournoi de Bagnes, où il a terminé à une impressionnante 4e place au classement général.

**Max Chappaz** a démontré une belle régularité pour s'adjuger le titre en catégorie junior. Il a participé aux trois étapes du championnat, avec des prestations remarquables notamment à Bagnes où il s'est classé 17e et surtout au Bouveret, où il a décroché une superbe 9e place au classement final.

Un grand bravo à Flavien et Max pour ces titres qui récompensent leur talent et leur investissement tout au long de la saison !`,
    icon: "trophy",
    hasLink: true,
    link: "https://www.uve-wsb.ch/competitions-valaisannes/active-chess-de-martigny",
    linkText: "Voir le détails de l'activ chess de Martigny"
  },
  {
    date: new Date('2025-06-21T12:00:00'),
    title: "CSE : Un derby valaisan sans vainqueur, un autre sans surprise",
    description: "Le derby Valais 1 - Sion 1 s'achève sur un match nul, tandis que Sion 2 s'incline face au leader Monthey.",
    text: `La 5e ronde du Championnat Suisse par Équipe s'est déroulée le 21 juin 2025 avec des résultats mitigés pour nos deux équipes.

**Sion 1 en 1re ligue**
Malgré une entame de match marquée par deux défaites consécutives, l'équipe est revenue à 3-3. Une position favorable aurait pu permettre de conclure le match, mais elle ne s’est malheureusement pas concrétisée.

**Sion 2 en 3e ligue**
Face à une équipe de Monthey bien armée et ambitieuse de promotion, Sion 2 a fait au mieux. Notons la victoire d'Akram, qui ouvre ainsi son compteur, ainsi que celle de Simon.

**Classements après 5 rondes**
• Sion 1 : 8e place (1re ligue) – 1 point de match, 14½ points individuels
• Sion 2 : 5e place (3e ligue) – 4 points de match, 13 points individuels

Il n'y a désormais que peu d'espoir de maintien pour Sion 1 après ce match nul. D'un autre côté, bien que Sion 2 soit aux portes de la zone de relégation, il y a de bonnes chances pour que l'équipe parvienne à se maintenir.`,
    icon: "trophy",
    hasLink: true,
    link: "/competitions/cse",
    linkText: "Voir tous les résultats et classements du CSE"
  },
  {
    date: new Date('2025-05-17T12:00:00'),
    title: "CSE : Victoire pour Sion 2 !",
    description: "Sion 2 s'impose face à Renens 1 et confirme sa progression, tandis que Sion 1 s'incline face au leader Genève 2.",
    text: `La 4ème ronde du Championnat Suisse par Équipe s'est déroulée le 17 mai 2025 avec des résultats contrastés pour nos deux équipes sédunoises.

**Sion 1 en 1ère ligue**
Notre première équipe s'est inclinée 2½ - 5½ face au leader incontesté Genève 2. Face à une formation invaincue qui domine largement le groupe, nos joueurs ont néanmoins fait preuve de combativité et de détermination malgré l'écart de niveau.

**Sion 2 en 3ème ligue**
Excellente performance de notre deuxième équipe qui s'impose 3½ - 2½ contre Renens 1 ! Après leur belle victoire en ronde 2, cette nouvelle réussite confirme les progrès de l'équipe et leur permet de se maintenir confortablement dans le milieu de tableau.

**Classements après 4 rondes**
• Sion 1 : 8ème place (1ère ligue) - 0 point de match, 10½ points individuels
• Sion 2 : 5ème place (3ème ligue) - 4 points de matchs, 11 points individuels

Si la situation reste délicate pour Sion 1, la dynamique positive de Sion 2 est très encourageante. L'équipe a trouvé ses marques et peut viser une place honorable en fin de saison.`,
    icon: "trophy",
    hasLink: true,
    link: "/competitions/cse",
    linkText: "Voir tous les résultats et classements du CSE"
  },
  {
    date: new Date('2025-05-03T12:00:00'),
    title: "CVE : Double championnat remporté !",
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
L'après-midi, l'équipe sédunoise composée de Jean-Yves Riand, Pierre-Marie Rappaz, Flavien Sola et Jeremy Duc a dominé la compétition de parties rapides. Vainqueurs de leurs 4 matchs de poule, ils ont ensuite remporté la finale pour compléter un doublé mémorable !`,
    icon: "trophy",
    hasLink: true,
    link: "/competitions/cve",
    linkText: "Voir tous les résultats et classements du CVE"
  },
]