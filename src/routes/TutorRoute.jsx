import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from '../pages/Tutor/Dashboard'
import NotFound from '../pages/common/NotFound'

const TutorRoute = () => {
  return (
    <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default TutorRoute
