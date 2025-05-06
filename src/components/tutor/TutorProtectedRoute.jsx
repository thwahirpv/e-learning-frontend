import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { TUTOR } from '../../constants/constants'

const TutorProtectedRoute = ({ children }) => {
    const { isAuthenticated, role } = useSelector((state) => state.userDetails)
    return isAuthenticated && role == TUTOR ? children : <Navigate to='/login' />
}

export default TutorProtectedRoute
