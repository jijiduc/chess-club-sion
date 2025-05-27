export interface Player {
  nom: string
  prenom: string
  codeFSE: string
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
      title: "Grand-Maître International (2500+)",
      players: [
        {
          nom: "Laurent-Paoli",
          prenom: "Pierre",
          codeFSE: "25469",
          codeFIDE: "26017962",
          elo: 2565,
          federation: "FRA"
        }
      ]
    },
    {
      title: "Maître International (2400-2499)",
      players: [
        {
          nom: "Sochacki",
          prenom: "Christophe",
          codeFSE: "28858",
          codeFIDE: "662569",
          elo: 2458,
          federation: "FRA"
        }
      ]
    },
    {
      title: "Maître FIDE (2300-2399)",
      players: []
    },
    {
      title: "Candidat Maître (2200-2299)",
      players: []
    },
    {
      title: "Experts (2000-2199)",
      players: [
        {
          nom: "Sola",
          prenom: "Flavien",
          codeFSE: "28267",
          codeFIDE: "659479",
          elo: 2156,
          federation: "FRA"
        },
        {
          nom: "Morand",
          prenom: "Simon",
          codeFSE: "16502",
          codeFIDE: "1303902",
          elo: 2123,
          federation: "SUI"
        },
        {
          nom: "Philippoz",
          prenom: "David",
          codeFSE: "10195",
          codeFIDE: "1307916",
          elo: 2119,
          federation: "SUI"
        },
        {
          nom: "Emery",
          prenom: "Stéphane",
          codeFSE: "17887",
          codeFIDE: "1320815",
          elo: 2107,
          federation: "SUI"
        }
      ]
    },
    {
      title: "Classe A (1800-1999)",
      players: [
        {
          nom: "Paladini",
          prenom: "Jean-Michel",
          codeFSE: "2177",
          codeFIDE: "1301829",
          elo: 1978,
          federation: "SUI",
          category: "Senioren"
        },
        {
          nom: "Popescu",
          prenom: "Vlad",
          codeFSE: "18363",
          codeFIDE: "1330403",
          elo: 1974,
          federation: "SUI"
        },
        {
          nom: "Bijelic",
          prenom: "Milan",
          codeFSE: "15403",
          codeFIDE: "1321307",
          elo: 1961,
          federation: "SUI",
          category: "Senioren"
        },
        {
          nom: "Philippoz",
          prenom: "Cédric",
          codeFSE: "3007",
          codeFIDE: "1304933",
          elo: 1944,
          federation: "SUI"
        },
        {
          nom: "Rappaz",
          prenom: "Pierre-M.",
          codeFSE: "1032",
          codeFIDE: "1321641",
          elo: 1934,
          federation: "SUI",
          category: "Senioren"
        },
        {
          nom: "Pannatier",
          prenom: "Arnaud",
          codeFSE: "18728",
          codeFIDE: "1326155",
          elo: 1918,
          federation: "SUI"
        },
        {
          nom: "Roduit",
          prenom: "Yves",
          codeFSE: "3783",
          codeFIDE: "1318853",
          elo: 1901,
          federation: "SUI"
        },
        {
          nom: "Chappaz",
          prenom: "Max",
          codeFSE: "25459",
          codeFIDE: "1351567",
          elo: 1900,
          federation: "SUI",
          category: "U-20"
        },
        {
          nom: "Eggel",
          prenom: "Xavier",
          codeFSE: "21972",
          codeFIDE: "1335430",
          elo: 1892,
          federation: "SUI"
        },
        {
          nom: "Bourban",
          prenom: "Yann",
          codeFSE: "2195",
          codeFIDE: "1304461",
          elo: 1887,
          federation: "SUI"
        },
        {
          nom: "Riand",
          prenom: "Jean-Yves",
          codeFSE: "88",
          codeFIDE: "1306162",
          elo: 1872,
          federation: "SUI",
          category: "Senioren"
        },
        {
          nom: "Crettenand",
          prenom: "Olivier",
          codeFSE: "4616",
          codeFIDE: "1369318",
          elo: 1837,
          federation: "SUI",
          category: "Senioren"
        },
        {
          nom: "Cortada Garcia",
          prenom: "Joan",
          codeFSE: "27179",
          codeFIDE: "1358251",
          elo: 1824,
          federation: "SUI"
        },
        {
          nom: "Briguet",
          prenom: "Alexandre",
          codeFSE: "15150",
          codeFIDE: "1317652",
          elo: 1810,
          federation: "SUI"
        }
      ]
    },
    {
      title: "Classe B (1600-1799)",
      players: [
        {
          nom: "Ulmann",
          prenom: "Olivier",
          codeFSE: "16717",
          codeFIDE: "1316770",
          elo: 1791,
          federation: "SUI"
        },
        {
          nom: "Duc",
          prenom: "Jeremy",
          codeFSE: "22891",
          codeFIDE: "1338447",
          elo: 1780,
          federation: "SUI"
        },
        {
          nom: "Bétrisey",
          prenom: "Sandro",
          codeFSE: "14603",
          codeFIDE: "1317636",
          elo: 1722,
          federation: "SUI"
        },
        {
          nom: "Tosun",
          prenom: "Mazlum",
          codeFSE: "27228",
          codeFIDE: "26391414",
          elo: 1702,
          federation: "TUR"
        },
        {
          nom: "Moerschell",
          prenom: "Simon",
          codeFSE: "19594",
          codeFIDE: "1335480",
          elo: 1677,
          federation: "SUI"
        },
        {
          nom: "Bétrisey",
          prenom: "Claude",
          codeFSE: "24967",
          codeFIDE: "1360841",
          elo: 1674,
          federation: "SUI",
          category: "U-20"
        },
        {
          nom: "Pannatier",
          prenom: "Samuel",
          codeFSE: "18727",
          codeFIDE: "1326309",
          elo: 1605,
          federation: "SUI"
        }
      ]
    },
    {
      title: "Classe C (1400-1599)",
      players: []
    },
    {
      title: "Classe D (1200-1399)",
      players: []
    }
  ]
}