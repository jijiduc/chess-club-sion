export interface NavItem {
  name: string
  href: string
  children?: NavItem[]
}

export const navigationItems: NavItem[] = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Le club',
    href: '#',
    children: [
      { name: 'Présentation', href: '/club' },
      { name: 'Histoire du club', href: '/histoire' },
      { name: 'Comité', href: '/comite' },
      { name: 'Membres', href: '/membres' },
      { name: 'Local du club', href: '/club#local-jeu' },
      { name: 'Devenir membre', href: '/club#devenir-membre' },
      { name: 'Galerie photos', href: '/galerie' }
    ]
  },
  { name: 'Programme', href: '/programme' },
  { name: 'École d\'échecs', href: '/ecole' },
  {
    name: 'Compétitions',
    href: '#',
    children: [
      { name: 'Championnat interne du club', href: '/competitions/tournoi-interne' },
      { name: 'CVE - Championnat Valaisan', href: '/competitions/cve' },
      { name: 'CSE - Championnat Suisse', href: '/competitions/cse' },
      { name: 'CSG - Championnat Groupe', href: '/competitions/csg' }
    ]
  },
  { name: 'Contact', href: '/contact' }
]