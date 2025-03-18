import React, { useContext, useState } from 'react'
import weatherApp from '../Images/weatherApp.png'
import libraryManagementSystem from '../Images/libraryManagementSystem.webp';
import Netflix from '../Images/Netflix.png';
import Ecommerce from '../Images/Ecommerce.png'
import { themeContext } from './ThemeContext';


const Project = () => {

  const [textLength, setTextLength] = useState(false)
    const data =[{
      id:"01",
      name:"Weather App",
     pic:weatherApp,
     info:"In this project i have use HTML CSS And JavaScript used 'Google map Api' for google Map based on the city searched and  'Open Weather Api'  for Weather Information",
     lengthVal:120,

   },{
      id:"02",
     name:"LibraryManagementSystem",
     pic:libraryManagementSystem,
     info:"This is my MERN Stack project use React js and context Api for front End and  Used Node js , Express and MongoDB for backend . In Backend used Authentication for Sign up and login and used CRUD Operation for(get, adding , updating and delete the data)",
     lengthVal:120,
   },{
    id:"03",
     name:"Netflix Clone",
     pic:Netflix,
     info:"In this project i have use react js for ui and some functionality and redux for data , TMDB Api for movie data  and firebase for Authentication (Sign up and login)",
     lengthVal:120,
   },{
    id:"04",
     name:"E-commerce-App",
     pic:Ecommerce,
     info:"In this project i have use HTML CSS And JavaScript to create this project added filter for product based on category used local storage to store product data and user id and password",
     lengthVal:120,
   }] 
        const {themeVal}  = useContext(themeContext)
   
   const [project, setProject]  =  useState(data)
     const projectHandler =(idx)=>{
      // console.log(id)
      setTextLength(!textLength)
       
     let updatedData = project.map((item)=> item.id==idx?{...item, lengthVal:item.lengthVal===120?600:120}:item)
       setProject(updatedData)
    }
  return (
    <div className={`w-[100vw] md:pt-28 text-center bg-${themeVal=="light"?"white":"[#131417]"}`}>
      <h1 className={`font-bold text-2xl pt-6 pb-6 text-${themeVal=="light"?"black":"white"}`}>Project's Page</h1>
     <div className='md:grid grid gap-4 md:grid-rows-2 md:grid-cols-2 md:gap-4  pl-12'>
     {
        project && project?.map(item=>(
          <div className={`md:w-[90%] bg-slate-100 md:px-6 shadow-lg flex items-center flex-col md:flex md:justify-center md:items-center md:flex-col rounded-md "} `}>
             <p className='md:pb-3 pt-3 pb-3 md:font-semibold md:text-lg'>{item.name}</p>
            <img className='w-[78%] hover:scale-110' src={item.pic} alt="" />
           <p  className='px-16 md:px-12 pt-3 font-semibold cursor-pointer' onClick={()=> projectHandler(item.id)}  >{item.info.length>item.lengthVal? <span  >{item.info.slice(0,120)+"..."}</span> :<span>{item.info}</span>}</p>
          </div>
        ))
      }
     </div>

     <div>

     </div>
    </div>
  )
}

export default Project
