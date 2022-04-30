import React from "react";
import "./allcss/project.css";
import * as des from './data';

export default function Projects() {
  return (
    <div className="container project-page" id="projects">
        <div className="container-top"></div>
        <div className="container-topcode">{des.data[3].start}</div>
        <div className="div-top">{des.div[0].start}</div>

        <div className="project-middle">

                <div className="devmain">
                    <div className="contamain">
                      <h1 className="heading">Music Player</h1>
                      <p className="description">
                      It have features which a music player should have.
                      <br></br>
                      <br></br>
                      But it have some new features like <strong>Random Gif Generator</strong> and <strong>Single Repeat Mode</strong> which are not in the original version.
                      <br></br>
                      <br></br>
                      <strong className="hover1">Random Gif Generator :</strong> It will generate a random gif image from Tenor API which is according to song which is playing.
                      <br></br>
                      <br></br>
                      <strong className="hover1">Single Repeat Mode :</strong> It will play a song only two time and move to another song without stucking in a infinite loop.
                      </p>
                    </div>
                <div className="device">
                  <div className="phone">
                      <div className="phonetop">
                       <hr className="hr"></hr>
                      </div>
                      <div className="phonemid">
                        <img src="./img/Front.png" className="phonemid"/>
          
                      </div>
                      <div className="phonebottom" >
                        <div className="circle">
          
                        </div>
                      </div>
                  </div>
        
                  <div className="laptop" >
                    <div className="lapupper">
                        <div className="lapmid">
                        
                          <img src="./img/laptop.png" className="lapmid"/>
          
                        </div>
                        <div className="lapbottom" >
                        <img src="./img/apple.png" className="lapicon"/>
                        </div>
                    </div>
                    <div className="laplower">
                        <div className="lup"></div>
                        <div className="ldo"></div>
                    </div>
                  </div>
        
                  <div className="tablet" >
                      <div className="tabtop">
                      
                      <hr className="hr"></hr>
                      </div>
                      <div className="tabmid">
                        <img src="./img/tab.png" className="tabmid"/>
          
                      </div>
                      <div className="tabbottom" >
                      </div>
                  </div>
              </div>
                    
                </div>

                <div className="devmain">
                    <div className="contamain">
                      <h1 className="heading">PortFolio</h1>
                      <p className="description">
                      This is my PortFolio in which you are hovering. It is Fully Responsive. And for making it to responsive design i am using media screen query. I am using Netlify as a hosting service and EmailJs for contacting services.
                      <br>
                      </br>
                      <br></br>
                      <strong className="hover1">Tech Stack:</strong> React, CSS :- animation using keyframes, EmailJs.
                      </p>
                        
                    </div>
                    <div className="img">
                      <img src="./img/portfolio.png" className="img1 portimg"/>
                    </div>
                </div>

        </div>
        
        <div className="div-bottom">{des.div[0].end}</div>
        <div className="container-bottomcode">{des.data[3].end}</div>
   </div>
  );
}