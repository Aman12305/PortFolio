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
                      <br></br>
                      <a className="link" href="https://bit.ly/onstreammusic"><u>Project-Link</u></a>
                      </p>
                    </div>
                    <div className="device">
                        <div className="phone border">
                            <div className="phonetop">
                            <hr className="hr"></hr>
                            </div>
                            <div className="phonemid">
                              <img src="./img/Front.png" className="phonemid" alt="phone"/>
                
                            </div>
                            <div className="phonebottom" >
                              <div className="circle">
                
                              </div>
                            </div>
                        </div>
              
                        <div className="laptop " >
                          <div className="lapupper border">
                              <div className="lapmid">
                              
                                <img src="./img/laptop.png" className="lapmid" alt="laptop"/>
                
                              </div>
                              <div className="lapbottom" >
                              <img src="./img/apple.png" className="lapicon" alt="appleicon"/>
                              </div>
                          </div>
                          <div className="laplower">
                              <div className="lup"></div>
                              <div className="ldo"></div>
                          </div>
                        </div>
              
                        <div className="tablet border" >
                            <div className="tabtop">
                            
                            <hr className="hr"></hr>
                            </div>
                            <div className="tabmid">
                              <img src="./img/tab.png" className="tabmid" alt="tab"/>
                
                            </div>
                            <div className="tabbottom" >
                            </div>
                        </div>
                  </div>
                </div>

                <div className="devmain">
                    <div className="contamain">
                      <h1 className="heading">StreamTrend</h1>
                      <p className="description">
                       It is a web application which is used to search and display the trending movies and tv show trailer from different Ott Platform.
                      <br>
                      </br>
                      <br></br>
                      <strong className="hover1">Tech Stack:</strong> React Js, TMDB API, Youtube API ,CSS
                      <br></br>
                      <a className="link" href="https://streamtrend.netlify.app/"><u>Project Link</u></a>
                      </p>
                        
                    </div>
                    <div className="img">
                      <img src="./img/ott.png" className="img1 portimg" alt="portfolio"/>
                    </div>
                </div>

        </div>
        
        <div className="div-bottom">{des.div[0].end}</div>
        <div className="container-bottomcode">{des.data[3].end}</div>
   </div>
  );
}