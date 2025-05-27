import { Outlet } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import Footer from './Footer'
import ScrollManager from '../ScrollManager'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <ScrollManager />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}