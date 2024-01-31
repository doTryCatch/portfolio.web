import React, { useState, useRef, useEffect } from "react";
import Peacock from "../image/peacock.png";
import SKill from "../image/skill.png";
import Qualification from "../image/qualification.png";
import Project from "../image/projects.png";
import About from "../image/about.png";
import Hobby from "../image/hobby.png";
import Hacker from "../image/hacker.png";
import { CLI_MENU, data ,info} from "../jsonFIle/CLI";

function Home() {
  const [menu, setMenu] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [command, setCommand] = useState([]);
  const [current_dir, setDir] = useState(data.portfolio);
  const [path,setPath]=useState(['portfolio'])
  const [pathStr,setPathStr]=useState("portfolio")
  const [output, setOutput] = useState([]);
  const [Info,setInfo]=useState({})


const readFileInfo=()=>{
  setInfo(info[command[1]])


}
  
  const changeDir=()=>{
    setOutput([])
    if(current_dir[command[1]] && typeof current_dir[command[1]]==='object'){
      setDir(current_dir[command[1]])
      setPath([...path,command[1]])
    }
  }
  // code for keep track of path
 

  // to list the element of particular directory
  const listDir=()=>{
    let arr=[]
    for(const all in current_dir){
      
      arr.push(all)
    }
    setOutput(arr)
  } 
const goBackToPreviousDir=()=>{
  let obj=data
  if (path.length>1){
    path.pop()
  } 
  let newarr=path

  setPath(newarr)

  let str=""
  for (const iterator of path) {
    str+="/"+iterator
    obj=obj[iterator]
   }
  
   setPathStr(str)
   setDir(obj)
  

}
useEffect(()=>{
  let str=""
  for (const iterator of path) {
    str+="/"+iterator
   }
   
   setPathStr(str)

},[path,pathStr])

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setCommand(event.target.value.split(" "));
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        switch (command[0]) {
          case "cd":
            

            if(command[1].includes(".txt")){
              setOutput(["this is not a directory"])
            }else{
              changeDir()
            }
            break;
          case "ls":
            listDir();  
            break;
          case "..":
            goBackToPreviousDir();
            break;

          case "nano"||"vim"||"open":
           
            if(!command[1].includes(".txt")){

              setOutput([" This is not a file type!!"])
            }else{
              
              readFileInfo()
              console.log(Info)
            }
            break;
          default:
            setOutput(["syntax error"]);
        }
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      // Cleanup event listener when component unmounts
      window.removeEventListener("keydown", handleKeyDown);
    };
  
  }, [command,readFileInfo,changeDir,listDir]);
  



  // for scroll with in terminal in case of more input appear
  const autoExpand = (element) => {
    const maxHeight = 600;
    element.style.height = "auto";
    element.style.height = Math.min(element.scrollHeight, maxHeight) + "px";
  };

  const hanldeClick = () => {
    setMenu(menu == false ? true : false);
  };

  const drawText = (txt) => {
    if (txt.length - 1 > index) {
      // console.log(text)
      setTimeout(() => {
        setText(text + txt[index]);
        setIndex(index + 1);
      }, 100);
    }
  };
  window.onload = drawText(" hi this is roshan patel");

  return (
    <section className="home ">
      <div className=" h-[100vh]">
        <div className="nav-area w-full center ">
          <div className="nav_elem my-8  bg-transparent">
            <ul className="center ">
              <li
                className={
                  menu
                    ? " center translate-y-2  translate-x-[75px] -z-1 h-10 w-10 opacity-[100%]"
                    : " opacity-0 absolute h-10 w-10 "
                }
              >
                {" "}
                <img src={About} alt="" className="w-full" />
              </li>
              <li
                className={
                  menu
                    ? " center translate-y-14 translate-x-12  -z-1  h-10 w-10 opacity-[100%]"
                    : " opacity-0 absolute -z-1  h-10 w-10  "
                }
              >
                {" "}
                <img src={Project} alt="" className="w-full" />
              </li>

              <li
                className={
                  menu
                    ? "center translate-y-20 -z-1  h-10 w-10  opacity-[100%]"
                    : " opacity-0 absolute -z-1 h-10 w-10 "
                }
              >
                {" "}
                <img src={SKill} alt="" className="w-full" />
              </li>
              <li
                className={
                  menu
                    ? " center translate-y-14 -translate-x-12  -z-1  h-10 w-10 opacity-[100%]"
                    : " opacity-0 absolute -z-1  h-10 w-10 "
                }
              >
                {" "}
                <img src={Hobby} alt="" className="w-full" />
              </li>
              <li
                className={
                  menu
                    ? " center translate-y-2 -translate-x-[75px] -z-1  h-10 w-10 opacity-[100%]"
                    : " opacity-0 absolute -z-1  h-10 w-10 "
                }
              >
                {" "}
                <img src={Qualification} alt="" className="w-full" />
              </li>
              <li className="home center scale-150 ">
                <div className="img center">
                  <img
                    src={Peacock}
                    alt=""
                    className="w-10 "
                    onClick={hanldeClick}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="home-front-view flex h-[80%] ">
          <div className="gui-interface w-[60%] bg-slate-500 "></div>

          <div className="terminal text-green-500  w-[40%]">
            <div className="input bg-transparent">
              <h1>┌──(one㉿Ra)-[~/{pathStr}]</h1>
              <h1 className="flex">
                └─${" "}
                <textarea
                  id="autoExpandInput"
                  value={inputValue}
                  onChange={handleInputChange}
                  onInput={(e) => autoExpand(e.target)}
                  className=" bg-transparent outline-none w-[100%] text-white border-none resize-none"
                />
              </h1>
            </div>
            <div className="output-area bg-transparent rid grid-cols-4 gap-2">
             
             
                   { Object.keys(Info).forEach((key, index) => {
                      return (<div key={index} className="">
                        <p>{key}:</p>
                        <p>{Info[key]}</p>
                      </div>
                   )})
                   }
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
