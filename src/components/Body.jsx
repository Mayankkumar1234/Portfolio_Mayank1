import Home from "./Home"
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Skill from "./Skill"
import {Routes,Route} from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { themeContext } from "./ThemeContext"
import logo from '../Images/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";

const Body = () => {


  const [padding, setPadding] = useState(false)
 const {toggleHandler, themeVal} = useContext(themeContext)
 const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const functionalityHandler =()=>{
    setIsVisible(!isVisible);
    setPadding(!padding)
  }

  return (
 
  
   < >
   <div  className={`flex gap-6 justify-around w-full  py-5 shadow-lg relative sm:w-screen sm:absolute md:absolute z-10 sm:flex  md:flex md:justify-between  md:items-center md:w-[99vw] bg-${themeVal==="light"?"white":"[#222221]"} `}>
         <img className="ml-4 sm:block w-24 g-2 md:w-32 h-12 relative right-[40vw] md:relative md:top-[2vh] md:left-[0%] top-[60vh]" src={logo} alt="" />
          <div className="flex sm:flex sm:justify-center sm:items-center md:flex md:items-center md:justify-between md:flex-row-reverse md:w-[50%] justify-center gap-2 items-center px-12 mr-36">
          <div className={`flex flex-col items-center justify-center sm:gap-1 md:gap-12  md:flex-row md:items-center pl-6 absolute left-[30vw] top-[6vh] sm:relative md:absolute`}>
          <span className={`block w-[5vw]  sm:hidden md:hidden relative md:relative md:left-[0%] left-[30vw]  ${padding ? 'pr-[20px]' : ''}`} onClick={functionalityHandler}><RxHamburgerMenu /></span>
            <div className={`w-[40vw] md:w-[50vw]  pl-32 md:pl-2 sm:flex gap-8 md:flex  md:relative md:gap-12 text-${themeVal=="light"?"black":"white"}`}>
            <NavLink  className= {({isActive})=>`pr-12 md:pr-0  font-semibold pt-1 md:pt-0 text-lg ${isActive ? 'text-red-500 border-b-[2px]  border-red-900':''} ${isVisible?"block":"hidden"} sm:block md:block relative left-[18vw] md:mt-0 mt-4 `} to='/'>Home</NavLink>
         <NavLink  className= {({isActive})=>`md:pr-0  pr-12  font-semibold pt-1 md:pt-0 text-lg ${isActive ? 'text-red-500 border-b-[2px] border-red-900':''} ${isVisible?"block":"hidden"} sm:block md:block relative left-[18vw] pr-16`} to='/skills'>Skills</NavLink>
         <NavLink className= {({isActive})=>`md:pr-0 pr-12  font-semibold pt-1 md:pt-0 text-lg ${isActive ? 'text-red-500 border-b-[2px] border-red-900':''} ${isVisible?"block":"hidden"} sm:block md:block relative left-[18vw] `} to='/project' >Projects</NavLink>
         <NavLink className= {({isActive})=>`md:pr-0 pr-12  font-semibold pt-1 md:pt-0 text-lg  ${isActive ? 'text-red-500 border-b-[2px] border-red-900':''} ${isVisible?"block":"hidden"} sm:block md:block relative pr-6 left-[18vw]`} to='/contact'>Contact me</NavLink>
            </div>
           </div>
          
        
          </div>
   </div>
   
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/skills' element={<Skill />} />
   <Route path='/project' element={<Project />} />
   <Route path='/contact' element={<Contact />} />
</Routes>
   </>
  )
}

export default Body;


//#330066
