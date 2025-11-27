export interface Player {
  nom: string
  prenom: string
  codeFIDE: string
  elo: number
  eloRapid?: number
  eloBlitz?: number
  federation: string
  note?: string
  category?: string
  stats?: {
    white: { total: number; win: number; draw: number; loss: number };
    black: { total: number; win: number; draw: number; loss: number };
  }
}

export interface Category {
  title: string
  players: Player[]
}

export const membresData: { categories: Category[] } = {
  categories: [
    {
      title: "Maître FIDE",
      players: []
    },
    {
      title: "Candidat Maître",
      players: []
    },
    {
      title: "Experts (>2200)",
      players: []
    },
    {
      title: "Classe A (>2000)",
      players: [
                {
          nom: "Emery",
          prenom: "Stéphane",
          codeFIDE: "1320815",
          elo: 2100,
          eloRapid: 2022,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 102, win: 40, draw: 26, loss: 36 },
            black: { total: 99, win: 35, draw: 30, loss: 34 }
          }
        },
                {
          nom: "Philippoz",
          prenom: "David",
          codeFIDE: "1307916",
          elo: 2083,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 20, win: 4, draw: 8, loss: 8 },
            black: { total: 17, win: 4, draw: 7, loss: 6 }
          }
        },
                {
          nom: "Morand",
          prenom: "Simon",
          codeFIDE: "1303902",
          elo: 2077,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 84, win: 17, draw: 45, loss: 22 },
            black: { total: 75, win: 25, draw: 22, loss: 28 }
          }
        },
                {
          nom: "Sola",
          prenom: "Flavien",
          codeFIDE: "659479",
          elo: 2045,
          eloRapid: 2039,
          eloBlitz: 0,
          federation: "FRA",
          stats: {
            white: { total: 361, win: 190, draw: 44, loss: 127 },
            black: { total: 361, win: 160, draw: 53, loss: 148 }
          }
        }
      ]
    },
    {
      title: "Classe B (>1800)",
      players: [
                {
          nom: "Philippoz",
          prenom: "Cédric",
          codeFIDE: "1304933",
          elo: 1957,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 26, win: 9, draw: 4, loss: 13 },
            black: { total: 27, win: 3, draw: 11, loss: 13 }
          }
        },
                {
          nom: "Paladini",
          prenom: "Jean-Michel",
          codeFIDE: "1301829",
          elo: 1947,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI",

          stats: {
            white: { total: 186, win: 71, draw: 60, loss: 55 },
            black: { total: 188, win: 47, draw: 73, loss: 68 }
          }
        },
                {
          nom: "Popescu",
          prenom: "Vlad",
          codeFIDE: "1330403",
          elo: 1942,
          eloRapid: 2000,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 67, win: 16, draw: 19, loss: 32 },
            black: { total: 66, win: 28, draw: 19, loss: 19 }
          }
        },
                {
          nom: "Roduit",
          prenom: "Yves",
          codeFIDE: "1318853",
          elo: 1913,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 67, win: 18, draw: 20, loss: 29 },
            black: { total: 55, win: 16, draw: 12, loss: 27 }
          }
        },
                {
          nom: "Bijelic",
          prenom: "Milan",
          codeFIDE: "1321307",
          elo: 1911,
          eloRapid: 2027,
          eloBlitz: 2072,
          federation: "SUI",

          stats: {
            white: { total: 103, win: 62, draw: 9, loss: 32 },
            black: { total: 95, win: 51, draw: 6, loss: 38 }
          }
        },
                {
          nom: "Pannatier",
          prenom: "Arnaud",
          codeFIDE: "1326155",
          elo: 1898,
          eloRapid: 1896,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 51, win: 20, draw: 11, loss: 20 },
            black: { total: 51, win: 18, draw: 9, loss: 24 }
          }
        },
                {
          nom: "Rappaz",
          prenom: "Pierre-Marie",
          codeFIDE: "1321641",
          elo: 1895,
          eloRapid: 1937,
          eloBlitz: 0,
          federation: "SUI",

          stats: {
            white: { total: 100, win: 40, draw: 28, loss: 32 },
            black: { total: 90, win: 33, draw: 20, loss: 37 }
          }
        },
                {
          nom: "Bourban",
          prenom: "Yann",
          codeFIDE: "1304461",
          elo: 1874,
          eloRapid: 1941,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 37, win: 9, draw: 7, loss: 21 },
            black: { total: 39, win: 4, draw: 11, loss: 24 }
          }
        },
                {
          nom: "Chappaz",
          prenom: "Max",
          codeFIDE: "1351567",
          elo: 1872,
          eloRapid: 1895,
          eloBlitz: 1836,
          federation: "SUI",

          stats: {
            white: { total: 94, win: 42, draw: 8, loss: 44 },
            black: { total: 100, win: 49, draw: 16, loss: 35 }
          }
        },
                {
          nom: "Riand",
          prenom: "Jean-Yves",
          codeFIDE: "1306162",
          elo: 1833,
          eloRapid: 1890,
          eloBlitz: 0,
          federation: "SUI",

          stats: {
            white: { total: 134, win: 43, draw: 22, loss: 69 },
            black: { total: 144, win: 64, draw: 23, loss: 57 }
          }
        },
                {
          nom: "Eggel",
          prenom: "Xavier",
          codeFIDE: "1335430",
          elo: 1825,
          eloRapid: 1857,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 24, win: 12, draw: 3, loss: 9 },
            black: { total: 22, win: 12, draw: 5, loss: 5 }
          }
        },
                {
          nom: "Briguet",
          prenom: "Alexandre",
          codeFIDE: "1317652",
          elo: 1809,
          eloRapid: 1804,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 42, win: 12, draw: 9, loss: 21 },
            black: { total: 46, win: 16, draw: 6, loss: 24 }
          }
        }
      ]
    },
    {
      title: "Classe C (<1800)",
      players: [
                {
          nom: "Bétrisey",
          prenom: "Sandro",
          codeFIDE: "1317636",
          elo: 1764,
          eloRapid: 1762,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 43, win: 17, draw: 7, loss: 19 },
            black: { total: 46, win: 12, draw: 7, loss: 27 }
          }
        },
                {
          nom: "Duc",
          prenom: "Jeremy",
          codeFIDE: "1338447",
          elo: 1762,
          eloRapid: 1791,
          eloBlitz: 1746,
          federation: "SUI",
          stats: {
            white: { total: 110, win: 43, draw: 20, loss: 47 },
            black: { total: 107, win: 31, draw: 26, loss: 50 }
          }
        },
                {
          nom: "Ulmann",
          prenom: "Olivier",
          codeFIDE: "1316770",
          elo: 1733,
          eloRapid: 1790,
          eloBlitz: 1843,
          federation: "SUI",
          stats: {
            white: { total: 75, win: 28, draw: 16, loss: 31 },
            black: { total: 87, win: 24, draw: 21, loss: 42 }
          }
        },
                {
          nom: "Moerschell",
          prenom: "Simon",
          codeFIDE: "1335480",
          elo: 1709,
          eloRapid: 1712,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 18, win: 6, draw: 0, loss: 12 },
            black: { total: 22, win: 7, draw: 2, loss: 13 }
          }
        },
                {
          nom: "Bétrisey",
          prenom: "Claude",
          codeFIDE: "1360841",
          elo: 1627,
          eloRapid: 1643,
          eloBlitz: 0,
          federation: "SUI",

          stats: {
            white: { total: 15, win: 3, draw: 1, loss: 11 },
            black: { total: 23, win: 6, draw: 3, loss: 14 }
          }
        }
      ]
    },
    {
      title: "Classe D (<1600)",
      players: []
    },
    {
      title: "progresse vers 1er classement",
      players: [
                {
          nom: "Crettenand",
          prenom: "Olivier",
          codeFIDE: "1369318",
          elo: 0,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI",

          stats: {
            white: { total: 2, win: 0, draw: 2, loss: 0 },
            black: { total: 4, win: 1, draw: 2, loss: 1 }
          }
        },
                {
          nom: "Ben Salem",
          prenom: "Akram",
          codeFIDE: "1367110",
          elo: 0,
          eloRapid: 1616,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 13, win: 7, draw: 1, loss: 5 },
            black: { total: 8, win: 1, draw: 1, loss: 6 }
          }
        },
                {
          nom: "Disero",
          prenom: "Achille Melchior",
          codeFIDE: "1374877",
          elo: 0,
          eloRapid: 1568,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 4, win: 0, draw: 0, loss: 4 },
            black: { total: 3, win: 2, draw: 1, loss: 0 }
          }
        },
                {
          nom: "Kolisnichenko",
          prenom: "Stanislava",
          codeFIDE: "1378015",
          elo: 0,
          eloRapid: 1410,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 5, win: 2, draw: 0, loss: 3 },
            black: { total: 4, win: 1, draw: 0, loss: 3 }
          }
        },
                {
          nom: "Spahr",
          prenom: "Joseph",
          codeFIDE: "1377418",
          elo: 0,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 10, win: 2, draw: 0, loss: 8 },
            black: { total: 12, win: 3, draw: 0, loss: 9 }
          }
        },
                {
          nom: "Sardyga Chevieux",
          prenom: "Heka",
          codeFIDE: "1356771",
          elo: 0,
          eloRapid: 1515,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 14, win: 4, draw: 2, loss: 8 },
            black: { total: 18, win: 3, draw: 1, loss: 14 }
          }
        },
                {
          nom: "Clavien",
          prenom: "Florian",
          codeFIDE: "1369288",
          elo: 0,
          eloRapid: 1770,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 5, win: 4, draw: 0, loss: 1 },
            black: { total: 6, win: 1, draw: 0, loss: 5 }
          }
        },
                {
          nom: "Devaud",
          prenom: "Loic",
          codeFIDE: "1375032",
          elo: 0,
          eloRapid: 1689,
          eloBlitz: 0,
          federation: "SUI",
          stats: {
            white: { total: 8, win: 3, draw: 0, loss: 5 },
            black: { total: 9, win: 6, draw: 0, loss: 3 }
          }
        }
      ]
    }
  ]
};