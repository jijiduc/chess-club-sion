import { Suspense, lazy } from 'react'
// MODIFICATION : On retire l'import du Router ici
import { Routes, Route } from 'react-router-dom' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './components/Layout/Layout'

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'))
const Club = lazy(() => import('./pages/Club'))
const Committee = lazy(() => import('./pages/Committee'))
const Contact = lazy(() => import('./pages/Contact'))
const Members = lazy(() => import('./pages/Members'))
const Programme = lazy(() => import('./pages/Programme'))
const CSE = lazy(() => import('./pages/Competitions/CSE'))
const CSG = lazy(() => import('./pages/Competitions/CSG'))
const CVE = lazy(() => import('./pages/Competitions/CVE'))
const InternalTournament = lazy(() => import('./pages/Competitions/InternalTournament'))
const ChessSchool = lazy(() => import('./pages/ChessSchool'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Histoire = lazy(() => import('./pages/Histoire'))
const ActivChess = lazy(() => import('./pages/ActivChess'))


const queryClient = new QueryClient()

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* MODIFICATION : On a retiré le <Router> qui se trouvait ici */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="club" element={<Club />} />
            <Route path="comite" element={<Committee />} />
            <Route path="contact" element={<Contact />} />
            <Route path="membres" element={<Members />} />
            <Route path="programme" element={<Programme />} />
            <Route path="activ-chess" element={<ActivChess />} />
            <Route path="competitions">
              <Route path="cse" element={<CSE />} />
              <Route path="csg" element={<CSG />} />
              <Route path="cve" element={<CVE />} />
              <Route path="tournoi-interne" element={<InternalTournament />} />
            </Route>
            <Route path="ecole" element={<ChessSchool />} />
            <Route path="galerie" element={<Gallery />} />
            <Route path="histoire" element={<Histoire />} />
          </Route>
        </Routes>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App