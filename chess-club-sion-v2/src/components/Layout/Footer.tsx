import { MapPin, ExternalLink, Mail, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Club Identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">♔</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Club d'Échecs de Sion
                </h3>
                <p className="text-primary-300 text-sm font-medium">Fondé en 1935</p>
              </div>
            </div>
            
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary-400" />
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">Rue des Châteaux 2</p>
                  <p className="text-gray-400">1950 Sion, Valais</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 text-primary-400" />
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">Soirées du club les vendredis soirs</p>
                  <p className="text-gray-400">18h30 - 23h00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary-400" />
                </div>
                <div className="text-sm">
                  <a 
                    href="mailto:info@cesion.ch" 
                    className="text-white font-medium hover:text-primary-300 transition-colors"
                  >
                    info@cesion.ch
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'Le Club', href: '/club' },
                { name: 'Programme', href: '/programme' },
                { name: 'École d\'échecs', href: '/ecole' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Federation Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-6">Fédérations</h4>
            <ul className="space-y-3">
              {[
                { 
                  name: 'Union Valaisanne', 
                  href: 'https://uve-wsb.ch',
                  subtitle: 'des Échecs'
                },
                { 
                  name: 'Fédération Suisse', 
                  href: 'https://swisschess.ch',
                  subtitle: 'des Échecs'
                },
                { 
                  name: 'Fédération Internationale',
                  href: 'https://www.fide.com',
                  subtitle: 'des Échecs'
                }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <div>
                      <p className="text-sm font-medium">{link.name}</p>
                      <p className="text-xs text-gray-500">{link.subtitle}</p>
                    </div>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Club d'Échecs de Sion</p>
              <span className="hidden md:block">•</span>
              <p className="hidden md:block">Tous droits réservés</p>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span>Webmaster :</span>
              <span className="text-gray-400 font-medium">Duc Jeremy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}