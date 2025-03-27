import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from '../pages/admin/Dashboard'
import NotFound from '../pages/common/NotFound'

const AdminRoute = () => {
  return (
    <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AdminRoute
