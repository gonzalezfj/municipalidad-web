import { CapacitacionLaboral } from '@/pages/Empleo/CapacitacionLaboral'
import { ProgramaEntrenamiento } from '@/pages/Empleo/ProgramaEntrenamiento'
import { ProgramaInsercionLaboral } from '@/pages/Empleo/ProgramaInsercionLaboral'
import { ProgramaPromover } from '@/pages/Empleo/ProgramaPromover'
import { PromoverOficio } from '@/pages/Empleo/PromoverOficio'
import { RegistrarOficio } from '@/pages/Empleo/RegistrarOficio'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const EmpleoRoutes = () => {
  return (
    <Routes>
      <Route path='/programapromover' element={<ProgramaPromover />} />
      <Route path='/registraroficio' element={<RegistrarOficio />} />
      <Route path='/promoveroficio' element={<PromoverOficio />} />
      <Route path='/programaentrenamientotrabajo' element={<ProgramaEntrenamiento />} />
      <Route path='/capacitacionlaboral' element={<CapacitacionLaboral />} />
      <Route path='/programainsercionlaboral' element={<ProgramaInsercionLaboral />} />
    </Routes>
  )
}

export default EmpleoRoutes
