import React from "react";
import { useNavigate } from "react-router-dom";
import userIntroImg from "../../assets/image/user_intro.png";
import { motion } from "framer-motion";
import UserNavBar from "./UserNavBar";

const UserIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-tr from-gray-50 from-0% to-blue-200 to-100% dark:bg-gradient-to-tr dark:from-dark-blue-100 dark:from-0% dark:to-dark-blue-800 dark:to-100%">
      <UserNavBar />

      <div className="flex md:flex-row flex-col-reverse mt-[30px] overflow-hidden px-[10px] md:px-[30px] pb-[50px]">
        <motion.div
          className="w-[100%] md:w-[50%] flex flex-col justify-center items-center"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-8">
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <h1 className="text-[17px] text-center md:text-start md:text-3xl font-bold text-[#c464c3]">
                Start Your Learning Adventure{" "}
                <span className="text-light-blue-500 dark:text-light-blue-700">
                  with Us!
                </span>
              </h1>
              <p className="w-[250px] md:w-[500px] text-[11px] md:text-[14px] text-center md:text-start font-medium text-gray-700 dark:text-white-900">
                Explore courses you love, learn at your pace, and build your
                future—anytime, anywhere. Your journey starts here.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                className="py-1 md:py-2 px-8 rounded-full bg-light-blue-500 text-white-900 font-[500] cursor-pointer text-sm"
                onClick={() => navigate("/register")}
              >
                Join
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-[100%] md:w-[50%] flex justify-start"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src={userIntroImg}
            className="w-[800px]"
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
      </div>
    </div>
  );
};

export default UserIntro;
