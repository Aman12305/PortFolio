
import React from "react";
import "./Css/bottom.css";
import { FaGithub,FaLinkedin,FaMailBulk } from "react-icons/fa";
import { scrollToElement } from "./action/windowsize";


export default function Bottom() {
  const handleClick=()=>{
    scrollToElement('Contact');
  }
  return (
      <div className="bottom">
  
        <p className="icon-hover" onClick={handleClick}>
          <FaMailBulk className="icon"/>
        </p>
        <a href="https://github.com/Aman12305" className="icon-hover" target='_blank'>
           <FaGithub className="icon"/>
        </a>
        <a href="https://linkedin.com/in/aman-solanki-820a14142" className="icon-hover" target='_blank'>
          <FaLinkedin className="icon"/>
        </a>
          <div className="line"></div>
      </div>
  );
}