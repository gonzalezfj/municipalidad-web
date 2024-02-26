import { Route, Routes } from 'react-router'
import ManipulacionAlimentos from '../../components/Comercio/ManipulacionAlimentos'

const ComercioRoutes = () => {
  return (
    <Routes>
      <Route path='/manipulacionalimentos' element={<ManipulacionAlimentos />} />
      {/* <Route path='/expediente' element={<Expediente />} /> */}
      {/* <Route path='/empleo' element={<Empleo />} /> */}
      {/* <Route path='/detalle' element={<DetalleNoticia />} /> */}
      {/* <Route path='/tramites' element={<Tramites />} /> */}
      {/* <Route path='/detalleagenda' element={<NuestraAgenda />} /> */}
      {/* <Route path='/estacionamientocontrolado' element={<Eco />} /> */}
    </Routes>
  )
}

export default ComercioRoutes
