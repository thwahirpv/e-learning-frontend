import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from '../pages/Tutor/Dashboard'
import NotFound from '../pages/common/NotFound'
import TutorRegistration from '../pages/Tutor/TutorRegistration'
import TutorProtectedRoute from '../components/tutor/TutorProtectedRoute'
import GustOnlyRoute from '../components/commen/GustOnlyRoute'
import TutorLogin from '../pages/Tutor/TutorLogin'

const TutorRoute = () => {
  return (
    <Routes>
        <Route path='/register' element={
          <GustOnlyRoute>
            <TutorRegistration />
          </GustOnlyRoute>
        } />
        <Route path='/login' element={
          <GustOnlyRoute>
            <TutorLogin />
          </GustOnlyRoute>
        } />
        <Route path='/dashboard' element={
          <TutorProtectedRoute>
            <Dashboard />
          </TutorProtectedRoute>
        } />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default TutorRoute
