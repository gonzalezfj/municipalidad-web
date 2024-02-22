import React from 'react'
import { Routes, Route } from 'react-router'
import { Transito } from '@pages/Transito.jsx'
import { Vehiculos } from '@components/Transito/Vehiculos'
import { DenunciaVehiculos } from '@components/Transito/DenunciaVehiculos'
import { ParadaTaxi } from '@components/Transito/ParadaTaxi'
import { Infraccion } from '@components/Transito/Infraccion'

const TransitoRoutes = () => {
  return (
    <Routes>
      <Route path='/transito' element={<Transito />} />
      <Route path='/vehiculos' element={<Vehiculos />} />
      <Route path='/denuncia' element={<DenunciaVehiculos />} />
      <Route path='/paradataxi' element={<ParadaTaxi />} />
      <Route path='/infracción' element={<Infraccion />} />
    </Routes>
  )
}

export default TransitoRoutes
