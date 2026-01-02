import { Suspense, lazy } from 'react'
// MODIFICATION : On retire l'import du Router ici
import { Routes, Route } from 'react-router-dom' 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './components/layout/Layout'

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'))
const Club = lazy(() => import('./pages/Club'))
const Committee = lazy(() => import('./pages/Committee'))
const Contact = lazy(() => import('./pages/Contact'))
const Members = lazy(() => import('./pages/Members'))
const Programme = lazy(() => import('./pages/Programme'))
const CompetitionsHub = lazy(() => import('./pages/CompetitionsHub'))
const CSE = lazy(() => import('./features/competitions/CSE'))
const CSG = lazy(() => import('./features/competitions/CSG'))
const CVE = lazy(() => import('./features/competitions/CVE'))
const CVI = lazy(() => import('./features/competitions/CVI'))
const GPV = lazy(() => import('./features/competitions/GPV'))
const InternalChampionship = lazy(() => import('./features/competitions/InternalChampionship'))
const ChessSchool = lazy(() => import('./pages/ChessSchool'))
const Histoire = lazy(() => import('./pages/Histoire'))
const ActivChess = lazy(() => import('./pages/ActivChess'))

const BlitzNoel = lazy(() => import('./features/competitions/BlitzNoel')) // <-- NOUVELLE LIGNE 1/2


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
              <Route index element={<CompetitionsHub />} />
              <Route path="cse" element={<CSE />} />
              <Route path="csg" element={<CSG />} />
              <Route path="cve" element={<CVE />} />
              <Route path="cvi" element={<CVI />} />
              <Route path="gpv" element={<GPV />} />
              <Route path="championnat-interne" element={<InternalChampionship />} />
              <Route path="blitz-noel" element={<BlitzNoel />} />
            </Route>
            <Route path="ecole" element={<ChessSchool />} />
            <Route path="histoire" element={<Histoire />} />
          </Route>
        </Routes>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App