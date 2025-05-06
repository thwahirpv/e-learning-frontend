import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from '../pages/admin/Dashboard'
import NotFound from '../pages/common/NotFound'
import AdminProtectedRoute from '../components/admin/AdminProtectedRoute'

const AdminRoute = () => {
  return (
    <Routes>
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
