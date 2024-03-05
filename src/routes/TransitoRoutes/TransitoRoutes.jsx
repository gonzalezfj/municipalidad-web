import React from 'react'
import { Routes, Route } from 'react-router'
import { Obleas } from '@pages'
import { Transito } from '@pages/Transito.jsx'
import { Ocupacion } from '@pages/Ocupacion'
import { Senaletica } from '@pages/Senaletica'
import PlayaRemocion from '@pages/PlayaRemocion'
import { Vehiculos } from '@components/Transito/Vehiculos'
import { DenunciaVehiculos } from '@components/Transito/DenunciaVehiculos'
import { ParadaTaxi } from '@components/Transito/ParadaTaxi'
import { Infraccion } from '@components/Transito/Infraccion'
import { MediosDePrensa } from '@/components/Obleas/MediosDePrensa'
import { PersonasConDiscapacidad } from '@/components/Obleas/PersonasConDiscapacidad'
import { CargaYDescargaMercaderia } from '@/components/Obleas/CargaYDescargaMercaderia'
import { ParadaDeTaxi } from '@/components/Obleas/ParadaDeTaxi'

const TransitoRoutes = () => {
  return (
    <Routes>
      <Route path='/transito' element={<Transito />} />
      <Route path='/vehiculos' element={<Vehiculos />} />
      <Route path='/denuncia' element={<DenunciaVehiculos />} />
      <Route path='/paradataxi' element={<ParadaTaxi />} />
      <Route path='/infraccion' element={<Infraccion />} />
      <Route path='/obleas' element={<Obleas />} />
      <Route path='/plantillaobleas' element={<MediosDePrensa />} />
      <Route path='/permisos' element={<Ocupacion />} />
      <Route path='/Senaletica' element={<Senaletica />} />
      <Route path='/playaderemocion' element={<PlayaRemocion />} />
      <Route path='/personascondiscapacidad' element={<PersonasConDiscapacidad />} />
      <Route path='/cargaydescargamercaderia' element={<CargaYDescargaMercaderia />} />
      <Route path='/paradataxi' element={<ParadaDeTaxi />} />
    </Routes>
  )
}

export default TransitoRoutes
