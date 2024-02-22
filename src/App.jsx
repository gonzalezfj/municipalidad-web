import Navbar from './components/Navbar/Navbar'
import { Home } from './pages'
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
import { DenunciaVehiculos } from './components/Transito/DenunciaVehiculos'
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
        <Route path='/empleo' element={<Empleo />} />
        <Route path='/detalleagenda' element={<NuestraAgenda />} />
        <Route path='/estacionamientocontrolado' element={<Eco />} />
        <Route path='/playaderemocion' element={<PlayaRemocion />} />
        <Route path='/zoonosis' element={<Zoonosis />} />
        <Route path='/obleas' element={<Obleas />} />
        <Route path='/plantillaObleas' element={<PlantillaObleas />} />
        <Route path='/transito' element={<Transito />} />
        <Route path='/vehiculos' element={<Vehiculos />} />
        <Route path='/denuncia' element={<DenunciaVehiculos />} />
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
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
