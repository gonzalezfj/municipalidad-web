import { CarteleriaRender } from '@/pages/EspacioUrbano/CarteleriaRender'
import { ConstrucciónArregloVeredas } from '@/pages/EspacioUrbano/ConstrucciónArregloVeredas'
import { HabilitacionEstructura } from '@/pages/EspacioUrbano/HabilitacionEstructura'
import { OcupacionCalzada } from '@/pages/EspacioUrbano/OcupacionCalzada'
import { SoporteAntena } from '@/pages/EspacioUrbano/SoporteAntena'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const UrbanoRoutes = () => {
  return (
    <Routes>
      <Route path='/carteleriapublica' element={<CarteleriaRender />} />
      <Route path='/arregloveredas' element={<ConstrucciónArregloVeredas />} />
      <Route path='/habilitacionantena' element={<HabilitacionEstructura />} />
      <Route path='/ocupacioncalzada' element={<OcupacionCalzada />} />
      <Route path='/soporteantena' element={<SoporteAntena />} />
    </Routes>
  )
}

export default UrbanoRoutes
