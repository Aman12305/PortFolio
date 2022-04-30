import React from "react";
import "./allcss/skills.css";
import * as des from './data';
import Ccod,{Ccpp, Cfire, Chtml,Ccss,Cjs,Cnode,Creact,Cgithub}from "./skillanimation";


export default function Skills() {
  return (
    <div className="container page1" id="skills">
        <div className="container-top"></div>
        <div className="container-topcode">{des.data[2].start}</div>
        <div className="div-top">{des.div[0].start}</div>

        <div className="container-middle">
            <div className="content">
              <h1 className="heading">Skills</h1>
              <p className="description">
              I have learned to code in C++, C, database management with MySQL. I possess strong knowledge in Data Structures, Algorithms, and OOP principles. I can set up and manage a Windows OS.
              <br>
              </br>
              <br></br>
              I have also knowledge of HTML, CSS, JavaScript, React, Node.js, MongoDB, FireBase and MySQL . And I have experience in working with Git and Github also. I have made a few projects in my free time related which includes all the tech stack which explained before. 
              </p>
                
            </div>
            <div className="icons-div">
              <Ccod/>
              <Ccpp/>
              <Cfire/>
              <Chtml/>
              <Ccss/>
              <Cjs/>
              <Cnode/>
              <Creact/>
              <Cgithub/>
            </div>
        </div>

        <div className="div-bottom">{des.div[0].end}</div>
        <div className="container-bottomcode">{des.data[2].end}</div>
   </div>
  );
}