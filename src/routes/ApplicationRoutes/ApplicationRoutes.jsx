import React from 'react'
import { Routes, Route } from 'react-router'
import { Home } from '@pages'

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default ApplicationRoutes
