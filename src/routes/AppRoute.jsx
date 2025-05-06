import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from '../layouts/admin/AdminLayout'
import AdminRoute from './AdminRoute'
import UserLayout from '../layouts/user/UserLayout'
import UserRoute from './UserRoute'
import TutorLayout from '../layouts/tutor/TutorLayout'
import TutorRoute from './TutorRoute'
import Otp from '../pages/common/Otp'
import Login from '../pages/common/Login'
import TrackLastRoute from '../components/commen/TrackLastRoute'
import GustOnlyRoute from '../components/commen/GustOnlyRoute'


const AppRoute = () => {
  return (
    <Router>
      <TrackLastRoute />
      <Routes>
        {/* Admin routes */}
        <Route path='/admin' element={<AdminLayout />}>
            <Route path='*' element={<AdminRoute />} />
        </Route>

        {/* Tutor route */}
        <Route path='/tutor' element={<TutorLayout />}>
            <Route path='*' element={<TutorRoute />} />
        </Route> 

        {/* User routes */}
        <Route path='/' element={<UserLayout />}>
            <Route path='*' element={<UserRoute />} />
        </Route>

        {/* Common routes */}
        <Route path='/login' element={
          <GustOnlyRoute>
            <Login />
          </GustOnlyRoute>
        } />
        <Route path='/otp' element={<Otp />} />
      </Routes>
    </Router>
  )
}

export default AppRoute
