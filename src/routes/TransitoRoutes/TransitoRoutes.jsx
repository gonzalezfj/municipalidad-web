import React from 'react'
import { Routes, Route } from 'react-router'
import { Obleas } from '@pages'
import { Transito } from '@pages/Transito.jsx'
import { Ocupacion } from '@pages/Ocupacion'
import { Señaletica } from '@pages/Señaletica'
import { Vehiculos } from '@components/Transito/Vehiculos'
import { DenunciaVehiculos } from '@components/Transito/DenunciaVehiculos'
import { ParadaTaxi } from '@components/Transito/ParadaTaxi'
import { Infraccion } from '@components/Transito/Infraccion'
import { PlantillaObleas } from './components/Obleas/PlantillaObleas'

const TransitoRoutes = () => {
  return (
    <Routes>
      <Route path='/transito' element={<Transito />} />
      <Route path='/vehiculos' element={<Vehiculos />} />
      <Route path='/denuncia' element={<DenunciaVehiculos />} />
      <Route path='/paradataxi' element={<ParadaTaxi />} />
      <Route path='/infracción' element={<Infraccion />} />
      <Route path='/obleas' element={<Obleas />} />
      <Route path='/plantillaObleas' element={<PlantillaObleas />} />
      <Route path='/permisos' element={<Ocupacion />} />
      <Route path='/señaletica' element={<Señaletica />} />
    </Routes>
  )
}

export default TransitoRoutes
