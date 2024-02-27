import React from 'react'
import { Route, Routes } from 'react-router'
import { Recategorizacion } from '@components/Recategorizacion/Recategorizacion'
import { RecategorizacionForm } from '@components/Recategorizacion/RecategorizacionForm'
import { LibreDeuda } from '@components/InmuebleComercio/LibreDeuda'
import { LibreDeudaComercio } from '@components/InmuebleComercio/LibreDeudaComercio'
import { EximicionPago } from '@components/InmuebleComercio/EximicionPago'
import { Boletas } from '@pages'

const RentasRoutes = () => {
  return (
    <Routes>
      <Route path='/boletas' element={<Boletas />} />
      <Route path='/recategorizacion' element={<Recategorizacion />} />
      <Route path='/formrecategorizacion' element={<RecategorizacionForm />} />
      <Route path='/libredeuda' element={<LibreDeuda />} />
      <Route path='/autenticidad' element={<LibreDeudaComercio />} />
      <Route path='/eximicion' element={<EximicionPago />} />
    </Routes>
  )
}

export default RentasRoutes
