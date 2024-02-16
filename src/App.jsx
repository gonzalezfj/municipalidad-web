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
import { DenunciaVehiculos } from './components/Transito/DenunciaVehiculos'
import { Ocupacion } from './pages/Ocupacion'
import { Señaletica } from './pages/Señaletica'
import { LibreDeuda } from './components/InmuebleComercio/LibreDeuda'
import { LibreDeudaComercio } from './components/InmuebleComercio/LibreDeudaComercio'
import { EximicionPago } from './components/InmuebleComercio/EximicionPago'
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
        <Route path='/libredeuda' element={<LibreDeuda />} />
        <Route path='/libredeudacomercio' element={<LibreDeudaComercio />} />
        <Route path='/eximicion' element={<EximicionPago />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
