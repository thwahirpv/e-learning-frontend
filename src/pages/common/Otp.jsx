import React from 'react'
import ThemeToggle from '../../components/commen/ThemeToggle'
import OtpBox from '../../components/commen/OtpBox'

const Otp = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-white-black-shade dark:bg-dark-blue-800">
      <div className="absolute top-5 right-5">
        <ThemeToggle />
      </div>
      <OtpBox />
    </div>
  )
}

export default Otp
