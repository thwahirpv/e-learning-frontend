import React from "react";
import { motion } from "framer-motion";
import joinImg from "../../assets/image/join.png";
import searchCourseImg from "../../assets/image/search_course.png";
import enrollCourseImg from "../../assets/image/enroll_course.png";
import { FaArrowRightLong } from "react-icons/fa6";

const UserLandingInstruction = () => {
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
      <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-[80px] py-[45px]">
        <motion.div 
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-[200px] flex flex-col justify-center items-center space-y-5"
        >
          <img className="w-[110px]" src={joinImg} alt="" />
          <p className="text-sm text-black-900 dark:text-white-900 text-center">
            Create your account and step into a world of exciting learning
            opportunities.
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
          <img className="w-[110px]" src={searchCourseImg} alt="" />
          <p className="text-sm text-black-900 dark:text-white-900 text-center">
            Quickly find the right course to boost your skills and career.
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
          <img className="w-[110px]" src={enrollCourseImg} alt="" />
          <p className="text-sm text-black-900 dark:text-white-900 text-center">
            Enroll in a course and begin your learning journey today.
          </p>
        </motion.div>
      </div>
      <div className="flex justify-center mt-[30px] md:mt-0">
        <motion.button
          className="py-1 md:py-2 px-8 rounded-full bg-light-blue-500 text-white-900 font-[500] cursor-pointer text-sm"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          onClick={() => navigate("/register")}
        >
          Join
        </motion.button>
      </div>
    </div>
  );
};

export default UserLandingInstruction;
