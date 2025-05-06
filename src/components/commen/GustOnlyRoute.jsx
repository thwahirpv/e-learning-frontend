import React from 'react'
import { useSelector } from 'react-redux'
import { STUDENT, TUTOR, ADMIN } from '../../constants/constants'
import { Navigate } from 'react-router-dom'

const GustOnlyRoute = ({ children }) => {
    const { isAuthenticated, role, lastVisitRoute } = useSelector((state) => state.userDetails)
  if(!isAuthenticated){
    return children
  }
  else if(role == STUDENT) {
    return <Navigate to={lastVisitRoute || '/dashboard'} />
  }
  else if(role == TUTOR) {
    return <Navigate to={lastVisitRoute || '/tutor/dashboard'} />
  }
  else if(role == ADMIN) {
    return <Navigate to={lastVisitRoute || '/admin/dashboard'} />
  }
}

export default GustOnlyRoute
