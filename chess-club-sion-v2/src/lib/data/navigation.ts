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
      { name: 'Devenir membre', href: '/club#devenir-membre' }
    ]
  },
  { name: 'Calendrier', href: '/programme' },
  { name: 'École d\'échecs', href: '/ecole' },
  { name: '🎅 Blitz de Noël', href: '/blitz-noel' },
  {
    name: 'Pôle Compétition',
    href: '/competitions',
    children: [
      { name: 'Vue d\'ensemble', href: '/competitions' },
      { name: 'CSE - Suisse Équipes', href: '/competitions/cse' },
      { name: 'CVE - Valaisan Équipes', href: '/competitions/cve' },
      { name: 'CSG - Suisse Groupes', href: '/competitions/csg' },
      { name: 'CVI - Coupe Valaisanne', href: '/competitions/cvi' },
      { name: 'GPV - Grand Prix Jeunes', href: '/competitions/gpv' },
      { name: 'Championnat interne', href: '/competitions/championnat-interne' },
      { name: 'Activ Chess de Sion', href: '/activ-chess' },
    ]
  },
  { name: 'Histoire', href: '/histoire' },
  { name: 'Contact', href: '/contact' }
]
