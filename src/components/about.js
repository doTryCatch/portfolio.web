import React from 'react'
import MarkdownReader from '../utils/MarkDownReader';
import {Doing} from "../jsonFIle/contact"
// import Mobile from "../image/Phone.png"

function About() {
 
  return (
   <div className="about font-sans font-medium space-y-4 ">
    <h1 className='h1 text-[30px]'>About Me</h1>
    <div className="yellow-line h-1 w-10  bg-yellow-500 rounded-3xl">
    </div>
    <div className="contnt text-gray-400 ">
    <MarkdownReader filePath={"/aboutme.md"} />
    </div>
    <div className="current-status space-y-6 ">
    <h1 className='h1 text-[25px] '>What i'm Doing</h1>
   
      {Object.values(Doing).map((val,index)=>(
         <div className="container-box center color2 rounded-xl"key={index}>
        <div className="box w-[90%] mb-5 space-y-2 text-gray-400"  >
            <div className=" center h-16">
            <img src={val["img"]} alt="" className='w-12 h-12'/>
            </div>
            <div className="head text-center">
            <h1 className='text-gray-200 text-[16px]'>{val["heading"]}</h1>
            </div>
            <div className="discriptions text-center ">
            <p>{val["content"]}</p>
            </div>
            </div>
            </div>


      ))}
        


      
 
    </div>
 
   </div>
  )
}

export default About