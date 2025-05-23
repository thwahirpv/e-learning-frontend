import React, { useState } from 'react'
import ThemeToggle from '../commen/ThemeToggle'
import { useNavigate } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";



const UserNavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const navigate = useNavigate()
  return (
    <div className="relative w-full h-[100px] flex justify-center items-center px-[10px] md:px-[130px]">

      <div className='w-full flex justify-between items-center'>
        <div className='transition-all block md:hidden'>
          <p className='text-black-900 dark:text-white-900 text-2xl'
          onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {
              isNavOpen ? <IoClose /> : <IoMenu />
            }
          </p>
        </div>
      {/* Logo */}
      <div>
        <p className="font-[700] text-2xl text-light-blue-500 dark:text-light-blue-700">E-Learning</p>
      </div>

      <div className="md:absolute top-7 right-3">
            <ThemeToggle />
      </div>
      </div>

      {/* Options */}
      <div className={`w-full h-screen md:h-fit md:w-[300px] bg-white dark:bg-dark-blue-800 md:bg-transparent md:dark:bg-transparent z-50 md:block absolute md:static flex justify-center transition-all py-[10px] md:py-0 ${ isNavOpen ? 'top-[120px] opacity-100' : 'top-[-900px] opacity-0 md:opacity-100' }`}>
        <ul className="relative w-full h-full flex flex-col md:flex-row items-center justify-center space-y-[30px] md:space-y-0 md:space-x-[30px] ">
            <li 
            onClick={() => navigate('/')}
            className="text-[15px] font-[500] text-black-900 dark:text-white-900 cursor-pointer md:hover:text-[15.5px] transition-all">Home</li>
            <li 
            className="text-[15px] font-[500] text-black-900 dark:text-white-900 cursor-pointer md:hover:text-[15.5px] transition-all">About</li>
            <li 
            className="text-[15px] font-[500] text-black-900 dark:text-white-900 cursor-pointer md:hover:text-[15.5px] transition-all">Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default UserNavBar
