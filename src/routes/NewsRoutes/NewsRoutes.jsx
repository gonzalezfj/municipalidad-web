import React from 'react'
import { Routes, Route } from 'react-router'
import { Noticias } from '@pages'

const NewsRoutes = () => {
  return (
    <Routes>
      <Route path='/noticias' element={<Noticias />} />
    </Routes>
  )
}

export default NewsRoutes
