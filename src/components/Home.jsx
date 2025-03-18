import image from '../Images/change-background-color.jpg'
import blackBg from '../Images/black-bg.jpg'
// import {  } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import { themeContext } from './ThemeContext';
import { useRef } from 'react';
import {gsap} from "gsap"
import { useGSAP } from "@gsap/react";

import { redirect, useNavigate } from 'react-router-dom';
const Home = () => {

   const {themeVal} = useContext(themeContext)
   const textRef = useRef(null);
  const Navigate = useNavigate()
       
      useGSAP(()=>{
        const textElements = textRef.current.children; 

        gsap.timeline({ repeat: -1 }) // Infinite loop
          .to(textElements[0], { opacity: 1, y: 0, duration: 1 }) // Show Frontend
          .to(textElements[0], { opacity: 0, y: -20, duration: 1, delay: 1 }) // Hide Frontend
          .to(textElements[1], { opacity: 1, y: 0, duration: 1 }) // Show Backend
          .to(textElements[1], { opacity: 0, y: -20, duration: 1, delay: 1 }) // Hide Backend
          .to(textElements[2], { opacity: 1, y: 0, duration: 1 }) // Show Full Stack
          .to(textElements[2], { opacity: 0, y: -20, duration: 1, delay: 1 }); // Hide Full Stack
      })
  

  return (
    <div className={`w-screen h-full flex flex-col-reverse justify-center items-center mx-auto sm:flex sm:flex-col-reverse sm:items-center sm:justify-center items md:left-[0%]  md:flex md:justify-between md:items-center md:pr-16 md:flex-row   pb-24  absolute top-[0vh] md:h-full md:top-[5%]  bg-${themeVal=="light"?"white":"[#131417]"}`}>
   <div className='md:pl-6  pl-2 pt-2 w-full md:pt-16 md:w-[45%]'>
   <h1 className={`font-bold pb-2 text-3xl sm:text-4xl md:text-6xl text-${themeVal=="light"?"black":"white"}`}>Hi There</h1>
    <h1 className={`font-bold text-3xl sm:text-4xl md:text-6xl md:w-[45vw] md:pt-3 pb-2 text-${themeVal=="light"?"black":"white"}`} >I'm Mayank <span className={`font-bold text-3xl text-orange-500  text-2xl sm:text-4xl md:text-6xl`}>kumar</span></h1>
    <div ref={textRef}  className={` w-[70vw] md:pt-4 font-bold text-xl sm:text-xl md:text-4xl pt-2 overflow-hidden text-${themeVal=="light"?"black":"white"}`}>I am <span   className="md:pl-4 pl-2 absolute opacity-0 font-bold text-xl sm:text-xl md:text-4xl text-red-700">Full Stack Developer</span>
    <span   className="md:pl-4 pl-2 absolute opacity-0 font-bold text-xl sm:text-xl md:text-4xl text-red-700">Frontend Developer</span>
    <span   className="md:pl-4 pl-2 absolute opacity-0 font-bold text-xl sm:text-xl md:text-4xl text-red-700">Backend Developer</span>
     </div>

    <div className='flex gap-6 pb-8 md:gap-16 pt-12 justify-center items-center'>
    <button  className='bg-blue-700  flex justift-center items-center px-6 py-2 rounded-3xl gap-2 text-white font-semibold text-lg' >
      View Skills </button>
     <button> <a
      href="/Resume.pdf"
      download="Resume.pdf"
      className="bg-blue-700  flex justift-center items-center px-6 py-2 rounded-3xl gap-2 text-white font-semibold text-lg"
    >  Download Resume
    </a></button>
    </div>
   </div>
   <div className='justify-center md:w-[50%] items-center w-full pb-4 pl-12 md:pl-24 mb-12 md:mt-[-0%]'>
      <img className='bg-black flex justify-center items-center mt-32 h-[70%] w-[70%]    sm:w-[60%] sm:h-[60%]  md:w-[80%] md:h-[80%] relative top-[12%]'  src={`${themeVal?image:blackBg}`} alt="" />
   </div>
   </div>
  )
}

export default Home
