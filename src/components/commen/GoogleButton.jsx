import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { googleAuthThunk } from '../../feature/auth/googleAuthSlice';
import { data } from 'react-router-dom';


const GoogleButton = ({ role }) => {
    const dispatch = useDispatch()

    const handleSuccess = async (credentialResponse) => {
        const token = credentialResponse.credential
        console.log(token, 'toekn')
        const data = {'token': token, 'role': role}
        try {
            const response = await dispatch(googleAuthThunk(data)).unwrap()
        } catch (error) {
            console.log(error, 'front error')
        }

    }

    const handleError = () => {
        console.log('login failed')
    }
  return (
    <div>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  )
}

export default GoogleButton
