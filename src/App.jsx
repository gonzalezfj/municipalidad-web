import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Boletas from './pages/Boletas'
import { DetalleNoticia } from './components/DetalleNoticias/DetalleNoticia'
import Tramites from './pages/Tramites'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { NuestraAgenda } from './components/Agenda/NuestraAgenda'
import Eco from './pages/Eco'
import { Empleo } from './pages/Empleo'
import PlayaRemocion from './pages/PlayaRemocion'
import Zoonosis from './pages/Zoonosis'
import { Obleas } from './pages/Obleas'
import { PlantillaObleas } from './components/Obleas/PlantillaObleas'
import { Transito } from './pages/Transito'
import { Vehiculos } from './components/Transito/Vehiculos'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/boletas' element={<Boletas />} />
        <Route path='/empleo' element={<Empleo />} />
        <Route path='/detalle' element={<DetalleNoticia />} />
        <Route path='/tramites' element={<Tramites />} />
        <Route path='/empleo' element={<Empleo />} />
        <Route path='/agenda' element={<NuestraAgenda />} />
        <Route path='/estacionamientocontrolado' element={<Eco />} />
        <Route path='/playaderemocion' element={<PlayaRemocion />} />
        <Route path='/zoonosis' element={<Zoonosis />} />
        <Route path='/obleas' element={<Obleas />} />
        <Route path='/plantillaObleas' element={<PlantillaObleas />} />
        <Route path='/transito' element={<Transito />} /   >
        <Route path='/vehiculos' element={<Vehiculos />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
