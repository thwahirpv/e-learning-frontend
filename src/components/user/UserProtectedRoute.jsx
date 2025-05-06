import React from 'react'
import { useSelector } from 'react-redux'
import { STUDENT } from '../../constants/constants'
import { Navigate } from 'react-router-dom'

const UserProtectedRoute = ({ children }) => {
    const { isAuthenticated, role } = useSelector((state) => state.userDetails)
    return isAuthenticated && role == STUDENT ? children : <Navigate to='/login' />
}

export default UserProtectedRoute
