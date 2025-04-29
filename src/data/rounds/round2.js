// src/data/rounds/round2.js - Data for round 2
export default {
    matches: [
      // 1ère ligue
      {
        id: 1,
        roundId: 2,
        homeTeamId: 8, // Fribourg 1
        awayTeamId: 1, // Sion 1
        score: "5½-2½"
      },
      {
        id: 2,
        roundId: 2,
        homeTeamId: 7, // Köniz-Bubenberg 1
        awayTeamId: 3, // Neuchâtel 1
        score: "4-4"
      },
      {
        id: 3,
        roundId: 2,
        homeTeamId: 4, // Valais 1
        awayTeamId: 2, // Genève 2
        score: "2½-5½"
      },
      {
        id: 4,
        roundId: 2,
        homeTeamId: 6, // Grand Echiquier 1
        awayTeamId: 5, // Echallens 2
        score: "5-3"
      },
      
      // 3ème ligue
      {
        id: 5,
        roundId: 2,
        homeTeamId: 12, // Crans-Montana 2
        awayTeamId: 15, // Crazy Horse 1
        score: "½-5½"
      },
      {
        id: 6,
        roundId: 2,
        homeTeamId: 14, // Bulle 3
        awayTeamId: 9, // Sion 2
        score: "2-4"
      },
      {
        id: 7,
        roundId: 2,
        homeTeamId: 10, // Grand Echiquier 2
        awayTeamId: 13, // Valais 2
        score: "3½-2½"
      },
      {
        id: 8,
        roundId: 2,
        homeTeamId: 11, // Monthey 1
        awayTeamId: 16, // Payerne 2
        score: "5-1"
      }
    ],
    
    boards: [
      // Match 1: Fribourg 1 vs Sion 1
      {
        matchId: 1,
        boardNumber: 1,
        homePlayer: "Sylvain Julmy",
        homeRating: 2179,
        result: "1-0",
        awayPlayer: "Vlad Popescu",
        awayRating: 1990
      },
      {
        matchId: 1,
        boardNumber: 2,
        homePlayer: "Yves Deschenaux",
        homeRating: 2121,
        result: "½-½",
        awayPlayer: "Max Chappaz",
        awayRating: 1904
      },
      {
        matchId: 1,
        boardNumber: 3,
        homePlayer: "Bernard Deschenaux",
        homeRating: 2002,
        result: "1-0",
        awayPlayer: "Olivier Ulmann",
        awayRating: 1788
      },
      {
        matchId: 1,
        boardNumber: 4,
        homePlayer: "Thierry Bonferroni",
        homeRating: 1965,
        result: "½-½",
        awayPlayer: "Jean-Michel Paladini",
        awayRating: 1983
      },
      {
        matchId: 1,
        boardNumber: 5,
        homePlayer: "Achim Schneuwly",
        homeRating: 1943,
        result: "1-0",
        awayPlayer: "Claude Bétrisey",
        awayRating: 1697
      },
      {
        matchId: 1,
        boardNumber: 6,
        homePlayer: "Raphaël Perrin",
        homeRating: 1944,
        result: "1-0",
        awayPlayer: "Jean-Yves Riand",
        awayRating: 1877
      },
      {
        matchId: 1,
        boardNumber: 7,
        homePlayer: "Jean-Pierre Dorand",
        homeRating: 1892,
        result: "½-½",
        awayPlayer: "Olivier Crettenand",
        awayRating: 1826
      },
      {
        matchId: 1,
        boardNumber: 8,
        homePlayer: "Marius Cornée",
        homeRating: 1894,
        result: "0-1",
        awayPlayer: "Yves Roduit",
        awayRating: 1910
      },
  
      // Match 2: Köniz-Bubenberg 1 vs Neuchâtel 1
      {
        matchId: 2,
        boardNumber: 1,
        homePlayer: "Mike Jäger",
        homeRating: 2114,
        result: "1-0",
        awayPlayer: "Roman Tkhoruk",
        awayRating: 1896
      },
      {
        matchId: 2,
        boardNumber: 2,
        homePlayer: "Brian von Moos",
        homeRating: 1736,
        result: "0-1",
        awayPlayer: "Raphael Erne",
        awayRating: 2164
      },
      {
        matchId: 2,
        boardNumber: 3,
        homePlayer: "Hansjürg Känel",
        homeRating: 2226,
        result: "1-0",
        awayPlayer: "Luca Srdjenovic",
        awayRating: 1882
      },
      {
        matchId: 2,
        boardNumber: 4,
        homePlayer: "Igor Yarmonov",
        homeRating: 2342,
        result: "½-½",
        awayPlayer: "Didier Leuba",
        awayRating: 2169
      },
      {
        matchId: 2,
        boardNumber: 5,
        homePlayer: "Sandor Kaszas",
        homeRating: 2008,
        result: "½-½",
        awayPlayer: "Roland Hauser",
        awayRating: 2026
      },
      {
        matchId: 2,
        boardNumber: 6,
        homePlayer: "Martin Hess",
        homeRating: 1905,
        result: "0-1",
        awayPlayer: "Bertrand Banderet",
        awayRating: 1942
      },
      {
        matchId: 2,
        boardNumber: 7,
        homePlayer: "Marc Tillmann",
        homeRating: 1921,
        result: "1-0",
        awayPlayer: "Mohamad Al-Dourobi",
        awayRating: 1770
      },
      {
        matchId: 2,
        boardNumber: 8,
        homePlayer: "Michael Weber",
        homeRating: 1898,
        result: "0-1",
        awayPlayer: "Elias Girardin",
        awayRating: 1772
      },
  
      // Match 3: Valais 1 vs Genève 2
      {
        matchId: 3,
        boardNumber: 1,
        homePlayer: "Ludovic Zaza",
        homeRating: 2140,
        result: "0-1",
        awayPlayer: "Dominique Li",
        awayRating: 2292
      },
      {
        matchId: 3,
        boardNumber: 2,
        homePlayer: "Jean-Daniel Delacroix",
        homeRating: 1938,
        result: "½-½",
        awayPlayer: "Richard Gerber",
        awayRating: 2233
      },
      {
        matchId: 3,
        boardNumber: 3,
        homePlayer: "Alexandre Zaza",
        homeRating: 1957,
        result: "1-0",
        awayPlayer: "Laurent Geiser",
        awayRating: 2210
      },
      {
        matchId: 3,
        boardNumber: 4,
        homePlayer: "Fabrice Lovey",
        homeRating: 1821,
        result: "½-½",
        awayPlayer: "Nils Delmonico",
        awayRating: 1940
      },
      {
        matchId: 3,
        boardNumber: 5,
        homePlayer: "Jacob Planchamp",
        homeRating: 1964,
        result: "0-1",
        awayPlayer: "Tiziano Frei",
        awayRating: 1920
      },
      {
        matchId: 3,
        boardNumber: 6,
        homePlayer: "Xavier Perruchoud",
        homeRating: 1898,
        result: "0-1",
        awayPlayer: "Samuel Detraz",
        awayRating: 1957
      },
      {
        matchId: 3,
        boardNumber: 7,
        homePlayer: "Jean-Paul Moret",
        homeRating: 1969,
        result: "0-1",
        awayPlayer: "Jeremy Broome",
        awayRating: 1885
      },
      {
        matchId: 3,
        boardNumber: 8,
        homePlayer: "Pierre Perruchoud",
        homeRating: 1890,
        result: "½-½",
        awayPlayer: "Jörg-Dieter Meyer",
        awayRating: 1869
      },
  
      // Match 4: Grand Echiquier 1 vs Echallens 2
      {
        matchId: 4,
        boardNumber: 1,
        homePlayer: "Ferran Rocamora Martorell",
        homeRating: 2126,
        result: "1-0",
        awayPlayer: "Jan Steenhuis",
        awayRating: 2057
      },
      {
        matchId: 4,
        boardNumber: 2,
        homePlayer: "Stasa Cuckovic",
        homeRating: 2188,
        result: "½-½",
        awayPlayer: "Valentin Palmonella",
        awayRating: 2138
      },
      {
        matchId: 4,
        boardNumber: 3,
        homePlayer: "Guillaume Chauvon",
        homeRating: 2076,
        result: "0-1",
        awayPlayer: "Nicolas Perréard",
        awayRating: 2033
      },
      {
        matchId: 4,
        boardNumber: 4,
        homePlayer: "Gonçalo Varela Tavares",
        homeRating: 1967,
        result: "1-0",
        awayPlayer: "Daniel Stroppa",
        awayRating: 2182
      },
      {
        matchId: 4,
        boardNumber: 5,
        homePlayer: "Jean-Manuel Segura",
        homeRating: 2066,
        result: "0-1",
        awayPlayer: "Jean-Robert Vesin",
        awayRating: 2195
      },
      {
        matchId: 4,
        boardNumber: 6,
        homePlayer: "Alexandre Bur",
        homeRating: 1901,
        result: "½-½",
        awayPlayer: "Wissam Pheng",
        awayRating: 2045
      },
      {
        matchId: 4,
        boardNumber: 7,
        homePlayer: "Tikhon Parshikov",
        homeRating: 1977,
        result: "1-0",
        awayPlayer: "Steve Monthoux",
        awayRating: 2013
      },
      {
        matchId: 4,
        boardNumber: 8,
        homePlayer: "Vincent Conrad",
        homeRating: 1904,
        result: "1-0",
        awayPlayer: "Stéphane Coletta",
        awayRating: 1928
      },
  
      // Match 5: Crans-Montana 2 vs Crazy Horse 1
      {
        matchId: 5,
        boardNumber: 1,
        homePlayer: "Luc Udry",
        homeRating: 1523,
        result: "0-1",
        awayPlayer: "Alain Tcheau",
        awayRating: 2011
      },
      {
        matchId: 5,
        boardNumber: 2,
        homePlayer: "Hervé Frainay",
        homeRating: 1561,
        result: "0-1",
        awayPlayer: "Daniel Jaquier",
        awayRating: 1871
      },
      {
        matchId: 5,
        boardNumber: 3,
        homePlayer: "Timur Gökok",
        homeRating: null,
        result: "0-1",
        awayPlayer: "Joël Loba",
        awayRating: 1833
      },
      {
        matchId: 5,
        boardNumber: 4,
        homePlayer: "Claude-Alain Bonvin",
        homeRating: 1629,
        result: "0-1",
        awayPlayer: "Alain Chollet",
        awayRating: 1783
      },
      {
        matchId: 5,
        boardNumber: 5,
        homePlayer: "Jean-Claude Zermatten",
        homeRating: 1559,
        result: "½-½",
        awayPlayer: "Philippe Grosjean-Ritz",
        awayRating: 1821
      },
      {
        matchId: 5,
        boardNumber: 6,
        homePlayer: "Amaury Aubrée-Dauchez",
        homeRating: null,
        result: "0-1",
        awayPlayer: "Marjorie Mourey",
        awayRating: null
      },
  
      // Match 6: Bulle 3 vs Sion 2
      {
        matchId: 6,
        boardNumber: 1,
        homePlayer: "Philippe Defferrard",
        homeRating: 1508,
        result: "½-½",
        awayPlayer: "Alexandre Briguet",
        awayRating: 1828
      },
      {
        matchId: 6,
        boardNumber: 2,
        homePlayer: "Bert Jansen",
        homeRating: null,
        result: "0-1",
        awayPlayer: "Sandro Bétrisey",
        awayRating: 1745
      },
      {
        matchId: 6,
        boardNumber: 3,
        homePlayer: "Charles-François Feller",
        homeRating: 1670,
        result: "0-1",
        awayPlayer: "Mazlum Tosun",
        awayRating: 1689
      },
      {
        matchId: 6,
        boardNumber: 4,
        homePlayer: "Thomas Christen",
        homeRating: null,
        result: "½-½",
        awayPlayer: "Akram Ben Salem",
        awayRating: null
      },
      {
        matchId: 6,
        boardNumber: 5,
        homePlayer: "Arno Jankowski",
        homeRating: null,
        result: "0-1",
        awayPlayer: "Simon Moerschell",
        awayRating: 1663
      },
      {
        matchId: 6,
        boardNumber: 6,
        homePlayer: "Alfred Senff",
        homeRating: 1544,
        result: "1-0",
        awayPlayer: "N.N.",
        awayRating: null
      },
  
      // Match 7: Grand Echiquier 2 vs Valais 2
      {
        matchId: 7,
        boardNumber: 1,
        homePlayer: "Jonathan Jaccard",
        homeRating: 1949,
        result: "½-½",
        awayPlayer: "Hervé Lanois",
        awayRating: 1781
      },
      {
        matchId: 7,
        boardNumber: 2,
        homePlayer: "Andrea Giananti",
        homeRating: 1867,
        result: "1-0",
        awayPlayer: "Cyril Dorsaz",
        awayRating: 1819
      },
      {
        matchId: 7,
        boardNumber: 3,
        homePlayer: "Patrick Goette",
        homeRating: 1764,
        result: "1-0",
        awayPlayer: "Jean-Marie Carron",
        awayRating: 1852
      },
      {
        matchId: 7,
        boardNumber: 4,
        homePlayer: "Olivier Dubuis",
        homeRating: 1778,
        result: "0-1",
        awayPlayer: "Stephan Major",
        awayRating: 1797
      },
      {
        matchId: 7,
        boardNumber: 5,
        homePlayer: "Paul Dumoulin",
        homeRating: 1775,
        result: "1-0",
        awayPlayer: "Michel Steiner",
        awayRating: 1803
      },
      {
        matchId: 7,
        boardNumber: 6,
        homePlayer: "N.N.",
        homeRating: null,
        result: "0-1",
        awayPlayer: "François Perruchoud",
        awayRating: 1921
      },
  
      // Match 8: Monthey 1 vs Payerne 2
      {
        matchId: 8,
        boardNumber: 1,
        homePlayer: "Colin Moesching",
        homeRating: 1891,
        result: "1-0",
        awayPlayer: "Lucas Bueche",
        awayRating: 1841
      },
      {
        matchId: 8,
        boardNumber: 2,
        homePlayer: "Fabien Tordeur",
        homeRating: 1977,
        result: "1-0",
        awayPlayer: "Karel Bourban",
        awayRating: 1818
      },
      {
        matchId: 8,
        boardNumber: 3,
        homePlayer: "Dorian Turner",
        homeRating: null,
        result: "½-½",
        awayPlayer: "Armando Hauser",
        awayRating: 1819
      },
      {
        matchId: 8,
        boardNumber: 4,
        homePlayer: "Michail Batsiolas",
        homeRating: 1656,
        result: "1-0",
        awayPlayer: "Alex Garfield",
        awayRating: 1786
      },
      {
        matchId: 8,
        boardNumber: 5,
        homePlayer: "Marius Jordan",
        homeRating: 1632,
        result: "1-0",
        awayPlayer: "Kiril Solomatin",
        awayRating: null
      },
      {
        matchId: 8,
        boardNumber: 6,
        homePlayer: "Gilles Meynet",
        homeRating: 1470,
        result: "½-½",
        awayPlayer: "Carlo Bonferroni",
        awayRating: 1774
      }
    ],
    
    rankings: {
      1: [ // 1ère ligue
        { rank: 1, teamId: 6, matchPoints: 4, gamePoints: "11½" },
        { rank: 1, teamId: 8, matchPoints: 4, gamePoints: "11½" },
        { rank: 3, teamId: 2, matchPoints: 4, gamePoints: "11" },
        { rank: 4, teamId: 5, matchPoints: 2, gamePoints: "7½" },
        { rank: 5, teamId: 3, matchPoints: 1, gamePoints: "6½" },
        { rank: 6, teamId: 7, matchPoints: 1, gamePoints: "6" },
        { rank: 7, teamId: 4, matchPoints: 0, gamePoints: "6" },
        { rank: 8, teamId: 1, matchPoints: 0, gamePoints: "4" }
      ],
      2: [ // 3ème ligue
        { rank: 1, teamId: 11, matchPoints: 4, gamePoints: "10" },
        { rank: 2, teamId: 15, matchPoints: 4, gamePoints: "9" },
        { rank: 3, teamId: 13, matchPoints: 2, gamePoints: "7½" },
        { rank: 4, teamId: 9, matchPoints: 2, gamePoints: "6" },
        { rank: 5, teamId: 10, matchPoints: 2, gamePoints: "4½" },
        { rank: 5, teamId: 12, matchPoints: 2, gamePoints: "4½" },
        { rank: 7, teamId: 16, matchPoints: 0, gamePoints: "3½" },
        { rank: 8, teamId: 14, matchPoints: 0, gamePoints: "3" }
      ]
    }
  };