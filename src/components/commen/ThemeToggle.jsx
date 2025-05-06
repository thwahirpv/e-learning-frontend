import React, { useEffect, useState } from "react";
import useTheme from "../../hook/useTheme";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdMonitor } from "react-icons/md";
import { isRejected } from "@reduxjs/toolkit";

const ThemeToggle = () => {
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    console.log('its from useEffect:', isThemeModalOpen)
  }, [isThemeModalOpen])
  const handleToggle = (mode) => {
    setTheme(mode)
    setIsThemeModalOpen(!isThemeModalOpen);
  };

  return (
    <div className="">
      <div
        className={`relative w-fit ${
          isThemeModalOpen ? "overflow-visible" : "overflow-hidden"
        }`}
      >
        <div className="p-3 rounded-md transition-all duration-300 bg-white-900 cursor-pointer" onClick={() => setIsThemeModalOpen(!isThemeModalOpen)}>
          {theme === "light" && <MdOutlineLightMode />}
          {theme === "dark" && <MdOutlineDarkMode />}
          {theme === "system" && <MdMonitor />}
        </div>

        <ul className={`absolute p-0.5 mt-1 bg-white-900 transition-all duration-300 ease-in-out rounded-md space-y-0.5 ${isThemeModalOpen ? "translate-y-0 opacity-100 pointer-events-auto z-50" : "translate-y-2 opacity-0 pointer-events-none z-0"} `}>
          <li className={`p-2.5 rounded-md cursor-pointer hover:bg-light-blue-100 ${theme == 'light' ? 'bg-light-blue-300' : 'bg-white-900'}`}
          onClick={() => handleToggle('light')}>
            <MdOutlineLightMode />
          </li>
          <li className={`p-2.5 rounded-md cursor-pointer hover:bg-light-blue-100 ${theme == 'dark' ? 'bg-light-blue-300' : 'bg-white-900'}`}
          onClick={() => handleToggle('dark')}>
            <MdOutlineDarkMode />
          </li>
          <li className={`p-2.5 rounded-md cursor-pointer hover:bg-light-blue-100 ${theme == 'system' ? 'bg-light-blue-300' : 'bg-white-900'}`}
          onClick={() => handleToggle('system')}>
            <MdMonitor />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThemeToggle;
