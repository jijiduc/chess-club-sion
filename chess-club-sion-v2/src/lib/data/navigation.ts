// src/data

export interface NavItem {
  name: string
  href: string
  children?: NavItem[]
}

export const navigationItems: NavItem[] = [
  {
    name: 'Le club',
    href: '#',
    children: [
      { name: 'Présentation', href: '/club' },
      { name: 'Histoire du club', href: '/histoire' },
      { name: 'Comité', href: '/comite' },
      { name: 'Membres actifs', href: '/membres' },
      { name: 'Local du club', href: '/club#local-jeu' },
      { name: 'Devenir membre', href: '/club#devenir-membre' },
      { name: 'Galerie photos', href: '/galerie' }
    ]
  },
  { name: 'Programme', href: '/programme' },
  { name: 'École d\'échecs', href: '/ecole' },
  {
    name: 'Tournois du club',
    href: '#',
    children: [
      { name: 'Championnat interne', href: '/competitions/tournoi-interne' },
      { name: 'Activ Chess de Sion', href: '/activ-chess' }
    ]
  },
  { name: '🎅 Blitz de Noël', href: '/tournoi-noel' },
  {
    name: 'Compétitions par équipes',
    href: '/competitions',
    children: [
      { name: 'Présentation des compétitions', href: '/competitions' },
      { name: 'CVE - Champ. Valaisan', href: '/competitions/cve' },
      { name: 'CSE - Champ. Suisse Equipe', href: '/competitions/cse' },
      { name: 'CSG - Champ. Suisse Groupe', href: '/competitions/csg' }
    ]
  },
  { name: 'Contact', href: '/contact' }
]