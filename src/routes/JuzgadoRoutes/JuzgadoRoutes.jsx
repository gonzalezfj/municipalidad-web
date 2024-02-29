import React from 'react'
import { Routes, Route } from 'react-router'
import DescargoTransito from '../../components/Juzgado/DescargoTransito'
import DescargoOtras from '../../components/Juzgado/DescargoOtras'

const JuzgadoRoutes = () => {
  return (
    <Routes>
      <Route path='/descargo' element={<DescargoOtras />} />
      <Route path='/descargotransito' element={<DescargoTransito />} />
    </Routes>
  )
}

export default JuzgadoRoutes
