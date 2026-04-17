import { Routes, Route } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import Company from './pages/Company'

const Home = lazy(() => import('./pages/Home'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const About = lazy(() => import('./pages/About'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const MasterclassRegister = lazy(() => import('./pages/funnel/MasterclassRegister'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Company />} />
          <Route path="/funnel-studio" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/masterclass" element={<MasterclassRegister />} />
        </Routes>
      </Suspense>
    </>
  )
}
