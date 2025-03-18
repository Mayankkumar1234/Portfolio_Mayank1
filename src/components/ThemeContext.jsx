import React, { createContext, useState } from 'react'

 export  const themeContext =  createContext()
const ThemeContext = ({children}) => {
    let bgTheme = localStorage.getItem("theme") || "light";
  const [themeVal, setThemeVal] = useState(bgTheme);
  const toggleHandler=()=>{
      let bgTheme =  themeVal =="light" ?"dark":"light";
     localStorage.setItem("theme",bgTheme);
     setThemeVal(bgTheme)
  }
 
  return (
    <themeContext.Provider value={{toggleHandler,themeVal}} >
      {children}
    </themeContext.Provider>
  )
}

export default ThemeContext;
