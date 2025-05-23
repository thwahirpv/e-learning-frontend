import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from '../pages/admin/Dashboard'
import NotFound from '../pages/common/NotFound'
import AdminProtectedRoute from '../components/admin/AdminProtectedRoute'
import AdminLogin from '../pages/admin/AdminLogin'
import GustOnlyRoute from '../components/commen/GustOnlyRoute'

const AdminRoute = () => {
  return (
    <Routes>
      <Route path='/login' element={
          <GustOnlyRoute>
            <AdminLogin />
          </GustOnlyRoute>
        } />

        <Route path='/dashboard' element={
          <AdminProtectedRoute>
            <Dashboard />
          </AdminProtectedRoute>
        } />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AdminRoute
