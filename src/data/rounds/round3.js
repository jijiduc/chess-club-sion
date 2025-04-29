// src/data/rounds/round3.js - Data for round 3
export default {
    matches: [
      // 1ère ligue
      {
        id: 1,
        roundId: 3,
        homeTeamId: 3, // Neuchâtel 1
        awayTeamId: 4, // Valais 1
        score: "4½-3½"
      },
      {
        id: 2,
        roundId: 3,
        homeTeamId: 1, // Sion 1
        awayTeamId: 7, // Köniz-Bubenberg 1
        score: "3-5"
      },
      {
        id: 3,
        roundId: 3,
        homeTeamId: 5, // Echallens 2
        awayTeamId: 2, // Genève 2
        score: "5-3"
      },
      {
        id: 4,
        roundId: 3,
        homeTeamId: 8, // Fribourg 1
        awayTeamId: 6, // Grand Echiquier 1
        score: "2½-5½"
      },
      
      // 3ème ligue
      {
        id: 5,
        roundId: 3,
        homeTeamId: 9, // Sion 2
        awayTeamId: 10, // Grand Echiquier 2
        score: "1½-4½"
      },
      {
        id: 6,
        roundId: 3,
        homeTeamId: 16, // Payerne 2
        awayTeamId: 12, // Crans-Montana 2
        score: "6-0"
      },
      {
        id: 7,
        roundId: 3,
        homeTeamId: 13, // Valais 2
        awayTeamId: 11, // Monthey 1
        score: "3½-2½"
      },
      {
        id: 8,
        roundId: 3,
        homeTeamId: 15, // Crazy Horse 1
        awayTeamId: 14, // Bulle 3
        score: "5-1"
      }
    ],
    
    boards: [
      // Match 1: Neuchâtel 1 vs Valais 1
      {
        matchId: 1,
        boardNumber: 1,
        homePlayer: "Robin Voland",
        homeRating: 2057,
        result: "½-½",
        awayPlayer: "Alexan Floure",
        awayRating: 1913
      },
      {
        matchId: 1,
        boardNumber: 2,
        homePlayer: "Clément Pinson",
        homeRating: 2029,
        result: "½-½",
        awayPlayer: "Jean-Daniel Delacroix",
        awayRating: 1938
      },
      {
        matchId: 1,
        boardNumber: 3,
        homePlayer: "Raphael Erne",
        homeRating: 2164,
        result: "1-0",
        awayPlayer: "Hervé Lanois",
        awayRating: 1781
      },
      {
        matchId: 1,
        boardNumber: 4,
        homePlayer: "Hassan Roger Sadeghi",
        homeRating: 2098,
        result: "½-½",
        awayPlayer: "Fabrice Lovey",
        awayRating: 1821
      },
      {
        matchId: 1,
        boardNumber: 5,
        homePlayer: "Antonin Robert",
        homeRating: 2149,
        result: "1-0",
        awayPlayer: "Adrien Pignat",
        awayRating: 1747
      },
      {
        matchId: 1,
        boardNumber: 6,
        homePlayer: "Roland Hauser",
        homeRating: 2026,
        result: "½-½",
        awayPlayer: "Pierre Perruchoud",
        awayRating: 1890
      },
      {
        matchId: 1,
        boardNumber: 7,
        homePlayer: "Jason Weber",
        homeRating: 1838,
        result: "0-1",
        awayPlayer: "Lucas Candelier",
        awayRating: 1863
      },
      {
        matchId: 1,
        boardNumber: 8,
        homePlayer: "Luca Srdjenovic",
        homeRating: 1882,
        result: "½-½",
        awayPlayer: "Jean-Marie Carron",
        awayRating: 1852
      },
  
      // Match 2: Sion 1 vs Köniz-Bubenberg 1
      {
        matchId: 2,
        boardNumber: 1,
        homePlayer: "Jean-Yves Riand",
        homeRating: 1877,
        result: "0-1",
        awayPlayer: "Igor Yarmonov",
        awayRating: 2342
      },
      {
        matchId: 2,
        boardNumber: 2,
        homePlayer: "Jeremy Duc",
        homeRating: 1829,
        result: "0-1",
        awayPlayer: "Mike Jäger",
        awayRating: 2114
      },
      {
        matchId: 2,
        boardNumber: 3,
        homePlayer: "Flavien Sola",
        homeRating: 2167,
        result: "1-0",
        awayPlayer: "Gabriel Vergelin Soler",
        awayRating: null
      },
      {
        matchId: 2,
        boardNumber: 4,
        homePlayer: "Jean-Michel Paladini",
        homeRating: 1983,
        result: "0-1",
        awayPlayer: "Hansjürg Känel",
        awayRating: 2226
      },
      {
        matchId: 2,
        boardNumber: 5,
        homePlayer: "Vlad Popescu",
        homeRating: 1990,
        result: "½-½",
        awayPlayer: "Jörg Brauchli",
        awayRating: 1915
      },
      {
        matchId: 2,
        boardNumber: 6,
        homePlayer: "Yves Roduit",
        homeRating: 1910,
        result: "0-1",
        awayPlayer: "Sandor Kaszas",
        awayRating: 2008
      },
      {
        matchId: 2,
        boardNumber: 7,
        homePlayer: "Yann Bourban",
        homeRating: 1885,
        result: "½-½",
        awayPlayer: "Thomas Mani",
        awayRating: 1949
      },
      {
        matchId: 2,
        boardNumber: 8,
        homePlayer: "Olivier Ulmann",
        homeRating: 1788,
        result: "1-0",
        awayPlayer: "Marc Tillmann",
        awayRating: 1921
      },
  
      // Match 3: Echallens 2 vs Genève 2
      {
        matchId: 3,
        boardNumber: 1,
        homePlayer: "Daniel Stroppa",
        homeRating: 2182,
        result: "½-½",
        awayPlayer: "Richard Gerber",
        awayRating: 2233
      },
      {
        matchId: 3,
        boardNumber: 2,
        homePlayer: "Lindo Duratti",
        homeRating: 2134,
        result: "0-1",
        awayPlayer: "Dominique Li",
        awayRating: 2292
      },
      {
        matchId: 3,
        boardNumber: 3,
        homePlayer: "Grégoire Tissier",
        homeRating: 2038,
        result: "1-0",
        awayPlayer: "Nathan ALFRED",
        awayRating: 2214
      },
      {
        matchId: 3,
        boardNumber: 4,
        homePlayer: "Cédric Grillon",
        homeRating: 1984,
        result: "1-0",
        awayPlayer: "Nils Delmonico",
        awayRating: 1940
      },
      {
        matchId: 3,
        boardNumber: 5,
        homePlayer: "Jan Steenhuis",
        homeRating: 2057,
        result: "½-½",
        awayPlayer: "Tiziano Frei",
        awayRating: 1920
      },
      {
        matchId: 3,
        boardNumber: 6,
        homePlayer: "Steve Monthoux",
        homeRating: 2013,
        result: "½-½",
        awayPlayer: "Jeremy Cendan",
        awayRating: 1932
      },
      {
        matchId: 3,
        boardNumber: 7,
        homePlayer: "Alexander Delangle",
        homeRating: 1911,
        result: "1-0",
        awayPlayer: "Jörg-Dieter Meyer",
        awayRating: 1869
      },
      {
        matchId: 3,
        boardNumber: 8,
        homePlayer: "Stéphane Coletta",
        homeRating: 1928,
        result: "½-½",
        awayPlayer: "Alexander Clarke",
        awayRating: 1802
      },
  
      // Match 4: Fribourg 1 vs Grand Echiquier 1
      {
        matchId: 4,
        boardNumber: 1,
        homePlayer: "Yves Deschenaux",
        homeRating: 2121,
        result: "½-½",
        awayPlayer: "Gonçalo Varela Tavares",
        awayRating: 1967
      },
      {
        matchId: 4,
        boardNumber: 2,
        homePlayer: "Salvatore Cruceli",
        homeRating: 2083,
        result: "1-0",
        awayPlayer: "Guillaume Chauvon",
        awayRating: 2076
      },
      {
        matchId: 4,
        boardNumber: 3,
        homePlayer: "Joseph Edoecs",
        homeRating: 2035,
        result: "0-1",
        awayPlayer: "Sébastien Vasey",
        awayRating: 1956
      },
      {
        matchId: 4,
        boardNumber: 4,
        homePlayer: "Vinzenz Tremp",
        homeRating: 2042,
        result: "0-1",
        awayPlayer: "Alexandre Bur",
        awayRating: 1901
      },
      {
        matchId: 4,
        boardNumber: 5,
        homePlayer: "Jean Mettraux",
        homeRating: 1959,
        result: "½-½",
        awayPlayer: "Armin Rauer",
        awayRating: 1918
      },
      {
        matchId: 4,
        boardNumber: 6,
        homePlayer: "Bernard Deschenaux",
        homeRating: 2002,
        result: "0-1",
        awayPlayer: "Pierpaolo Ranieri",
        awayRating: 1893
      },
      {
        matchId: 4,
        boardNumber: 7,
        homePlayer: "Raphaël Perrin",
        homeRating: 1944,
        result: "0-1",
        awayPlayer: "Sébastien Pagliaro",
        awayRating: 1920
      },
      {
        matchId: 4,
        boardNumber: 8,
        homePlayer: "Achim Schneuwly",
        homeRating: 1943,
        result: "½-½",
        awayPlayer: "Mathis Soubeyrand",
        awayRating: 1547
      },
  
      // Match 5: Sion 2 vs Grand Echiquier 2
      {
        matchId: 5,
        boardNumber: 1,
        homePlayer: "Olivier Crettenand",
        homeRating: 1826,
        result: "½-½",
        awayPlayer: "Andrea Giananti",
        awayRating: 1867
      },
      {
        matchId: 5,
        boardNumber: 2,
        homePlayer: "Mazlum Tosun",
        homeRating: 1689,
        result: "0-1",
        awayPlayer: "Vincent Conrad",
        awayRating: 1904
      },
      {
        matchId: 5,
        boardNumber: 3,
        homePlayer: "Alexandre Briguet",
        homeRating: 1828,
        result: "1-0",
        awayPlayer: "Olivier Dubuis",
        awayRating: 1778
      },
      {
        matchId: 5,
        boardNumber: 4,
        homePlayer: "Claude Bétrisey",
        homeRating: 1697,
        result: "0-1",
        awayPlayer: "David Bovet",
        awayRating: 1741
      },
      {
        matchId: 5,
        boardNumber: 5,
        homePlayer: "Akram Ben Salem",
        homeRating: null,
        result: "0-1",
        awayPlayer: "Emil Ungureanu",
        awayRating: null
      },
      {
        matchId: 5,
        boardNumber: 6,
        homePlayer: "Sandro Bétrisey",
        homeRating: 1745,
        result: "0-1",
        awayPlayer: "José Martinez",
        awayRating: 1662
      },
  
      // Match 6: Payerne 2 vs Crans-Montana 2
      {
        matchId: 6,
        boardNumber: 1,
        homePlayer: "Vivian Rochat",
        homeRating: 1942,
        result: "1-0",
        awayPlayer: "Claude-Alain Bonvin",
        awayRating: 1629
      },
      {
        matchId: 6,
        boardNumber: 2,
        homePlayer: "Lucas Bueche",
        homeRating: 1841,
        result: "1-0",
        awayPlayer: "Alessandro Bonalli",
        awayRating: 1621
      },
      {
        matchId: 6,
        boardNumber: 3,
        homePlayer: "Yanis Vonnez",
        homeRating: 1740,
        result: "1-0",
        awayPlayer: "Luc Udry",
        awayRating: 1523
      },
      {
        matchId: 6,
        boardNumber: 4,
        homePlayer: "Alex Garfield",
        homeRating: 1786,
        result: "1-0",
        awayPlayer: "Jean-Claude Zermatten",
        awayRating: 1559
      },
      {
        matchId: 6,
        boardNumber: 5,
        homePlayer: "Kiril Solomatin",
        homeRating: null,
        result: "1-0",
        awayPlayer: "Timur Gökok",
        awayRating: null
      },
      {
        matchId: 6,
        boardNumber: 6,
        homePlayer: "Carlo Bonferroni",
        homeRating: 1774,
        result: "1-0",
        awayPlayer: "Elias Leblé",
        awayRating: null
      },
  
      // Match 7: Valais 2 vs Monthey 1
      {
        matchId: 7,
        boardNumber: 1,
        homePlayer: "Jean-Paul Moret",
        homeRating: 1969,
        result: "1-0",
        awayPlayer: "Colin Moesching",
        awayRating: 1891
      },
      {
        matchId: 7,
        boardNumber: 2,
        homePlayer: "Christian Favre",
        homeRating: 1848,
        result: "½-½",
        awayPlayer: "Fabien Tordeur",
        awayRating: 1977
      },
      {
        matchId: 7,
        boardNumber: 3,
        homePlayer: "Stephan Major",
        homeRating: 1797,
        result: "1-0",
        awayPlayer: "Marius Jordan",
        awayRating: 1632
      },
      {
        matchId: 7,
        boardNumber: 4,
        homePlayer: "Cyril Dorsaz",
        homeRating: 1819,
        result: "0-1",
        awayPlayer: "Pascal Machoud",
        awayRating: 1817
      },
      {
        matchId: 7,
        boardNumber: 5,
        homePlayer: "Jean-Christophe Putallaz",
        homeRating: 1719,
        result: "1-0",
        awayPlayer: "Gilles Meynet",
        awayRating: 1470
      },
      {
        matchId: 7,
        boardNumber: 6,
        homePlayer: "Renzo Cerda",
        homeRating: 1744,
        result: "0-1",
        awayPlayer: "Luis Rafael Collado Reynoso",
        awayRating: null
      },
  
      // Match 8: Crazy Horse 1 vs Bulle 3
      {
        matchId: 8,
        boardNumber: 1,
        homePlayer: "Daniel Jaquier",
        homeRating: 1871,
        result: "1-0",
        awayPlayer: "Charles-François Feller",
        awayRating: 1670
      },
      {
        matchId: 8,
        boardNumber: 2,
        homePlayer: "Alain Tcheau",
        homeRating: 2011,
        result: "1-0",
        awayPlayer: "Alfred Senff",
        awayRating: 1544
      },
      {
        matchId: 8,
        boardNumber: 3,
        homePlayer: "Alain Chollet",
        homeRating: 1783,
        result: "1-0",
        awayPlayer: "Arno Jankowski",
        awayRating: null
      },
      {
        matchId: 8,
        boardNumber: 4,
        homePlayer: "Joël Loba",
        homeRating: 1833,
        result: "0-1",
        awayPlayer: "Thomas Christen",
        awayRating: null
      },
      {
        matchId: 8,
        boardNumber: 5,
        homePlayer: "Adrian Silva",
        homeRating: 1857,
        result: "1-0",
        awayPlayer: "Cédric Lutz",
        awayRating: null
      },
      {
        matchId: 8,
        boardNumber: 6,
        homePlayer: "Bernard Gasser",
        homeRating: 1693,
        result: "1-0",
        awayPlayer: "Logan Gremaud",
        awayRating: null
      }
    ],
    
    rankings: {
      1: [ // 1ère ligue
        { rank: 1, teamId: 6, matchPoints: 6, gamePoints: "17" },
        { rank: 2, teamId: 8, matchPoints: 4, gamePoints: "14" },
        { rank: 2, teamId: 2, matchPoints: 4, gamePoints: "14" },
        { rank: 4, teamId: 5, matchPoints: 4, gamePoints: "12½" },
        { rank: 5, teamId: 7, matchPoints: 3, gamePoints: "11" },
        { rank: 5, teamId: 3, matchPoints: 3, gamePoints: "11" },
        { rank: 7, teamId: 4, matchPoints: 0, gamePoints: "9½" },
        { rank: 8, teamId: 1, matchPoints: 0, gamePoints: "7" }
      ],
      2: [ // 3ème ligue
        { rank: 1, teamId: 15, matchPoints: 6, gamePoints: "14" },
        { rank: 2, teamId: 11, matchPoints: 4, gamePoints: "12½" },
        { rank: 3, teamId: 13, matchPoints: 4, gamePoints: "11" },
        { rank: 4, teamId: 10, matchPoints: 4, gamePoints: "9" },
        { rank: 5, teamId: 16, matchPoints: 2, gamePoints: "9½" },
        { rank: 6, teamId: 9, matchPoints: 2, gamePoints: "7½" },
        { rank: 7, teamId: 12, matchPoints: 2, gamePoints: "4½" },
        { rank: 8, teamId: 14, matchPoints: 0, gamePoints: "4" }
      ]
    }
  };