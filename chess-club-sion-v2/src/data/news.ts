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
    date: new Date('2025-10-12T12:00:00'),
    title: "Festivités du 100ème anniversaire du Club d'Échecs de Monthey",
    description: "Un week-end mémorable pour célébrer le centenaire de nos amis montheysans, marqué par un tournoi par équipes, un souper de gala et une simultanée avec le GM Etienne Bacrot.",
    text: `Le week-end du 11 et 12 octobre 2025, nos amis du Club d'Échecs de Monthey ont célébré leur 100ème anniversaire avec brio au Théâtre du Crochetan. Un événement magnifique où de nombreux membres de notre club ont participé.

**Tournoi populaire par équipes**

Le samedi, un grand tournoi par équipes de 3 joueurs a réuni 30 trios dans une ambiance conviviale et compétitive. Plusieurs de nos membres y ont pris part avec d'excellents résultats :

| Rang  | Équipe | Membres du club | Pts d'équipe | Pts individuels |
|---|---|---|---|
| 2ème | **Sion Tourbillon** | Pierre-Marie Rappaz, Olivier Crettenand, Flavien Sola | 6 | 16 |
| 3ème | **Déchu, Prometteur, Dissident** | Vlad Popescu, Stéphane Emery | 6 | 15,5 |
| 5ème | **Les Nuts** | Loïc Devaud | 5 | 12,5 |
 
**Soirée de Gala et Simultanée**

Les festivités se sont poursuivies avec un superbe souper de gala le samedi soir, suivi le dimanche par une simultanée exceptionnelle animée par le Grand Maître **Etienne Bacrot**. Jeremy Duc a eu le privilège de se mesurer à l'octuple champion français.

Ce fut un très beau moment de partage et de passion pour les échecs. Nous remercions chaleureusement le Club d'Échecs de Monthey pour l'organisation impeccable de cet événement inoubliable.`,
    icon: "award",
    hasLink: true,
    link: "https://www.chessmonthey.ch/images/fichiers/pdf/100ans%20classement%202.pdf",
    linkText: "Consulter les résultats complets du tournoi populaire"
  },
  {
    date: new Date('2025-09-13T12:00:00'),
    title: "CSE R7 : une dernière ronde qui résume la saison",
    description: "Lors de la 7ème et dernière ronde, Sion c'est inclinée face à Genève 2 et sera relégué, tandis que Sion 2 a fait face sans trembler à Payerne 2 pour assurer son maintient.",
    text: `La 7ème et dernière ronde du Championnat Suisse par Équipe s'est déroulée le samedi 13 septembre 2025. Les résultats obtenus par nos équipes résument bien leur saisons respectives.

**Sion 1 en 1re ligue : Une correction finale qui devrait tirer une sonnette d'alarme**
A la maison, Sion 1 s'est incliné sévèrement 1.5 - 6.5 face au 1er du groupe Genève 2. Les Genevois étaient venus en terre valaisanne avec la ferme intention de remporté le championnat, malgré une promotion déjà acquise.
L'armada genevoise est d'ailleurs venue fournie d'une moyenne ELO dépassant de plus de 150 points celle de Sion 1. Le résultat reflète en certains points (endurance, affûtage et mindset) la saison passée et servira de leçon pour revenir plus fort en 2ème ligue la prochaine fois.

**Sion 2 en 3e ligue : une belle nulle tenue**
À Payerne, Sion 2 affrontait une des meilleurs équipes de son groupe, Payerne 2. L'équipe a fait preuve d'une belle résistance et des performances, comme celle de Joan et Jacques qui ont remporté leur parties. Cette solide prestation conclue admirablement la saison.`,
    icon: "trophy",
    hasLink: true,
    link: "/competitions/cse",
    linkText: "Voir tous les résultats et classements du CSE"
  },
  {
    date: new Date('2025-08-29T10:00:00'),
    title: "Annonce : L'Activ Chess de Sion revient le 26 octobre 2025 !",
    description: "Le 1er tournoi rapide du calendrier 2025-26 valaisan est arrivé ! 9 rondes de 15+3, côté FIDE avec une limite de 100 participants au bâtiment scolaire de Champsec à Sion",
    text: `Le Club d'Échecs de Sion a le plaisir d'annoncer son grand tournoi annuel, l'Activ Chess, qui se tiendra le **dimanche 26 octobre 2025** au bâtiment scolaire de Champsec à Sion.

Ce tournoi rapide, homologué FIDE, se jouera en **9 rondes** à la cadence de **15 minutes + 3 secondes par coup**. Il championnat valaisan de parties rapides 2025-26 ainsi que pour le Grand Prix Valaisan Jeunes U20.

La compétition est ouverte à tous les joueurs, des GMI aux amateurcomptera pour le s, avec des prix spéciaux pour les différentes catégories (Top 10, Valaisans, Juniors, Féminine, Elo <2000 et <1600).

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
    title: "CSE : Doubles derbys valaisans",
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
]