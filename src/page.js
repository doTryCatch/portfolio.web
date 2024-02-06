import React,{useState} from 'react'
import Contact_info from "./jsonFIle/contact"
import  Hobby from "./image/hobby.png"
import DropDown from "./image/dropdown.png"
import Insta from "./image/Insta.png"
import Github from "./image/Github.png"
import About from "./components/about"

function Page() {
  const [dropdown,setDropDown]=useState(false)
 const handleClick=()=>{
  dropdown==false?setDropDown(true):setDropDown(false) 
 }
  return (
    <div className="page center   w-full h-full  ">
   <div className="container  w-[95%] md:space-x-10  space-y-4">
    <div className="profile  w-full color my-5 text-white rounded-3xl ">
        <div className="showContact  flex justify-end">
            <div className="buttonDiv rounded-tr-3xl  rounded-bl-2xl h-8 center w-10 " onClick={handleClick}>
            <p className='text-[16px] text-yellow-300 rotate-90 h-10 w-10 hidden'> {`>`} </p>
            <img src={DropDown} alt="" className='w-6 h-6'/>
            </div>
           
        </div>
        <div className="profile-container   w-[90%]">
        <div className="profile-content-area center  -my-5 mb-3 ml-4 h-28">
        <div className="container   space-x-4 flex">
        <div className="img rounded-3xl  center  h-[90px] w-[90px]" >
         <img src={Hobby} alt="" className='w-'/>
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


       <div className={dropdown==false?'hidden ':'block '}>
       <div className='center '>
       <hr className='w-[90%] ' />
       </div>
   
     <div className={dropdown ? 'contact-info center  animate-fadeout' : '  hidden animate-fadeout'}>
    
    
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
      <div className="container w-[90%] my-4">
<About/>
</div>
    </section>
    </div>
     </div>
  )
}

export default Page