import React,{useState} from 'react'
import {Contact_info} from "./jsonFIle/contact"
import  Hobby from "./image/hobby.png"
import DropDown from "./image/dropdown.png"
import Insta from "./image/Insta.png"
import Github from "./image/Github.png"
import About from "./components/about"
import Contact from './components/contact'
import Portfolio from './components/portfolio'
import Project from './components/project'

function Page() {
  const [dropdown,setDropDown]=useState(false)
  const [path,setPath]=useState("About")
  const navigate=(e)=>{
setPath( e.currentTarget.getAttribute('value'))

  }
 const handleClick=()=>{
  dropdown===false?setDropDown(true):setDropDown(false) 
 }
  return (
    <section className="body">


    <div className="navbar bottom-0  w-full bg-gray-500 rounded-tl-xl rounded-tr-xl h-14 fixed center">
    <ul className='flex space-x-6 text-[15px] text-white'>
      <li onClick={navigate} value={"About"}>About</li>
      <li onClick={navigate} value={"Resume"}>Resume</li>
      <li onClick={navigate} value={"Project"}>Projects</li>
      <li onClick={navigate} value={"Contact"}>Contact</li>
    </ul>

  </div>
    <div className="page center   w-full h-full ">
    
   <div className="container md:flex w-[95%] md:space-x-10  space-y-4">
    <div className="profile  w-full md:w-[30%] color my-5 text-white rounded-3xl ">
        <div className="showContact  flex justify-end md:hidden">
            <div className="buttonDiv rounded-tr-3xl  rounded-bl-2xl h-8 center w-10 " onClick={handleClick}>
            <p className='text-[16px] text-yellow-300 rotate-90 h-10 w-10 hidden'> {`>`} </p>
            <img src={DropDown} alt="" className='w-6 h-6'/>
            </div>
           
        </div>
        <div className="profile-containerw-[90%] md:w-full">
        <div className="profile-content-area center md:block   -my-5 md:my-0 mb-3 ml-4 md:ml-0 md:mb-0 h-28 md:h-[60vh]">
        <div className="container   space-x-4  md:block flex ">
          <div className="img-container center  md:w-full   md:h-[40vh]">
          <div className="img rounded-3xl  center h-[100px] md:w-[130px] md:h-[130px] w-[100px]" >
         <img src={Hobby} alt="" />
       </div>
          </div>
        
       <div className="info center">
        <div className="info-container space-y-3 ">
       <div className="name text-bold text[14px] ">
        <h1>Roshan Kumar Patel</h1>
       
       </div>
       <div className="occupation center text-[13px] rounded-lg">
        <p>Developer</p>
       </div>
       </div>
       </div>
        </div>
    

     </div>
 
        </div>


       <div className={dropdown===false?'hidden md:block':'block '}>
       <div className='center '>
       <hr className='w-[90%] ' />
       </div>
   
     <div className={dropdown ? 'contact-info center  ' : '  hidden  md:block '}>
    
    
<div className='container w-[90%] space-y-3 my-5'>
     {Object.keys(Contact_info).map((elem,index)=>(

<div className="flex   space-x-4" key={index}>
<div className="img-area center rounded-xl color w-9">
<img src={Contact_info[elem]["img"]} alt="" className='w-4 h-4' />

</div>
<div className="text_area ">
  <div className="text-container ">
<div className="email text-[11px] text-gray-500">{elem.toUpperCase()}</div>
<div className="email-contenttext text-[14px]">
  <p>{Contact_info[elem]["content"]}</p>
</div>
</div>
</div>
</div>
     ))}
       
    
       </div>
     </div>
     {/*  next line  */}
     <div className='center my-2'>
       <hr className='w-[90%] ' />
       </div>

      {/* meida area */}
     <div className="social-media center">
    
 <div className="media-container w-[90%] flex m-6 space-x-3 ">
 
  <div className="insta">
    <img src={Insta} alt=""className='w-6 h-6' />
  </div>
  <div className="github">
      <img src={Github} alt="" className='w-6 h-6'/>
  </div>
 </div>
     </div>
 
     </div> 
    </div>
    <section className="body color center rounded-3xl">
      <div className="container w-[90%] md:[75%] my-4">

{path==="About"&& <About/>}
{path==="Project"&& <Project/>}
{path==="Contact" && <Contact/>}
{path==="Resume"&& <Portfolio/>}
</div>
    </section>
    </div>
     </div>
     </section>
  )
}

export default Page