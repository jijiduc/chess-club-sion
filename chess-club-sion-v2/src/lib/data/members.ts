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
  history?: { period: string; std: number; rapid: number; blitz: number }[]
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
          history: [{"period": "2026-Jan", "std": 6.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Dec", "std": 11.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Oct", "std": 19.0, "rapid": -0.8, "blitz": 0.0}, {"period": "2025-Mar", "std": -2.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Feb", "std": -6.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Nov", "std": -8.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Oct", "std": 4.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Sep", "std": 10.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jul", "std": -4.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jun", "std": -6.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-May", "std": 9.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Apr", "std": 5.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Mar", "std": 10.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Feb", "std": 8.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Dec", "std": -0.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Nov", "std": 12.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Oct", "std": 1.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Sep", "std": 7.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jul", "std": 3.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jun", "std": 6.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-May", "std": -11.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Mar", "std": -2.0, "rapid": -16.8, "blitz": 0.0}, {"period": "2023-Feb", "std": -5.6, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 2117,
          eloRapid: 2022,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Philippoz",
          prenom: "David",
          codeFIDE: "1307916",
          history: [{"period": "2019-Apr", "std": 9.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Oct", "std": 13.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Jun", "std": 7.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-May", "std": -1.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Apr", "std": 5.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2017-Oct", "std": 3.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2017-Jul", "std": -8.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2017-Jun", "std": -4.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2017-May", "std": 6.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2017-Apr", "std": 3.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2013-Nov", "std": 3.9, "rapid": 0.0, "blitz": 0.0}, {"period": "2012-Nov", "std": -43.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2011-Jan", "std": -5.75, "rapid": 0.0, "blitz": 0.0}, {"period": "2010-Jan", "std": -26.5, "rapid": 0.0, "blitz": 0.0}, {"period": "2009-Jan", "std": 15.25, "rapid": 0.0, "blitz": 0.0}, {"period": "2008-Jan", "std": -23.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2007-Jan", "std": -10.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 2083,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Morand",
          prenom: "Simon",
          codeFIDE: "1303902",
          history: [{"period": "2026-Jan", "std": 7.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Dec", "std": 14.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Mar", "std": -3.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Feb", "std": -4.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jan", "std": 1.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Dec", "std": -1.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Nov", "std": 22.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Oct", "std": -3.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Sep", "std": 2.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jul", "std": -2.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-May", "std": -2.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Apr", "std": -6.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Mar", "std": 13.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Feb", "std": -2.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jan", "std": -9.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Dec", "std": 10.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Nov", "std": 6.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Oct", "std": 10.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Sep", "std": 5.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jul", "std": 9.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jun", "std": 5.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-May", "std": 6.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Mar", "std": 13.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Feb", "std": -5.6, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 2098,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Sola",
          prenom: "Flavien",
          codeFIDE: "659479",
          history: [{"period": "2026-Jan", "std": 1.4, "rapid": 0.0, "blitz": -33.2}, {"period": "2025-Dec", "std": 7.6, "rapid": -6.2, "blitz": 0.0}, {"period": "2025-Nov", "std": 0.0, "rapid": 26.2, "blitz": 0.0}, {"period": "2025-Oct", "std": -3.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Sep", "std": -9.2, "rapid": 2.4, "blitz": 0.0}, {"period": "2025-Jul", "std": -3.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jun", "std": 9.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Apr", "std": -10.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Mar", "std": 18.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Feb", "std": 15.2, "rapid": 12.2, "blitz": 0.0}, {"period": "2025-Jan", "std": 1.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Dec", "std": -8.2, "rapid": 9.0, "blitz": 0.0}, {"period": "2024-Nov", "std": 6.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jun", "std": 0.0, "rapid": -9.2, "blitz": 0.0}, {"period": "2024-Apr", "std": -8.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Feb", "std": 1.2, "rapid": 8.4, "blitz": 0.0}, {"period": "2024-Jan", "std": 7.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Dec", "std": -13.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Nov", "std": 7.2, "rapid": -8.0, "blitz": 0.0}, {"period": "2023-May", "std": 11.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Apr", "std": 7.8, "rapid": -3.2, "blitz": 0.0}, {"period": "2023-Feb", "std": 11.6, "rapid": 2.6, "blitz": 0.0}, {"period": "2022-Dec", "std": -2.0, "rapid": -4.4, "blitz": 0.0}, {"period": "2022-Nov", "std": -20.4, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 2054,
          eloRapid: 2033,
          eloBlitz: 2020,
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
          history: [{"period": "2024-Oct", "std": -9.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jul", "std": -4.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-May", "std": -11.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Apr", "std": -8.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Sep", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jul", "std": -3.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-May", "std": 18.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-May", "std": -13.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Nov", "std": -16.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Oct", "std": -19.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Aug", "std": -2.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Jul", "std": 2.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Jun", "std": 4.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-May", "std": -5.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Apr", "std": -1.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2017-Dec", "std": -18.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2017-Oct", "std": -8.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2017-Jun", "std": -24.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2017-Apr", "std": 14.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2013-Nov", "std": -2.7, "rapid": 0.0, "blitz": 0.0}, {"period": "2012-Nov", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2011-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2009-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2008-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1957,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Paladini",
          prenom: "Jean-Michel",
          codeFIDE: "1301829",
          history: [{"period": "2025-Dec", "std": 12.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Oct", "std": 6.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Sep", "std": 5.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Aug", "std": -29.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jul", "std": -6.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jun", "std": -8.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-May", "std": -4.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Mar", "std": -14.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Feb", "std": -33.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Nov", "std": -16.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Oct", "std": -6.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Sep", "std": -6.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jun", "std": -3.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-May", "std": -6.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Apr", "std": 15.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Oct", "std": 10.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Sep", "std": 11.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Aug", "std": 4.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jul", "std": -0.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jun", "std": -36.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2021-Sep", "std": -18.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2020-Feb", "std": -15.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Oct", "std": -7.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Aug", "std": 35.2, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1959,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Popescu",
          prenom: "Vlad",
          codeFIDE: "1330403",
          history: [{"period": "2026-Jan", "std": -10.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Dec", "std": 26.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Sep", "std": 12.8, "rapid": -1.4, "blitz": 0.0}, {"period": "2025-Jun", "std": 7.4, "rapid": 12.2, "blitz": 0.0}, {"period": "2025-May", "std": -4.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Apr", "std": -5.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Mar", "std": 4.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Feb", "std": -3.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jan", "std": 0.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Dec", "std": 3.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Nov", "std": 10.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Sep", "std": -9.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jul", "std": -5.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jun", "std": -2.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-May", "std": -9.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Mar", "std": -11.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Feb", "std": 1.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jan", "std": 0.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Dec", "std": -0.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Nov", "std": 5.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Oct", "std": -9.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Sep", "std": -3.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jun", "std": 5.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-May", "std": 6.8, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1957,
          eloRapid: 2000,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Roduit",
          prenom: "Yves",
          codeFIDE: "1318853",
          history: [{"period": "2026-Jan", "std": -0.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Dec", "std": 14.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Sep", "std": 0.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-May", "std": 2.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Apr", "std": -10.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Mar", "std": -10.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jan", "std": 3.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Nov", "std": -15.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jun", "std": -2.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-May", "std": 1.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Nov", "std": 4.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Sep", "std": 8.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jul", "std": -11.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jun", "std": 4.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2021-Dec", "std": -4.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2021-Oct", "std": 4.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Aug", "std": 2.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Jun", "std": 6.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Apr", "std": -8.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Nov", "std": -12.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Aug", "std": 4.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Jul", "std": 14.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-May", "std": -8.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Apr", "std": -9.6, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1928,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Bijelic",
          prenom: "Milan",
          codeFIDE: "1321307",
          history: [{"period": "2026-Jan", "std": 0.0, "rapid": 0.0, "blitz": -33.4}, {"period": "2025-Nov", "std": 0.0, "rapid": 24.4, "blitz": 0.0}, {"period": "2025-Oct", "std": 0.0, "rapid": 0.0, "blitz": -37.6}, {"period": "2025-Mar", "std": 0.0, "rapid": 13.0, "blitz": 0.0}, {"period": "2025-Feb", "std": 0.0, "rapid": 0.4, "blitz": 0.0}, {"period": "2025-Jan", "std": 0.0, "rapid": -5.2, "blitz": 0.0}, {"period": "2024-Oct", "std": 0.0, "rapid": -32.4, "blitz": 0.0}, {"period": "2024-Sep", "std": 0.0, "rapid": 0.0, "blitz": 20.6}, {"period": "2024-Aug", "std": 0.0, "rapid": -28.4, "blitz": 0.0}, {"period": "2024-May", "std": 0.0, "rapid": 0.0, "blitz": 25.2}, {"period": "2024-Apr", "std": 0.0, "rapid": -38.2, "blitz": 0.0}, {"period": "2024-Feb", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jan", "std": 0.0, "rapid": 0.0, "blitz": 44.4}, {"period": "2023-Mar", "std": 0.0, "rapid": -3.6, "blitz": 0.0}, {"period": "2023-Jan", "std": 0.0, "rapid": 0.0, "blitz": 16.8}, {"period": "2022-Sep", "std": 0.0, "rapid": 0.0, "blitz": 6.8}, {"period": "2022-Apr", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2022-Feb", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2021-Dec", "std": 0.0, "rapid": 0.0, "blitz": -23.0}, {"period": "2020-Mar", "std": 0.0, "rapid": -13.4, "blitz": 0.0}, {"period": "2020-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Aug", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2016-Aug", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2013-Jul", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1911,
          eloRapid: 2027,
          eloBlitz: 2039,
          federation: "SUI"
        },
        {
          nom: "Pannatier",
          prenom: "Arnaud",
          codeFIDE: "1326155",
          history: [{"period": "2024-Nov", "std": -2.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Sep", "std": -3.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jul", "std": -4.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Mar", "std": -9.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Feb", "std": 3.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Nov", "std": 12.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jul", "std": 3.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-May", "std": 14.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2021-Nov", "std": 7.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2021-Oct", "std": -15.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Dec", "std": 8.4, "rapid": 2.4, "blitz": 0.0}, {"period": "2019-Oct", "std": 0.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Sep", "std": -1.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-May", "std": 1.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Mar", "std": 4.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Sep", "std": -5.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Apr", "std": -4.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2017-May", "std": 6.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2016-Sep", "std": 4.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2015-Sep", "std": 8.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2014-Sep", "std": 25.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2013-Jul", "std": 0.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2013-Feb", "std": -18.3, "rapid": 0.0, "blitz": 0.0}, {"period": "2011-Sep", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1898,
          eloRapid: 1896,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Rappaz",
          prenom: "Pierre-Marie",
          codeFIDE: "1321641",
          history: [{"period": "2026-Jan", "std": 0.4, "rapid": 0.0, "blitz": 3.8}, {"period": "2025-Dec", "std": 20.8, "rapid": 2.4, "blitz": 0.0}, {"period": "2025-Nov", "std": 0.0, "rapid": -37.8, "blitz": 0.0}, {"period": "2025-Oct", "std": -2.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Sep", "std": 3.6, "rapid": 4.8, "blitz": 0.0}, {"period": "2025-Jul", "std": 7.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jun", "std": 0.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Apr", "std": 2.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Mar", "std": -8.8, "rapid": -40.0, "blitz": 0.0}, {"period": "2025-Feb", "std": -5.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jan", "std": 4.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Dec", "std": -6.8, "rapid": -9.2, "blitz": 0.0}, {"period": "2024-Nov", "std": -11.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Oct", "std": 11.4, "rapid": -17.8, "blitz": 0.0}, {"period": "2024-Jul", "std": -9.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jun", "std": -39.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-May", "std": -5.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Apr", "std": -3.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Dec", "std": 9.0, "rapid": 13.6, "blitz": 0.0}, {"period": "2023-Nov", "std": -0.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Oct", "std": 6.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Sep", "std": 11.4, "rapid": -4.8, "blitz": 0.0}, {"period": "2023-Aug", "std": -43.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jul", "std": -11.6, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1916,
          eloRapid: 1939,
          eloBlitz: 1920,
          federation: "SUI"
        },
        {
          nom: "Bourban",
          prenom: "Yann",
          codeFIDE: "1304461",
          history: [{"period": "2025-Oct", "std": -6.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jul", "std": -8.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-May", "std": -1.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Feb", "std": -13.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Dec", "std": 1.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Sep", "std": -9.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jul", "std": 2.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jun", "std": -4.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Apr", "std": -5.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Nov", "std": -14.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Oct", "std": -5.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Sep", "std": -9.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jul", "std": -20.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jun", "std": -10.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-May", "std": 10.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2022-Oct", "std": 0.0, "rapid": -9.6, "blitz": 0.0}, {"period": "2022-Jan", "std": -13.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2021-Dec", "std": 12.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2021-Nov", "std": -2.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2021-Oct", "std": -8.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Oct", "std": 8.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Jun", "std": -2.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-May", "std": -6.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Oct", "std": 2.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1874,
          eloRapid: 1941,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Chappaz",
          prenom: "Max",
          codeFIDE: "1351567",
          history: [{"period": "2025-Dec", "std": -6.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Nov", "std": 0.0, "rapid": 16.4, "blitz": 0.0}, {"period": "2025-Sep", "std": 0.0, "rapid": -16.8, "blitz": 0.0}, {"period": "2025-Jul", "std": 12.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jun", "std": 1.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-May", "std": 5.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Apr", "std": -6.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Mar", "std": -1.6, "rapid": 18.8, "blitz": 0.0}, {"period": "2025-Feb", "std": -2.4, "rapid": 18.8, "blitz": 0.0}, {"period": "2025-Jan", "std": -7.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Dec", "std": 10.2, "rapid": 3.2, "blitz": 0.0}, {"period": "2024-Nov", "std": 1.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Oct", "std": 0.0, "rapid": 19.0, "blitz": 0.0}, {"period": "2024-Sep", "std": 6.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Aug", "std": 0.0, "rapid": 24.6, "blitz": -17.8}, {"period": "2024-May", "std": 1.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Apr", "std": 0.0, "rapid": 64.4, "blitz": 0.0}, {"period": "2024-Mar", "std": -10.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Feb", "std": -5.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jan", "std": 24.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Dec", "std": -76.4, "rapid": 20.0, "blitz": 0.0}, {"period": "2023-Sep", "std": 0.0, "rapid": -18.0, "blitz": 0.0}, {"period": "2023-Jun", "std": 79.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Apr", "std": -6.4, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1866,
          eloRapid: 1895,
          eloBlitz: 1836,
          federation: "SUI"
        },
        {
          nom: "Riand",
          prenom: "Jean-Yves",
          codeFIDE: "1306162",
          history: [{"period": "2026-Jan", "std": -11.6, "rapid": 6.4, "blitz": 0.0}, {"period": "2025-Dec", "std": 33.4, "rapid": -18.2, "blitz": 0.0}, {"period": "2025-Nov", "std": 0.0, "rapid": 12.6, "blitz": 0.0}, {"period": "2025-Oct", "std": -4.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Sep", "std": 11.2, "rapid": 1.2, "blitz": 0.0}, {"period": "2025-Aug", "std": 16.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jul", "std": -1.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jun", "std": -7.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-May", "std": -12.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Apr", "std": 5.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Mar", "std": -8.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Feb", "std": 3.2, "rapid": -29.0, "blitz": 0.0}, {"period": "2025-Jan", "std": -6.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Dec", "std": 2.2, "rapid": 0.8, "blitz": 0.0}, {"period": "2024-Nov", "std": -10.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Oct", "std": 11.6, "rapid": -9.6, "blitz": 0.0}, {"period": "2024-Sep", "std": -8.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jul", "std": -13.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jun", "std": -32.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-May", "std": -5.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Apr", "std": 0.0, "rapid": -10.0, "blitz": 0.0}, {"period": "2023-Dec", "std": -6.0, "rapid": -17.4, "blitz": 0.0}, {"period": "2023-Nov", "std": 2.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Sep", "std": -9.2, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1854,
          eloRapid: 1877,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Eggel",
          prenom: "Xavier",
          codeFIDE: "1335430",
          history: [{"period": "2026-Jan", "std": 22.4, "rapid": 0.0, "blitz": -35.2}, {"period": "2025-Dec", "std": 22.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Nov", "std": 0.0, "rapid": -16.4, "blitz": 0.0}, {"period": "2025-Oct", "std": 19.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jun", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-May", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Apr", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Mar", "std": 0.0, "rapid": -6.8, "blitz": 0.0}, {"period": "2025-Feb", "std": 0.0, "rapid": -2.8, "blitz": 0.0}, {"period": "2025-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Oct", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2015-Jul", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2015-Apr", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1870,
          eloRapid: 1857,
          eloBlitz: 1813,
          federation: "SUI"
        },
        {
          nom: "Briguet",
          prenom: "Alexandre",
          codeFIDE: "1317652",
          history: [{"period": "2025-Nov", "std": 0.0, "rapid": -10.6, "blitz": 0.0}, {"period": "2025-Oct", "std": -6.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jul", "std": -7.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jun", "std": 7.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-May", "std": 10.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Apr", "std": -14.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jan", "std": 9.8, "rapid": -28.0, "blitz": 0.0}, {"period": "2020-Jan", "std": -40.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Jan", "std": -5.2, "rapid": -16.2, "blitz": 0.0}, {"period": "2014-Dec", "std": -13.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2013-Dec", "std": 12.9, "rapid": 0.0, "blitz": 0.0}, {"period": "2012-Dec", "std": -2.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2011-Sep", "std": -3.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2010-Sep", "std": -2.25, "rapid": 0.0, "blitz": 0.0}, {"period": "2010-Jan", "std": -1.75, "rapid": 0.0, "blitz": 0.0}, {"period": "2009-Sep", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2009-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2008-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1809,
          eloRapid: 1804,
          eloBlitz: 0,
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
          history: [{"period": "2026-Jan", "std": 0.0, "rapid": 0.0, "blitz": -26.6}, {"period": "2025-Nov", "std": 0.0, "rapid": -25.2, "blitz": 0.0}, {"period": "2025-Oct", "std": 1.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Sep", "std": 3.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jul", "std": -5.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-May", "std": -10.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jan", "std": 5.4, "rapid": -2.2, "blitz": 0.0}, {"period": "2020-Jan", "std": -21.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Aug", "std": -3.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Jan", "std": -1.4, "rapid": -0.2, "blitz": 0.0}, {"period": "2013-Sep", "std": -17.1, "rapid": 0.0, "blitz": 0.0}, {"period": "2012-Sep", "std": -9.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2011-Sep", "std": -21.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2010-Sep", "std": -4.5, "rapid": 0.0, "blitz": 0.0}, {"period": "2010-Jan", "std": -4.25, "rapid": 0.0, "blitz": 0.0}, {"period": "2009-Sep", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2008-Oct", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1764,
          eloRapid: 1762,
          eloBlitz: 1737,
          federation: "SUI"
        },
        {
          nom: "Duc",
          prenom: "Jeremy",
          codeFIDE: "1338447",
          history: [{"period": "2026-Jan", "std": -6.0, "rapid": 0.0, "blitz": 1.4}, {"period": "2025-Dec", "std": 11.8, "rapid": -5.4, "blitz": 0.0}, {"period": "2025-Oct", "std": 15.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Sep", "std": -4.4, "rapid": 11.6, "blitz": 0.0}, {"period": "2025-Jul", "std": 5.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jun", "std": 0.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-May", "std": -2.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Apr", "std": -27.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Mar", "std": -11.0, "rapid": 35.2, "blitz": 0.0}, {"period": "2025-Feb", "std": 15.0, "rapid": 0.2, "blitz": 0.0}, {"period": "2025-Jan", "std": -5.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Dec", "std": 3.6, "rapid": 13.0, "blitz": 0.0}, {"period": "2024-Nov", "std": 7.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Oct", "std": -6.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Sep", "std": 4.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Jun", "std": -7.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-May", "std": -3.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Apr", "std": -6.2, "rapid": 11.0, "blitz": 0.0}, {"period": "2024-Feb", "std": 19.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Dec", "std": 28.8, "rapid": 2.0, "blitz": 0.0}, {"period": "2023-Nov", "std": 17.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Aug", "std": 35.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jul", "std": -8.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jun", "std": 8.6, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1768,
          eloRapid: 1786,
          eloBlitz: 1747,
          federation: "SUI"
        },
        {
          nom: "Ulmann",
          prenom: "Olivier",
          codeFIDE: "1316770",
          history: [{"period": "2025-Nov", "std": 0.0, "rapid": -0.2, "blitz": 0.0}, {"period": "2025-Oct", "std": -2.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Sep", "std": 6.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Aug", "std": -1.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jul", "std": -8.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-May", "std": -8.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Apr", "std": -6.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Mar", "std": -7.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Feb", "std": 12.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Dec", "std": 2.0, "rapid": -8.8, "blitz": 0.0}, {"period": "2024-Nov", "std": 15.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Oct", "std": 0.0, "rapid": 8.8, "blitz": 0.0}, {"period": "2024-Jun", "std": -0.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Feb", "std": -4.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Dec", "std": -8.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Oct", "std": 2.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Sep", "std": 0.0, "rapid": -3.2, "blitz": 0.0}, {"period": "2023-May", "std": -20.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Apr", "std": -57.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Mar", "std": 4.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Feb", "std": -6.4, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Jan", "std": -2.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2022-Aug", "std": 0.0, "rapid": 10.0, "blitz": 92.6}, {"period": "2020-Mar", "std": 0.0, "rapid": -1.8, "blitz": 0.0}],
          
          elo: 1735,
          eloRapid: 1790,
          eloBlitz: 1843,
          federation: "SUI"
        },
        {
          nom: "Moerschell",
          prenom: "Simon",
          codeFIDE: "1335480",
          history: [{"period": "2025-Dec", "std": 16.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Sep", "std": 8.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2024-Mar", "std": -45.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2021-Oct", "std": -7.6, "rapid": 0.0, "blitz": 0.0}, {"period": "2019-Mar", "std": 32.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Oct", "std": -14.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2018-Jul", "std": -3.2, "rapid": 0.0, "blitz": 0.0}, {"period": "2017-Feb", "std": 0.0, "rapid": -21.0, "blitz": 0.0}, {"period": "2017-Jan", "std": 24.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2015-Dec", "std": -30.8, "rapid": 0.0, "blitz": 0.0}, {"period": "2015-Sep", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2015-Jul", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 1725,
          eloRapid: 1712,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Bétrisey",
          prenom: "Claude",
          codeFIDE: "1346300",
          history: [{"period": "2025-Feb", "std": 0.0, "rapid": 0.6, "blitz": 0.0}, {"period": "2024-Oct", "std": 0.0, "rapid": 4.6, "blitz": 0.0}, {"period": "2024-Aug", "std": 0.0, "rapid": -7.2, "blitz": 0.0}, {"period": "2024-Apr", "std": 0.0, "rapid": -1.8, "blitz": 0.0}, {"period": "2023-Dec", "std": 0.0, "rapid": 6.8, "blitz": 0.0}, {"period": "2023-Sep", "std": 0.0, "rapid": 6.2, "blitz": 0.0}, {"period": "2023-Mar", "std": 0.0, "rapid": 1.4, "blitz": 0.0}, {"period": "2022-Oct", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2022-May", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2020-Mar", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 0,
          eloRapid: 1671,
          eloBlitz: 0,
          federation: "SUI"
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
          nom: "Lamon",
          prenom: "Mathieu",
          codeFIDE: "1378023",
          history: [{"period": "2026-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Nov", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 0,
          eloRapid: 1638,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Makarenko",
          prenom: "David",
          codeFIDE: "1380168",
          history: [{"period": "2026-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 0,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Cometta",
          prenom: "Simone",
          codeFIDE: "1377779",
          history: [{"period": "2026-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 0,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Crettenand",
          prenom: "Olivier",
          codeFIDE: "1369318",
          history: [{"period": "2026-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Oct", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Jul", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-May", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 0,
          eloRapid: 0,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Ben Salem",
          prenom: "Akram",
          codeFIDE: "1367110",
          history: [{"period": "2025-Nov", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Sep", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Feb", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 0,
          eloRapid: 1616,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Disero",
          prenom: "Achille Melchior",
          codeFIDE: "1374877",
          history: [{"period": "2026-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Sep", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 0,
          eloRapid: 1568,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Kolisnichenko",
          prenom: "Stanislava",
          codeFIDE: "1378015",
          history: [{"period": "2026-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Nov", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 0,
          eloRapid: 1410,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Spahr",
          prenom: "Joseph",
          codeFIDE: "1377418",
          history: [{"period": "2026-Jan", "std": 0.0, "rapid": -20.4, "blitz": 0.0}, {"period": "2025-Dec", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Nov", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 0,
          eloRapid: 1452,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Sardyga Chevieux",
          prenom: "Heka",
          codeFIDE: "1356771",
          history: [{"period": "2026-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Mar", "std": 0.0, "rapid": -24.0, "blitz": 0.0}, {"period": "2025-Feb", "std": 0.0, "rapid": -24.4, "blitz": 0.0}, {"period": "2024-Apr", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2023-Sep", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 0,
          eloRapid: 1515,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Clavien",
          prenom: "Florian",
          codeFIDE: "1369288",
          history: [{"period": "2025-Nov", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Apr", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 0,
          eloRapid: 1770,
          eloBlitz: 0,
          federation: "SUI"
        },
        {
          nom: "Devaud",
          prenom: "Loic",
          codeFIDE: "1375032",
          history: [{"period": "2026-Jan", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Dec", "std": 0.0, "rapid": 36.4, "blitz": 0.0}, {"period": "2025-Oct", "std": 0.0, "rapid": 0.0, "blitz": 0.0}, {"period": "2025-Sep", "std": 0.0, "rapid": 0.0, "blitz": 0.0}],
          
          elo: 0,
          eloRapid: 1725,
          eloBlitz: 0,
          federation: "SUI"
        }
      ]
    }
  ]
};