import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from '../pages/user/Dashboard'
import NotFound from '../pages/common/NotFound'

const UserRoute = () => {
  return (
    <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default UserRoute
