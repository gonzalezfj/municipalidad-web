import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Boletas from './pages/Boletas'
import { DetalleNoticia } from './components/DetalleNoticias/DetalleNoticia'
import Tramites from './pages/Tramites'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Eco from './pages/Eco'
import { Empleo } from './pages/Empleo'
import PlayaRemocion from './pages/PlayaRemocion'

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/boletas' element={<Boletas />} />
        <Route path='/empleo' element={<Empleo />} />
        <Route path='/detalle' element={<DetalleNoticia />} />
        <Route path='/tramites' element={<Tramites />} />
        <Route path='/estacionamientocontrolado' element={<Eco />} />
        <Route path='/playaderemocion' element={<PlayaRemocion />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
