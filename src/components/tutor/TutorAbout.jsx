import React from 'react'
import { motion } from 'framer-motion'
import tutorIntro from '../../assets/image/tutor_intro.png'

const TutorAbout = () => {
  return (
    <div className="flex flex-col justify-center mt- space-y-3 overflow-hidden border-t py-[45px] border-gray-700 dark:border-light-blue-100 px-[10px] md:px-[30px]">
      <motion.h1
        className="text-3xl font-bold text-gray-700 dark:text-white-900 text-center"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        We are
      </motion.h1>
      <div className="w-full flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        <motion.div
          className="w-[100%] md:w-[50%] flex justify-start"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            className="w-[550px]"
            src={tutorIntro}
            alt=""
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <motion.div
          className="w-[100%] md:w-[50%] flex justify-start items-center px-[10px]"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="w-[500px] text-[16px] text-center md:text-start text-gray-700 dark:text-white-900 leading-relaxed mb-0 md:mb-[25px]">
            Join our growing community of passionate tutors!
            Easily upload your courses, notes, and assignments — and start earning when students enroll in your content.
            Whether you're a seasoned educator or just starting out, this is your chance to teach, inspire, and earn.
            Start your teaching journey today!
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default TutorAbout
