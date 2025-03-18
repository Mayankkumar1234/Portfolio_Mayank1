import React, { useContext } from 'react'
import contactImg from '../Images/Contact-us-banner.png'
import { AiFillMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { themeContext } from './ThemeContext';
import  { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
const Contact = () => {

    const {themeVal}  = useContext(themeContext);
    console.log(themeVal)
   
  const icons =[{logo :FaLinkedin,link:"https://www.linkedin.com/in/mayank-kumar-974450280/"},{logo:FaInstagramSquare,link:"https://www.instagram.com/mayank_prajapati73/?hl=en"},{logo:FaFacebook,link:"https://t.me/Mayankkumar63"},{logo:FaTelegramPlane,link:"https://t.me/Mayankkumar63"}]
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, {
        publicKey: `${process.env.REACT_APP_PUBLIC_KEY}`,
      })
      .then(
        () => {
          toast.success("Email has sent successfully , Thankyou!!",{
            position:"top-right",
            autoClose:5000,
             theme:"light"
          });
          e.target.reset()
          
        },
        (error) => {
        toast.error("Please write it again");
        console.log(error)
        },
      );
 

  };

  // /
  return (
    <div className={`w-full h-full pt-[12vh] text-center bg-${themeVal=="light"?"white":"[#131417]"} `}>
      <h1 className={`pt-6 font-bold text-4xl text-${themeVal=="light"?"black":"white"} `}>Contact <span className='text-[#7303A7]'>Me</span></h1>
      <div className={`flex pt-6 mt-6 mx-auto items-center justify-between w-[80%] h-[70%] rounded-lg bg-white shadow-2xl mb-12  `}>
        <img className='ml-[-5vw] hidden sm:hidden md:block' style={{width:"55%", height:"40%"}} src={`${contactImg}`} alt="" />
        <div className={`md:ml-24 mx-auto `}>
          <form ref={form} className={`w-full flex flex-col gap-3 mr-[20vw] pb-4 `} onSubmit={sendEmail}>
            <div className='flex py-2 px-3  w-[90%] items-center border-[1px] rounded border-black'> <FaUser /> <input placeholder='Name' name='user_name' className='outline-none w-[90%] px-3' type="text" /></div>
            <div className='flex py-2 px-3 w-[90%] items-center border-[1px] rounded border-black'> <MdEmail/> <input placeholder='Email' name='user_email' className='outline-none w-[90%] px-3' type="text" /></div>
            {/* <div className='flex py-2 px-3 w-[90%] items-center border-[1px] rounded border-black'><IoCall /> <input placeholder='Phone' className='outline-none w-[90%] px-3' type="text" /></div> */}
            <div className='flex py-2 px-3 w-[90%] border-[1px] rounded border-black'> <AiFillMessage /> <textarea rows="3" name='message' className='outline-none w-[90%] pl-3' placeholder='Message' ></textarea></div>
             <input className='bg-[#7303A7] w-[30%] text-white font-semibold text-lg rounded  py-1 ml-[60%]' value="send" type="submit" />
          </form>
        </div>
      </div>
       <div className='w-full flex flex-col items-center justify-center bg-[#00012B]'>
       <div className='flex gap-3 pt-4 pb-6'>
        {
          icons.map((Icon,idx)=>(
            <span key={idx} className=' bg-white px-2 py-2 text-xl rounded-2xl'> <a  href={Icon.link}> <Icon.logo className='text-[#00012B]' /></a> </span>
          ))
        }
      
       </div>
       <hr className='w-[90%]' />
       <div className='pt-4 pb-4 flex flex-col gap-1 font-large'>
       <p className="flex items-center text-white gap-1" > <AiOutlineCopyrightCircle /> Copyright. All rights reserved. </p>
      
       <p className='text-white'>Designed  by Mayank kumar</p>
       </div>
       </div>
       <ToastContainer
        position='top-right'
        theme="light"  
       />
    </div>
  )
}

export default Contact
