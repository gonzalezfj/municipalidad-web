import { Route, Routes } from 'react-router'
import ManipulacionAlimentos from '../../components/Comercio/ManipulacionAlimentos'
import Galerias from '../../components/Comercio/Galerias'
import Geriatricos from '../../components/Comercio/Geriatricos'
import PlayaEstacionamiento from '../../components/Comercio/PlayaEstacionamiento'
import SalasVelatorias from '../../components/Comercio/SalasVelatorias'
import Habilitaciones from '../../components/Comercio/Habilitaciones'
import HabilitacionesEventos from '../../components/Comercio/HabilitacionesEventos'

const ComercioRoutes = () => {
  return (
    <Routes>
      <Route path='/manipulacionalimentos' element={<ManipulacionAlimentos />} />
      <Route path='/galerias' element={<Galerias />} />
      <Route path='/geriatricos' element={<Geriatricos />} />
      <Route path='/playaestacionamiento' element={<PlayaEstacionamiento />} />
      <Route path='/salasvelatorias' element={<SalasVelatorias />} />
      <Route path='/habilitaciones' element={<Habilitaciones />} />
      <Route path='/habilitacioneseventos' element={<HabilitacionesEventos />} />
    </Routes>
  )
}

export default ComercioRoutes
