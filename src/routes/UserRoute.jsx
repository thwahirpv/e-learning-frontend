import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from '../pages/user/Dashboard'
import NotFound from '../pages/common/NotFound'
import UserRegistration from '../pages/user/UserRegistration'
import UserProtectedRoute from '../components/user/UserProtectedRoute'
import GustOnlyRoute from '../components/commen/GustOnlyRoute'

const UserRoute = () => {
  return (
    <Routes>
      <Route path='/register' element={
        <GustOnlyRoute>
          <UserRegistration />
        </GustOnlyRoute>
      } />
      <Route path='/dashboard' element={
        <UserProtectedRoute>
          <Dashboard />
        </UserProtectedRoute>
      } />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default UserRoute
