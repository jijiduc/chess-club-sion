import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navigationItems } from '../../data/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href.split('#')[0])
  }

  return (
    <nav className="bg-white/98 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo & Brand (Amélioré) */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Le logo image */}
              <img 
                src="/favicon/logo_normal.png" // Assurez-vous que ce chemin est correct
                alt="Logo du Club d'Échecs de Sion"
                // Ajustements de taille pour le logo
                className="w-16 h-16 object-contain transition-all duration-300 group-hover:scale-105" 
              />
              
              <div className="flex flex-col justify-center"> {/* Utilise flex-col et justify-center pour aligner le texte */}
                <span className="font-display font-bold text-xl text-neutral-900 group-hover:text-primary-700 transition-colors leading-none"> {/* leading-none pour réduire l'interligne */}
                  Club d'Échecs
                </span>
                <span className="text-l text-primary-600 font-medium leading-none"> {/* -mt-1 pour rapprocher les lignes */}
                  de Sion
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div className="relative">
                    <button
                      className={`flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                        isActive(item.href)
                          ? 'text-primary-700 bg-primary-50'
                          : 'text-neutral-700 hover:text-primary-700 hover:bg-neutral-50'
                      }`}
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl py-3 z-20 border border-neutral-200"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="group block px-4 py-3 text-sm text-neutral-700 hover:text-primary-700 hover:bg-primary-50 transition-all duration-200 mx-2 rounded-xl"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{child.name}</span>
                                <ChevronDown className="h-4 w-4 rotate-[-90deg] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.name === 'Contact' ? (
                  <Link
                    to={item.href}
                    className="ml-4 px-6 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary-600 to-primary-800 text-white hover:from-primary-700 hover:to-primary-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-neutral-700 hover:text-primary-700 hover:bg-neutral-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 rounded-xl text-neutral-700 hover:text-primary-700 hover:bg-neutral-50 transition-all duration-200"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-lg border-t border-neutral-200"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        className="w-full text-left px-4 py-3 text-base font-medium text-neutral-700 hover:text-primary-700 hover:bg-neutral-50 rounded-xl transition-all duration-200"
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      >
                        <div className="flex items-center justify-between">
                          {item.name}
                          <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 mt-2 space-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  className="block px-4 py-2 text-sm text-neutral-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-all duration-200"
                                  onClick={() => {
                                    setMobileMenuOpen(false)
                                    setOpenDropdown(null)
                                  }}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                        item.name === 'Contact'
                          ? 'bg-gradient-to-r from-primary-600 to-primary-800 text-white mx-2 text-center shadow-lg'
                          : isActive(item.href)
                          ? 'text-primary-700 bg-primary-50'
                          : 'text-neutral-700 hover:text-primary-700 hover:bg-neutral-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}