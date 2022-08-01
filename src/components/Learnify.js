import React from "react";
import "./allcss/project.css";


export default function Learnify() {

    return(
        <div className="devmain">
        <div className="contamain">
          <h1 className="heading">Learnify</h1>
          <p className="description">
          Created a platform that uses Augmented Reality to let students see their 3D models on camera-enabled devices while 
          learning about body parts, geometric forms, and the alphabet. In order to find some markers specific to certain 3D models, it makes use of image processing libraries.
          <br>
          </br>
          <br></br>
          <strong className="hover1">Tech Stack:</strong> A-Frame, HTML, CSS, Netlify-Deployment, Augmented-Reality
          <br></br>
          <a className="link" href="https://learnifyar.netlify.app/" target="_blank"><u>Project Link</u></a>
          <a className="link" style={{marginLeft:"10px"}}href="https://github.com/Aman12305/Learnify_AR_Project"><u>Source-Code</u></a>
          </p>
            
        </div>
        <div className="img">
          <img src="./img/learnify.png" className="img1 portimg" alt="learnify"/>
        </div>
    </div>



    )
}
                