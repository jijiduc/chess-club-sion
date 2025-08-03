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
      title: "Grand-Maître International",
      players: [
        {
          nom: "Laurent-Paoli",
          prenom: "Pierre",
          codeFSE: "25469",
          codeFIDE: "26017962",
          elo: 2557,
          federation: "FRA"
        },
        {
          nom: "Sochacki",
          prenom: "Christophe",
          codeFSE: "28858",
          codeFIDE: "662569",
          elo: 2450,
          federation: "FRA"
        }
      ]
    },
    {
      title: "Maître International",
      players: []
    },
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
      players: [
        {
          nom: "Philippoz",
          prenom: "David",
          codeFSE: "10195",
          codeFIDE: "1307916",
          elo: 2083,
          federation: "SUI"
        },
        {
          nom: "Emery",
          prenom: "Stéphane",
          codeFSE: "17887",
          codeFIDE: "1320815",
          elo: 2081,
          federation: "SUI"
        },
        {
          nom: "Morand",
          prenom: "Simon",
          codeFSE: "16502",
          codeFIDE: "1303902",
          elo: 2077,
          federation: "SUI"
        },
        {
          nom: "Sola",
          prenom: "Flavien",
          codeFSE: "28267",
          codeFIDE: "659479",
          elo: 2057,
        federation: "FRA"
        }
      ]
    },
    {
      title: "Classe A (>2000)",
      players: [
        {
          nom: "Paladini",
          prenom: "Jean-Michel",
          codeFSE: "2177",
          codeFIDE: "1301829",
          elo: 1964,
          federation: "SUI",
          category: "Senioren"
        },
        {
          nom: "Philippoz",
          prenom: "Cédric",
          codeFSE: "3007",
          codeFIDE: "1304933",
          elo: 1957,
          federation: "SUI"
        },
        {
          nom: "Popescu",
          prenom: "Vlad",
          codeFSE: "18363",
          codeFIDE: "1330403",
          elo: 1929,
          federation: "SUI"
        },
        {
          nom: "Roduit",
          prenom: "Yves",
          codeFSE: "3783",
          codeFIDE: "1318853",
          elo: 1913,
          federation: "SUI"
        },
        {
          nom: "Bijelic",
          prenom: "Milan",
          codeFSE: "15403",
          codeFIDE: "1321307",
          elo: 1911,
          federation: "SUI",
          category: "Senioren"
        },
        {
          nom: "Pannatier",
          prenom: "Arnaud",
          codeFSE: "18728",
          codeFIDE: "1326155",
          elo: 1898,
          federation: "SUI"
        },
        {
          nom: "Rappaz",
          prenom: "Pierre-Marie",
          codeFSE: "1032",
          codeFIDE: "1321641",
          elo: 1894,
          federation: "SUI",
          category: "Senioren"
        },  
        {
          nom: "Chappaz",
          prenom: "Max",
          codeFSE: "25459",
          codeFIDE: "1351567",
          elo: 1872,
          federation: "SUI",
          category: "U-20"
        },
        {
          nom: "Bourban",
          prenom: "Yann",
          codeFSE: "2195",
          codeFIDE: "1304461",
          elo: 1880,
          federation: "SUI"
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
          note : "Elo FSE",
          federation: "SUI"
        },
        {
          nom: "Briguet",
          prenom: "Alexandre",
          codeFSE: "15150",
          codeFIDE: "1317652",
          elo: 1816,
          federation: "SUI"
        },
        
        {
          nom: "Riand",
          prenom: "Jean-Yves",
          codeFSE: "88",
          codeFIDE: "1306162",
          elo: 1811,
          federation: "SUI",
          category: "Senioren"
        },
        {
          nom: "Eggel",
          prenom: "Xavier",
          codeFSE: "21972",
          codeFIDE: "1335430",
          elo: 1805,
          federation: "SUI"
        },
        
      ]
    },
    {
      title: "Classe B (<1800)",
      players: [
        {
          nom: "Bétrisey",
          prenom: "Sandro",
          codeFSE: "14603",
          codeFIDE: "1317636",
          elo: 1760,
          federation: "SUI"
        },
        {
          nom: "Duc",
          prenom: "Jeremy",
          codeFSE: "22891",
          codeFIDE: "1338447",
          elo: 1751,
          federation: "SUI"
        },
        {
          nom: "Ulmann",
          prenom: "Olivier",
          codeFSE: "16717",
          codeFIDE: "1316770",
          elo: 1733,
          federation: "SUI"
        },
        {
          nom: "Moerschell",
          prenom: "Simon",
          codeFSE: "19594",
          codeFIDE: "1335480",
          elo: 1701,
          federation: "SUI"
        },
        {
          nom: "Ben Salem",
          prenom: "Akram",
          codeFSE: "28474",
          codeFIDE: "1367110",
          elo: 1692,
          note: "Elo FSE",
          federation: "SUI"
        },
        {
          nom: "Bétrisey",
          prenom: "Claude",
          codeFSE: "24967",
          codeFIDE: "1360841",
          elo: 1620,
          federation: "SUI",
          category: "U-20"
        },
        {
          nom: "Pannatier",
          prenom: "Samuel",
          codeFSE: "18727",
          codeFIDE: "1326309",
          elo: 1605,
          note: "Elo FSE",
          federation: "SUI"
        }
      ]
    },
    {
      title: "Classe C (<1600)",
      players: [
        {
          nom: "Tosun",
          prenom: "Mazlum",
          codeFSE: "27228",
          codeFIDE: "26391414",
          elo: 1501,
          federation: "TUR"
        },
      ]
    },
    {
      title: "Classe D (<1400)",
      players: []
    }
  ]
}