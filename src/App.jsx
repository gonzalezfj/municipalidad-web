import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Boletas from './pages/Boletas'
import Tramites from './pages/Tramites'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/boletas' element={<Boletas />} />
        <Route path='/tramites' element={<Tramites />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
