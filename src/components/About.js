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
              <p className="description">I study electrical engineering with a minor in computer science at Delhi Technological University, which is in Delhi, India.<br>
              </br>
              <br></br>

Basically Computer science is my main area of interest, thus I choose to pursue a career in this field. I'm very motivated by myself and am always looking for fresh opportunities and difficulties. I'm a cooperative person who's always looking to increase my skill set and information base.
              <br></br>
              <a href="https://drive.google.com/file/d/1qZTaYg9hlF2ek0HDeSHtfGxQYnZpNKCS/view" target="_blank" className="link"><strong><u>Resume Link</u></strong></a>
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