import { legacy_createStore } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";


const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light')

    // Root html element 
    const element = document.documentElement

    // System theme reference
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

    // Theme apply abstraction 
    const applyTheme = (mode) => {
        if(mode == 'dark'){
            element.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }else if(mode == 'light'){
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }else if(mode == 'system'){
            darkQuery.matches ? element.classList.add('dark') : element.classList.remove('dark')
            localStorage.setItem('theme', 'system')
        }
        else{ 
            element.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    // For choosing mode when window load 
    const onWindowLoad = () => {
        if(localStorage.theme == 'dark') {
            applyTheme('dark')
        } 
        else if(localStorage.theme == 'system'){
            applyTheme('system')
        }else{
            applyTheme('light')
        }
    }

    useEffect(() => {
        onWindowLoad()
    }, [])

    // Handling theme state change
    useEffect(() => {
        switch(theme) {
            case "dark": 
                applyTheme('dark')
                break
            case "light": 
                applyTheme('light')
                break
            case "system":
                applyTheme('system')
                break
            default: 
                onWindowLoad()  
                break         
        }
    }, [theme])

    useEffect(() => {
        const onSystemModeChange = (e) => {
            if(localStorage.theme == 'system'){
                if(e.matches) {
                    element.classList.add('dark')
                }else{
                    element.classList.remove('dark')
                }
                localStorage.setItem('theme', 'system')
            }
        }

        darkQuery.addEventListener('change', onSystemModeChange)

        return () => {
            darkQuery.removeEventListener('change', onSystemModeChange)
        }
    }, [])

    return [theme, setTheme]
}

export default useTheme