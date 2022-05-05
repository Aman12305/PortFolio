
import React from "react";
import "./allcss/bottom.css";
import { FaGithub,FaLinkedin,FaMailBulk } from "react-icons/fa";


export default function Bottom() {
  return (
      <div className="bottom">
  
        <a href="#contact" className="icon-hover">
          <FaMailBulk className="icon"/>
        </a>
        <a href="https://github.com/Aman12305" className="icon-hover">
           <FaGithub className="icon"/>
        </a>
        <a href="https://linkedin.com/in/aman-solanki-820a14142" className="icon-hover">
          <FaLinkedin className="icon"/>
        </a>
          <div className="line"></div>
      </div>
  );
}