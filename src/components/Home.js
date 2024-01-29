import React ,{useState,useRef,useEffect}from 'react'
import Peacock from "../image/peacock.png"
import SKill from "../image/skill.png"
import Qualification from "../image/qualification.png"
import Project  from "../image/projects.png"
import About from "../image/about.png"
import Hobby from "../image/hobby.png"


function Home() {
 const [menu,setMenu]=useState(false)

 const hanldeClick=()=>{
  setMenu(menu==false? true : false)



 }

  return (
   <section className="home">
    <div className=" h-[100vh]">
     
    <canvas className="canva  bg-transparent fixed " >
  

</canvas>

  <div className="nav-area w-full center bg-slate-800 ">
    <div className="nav_elem my-8  bg-transparent">
    <ul className='center '>
    
   
    <li className= {menu?" center translate-y-2  translate-x-[75px] -z-1 h-10 w-10 opacity-[100%]":" opacity-0 absolute h-10 w-10 "}> <img src={About} alt=""  className='w-full'/></li>
    <li className={menu?" center translate-y-14 translate-x-12  -z-1  h-10 w-10 opacity-[100%]":" opacity-0 absolute -z-1  h-10 w-10  "}> <img src={Project} alt=""  className='w-full'/></li>
  
    <li className={menu?"center translate-y-20 -z-1  h-10 w-10  opacity-[100%]":" opacity-0 absolute -z-1 h-10 w-10 "}> <img src={SKill} alt=""  className='w-full'/></li>
    <li className={menu?" center translate-y-14 -translate-x-12  -z-1  h-10 w-10 opacity-[100%]":" opacity-0 absolute -z-1  h-10 w-10 "}> <img src={Hobby} alt=""  className='w-full'/></li>
    <li className={menu?" center translate-y-2 -translate-x-[75px] -z-1  h-10 w-10 opacity-[100%]":" opacity-0 absolute -z-1  h-10 w-10 "}> <img src={Qualification} alt=""  className='w-full'/></li>
    <li className="home center scale-150 ">
      <div className="img center">
      <img src={Peacock} alt=""  className='w-10 ' onClick={hanldeClick}/>
      </div>
     
    </li>
  </ul>
    </div>
   
  
   
  </div>
  <div className="home-front-view bg-black h-[50vh]">
      <h1>this is portfolio website</h1>
    </div>
   
 
  </div> 
 
    
    
   

   </section>
  )
}

export default Home