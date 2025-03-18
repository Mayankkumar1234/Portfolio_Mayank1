import React, { useContext } from 'react'
import chakra from '../Images/chakra.jpg'
import css from  '../Images/css.png'
import git from '../Images/git.png'
import express from  '../Images/Express.png'
import github from  '../Images/github.png'
import html from  '../Images/html.png'
import Javascript from  '../Images/Javascript.png' 
import  react from  '../Images/logo512.png'
import sql from  '../Images/Sql.png'
import  tailwind from '../Images/tailwind.png'
import  mongo from  '../Images/mongo.jpg'
import nodejs from '../Images/node.png'
import { themeContext } from './ThemeContext'
  

const Skill = () => {

  const {themeVal}  = useContext(themeContext)
let imgs =[{logo:chakra, tech:"Chakra UI"},{logo:css, tech:"Css"}, {logo:git, tech:"Git"}, {logo:express, tech:"Express"}, {logo:github, tech:"Github"}, {logo:html, tech:"HTML"}, {logo:Javascript,tech:"Js"},{logo:react,tech:"React"},{logo:sql, tech:"Sql"},{logo:tailwind, tech:"Tailwind"},{logo:mongo, tech:"Mongo Db"},{logo:nodejs, tech:"Node js"}]

  return (
  

<div className= {`md:pt-32 text-center pt-4 md:text-center w-full bg-${themeVal==="light"?"white":"[#131417]"}`}>
     
     <h1 className={`font-bold pt-4 pb-4 md:mt-[-20px] sm:mt-24  text-4xl text-${themeVal=="light"?"black":"white"} `}>Skills & <span className='text-[#F26B0F]'>Abilites</span></h1>
    <div className='flex md:mt-[-5vh] sm:justify-between sm:flex-row md:justify-between flex-col w-full md:flex-row '>
    <div className='sm:w-[50%] sm:mt-12 md:w-[44%] px-8  font-medium'>
      <h1 className={`text-${themeVal=="light"?"black":"white"} shadow-xl px-2 shadow-cyan-500/50 py-2`}>Hello everyone! My name is Mayank Kumar, and I’m a passionate Full Stack Web Developer. Throughout my journey, I’ve gained extensive hands-on experience working with a wide  of technologies that help me craft modern, high-performing web solutions. Here’s a quick overview of my technical expertise:
<br />
 <b>Front-end Development:</b>
<br />
JavaScript: I enjoy creating interactive and dynamic user interfaces using JavaScript, ensuring a seamless user experience.
<br />
React.js: I specialize in building component-based, maintainable front-end applications with React.js, making development scalable and efficient.
<br />
HTML & CSS: By writing clean and semantic HTML along with modern CSS, I design responsive layouts that work across all devices.
<br />
 <b>Back-end Development:</b>
<br />
Node.js: Leveraging the power of Node.js, I develop fast, scalable, and real-time back-end services.
<br />
Express.js: With Express.js, I build modular, well-structured APIs that serve as the backbone of my applications.
<br />
Databases:

MongoDB: I have extensive experience working with MongoDB, allowing me to store and manage data in a flexible, NoSQL structure.
<br />
 <b>Version Control & Deployment:</b>
<br />

Git: I use Git for effective version control, ensuring smooth collaboration and streamlined development processes.</h1>
     </div>
     <div className=' grid grid-rows-3 grid-cols-3 sm:grid-cols-2 sm:pt-4 sm:mt-4 md:grid-rows-3 md:grid-cols-4 shadow-lg mx-4 md:mr-16 px-6 py-3 rounded-md'>
       {
        imgs.map((item,index)=>(
          <div className='flex flex-col sm:w-[16vw] md:w-[10vw] bg-[#eff0ed] items-center justify-center mx-2 my-2 gap-3 px-2 py-1 rounded-md'>
        <img className='w-[75%] inline  ' src={`${item.logo}`} alt="" />
        <p className='font-semibold'>{item.tech}</p>
       </div>
        ))
       }
     </div>
    </div>
    </div>
  )
}

export default Skill
