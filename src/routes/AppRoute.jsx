import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from '../layouts/admin/AdminLayout'
import AdminRoute from './AdminRoute'
import UserLayout from '../layouts/user/UserLayout'
import UserRoute from './UserRoute'


const AppRoute = () => {
  return (
    <Router>
      <Routes>
        {/* Admin routes */}
        <Route path='/admin' element={<AdminLayout />}>
            <Route path='*' element={<AdminRoute />} />
        </Route>

        {/* User routes */}
        <Route path='/' element={<UserLayout />}>
            <Route path='*' element={<UserRoute />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoute
