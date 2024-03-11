import { CementerioRender } from '@/components/Cementerio/CementerioRender'
import { InhumacionesExhumaciones } from '@/components/Cementerio/InhumacionesExhumaciones'
import { ObrasReparaciones } from '@/components/Cementerio/ObrasReparaciones'
import { RegulacionDeudas } from '@/components/Cementerio/RegulacionDeudas'
import { ServicioMantenimiento } from '@/components/Cementerio/ServicioMantenimiento'
import { Tasas } from '@/components/Cementerio/Tasas'
import { TransferenciaConcesion } from '@/components/Cementerio/TransferenciaConcesion'
import { ServicioFunebre } from '@/components/ServicioFunebre/ServicioFunebre'
import { Route, Routes } from 'react-router-dom'

const CementerioRoutes = () => {
  return (
    <Routes>
      {/* ESTA RUTA ES TEMPORAL EN ESTE COMPONENTE */}
      <Route path='/serviciofunenbre' element={<ServicioFunebre />} />
      <Route path='/cementeriomunicipal' element={<CementerioRender />} />
      <Route path='/tasas' element={<Tasas />} />
      <Route path='/transferenciaconcesion' element={<TransferenciaConcesion />} />
      <Route path='/serviciomantenimiento' element={<ServicioMantenimiento />} />
      <Route path='/obrasreparaciones' element={<ObrasReparaciones />} />
      <Route path='/inhumacionesexhumaciones' element={<InhumacionesExhumaciones />} />
      <Route path='/regulaciondeudas' element={<RegulacionDeudas />} />
    </Routes>
  )
}

export default CementerioRoutes
