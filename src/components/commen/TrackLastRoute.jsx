import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setLastVisitRoute } from '../../feature/auth/userDetailsSlice'

const TrackLastRoute = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        const gustOnlyRoutes = ['/login', '/admin/login', '/tutor/login', '/register', '/tutor/register', '/otp']
        if(!gustOnlyRoutes.includes(location.pathname)){
            dispatch(setLastVisitRoute(location.pathname))
        }
    }, [location, dispatch])
    
  return null
}

export default TrackLastRoute
