import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    console.log('ScrollManager: pathname =', location.pathname, 'hash =', location.hash)
    
    if (location.hash) {
      // Handle hash navigation
      console.log('ScrollManager: Has hash, scrolling to element')
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          console.log('ScrollManager: Element found, scrolling')
          const yOffset = -80 // Offset for fixed navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        } else {
          console.log('ScrollManager: Element not found with id:', id)
        }
      }, 100)
    } else {
      // No hash, scroll to top
      console.log('ScrollManager: No hash, scrolling to top')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  return null
}