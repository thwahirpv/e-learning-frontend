import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6"
import { motion } from 'framer-motion'
import joinImg from "../../assets/image/join.png"
import uploadCourse from "../../assets/image/upload_course.png"
import earnMoney from "../../assets/image/earn_money.png"
import { useNavigate } from 'react-router-dom'

const TutotLandingInstruction = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center overflow-hidden border-t py-[45px] border-gray-700 dark:border-light-blue-100 px-[90px]">
      <div>
        <motion.h1 
        className="text-[18px] md:text-2xl font-medium text-black-900 dark:text-white-900"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        >
          Get started in 3 steps!
        </motion.h1>
      </div>
      
      <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-[80px] md:space-y-0 py-[45px]">
        <motion.div 
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-[200px] flex flex-col justify-center items-center space-y-5"
        >
          <img className="w-[110px]" src={joinImg} alt="" />
          <p className="text-sm text-black-900 dark:text-white-900 text-center">
            Create your tutor account and kickstart your teaching career today.
          </p>
        </motion.div>

        <motion.p 
        className="text-black-900 dark:text-white-900 text-4xl rotate-90 md:rotate-0"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        >
          <FaArrowRightLong />
        </motion.p>

        <motion.div 
        className="w-[200px] flex flex-col justify-center items-center space-y-5"
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        >
          <img className="w-[110px]" src={uploadCourse} alt="" />
          <p className="text-sm text-black-900 dark:text-white-900 text-center">
            Easily upload courses in the subjects you’re best.
          </p>
        </motion.div>

        <motion.p 
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-black-900 dark:text-white-900 text-4xl rotate-90 md:rotate-0"
        >
          <FaArrowRightLong />
        </motion.p>

        <motion.div 
        className="w-[200px] flex flex-col justify-center items-center space-y-5"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        >
          <img className="w-[110px]" src={earnMoney} alt="" />
          <p className="text-sm text-black-900 dark:text-white-900 text-center">
            Start earning every time a student enrolls.
          </p>
        </motion.div>
      </div>
      <div className="flex justify-center mt-[30px] md:mt-[70px]">
        <motion.button
          className="py-1 md:py-2 px-8 rounded-full bg-light-blue-500 text-white-900 font-[500] cursor-pointer text-sm"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          onClick={() => navigate("/tutor/register")}
        >
          Join
        </motion.button>
      </div>
    </div>
  )
}

export default TutotLandingInstruction
