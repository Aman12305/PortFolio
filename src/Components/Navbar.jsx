import React , {useState,useEffect} from 'react'
import './Css/Navbar.css'
import { ShowWindowDimensions,useWindowSize,scrollToElement } from './action/windowsize';
import { FaToggleOn,FaToggleOff} from "react-icons/fa";

export default function Navbar() {
    const [size,setSize] = useState([0,0]);
    useWindowSize(size,setSize);
    const [toggler,setToggler] = useState();
    const [logo,setLogo] = useState('hamburger');

    useEffect(()=>{
        if(size[0]>550)
        {
            setToggler("");
            setLogo('hamburger');
        }
        else if(logo==='hamburger')
        {
           setToggler("displaynone")
        }

    },[size,logo]);

    const  handletoggler = () => {
      if(logo==='hamburger')
      {
        setLogo('');
        setToggler('navigationsize');
      }
      else{
        setLogo('hamburger');
        setToggler('displaynone');
      }
        
    }

    const handleClick = (e)=>{
      scrollToElement(e.target.innerText);
      setLogo('hamburger');
    }

  return (
      <div className='topnav' id='Home'>
         {/* <div className='brand'>
   
         </div> */}
         <div className='hamburger' onClick={handletoggler}>
           {
            logo==='hamburger'?
            <FaToggleOn className='togglericon'/>
            :<FaToggleOff className='togglericon'/>
           }
         </div>
         <div className={`navigation ${toggler}`}>
           <p  id="nav_home" onClick={handleClick}>Home</p>
           <p  id="nav_about" onClick={handleClick}>About</p>
           <p  id="nav_skill" onClick={handleClick}>Skills</p>
           <p  id="nav_project" onClick={handleClick}>Projects</p>
           <p  id="nav_contact" onClick={handleClick}>Contact</p>
         </div>
   
       </div> 


    
  )
}
