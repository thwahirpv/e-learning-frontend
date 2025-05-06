import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerOTPThunk } from "../../feature/auth/registerOtpSlice";
import { registerThunk } from "../../feature/auth/registerSlice";
import { OTP } from "../../constants/constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useTheme from "../../hook/useTheme";
import { ScaleLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";


const otpSwal = withReactContent(Swal)


const OtpBox = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [otpData, setOtpData] = useState()
  const [otpError, setOtpError] = useState()
  const inputRefs = useRef([]);
  const { registerOtpMail, isRegisterOtpLoading } = useSelector((state) => state.registerOtp)
  const dispatch = useDispatch()
  const [theme, setTheme] = useTheme()
  const navigate = useNavigate()

  const handleKeyDown = (e) => {
    const index = inputRefs.current.indexOf(e.target)
  
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey &&
      !e.ctrlKey
    ) {
      e.preventDefault()
    }
  
    if (e.key === "Backspace") {
      e.preventDefault()
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp]
  
        if (newOtp[index]) {
          newOtp[index] = ""
        } else if (index > 0) {
          newOtp[index - 1] = ""
          inputRefs.current[index - 1].focus()
        }
  
        return newOtp
      });
    }
  };

  const handleInput = (e) => {
    const { target } = e;
    const index = inputRefs.current.indexOf(target)
    if (target.value) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        target.value,
        ...prevOtp.slice(index + 1),
      ]);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
    
  };

  const handleFocus = (e) => {
    e.target.select()
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text")
    if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      return
    }
    const digits = text.split("")
    setOtp(digits)
  };

  const handleVerify = async (e) => {
    e.preventDefault()

    const otpData = {
      'email': registerOtpMail,
      'otp': otp.join('')
    }
    try {
      const response = await dispatch(registerOTPThunk(otpData)).unwrap()
      otpSwal.fire({
        text: response,
        icon: 'success',
        showConfirmButton: true,
        timer: 3000,
        confirmButtonText: 'Go to login',
        background: theme == 'dark' ? '#0a122b' : '#d5e1fe',
        color: theme == 'dark' ? "#d5e1fe" : '#00010f',
      }).then((res) => {
        navigate('/login')
      })
    } catch (error) {
      console.log(error, 'from front err')
      if(error.error_mark == OTP) {
        setOtpError(error.message)
      }
      else{
        otpSwal.fire({
          text: error.message,
          icon: 'error',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
          background: theme == 'dark' ? '#0a122b' : '#d5e1fe',
          color: theme == 'dark' ? "#d5e1fe" : '#00010f',
        })
      }
    }
  }
  return (
    <div className="flex flex-col justify-center items-center space-y-8 bg-gray-300 dark:bg-dark-blue-700 py-7 px-10 rounded-md shadow">
      <div className="space-y-3">
        <h1 className="text-black-900 dark:text-gray-300 text-lg md:text-2xl font-medium text-center">Email Verification</h1>
        <p className="text-sm text-gray-500 text-center">
            Enter the 4-digit code sent to your <br/> email {registerOtpMail}
        </p>
      </div>
      <div>
        <form id="otp-form" className="flex flex-col space-y-3.5">
            <div className="">
                <p className="text-[13px] text-error ml-0.5 mb-0.5">{otpError}</p>
                <div className="flex gap-2">
                    {otp.map((digit, index) => (
                    <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    onPaste={handlePaste}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="shadow-xs flex w-[40px] items-center justify-center rounded-lg border border-stroke bg-white-500 text-black-900 p-2 text-center text-md font-medium text-gray-5 outline-none"
                    />
                ))}
                </div>
            </div>
          
            <button 
            className="bg-light-blue-300 text-black-900 dark:text-dark-blue-800 rounded-md py-1.5 text-sm font-medium cursor-pointer"
            onClick={handleVerify}
            >
              {
                isRegisterOtpLoading ? 
                <ScaleLoader height={15} width={3} color="#FFFFFF" />
                :
                "Verify"
              }
            </button>
        </form>
      </div>
      <div>
        <p className="text-sm text-black-900 dark:text-gray-500">
            Didn't receive code? 
            <span className="text-blue-600 ml-1.5 cursor-pointer">
                Resent
            </span>
        </p>
      </div>
    </div>
  );
};

export default OtpBox;
