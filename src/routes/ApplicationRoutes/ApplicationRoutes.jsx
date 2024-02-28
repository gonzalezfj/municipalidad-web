import React from 'react'
import { Routes, Route } from 'react-router'
import { Home, Noticias } from '@pages'

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/noticias' element={<Noticias />} />
    </Routes>
  )
}

export default ApplicationRoutes
