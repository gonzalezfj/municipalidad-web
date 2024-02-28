import React from 'react'
import { Routes, Route } from 'react-router'
import { Noticias, DetalleNoticia } from '@pages'

const NewsRoutes = () => {
  return (
    <Routes>
      <Route path='/noticias' element={<Noticias />} />
      <Route path='/noticias/:id/:slug' element={<DetalleNoticia />} />
    </Routes>
  )
}

export default NewsRoutes
