// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import { Eco, Empleo, Obleas } from '@pages'

// Routes
import { ApplicationRoutes, TransitoRoutes, ObrasRoutes, RentasRoutes } from '@routes'

// All page components
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

// Content (Refactor)
import { DetalleNoticia } from './components/DetalleNoticias/DetalleNoticia'
import Tramites from './pages/Tramites'
import { NuestraAgenda } from './components/Agenda/NuestraAgenda'
import PlayaRemocion from './pages/PlayaRemocion'
import Zoonosis from './pages/Zoonosis'
import { PlantillaObleas } from './components/Obleas/PlantillaObleas'

import { Ocupacion } from './pages/Ocupacion'
import { Señaletica } from './pages/Señaletica'

// Style
import '@/App.css'
import Expediente from './pages/Expediente/Expediente'

import { ErradicaciónArbolado } from './components/Arbolado/ErradicaciónArbolado'
import { PodaArbolado } from './components/Arbolado/PodaArbolado'
import { SolicitudDePoda } from './components/Arbolado/SolicitudDePoda'
import ConsultaTurnos from './pages/ConsultaTurnos/ConsultaTurnos'

function App () {
  return (
    <Router>
      <Navbar />
      <ApplicationRoutes />
      <TransitoRoutes />
      <ObrasRoutes />
      <RentasRoutes />
      <Routes>
        <Route path='/empleo' element={<Empleo />} />
        <Route path='/detalle' element={<DetalleNoticia />} />
        <Route path='/tramites' element={<Tramites />} />
        <Route path='/empleo' element={<Empleo />} />
        <Route path='/detalleagenda' element={<NuestraAgenda />} />
        <Route path='/estacionamientocontrolado' element={<Eco />} />
        <Route path='/playaderemocion' element={<PlayaRemocion />} />
        <Route path='/zoonosis' element={<Zoonosis />} />
        <Route path='/obleas' element={<Obleas />} />
        <Route path='/plantillaObleas' element={<PlantillaObleas />} />
        <Route path='/permisos' element={<Ocupacion />} />
        <Route path='/señaletica' element={<Señaletica />} />
        <Route path='/expediente' element={<Expediente />} />
        <Route path='/erradicacionarbolado' element={<ErradicaciónArbolado />} />
        <Route path='/podadearbolado' element={<PodaArbolado />} />
        <Route path='/solicituddepoda' element={<SolicitudDePoda />} />
        <Route path='/consultaturnos' element={<ConsultaTurnos />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
