import React from "react";
import "./allcss/about.css";
import * as des from './data';

export default function About() {
  return (
    <div className="container page" id="about">
        <div className="container-top"></div>
        <div className="container-topcode">{des.data[1].start}</div>
        <div className="div-top">{des.div[0].start}</div>

        <div className="container-middle">
            <div className="content">
              <h1 className="heading">Who I Am ?</h1>
              <p className="description">I am Student at Delhi Technological University with major as Electrical Engineering and minor as Computer Science,located in Delhi,India.<br>
              </br>
              <br></br>
              Basically My main interest is in Computer Science so i choose this field to pursue my career. I am a self-motivated person who is always looking for new challenges and new opportunities. I am a team player who is always eager to learn new things and improve my skills. 
              </p>
                
            </div>
            <div className="img">
             <img src="./img/aman1.png" className="img1" alt="profile"></img>
            </div>
        </div>

        <div className="div-bottom">{des.div[0].end}</div>
        <div className="container-bottomcode">{des.data[1].end}</div>
   </div>
  );
}