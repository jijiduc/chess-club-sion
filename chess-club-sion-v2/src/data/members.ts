export interface Player {
  nom: string
  prenom: string
  codeFIDE: string
  elo: number
  federation: string
  note?: string
  category?: string
}

export interface Category {
  title: string
  players: Player[]
}

export interface Player {
  nom: string
  prenom: string
  codeFIDE: string
  elo: number
  federation: string
  note?: string
  category?: string
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
          federation: "SUI"
        },
        {
          nom: "Philippoz",
          prenom: "David",
          codeFIDE: "1307916",
          elo: 2083,
          federation: "SUI"
        },
        {
          nom: "Morand",
          prenom: "Simon",
          codeFIDE: "1303902",
          elo: 2077,
          federation: "SUI"
        },
        {
          nom: "Sola",
          prenom: "Flavien",
          codeFIDE: "659479",
          elo: 2045,
          federation: "FRA"
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
          federation: "SUI"
        },
        {
          nom: "Paladini",
          prenom: "Jean-Michel",
          codeFIDE: "1301829",
          elo: 1947,
          federation: "SUI",
          category: "Senioren"
        },
        {
          nom: "Popescu",
          prenom: "Vlad",
          codeFIDE: "1330403",
          elo: 1942,
          federation: "SUI"
        },
        {
          nom: "Roduit",
          prenom: "Yves",
          codeFIDE: "1318853",
          elo: 1913,
          federation: "SUI"
        },
        {
          nom: "Bijelic",
          prenom: "Milan",
          codeFIDE: "1321307",
          elo: 1911,
          federation: "SUI",
          category: "Senioren"
        },
        {
          nom: "Pannatier",
          prenom: "Arnaud",
          codeFIDE: "1326155",
          elo: 1898,
          federation: "SUI"
        },
        {
          nom: "Rappaz",
          prenom: "Pierre-Marie",
          codeFIDE: "1321641",
          elo: 1895,
          federation: "SUI",
          category: "Senioren"
        },
        {
          nom: "Bourban",
          prenom: "Yann",
          codeFIDE: "1304461",
          elo: 1874,
          federation: "SUI"
        },
        {
          nom: "Chappaz",
          prenom: "Max",
          codeFIDE: "1351567",
          elo: 1872,
          federation: "SUI",
          category: "U-20"
        },
        {
          nom: "Riand",
          prenom: "Jean-Yves",
          codeFIDE: "1306162",
          elo: 1833,
          federation: "SUI",
          category: "Senioren"
        },
        {
          nom: "Eggel",
          prenom: "Xavier",
          codeFIDE: "1335430",
          elo: 1825,
          federation: "SUI"
        },
        {
          nom: "Briguet",
          prenom: "Alexandre",
          codeFIDE: "1317652",
          elo: 1809,
          federation: "SUI"
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
          federation: "SUI"
        },
        {
          nom: "Duc",
          prenom: "Jeremy",
          codeFIDE: "1338447",
          elo: 1762,
          federation: "SUI"
        },
        {
          nom: "Ulmann",
          prenom: "Olivier",
          codeFIDE: "1316770",
          elo: 1733,
          federation: "SUI"
        },
        {
          nom: "Moerschell",
          prenom: "Simon",
          codeFIDE: "1335480",
          elo: 1709,
          federation: "SUI"
        },
        {
          nom: "Bétrisey",
          prenom: "Claude",
          codeFIDE: "1360841",
          elo: 1627,
          federation: "SUI",
          category: "U-20"
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
          federation: "SUI",
          category: "Senioren"
        },
        {
          nom: "Cortada Garcia",
          prenom: "Joan",
          codeFIDE: "1358251",
          elo: 0,
          federation: "SUI"
        },
        {
          nom: "Ben Salem",
          prenom: "Akram",
          codeFIDE: "1367110",
          elo: 0,
          federation: "SUI"
        },
        {
          nom: "Disero",
          prenom: "Achille Melchior",
          codeFIDE: "1374877",
          elo: 0,
          federation: "SUI"
        },
        {
          nom: "Kolisnichenko",
          prenom: "Stanislava",
          codeFIDE: "1378015",
          elo: 0,
          federation: "SUI"
        },
        {
          nom: "Spahr",
          prenom: "Joseph",
          codeFIDE: "1377418",
          elo: 0,
          federation: "SUI"
        },
        {
          nom: "Sardyga Chevieux",
          prenom: "Heka",
          codeFIDE: "1356771",
          elo: 0,
          federation: "SUI"
        },
        {
          nom: "Clavien",
          prenom: "Florian",
          codeFIDE: "1369288",
          elo: 0,
          federation: "SUI"
        },
        {
          nom: "Devaud",
          prenom: "Loic",
          codeFIDE: "1375032",
          elo: 0,
          federation: "SUI"
        }
      ]
    }
  ]
}