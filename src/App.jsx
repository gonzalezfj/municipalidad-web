// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import { Eco, Boletas, Empleo, Obleas } from '@pages'

// Routes
import { ApplicationRoutes, TransitoRoutes } from '@routes'

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
import { Recategorizacion } from './components/Recategorizacion/Recategorizacion'
import { LibreDeuda } from './components/InmuebleComercio/LibreDeuda'
import { LibreDeudaComercio } from './components/InmuebleComercio/LibreDeudaComercio'
import { EximicionPago } from './components/InmuebleComercio/EximicionPago'
import { RecategorizacionForm } from './components/Recategorizacion/RecategorizacionForm'
import { InstalacionesElectricas } from './components/Obras/InstalacionesElectricas'
import { AutorizacionObras } from './components/Obras/AutorizacionObras'
import { DerechoEdificacion } from './components/Obras/DerechoEdificacion'
import { ReservaNumerica } from './components/Obras/ReservaNumerica'
import { AltasYBajasParcela } from './components/Obras/AltasYBajasParcela'
import { CambioDeTitularidad } from './components/Obras/CambioDeTitularidad'
import { ValladosDeObras } from './components/Obras/ValladosDeObras'
import { OcupacionConMaterial } from './components/Obras/OcupacionConMaterial'
import { DeclaracionJurada } from './components/Obras/DeclaracionJurada'
import { ReposiciónDeMedidores } from './components/Obras/ReposiciónDeMedidores'

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
      <Routes>
        <Route path='/boletas' element={<Boletas />} />
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
        <Route path='/recategorizacion' element={<Recategorizacion />} />
        <Route path='/formrecategorizacion' element={<RecategorizacionForm />} />
        <Route path='/libredeuda' element={<LibreDeuda />} />
        <Route path='/libredeudacomercio' element={<LibreDeudaComercio />} />
        <Route path='/eximicion' element={<EximicionPago />} />
        <Route path='/obras' element={<InstalacionesElectricas />} />
        <Route path='/autorizacionobras' element={<AutorizacionObras />} />
        <Route path='/derechoedificacion' element={<DerechoEdificacion />} />
        <Route path='/reservanumericadomicilio' element={<ReservaNumerica />} />
        <Route path='/altasparcelas' element={<AltasYBajasParcela />} />
        <Route path='/cambiotitularidad' element={<CambioDeTitularidad />} />
        <Route path='/valladosdeobra' element={<ValladosDeObras />} />
        <Route path='/ocupaciondematerial' element={<OcupacionConMaterial />} />
        <Route path='/declaracionjurada' element={<DeclaracionJurada />} />
        <Route path='/reposiciondemedidores' element={<ReposiciónDeMedidores />} />
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
