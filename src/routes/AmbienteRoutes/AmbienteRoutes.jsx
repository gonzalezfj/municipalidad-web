import React from 'react'
import { Routes, Route } from 'react-router'
import { ErradicaciónArbolado } from '@components/Arbolado/ErradicaciónArbolado'
import { PodaArbolado } from '@components/Arbolado/PodaArbolado'
import { SolicitudDePoda } from '@components/Arbolado/SolicitudDePoda'
import Zoonosis from '@pages/Zoonosis'
import { CorteDeRamas } from '../../components/Arbolado/CorteDeRamas'
import { CodigoDeTramite } from '../../components/Arbolado/CodigoDeTramite'
import { HomeSalud } from '@/components/Salud/HomeSalud'

const AmbienteRoutes = () => {
  return (
    <Routes>
      <Route path='/zoonosis' element={<Zoonosis />} />
      <Route path='/erradicacionarbolado' element={<ErradicaciónArbolado />} />
      <Route path='/podadearbolado' element={<PodaArbolado />} />
      <Route path='/solicituddepoda' element={<SolicitudDePoda />} />
      <Route path='/cortederamas' element={<CorteDeRamas />} />
      <Route path='/codigodetramite' element={<CodigoDeTramite />} />
      <Route path='/salud' element={<HomeSalud />} />
    </Routes>
  )
}

export default AmbienteRoutes
