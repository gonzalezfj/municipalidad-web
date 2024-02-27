import React from 'react'
import { Routes, Route } from 'react-router'
import { Home } from '@pages'
import { Noticias } from '@components/DetalleNoticias/Noticias'

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/noticias' element={<Noticias />} />
    </Routes>
  )
}

export default ApplicationRoutes
