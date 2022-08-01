import React from "react";
import "./allcss/project.css";
import "./allcss/project.css";

export default function Donation() {

    return(
                <div className="devmain">
                    <div className="contamain">
                      <h1 className="heading">Donation-Hub</h1>
                      <p className="description">
                      Developed a website to accept donations online to aid individuals in need. Our platform aims to close the gap that exists 
                      between Donators and Donatees.Designed several front-end elements, like Authentication and CRUD operations for postings, that interact with the back-end.
                      <br>
                      </br>
                      <br></br>
                      <strong className="hover1">Tech Stack:</strong> JavaScript, React Js, CSS, Node Js, MongoDB, JWT, Netlify, and Heroku
                      <br></br>
                      <a className="link" href="https://donationhub.netlify.app/" target="_blank"><u>Project Link</u></a>
                      {/* <a className="link" style={{marginLeft:"10px"}}href="https://github.com/Aman12305/Learnify_AR_Project"><u>Source-Code</u></a> */}
                      </p>
                        
                    </div>
                    <div className="img">
                      <img src="./img/Donation.png" className="img1 portimg" alt="learnify"/>
                    </div>
                </div>



    )
}
                