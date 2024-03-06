import React from 'react'
import { Routes, Route } from 'react-router'
import { ErradicaciónArbolado } from '@components/Arbolado/ErradicaciónArbolado'
import { PodaArbolado } from '@components/Arbolado/PodaArbolado'
import { SolicitudDePoda } from '@components/Arbolado/SolicitudDePoda'
import Zoonosis from '@pages/Zoonosis'
import { CorteDeRamas } from '../../components/Arbolado/CorteDeRamas'
import { CodigoDeTramite } from '../../components/Arbolado/CodigoDeTramite'
import { RegistrarOficio } from '../../pages/Empleo/RegistrarOficio'
import { PromoveOficio } from '../../pages/Empleo/PromoveOficio'
import { ProgramaEntrenamiento } from '../../pages/Empleo/ProgramaEntrenamiento'
import { CapacitacionLaboral } from '../../pages/Empleo/CapacitacionLaboral'
import { ProgramaInsercionLaboral } from '../../pages/Empleo/ProgramaInsercionLaboral'
import { ProgramaPromover } from '../../pages/Empleo/ProgramaPromover'
import { ServicioFunebre } from '@/components/ServicioFunebre/ServicioFunebre'
import { CementerioRender } from '@/components/Cementerio/CementerioRender'
import { Tasas } from '@/components/Cementerio/Tasas'
import { TransferenciaConcesion } from '@/components/Cementerio/TransferenciaConcesion'

const AmbienteRoutes = () => {
  return (
    <Routes>
      <Route path='/zoonosis' element={<Zoonosis />} />
      <Route path='/erradicacionarbolado' element={<ErradicaciónArbolado />} />
      <Route path='/podadearbolado' element={<PodaArbolado />} />
      <Route path='/solicituddepoda' element={<SolicitudDePoda />} />
      <Route path='/cortederamas' element={<CorteDeRamas />} />
      <Route path='/codigodetramite' element={<CodigoDeTramite />} />
      <Route path='/registraroficio' element={<RegistrarOficio />} />
      <Route path='/promoveroficio' element={<PromoveOficio />} />
      <Route path='/programaentrenamientotrabajo' element={<ProgramaEntrenamiento />} />
      <Route path='/capacitacionlaboral' element={<CapacitacionLaboral />} />
      <Route path='/programainsercionlaboral' element={<ProgramaInsercionLaboral />} />
      <Route path='/proframapromover' element={<ProgramaPromover />} />
      {/* ESTA RUTA ES TEMPORAL EN ESTE COMPONENTE */}
      <Route path='/serviciofunenbre' element={<ServicioFunebre />} />
      <Route path='/cementeriomunicipal' element={<CementerioRender />} />
      <Route path='/tasas' element={<Tasas />} />
      <Route path='/transferenciaconcesion' element={<TransferenciaConcesion />} />
    </Routes>
  )
}

export default AmbienteRoutes
