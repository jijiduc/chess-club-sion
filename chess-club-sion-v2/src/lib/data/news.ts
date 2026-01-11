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
    icon: "trophy",
    date: new Date('2026-01-12T10:00:00'),
    title: "Bravo et félicitations à tous nos joueurs qui ont participé au tournoi de Bagnes !",
    description: "Une magnifique délégation sédunoise d'une quinzaine de joueurs, des juniors aux séniors, a brillé lors du tournoi de Bagnes. Bravo à tous !",
    text: `❤️🤍 pour cette belle délégation sédunoise !

Ce dimanche 11 janvier 2026, une quinzaine de joueurs du Club d'Échecs de Sion, allant des plus jeunes espoirs aux séniors expérimentés, ont fait le déplacement pour participer au **Tournoi de Bagnes**.

Nous tenons à adresser un immense bravo à tous nos membres pour leur combativité et leur esprit d'équipe tout au long de la journée. C'est une fierté de voir les couleurs du club si bien représentées dans les compétitions cantonales.

Un grand merci également aux **organisateurs du club de Bagnes** pour leur accueil chaleureux, qui lance idéalement l'année échiquéenne valaisanne.

Félicitations à tous et rendez-vous au prochain tournoi !`,
    hasImage: true,
    image: {
      src: 'picture/events/rapid_bagnes/delegation_sedunoise.jpeg',
      alt: "La délégation sédunoise au tournoi de Bagnes"
    },
    hasLink: true,
    link: 'https://www.uve-wsb.ch/competitions-valaisannes/tib',
    linkText: "Voir les résultats complets"
  },
  {
    icon: "trophy",
    date: new Date('2025-12-21T18:00:00'),
    title: "Pascal Vianin remporte le Blitz de Noël 2025 !",
    description: "Une belle édition du nouveau tournoi de blitz de Noël qui a réuni 42 joueurs. Pascal Vianin s'impose devant Colin Moesching et Pierre-Marie Rappaz.",
    text: `Le tournoi de Blitz de Noël du Club d'Échecs de Sion s'est déroulé ce dimanche 21 décembre 2025. Cette édition a rencontré un franc succès avec la participation de **42 joueurs** qui se sont affrontés dans une ambiance festive et conviviale.

**Le Podium**
Au terme des 7 rondes, c'est **Pascal Vianin** qui s'impose brillamment avec 6.5 points, ne concédant qu'une seule nulle face à Pierre-Marie. Il devance le jeune talent **Colin Moesching** (6 points) et **Pierre-Marie Rappaz** (5.5 points).

**Côté juniors**
Chez les juniors, Jacques Barrades se classe 1er junior au départage (4ème place, 5pts) suivit de **Noé Koehler** (2ème junior, 6ème place, 5 pts) et **Mischa Stuyts** (3ème junior, 10ème place, 4.5 pts).

**Classement top 10**
| Rg | Nom | Pts |
|---|---|---|
| 1 | Vianin Pascal | 6½ |
| 2 | Moesching Colin | 6 |
| 3 | Rappaz Pierre-M. | 5½ |
| 4 | Barrade Jacques | 5 |
| 5 | Eggel Xavier | 5 |
| 6 | Koehler Noe | 5 |
| 7 | Bijelic Milan | 4½ |
| 8 | Sola Flavien | 4½ |
| 9 | Duc Jeremy | 4½ |
| 10 | Stuyts Mischa | 4½ |

Un grand merci à l'arbitre **Fabrice Lovey** pour la parfaite tenue du tournoi, ainsi qu'à tous les participants !
Joyeuses fêtes de fin d'année à tous !`,
    hasImage: true,
    image: {
      src: 'picture/events/BlitzNoel2025/blitzNoel2025Vainqueurs.jpeg',
      alt: "Le podium du Blitz de Noël 2025"
    },
    hasLink: true,
    link: 'picture/events/BlitzNoel2025/Blitz_Sion_2025_Liste_de_classement.pdf',
    linkText: "Télécharger le classement complet (PDF)"
  },
  {
    icon: "trophy",
    date: new Date('2025-12-14T10:00:00'),
    title: "CSG R3 : Valais 3 et Sion 1 en tête à la pause de Noël !",
    description: "Bilan positif pour cette 3ème ronde de CSG. Valais 1 se relance avec une victoire à Berne, Valais 3 conserve sa première place après un nul contre son dauphin, et Sion 1 reste leader malgré une courte défaite.",
    text: `La troisième ronde du Championnat Suisse par Groupes (CSG) s'est disputée ce samedi 13 décembre. Nos équipes abordent la pause hivernale avec des classements très prometteurs.

**Valais 1 (2e ligue fédérale) : Une victoire qui fait du bien**
En déplacement dans la capitale pour y affronter SK Bern 1, l'équipe fanion a tenu son rang de favorite (moyenne Elo 2121 contre 2001). Elle s'impose logiquement sur le score de **5 - 3**.
On notera les victoires du GM Christian Bauer au premier échiquier, ainsi que celles de Stéphane Emery, Alexandre Zaza et Simon Morand. Ce succès permet à l'équipe de remonter à la **5ème place** du classement provisoire.

**Valais 3 (1ère ligue régionale) : Toujours invaincu dans le choc au sommet**
C'était l'affiche de cette ronde : le leader Valais 3 affrontait son dauphin Fribourg 1. Le match a tenu toutes ses promesses et s'est soldé par un match nul de combat **3 - 3**.
Face à une équipe fribourgeoise très homogène, **Xavier Eggel** a signé la seule victoire sédunoise. Flavien Sola, Jean-Yves Riand, Pierre-Marie Rappaz et Yves Roduit ont assuré le match nul.
Ce résultat est une excellente opération comptable puisque Valais 3 conserve la **1ère place** du groupe !

**Sion 1 (3ème ligue régionale) : Une défaite sans conséquence**
Sion 1 recevait Vevey 2 pour un match serré. Malgré la belle victoire de **Loïc Devaud** au premier échiquier et la nulle de Stanislava Kolisnichenko, l'équipe s'incline de justesse **1½ - 2½**.
Cependant, grâce aux résultats des autres équipes du groupe, Sion 1 conserve provisoirement sa **1ère place** au classement !

Bravo à tous pour ce début de saison ! Prochaine ronde en 2026.`,
    hasImage: true,
    image: {
      src: '/picture/background/set_up.jpeg',
      alt: "Pièces d'échecs"
    },
    hasLink: true,
    link: '/competitions/csg',
    linkText: "Voir les classements complets"
  },
  {
    icon: "graduation-cap",
    date: new Date('2025-12-07T18:00:00'),
    title: "GPVJ à Riddes : Bravo à nos jeunes !",
    description: "Trois de nos juniors ont participé à la 3ème étape du Grand Prix Valaisan Junior à Riddes. Angelo Prost-Hachemi termine à une belle 5ème place !",
    text: `Ce dimanche 7 décembre 2025 se tenait à Riddes la 3ème étape du Grand Prix Valaisan Junior (GPVJ). Le Club d'Échecs de Sion est fier d'y avoir été représenté par trois de ses jeunes talents.

**Les résultats :**
* **Angelo Prost-Hachemi** réalise un bon tournoi et se classe **5ème** avec 5 points sur 7.
* **Joseph Spahr** termine à la 26ème place avec 3 points.
* **David Makarenko** se classe 34ème avec 2 points.

Nous tenons à féliciter chaleureusement tous les trois pour leur participation et leur combativité ! 

Une mention spéciale également pour **Angelo** et **Joseph** qui, avant de disputer le tournoi l'après-midi, avaient déjà pris part le matin même au cours de l'école d'échecs de l'UVE. Un bel exemple de passion et d'assiduité !

Bravo à la relève sédunoise !`,
    hasImage: true,
    image: {
      src: '/picture/news/Chess_pieces_close_up.jpg',
      alt: "Pièces d'échecs"
    },
    hasLink: true,
    link: '/competitions/GPV',
    linkText: "Plus d'information sur le GPVJ..."
  },
  {
    icon: "trophy",
    date: new Date('2025-11-23T09:00:00'), // Rédigé le lendemain des matchs
    title: "CSG R2 : Sion 1 et Valais 3 cartonnent, Valais 1 arrache le nul !",
    description: "Excellente deuxième ronde de CSG pour nos équipes ! Valais 3 s'impose 4,5 - 1,5 contre Echallens 2, Sion 1 gagne 4-0 contre Montreux, et Valais 1 obtient un solide match nul 4-4 contre Echallens 1.",
    text: `La deuxième ronde du Championnat Suisse par Groupes (CSG), qui s'est jouée hier le 22 octobre, a été marquée par d'excellentes performances de nos équipes.

**Valais 1 (2e ligue fédérale)**
Opposée à la forte équipe d'Echallens 1, Valais 1 a réalisé une performance solide en arrachant un match nul **4 - 4**. Un résultat très encourageant pour la suite du championnat.

**Valais 3 (1ère ligue régionale)**
L'équipe continue sur sa lancée de la première ronde avec une nouvelle victoire convaincante. Valais 3 s'est imposée sur le score de **4,5 - 1,5** face à Echallens 2.

**Sion 1 (3ème ligue régionale)**
Début de saison parfait pour Sion 1 qui enchaîne une deuxième victoire. L'équipe a largement dominé Montreux 2 en s'imposant sur un score sans appel de **4 - 0**.

Félicitations à tous les joueurs pour ces superbes résultats !`,
    hasImage: true,
    image: {
      src: '/picture/background/set_up.jpeg',
      alt: "Pièces d'échecs"
    },
    hasLink: true,
    link: '/competitions/csg',
    linkText: "Consulter les détails du CSG"
  },
  {
  icon: "trophy",
  date: new Date('2025-11-17T09:00:00'),
  title: "Succès sédunois au GP de Monthey : Titres valaisans pour Sola et Rappaz !",
  description: "Bravo à nos membres ayant participés au 14e GP de Monthey, notamment Flavien Sola (Champion Valaisan) et Pierre-Marie Rappaz (Champion Valaisan Sénior).",
  text: "Le 14ème Grand-Prix de Monthey s'est déroulé du 14 au 16 novembre 2025, marquant également le centenaire du club organisateur. Plusieurs membres du Club d'Échecs de Sion y ont participé avec succès, remportant des titres cantonaux.\n\nNous adressons nos plus vives félicitations à :\n\n* **Flavien Sola** : Il remporte le titre de **Champion Valaisan de parties lentes**. Il termine 12ème au classement général avec 5.0 points.\n* **Pierre-Marie Rappaz** : Il est sacré **Champion Valaisan Sénior**. Il se classe 22ème avec 4.0 points.\n* **Jean-Yves Riand** : Il décroche la place de **1er Sénior** du tournoi, terminant 21ème avec 4.5 points.\n\nUn grand bravo à eux, ainsi qu'à tous les autres membres du CE Sion présents pour leur participation !",
  hasImage: true,
  image: {
    src: "picture/events/Monthey_2025/vainqueurs.jpg",
    alt: "Les différents vainqueurs (g.à.d. Flavien Sola, IM Tom Decugniere (2ème), Gm Mishra Swayams (1er), FM Aurelio Colmenares (3ème) et Pierre-Marie Rappaz"
  },
  hasLink: true,
  link: "https://www.chessmonthey.ch/images/fichiers/pdf/Monthey25b-TeilRang.pdf",
  linkText: "Consulter les résultats détaillés"
},
  {
    icon: "trophy",
    date: new Date('2025-11-01T09:00:00'), // Rédigé le lendemain du match
    title: "CSG R1 : Débuts contrastés pour nos joueurs !",
    description: "Lancement du Championnat Suisse par Groupes ce 1er novembre. Sion 1 et Valais 3 s'imposent brillamment, tandis que Valais 1 subit une défaite logique en 2e ligue fédérale.",
    text: `Le coup d'envoi du Championnat Suisse par Groupes (CSG) 2025/26 a été donné ce samedi 1er novembre ! Quatre équipes impliquant des joueurs de notre club étaient engagées, avec des résultats diverses.

**Valais 1 (2e ligue fédérale)**
Pour son entrée en matière, l'équipe fanion affrontait Trümmerfeld 1. Face à une solide équipe, Valais 1 s'incline logiquement sur le score de **5½ - 2½**. Un début de saison difficile dans une ligue très compétitive.

**Valais 2 vs Valais 3 (1ère ligue régionale)**
C'était le grand derby fratricide de cette première ronde ! La rencontre a tourné à l'avantage de **Valais 3**, qui n'a laissé aucune chance à **Valais 2** en s'imposant sur le score net et sans appel de **6 - 0**. Une entrée en matière parfaite pour l'équipe du capitaine Pierre-Marie Rappaz.

**Sion 1 (3ème ligue régionale)**
Départ en fanfare pour notre équipe Sion 1 ! Opposée à Valais 4, l'équipe s'impose de manière convaincante sur le score de **4 - 0**. C'est un excellent résultat qui lance idéalement la saison.

Bravo à tous les joueurs pour leur engagement lors de cette première ronde !
`,
    hasImage: true,
    image: {
      src: '/picture/background/set_up.jpeg',
      alt: "Pièces d'échecs"
    },
    hasLink: true,
    link: '/competitions/csg',
    linkText: "Consulter les détails du CSG"
  },
  // --- Fin de l'article ajouté ---
  {
    icon: "trophy",
    date: new Date('2025-10-26T18:00:00'), // La date de l'événement
    title: "L'Activ Chess 2025 : Un beau succès avec 86 participants !",
    description: "Un grand bravo et merci aux 86 joueurs, bénévoles, et les autorités présentent pour cette magnifique édition de l'Activ Chess remportée par Romain Gemelli.",
    text: `Quelle magnifique journée ! Le Club d'Échecs de Sion est enchanté d'avoir organisé l'édition 2025 de son Activ Chess ce dimanche 26 octobre. Nous tenons à remercier chaleureusement les **86 participants** qui ont fait de cet événement un véritable succès et ont partagé leur passion dans une ambiance à la fois compétitive et conviviale.

Un immense merci également à tous nos soutiens, nos sponsors, et à l'incroyable équipe de bénévoles qui a œuvré sans relâche pour assurer une organisation impeccable. Sans vous, rien de tout cela ne serait possible.

Nous avons été particulièrement honorés de la visite de **Mme Nathalie Chavaz-Constantin**, Présidente de la Bourgeoisie de Sion, et de **Mr. Philippe Varone**, Président de la Ville de Sion. Leur présence témoigne du soutien de la Ville à notre manifestation et à la vie de notre club.

**Le podium de l'édition 2025 :**

Après 9 rondes intenses, nous félicitons chaleureusement les trois grands vainqueurs du tournoi :
| Rg | Nom | Pts |
|---|---|---|
| 1 | Gemelli, Romain | 8,5 |
| 2 | Iwanesko, Alexandre | 7,5 |
| 3 | Sola, Flavien | 7 |

Bravo à eux pour leur superbe performance, ainsi qu'à tous les joueurs pour les belles parties disputées !
`,
    // MODIFICATION 1: Mettre hasImage à true
    hasImage: true,
    // MODIFICATION 2: Ajouter l'objet image
    image: {
      src: 'picture/events/tournoi_plein.png', // <--- REMPLACEZ PAR LE CHEMIN DE VOTRE IMAGE
      alt: "Photo de l'Activ Chess 2025" // <--- REMPLACEZ PAR UNE DESCRIPTION
    },
    hasLink: true,
    // MODIFICATION 3: Correction du lien (un lien interne React ne doit pas contenir l'URL complète)
    link: '/activ-chess',
    linkText: "Consulter la page dédiée avec les résultats complets"
  },
  
  {
    icon: "award",
    date: new Date('2025-10-19'),
    title: "Bravo à Joseph Spahr pour sa participation au Grand Prix Junior de Bovernier !",
    description: "Notre jeune membre Joseph Spahr a courageusement défendu les couleurs du club lors de la première étape relevée du Grand Prix Valaisan Junior, qui comptait 35 participants.",
    text: "Le coup d'envoi de la saison du Grand Prix Valaisan Junior (GPVJ) a été donné ce dimanche 19 octobre 2025 à Bovernier, et le Club d'Échecs de Sion était de la partie !\n\nNous tenons à féliciter chaleureusement notre jeune joueur **Joseph Spahr** pour sa participation à ce premier tournoi très relevé. Se mesurer à 34 autres jeunes joueurs valaisans est une expérience formatrice et un défi en soi. Au terme des 7 rondes, Joseph a obtenu un score de 2 points, se classant à la 31ème place.\n\nAu-delà du classement, c'est l'engagement et le courage de participer que nous souhaitons saluer. Chaque tournoi est une occasion unique d'apprendre, de se mesurer à de nouveaux adversaires et de renforcer sa passion pour le jeu. Actif au sein du cours 'écoliers' et membre de notre équipe Sion 3 pour cette saison de Championnat Valaisan par équipe, Joseph a parfaitement représenté l'esprit combatif du club.\n\n**L'important, c'est de participer !**\n\nL'exemple de Joseph est un encouragement pour tous nos juniors. Le plus grand pas n'est pas de gagner, mais d'oser s'inscrire et de s'asseoir à l'échiquier.\n\nLa prochaine étape du Grand Prix se déroulera chez nous : c'est notre **Activ Chess de Sion** ! C'est l'occasion idéale de vivre l'ambiance d'un tournoi, que vous soyez débutant ou confirmé. Venez vous amuser, apprendre et défendre les couleurs du club à domicile.\n\nOn compte sur votre présence !",
            hasImage: true,
            image: { 
              src: '/picture/news/Chess_pieces_close_up.jpg', 
              alt: 'Joseph Spahr au tournoi de Bovernier' 
            },
            hasLink: true,    link: '/competitions/csg',
    linkText: "S'inscrire à l'Activ Chess de Sion"
  },

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
    hasImage: true,
    image: {
      src: '/picture/news/free-photo-of-close-up-of-chess-pieces.jpeg',
      alt: "Centenaire du Club d'Échecs de Monthey"
    },
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
    hasImage: true,
    image: {
      src: '/picture/news/MSFT-Brown-chess-pieces-on-a-chessboard.avif',
      alt: "Championnat Suisse par Équipes"
    },
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
    hasImage: true,
    image: {
      src: '/picture/news/others_chessboard.jpeg',
      alt: "Activ Chess de Sion"
    },
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
    hasImage: true,
    image: {
      src: '/picture/news/_board.jpg',
      alt: "Championnat Suisse par Équipes"
    },
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
    hasImage: true,
    image: {
      src: '/picture/news/set_up.jpeg',
      alt: "Champions Valaisans"
    },
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
    hasImage: true,
    image: {
      src: '/picture/news/chess-rules-and-regulations-1024x682.jpg',
      alt: "Championnat Suisse par Équipes"
    },
    hasLink: true,
    link: "/competitions/cse",
    linkText: "Voir tous les résultats et classements du CSE"
  },
]