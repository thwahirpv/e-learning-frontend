import React from 'react'
import { useSelector } from 'react-redux'
import { STUDENT, TUTOR, ADMIN } from '../../constants/constants'
import { Navigate } from 'react-router-dom'

const GustOnlyRoute = ({ children }) => {
    const { isAuthenticated, role, lastVisitRoute } = useSelector((state) => state.userDetails)
    console.log(isAuthenticated, role, 'from gest only')
  if(!isAuthenticated){
    return children
  }
  else if(role == STUDENT) {
    return <Navigate to={'/dashboard'} />
  }
  else if(role == TUTOR) {
    return <Navigate to={'/tutor/dashboard'} />
  }
  else if(role == ADMIN) {
    return <Navigate to={'/admin/dashboard'} />
  }
}

export default GustOnlyRoute
