export interface NavItem {
  name: string
  href: string
  children?: NavItem[]
}

export const navigationItems: NavItem[] = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Club',
    href: '#',
    children: [
      { name: 'Présentation', href: '/club' },
      { name: 'Comité', href: '/comite' },
      { name: 'Membres', href: '/membres' },
      { name: 'Local du club', href: '/club#local-jeu' },
      { name: 'Galerie photos', href: '/galerie' }
    ]
  },
  {
    name: 'Activités',
    href: '#',
    children: [
      { name: 'Programme', href: '/programme' },
      { name: 'École d\'échecs', href: '/ecole' },
      { name: 'Devenir membre', href: '/club#devenir-membre' }
    ]
  },
  {
    name: 'Compétitions',
    href: '#',
    children: [
      { name: 'CSE - Championnat Suisse', href: '/competitions/cse' },
      { name: 'CSG - Championnat Groupe', href: '/competitions/csg' },
      { name: 'CVE - Championnat Valaisan', href: '/competitions/cve' },
      { name: 'Tournoi interne', href: '/competitions/tournoi-interne' }
    ]
  },
  { name: 'Contact', href: '/contact' }
]