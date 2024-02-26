import React from 'react'
import { Route, Routes } from 'react-router'
import ConsultaTurnos from '@pages/ConsultaTurnos/ConsultaTurnos'
import Expediente from '@pages/Expediente/Expediente'
import { Eco, Empleo, Tramites } from '@pages'
import { DetalleNoticia } from '@components/DetalleNoticias/DetalleNoticia'
import { NuestraAgenda } from '@components/Agenda/NuestraAgenda'

const GeneralRoutes = () => {
  return (
    <Routes>
      <Route path='/consultaturnos' element={<ConsultaTurnos />} />
      <Route path='/expediente' element={<Expediente />} />
      <Route path='/empleo' element={<Empleo />} />
      <Route path='/detalle' element={<DetalleNoticia />} />
      <Route path='/tramites' element={<Tramites />} />
      <Route path='/detalleagenda' element={<NuestraAgenda />} />
      <Route path='/estacionamientocontrolado' element={<Eco />} />
    </Routes>
  )
}

export default GeneralRoutes
