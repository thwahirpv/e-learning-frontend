import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { ADMIN } from '../../constants/constants'

const AdminProtectedRoute = ({ children }) => {
    const { isAuthenticated, role } = useSelector((state) => state.userDetails)
    return isAuthenticated && role == ADMIN ? children : <Navigate to='/login' />
}

export default AdminProtectedRoute
