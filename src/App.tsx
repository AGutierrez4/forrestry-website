import { Routes, Route } from 'react-router-dom'
import Company from './pages/Company'
import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Company />} />
      <Route path="/funnel-studio" element={<Home />} />
    </Routes>
  )
}
