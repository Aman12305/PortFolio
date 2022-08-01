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
              I am proficient in C++ and C programming. Data Structures, Algorithms, DBMS, and OOP concepts are subject areas in which I excel. I am capable in configuring and managing a Windows OS.
              <br>
              </br>
              <br></br>
              I am also familiar with MySQL, MongoDB, FireBase, HTML, CSS, JavaScript, React, and Node.js. Additionally, I've worked with Git and Github before. In my spare time, I've created a few apps that use the entire tech stack that was previously described.
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