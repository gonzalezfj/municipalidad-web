import React from 'react'
import { Route, Routes } from 'react-router'
import ConsultaTurnos from '@pages/ConsultaTurnos/ConsultaTurnos'

const GeneralRoutes = () => {
  return (
    <Routes>
      <Route path='/consultaturnos' element={<ConsultaTurnos />} />
    </Routes>
  )
}

export default GeneralRoutes
