import React from 'react'
import { FaUser } from "react-icons/fa";

const About = () => {
  return (

    <>
    <div className='w-full pt-24'>
       <div className='flex items-center justify-center'>
        <h2 className='flex font-bold text-4xl items-center'> <span className='pr-2'><FaUser /></span> About <span className='text-[#7303A7] pl-2' >Me</span> </h2>
       </div>
    </div>
    </>
  )
}

export default About
