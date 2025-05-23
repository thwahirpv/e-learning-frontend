import React from 'react'
import { MdCopyright } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TutorLandingFooter = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full flex flex-col dark:bg-dark-blue-500 pt-[70px] pb-[20px]">
          <div className="w-full flex pb-[50px]">
            <div className="w-[50%] flex justify-center">
              <h1 className="text-[18px] md:text-2xl font-medium text-black-900 dark:text-white-900">
                E-Learning
              </h1>
            </div>
            <div className="w-[50%] flex justify-center">
              <ul className="space-y-4">
                <li className="text-black-900 dark:text-white-900 text-sm cursor-pointer" onClick={() => navigate('/')}>Home</li>
                <li className="text-black-900 dark:text-white-900 text-sm cursor-pointer">
                  About
                </li>
                <li className="text-black-900 dark:text-white-900 text-sm cursor-pointer">
                  Contact us
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <p className="flex items-center text-black-900 dark:text-white-900 text-sm"> 
                <span className="mr-1.5">
                    <MdCopyright />
                </span>
                2025 | MT-Designs
            </p>
          </div>
        </div>
  )
}

export default TutorLandingFooter
