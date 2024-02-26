import React from 'react'
import { Routes, Route } from 'react-router'
import { IntendenciaPage } from '@components/Intendencia/IntendenciaPage'

const IntendenciaRoute = () => {
  return (
    <Routes>
      <Route path='/intendencia' element={<IntendenciaPage />} />
    </Routes>
  )
}

export default IntendenciaRoute
