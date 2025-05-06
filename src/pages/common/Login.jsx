import React, { useEffect, useState } from 'react'
import ThemeToggle from '../../components/commen/ThemeToggle'
import tutorStudentsImage from '../../assets/image/learning.png'
import google_icon from '../../assets/image/google.png'
import { isEmpty, isValidEmail, isValidPassword } from '../../utils/formValidation'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from '../../feature/auth/loginSlice'
import { ScaleLoader } from 'react-spinners'
import { ADMIN, BLOCK, EMAIL, NETWORK, PASSWORD, STUDENT, TUTOR } from '../../constants/constants'
import useTheme from '../../hook/useTheme'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { setUserDetails } from '../../feature/auth/userDetailsSlice'
import { useNavigate } from 'react-router-dom'

const loginSwal = withReactContent(Swal)

const Login = () => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)
    const [formDataValid, setFormDataValid] = useState({
      'email': false,
      'password': false
    })
    const dispatch = useDispatch()
    const { isLoginLoading } = useSelector((state) => state.login)
    const [theme, setTheme] = useTheme()
    const navigate = useNavigate()

    useEffect(() => {
      setIsFormValid(
        formDataValid.email == true &&
        formDataValid.password == true
      )
    }, [formDataValid])

    // email handler
    const onEmailChange = (e) => {
      const {name, value} = e.target
      setEmail(value)
      if(isEmpty(value)){
        setEmailError('E-mail cannot be empty!')
        setFormDataValid((prevData) => ({
          ...prevData,
          [name]: false
        }))
        return
      }
      if(!isValidEmail(value)){
        setEmailError('Please enter a valid email address!')
        setFormDataValid((prevData) => ({
          ...prevData,
          [name]: false
        }))
        return
      }
      setEmailError('')
      setFormDataValid((prevData) => ({
        ...prevData,
        [name]: true
      }))
      return
    }

    // Password handler
    const onPasswordChange = (e) => {
      const {name, value} = e.target
      setPassword(value)
      if(isEmpty(value)){
        setPasswordError('Password cannot be empty!')
        setFormDataValid((prevData) => ({
          ...prevData, 
          [name]: false
        }))
        return
      }
      if(!isValidPassword(value)){
        setPasswordError('Use 6–8 chars: letter, number & symbol!')
        setFormDataValid((prevData) => ({
          ...prevData, 
          [name]: false
        }))
        return
      }
      setPasswordError('')
      setFormDataValid((prevData) => ({
        ...prevData, 
        [name]: true
      }))
      return
    }

    const onFormSubmit = async (e) => {
      e.preventDefault()
      console.log('iam here in submit')
      const formData = {
        'email': email,
        'password': password
      }
      
      try { 
        const response = await dispatch(loginThunk(formData)).unwrap()
        dispatch(setUserDetails(response))
        if(response.role == TUTOR) {
          navigate('/tutor/dashboard')
        }
        else if (response.role == STUDENT) {
          navigate('/dashboard')
        }
        else if (response.role == ADMIN) {
          navigate('/admin/dashboard')
        }
      } catch (error) {
        if(error.error_mark == EMAIL) {
          setEmailError(error.message)
          return 
        }
        if(error.error_mark == PASSWORD) {
          console.log('iam here in pass')
          setPasswordError(error.message)
          return 
        }
        else if(error.error_mark == BLOCK) {
          loginSwal.fire({
            text: error.message,
            icon: 'error',
            showConfirmButton: true,
            confirmButtonText: 'Ok',
            background: theme == 'dark' ? '#0a122b' : '#d5e1fe',
            color: theme == 'dark' ? "#d5e1fe" : '#00010f',
          })
          return 
        } 
        else if(error.error_mark == NETWORK) {
          loginSwal.fire({
            text: error.message,
            icon: 'error',
            showConfirmButton: true,
            confirmButtonText: 'Ok',
            background: theme == 'dark' ? '#0a122b' : '#d5e1fe',
            color: theme == 'dark' ? "#d5e1fe" : '#00010f',
          })
          return 
        } else {
          loginSwal.fire({
            text: 'Login failed, something wrong!',
            icon: 'error',
            showConfirmButton: true,
            confirmButtonText: 'Ok',
            background: theme == 'dark' ? '#0a122b' : '#d5e1fe',
            color: theme == 'dark' ? "#d5e1fe" : '#00010f',
          })
          return 
        }
      }
    }

  return (
    <div className="relative w-full h-screen flex bg-white dark:bg-dark-blue-800">
      <div className="absolute top-5 right-5">
        <ThemeToggle />
      </div>

      <div className="w-full h-full flex flex-col-reverse lg:flex-row space-y-3">
        <div className="w-full lg:w-[45%] flex justify-center items-center py-[35px] lg:py-0">
          <div className="w-[300px] border-[1px] border-gray-400 rounded-md px-4 py-5 space-y-7">
            <h1 className="text-black-900 dark:text-white-900 font-semibold text-2xl">
              Login
            </h1>

            <form action="">
              <div className="space-y-2">

                {/* Email */}
                <div className="flex flex-col">
                  {
                    emailError ? 
                    <p className='text-[13px] text-error'>{emailError}</p>
                    :
                    <label className='text-[13px] text-gray-500 dark:text-gray-400' htmlFor="email">E-mail</label>
                  } 
                  <input
                    className="text-black dark:text-white-900 border-[1px] border-gray-800 dark:border-gray-500 outline-none focus:border-gray-400 dark:focus:border-white-900 rounded-sm py-1 px-2"
                    type="email" id='email' name='email' onChange={onEmailChange}
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col">
                    {
                      passwordError ? 
                      <p className='text-[13px] text-error'>{passwordError}</p>
                      :
                      <label className='text-[13px] text-gray-500 dark:text-gray-400' htmlFor="email">Password</label>
                    }
                  <input
                    className="text-black dark:text-white-900 border-[1px] border-gray-800 dark:border-gray-500 outline-none focus:border-gray-400 dark:focus:border-white-900 rounded-sm py-1 px-2"
                    type="password" id='password' name='password' onChange={onPasswordChange}
                  />
                </div>

                {/* Submit button */}
                <button 
                type='submit' 
                disabled={!isFormValid} 
                className={`relative mt-1 py-1.5 bg-light-blue-700 rounded-md w-full text-white ${isFormValid ? 'cursor-pointer ' : 'cursor-not-allowed'}`}
                onClick={onFormSubmit}
                >
                  {
                    isLoginLoading ? 
                    <ScaleLoader height={15} width={3} color="#FFFFFF" />
                    : 
                    "Login"
                  }
                  <span className={`absolute bg-[#0001068f] top-0 left-0 right-0 bottom-0 rounded-md ${isFormValid ? 'hidden' : 'visible'}`}></span>
                </button>
              </div>
            </form>

            {/* Google signup button */}
            <div className="pt-[30px] border-t-[1px] border-gray-400 dark:border-gray-500">
              <div className="flex border-2 cursor-pointer border-gray-700 rounded-md py-1.5 justify-center space-x-3 items-center">
                <span>
                  <img className="w-[18px]" src={google_icon} alt="" />
                </span>
                <p className="text-sm text-black dark:text-white-900">
                  SignIn with Google
                </p>
              </div>
            </div>

            {/* For register */}
            <div className='mt-4 w-full text-center'>
              <p className='text-sm font-[500] text-black-900 dark:text-white-900'>
                I am new here ? 
                <span className='text-sm text-light-blue-800 font-[500] cursor-pointer'> Register</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:w-[55%] flex justify-center">
          <img
            src={tutorStudentsImage}
            className="w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login
