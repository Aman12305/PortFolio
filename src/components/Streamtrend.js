import React from "react";
import "./allcss/project.css";
import "./allcss/project.css";

export default function StreamTrend() {

    return(
        <div className="devmain">
        <div className="contamain">
          <h1 className="heading">StreamTrend</h1>
          <p className="description">
          Created a platform that allows users to see popular TV series and movie trailers from many OTT services in one location.The TMDB API and the Youtube API are used to retrieve and show data and videos, respectively, on websites.
          <br>
          </br>
          <br></br>
          <strong className="hover1">Tech Stack:</strong> React Js, TMDB API, Youtube API ,CSS
          <br></br>
          <a className="link" href="https://streamtrend.netlify.app/"><u>Project Link</u></a>
          <a className="link" style={{marginLeft:"10px"}}href="https://github.com/Aman12305/OTT-platform"><u>Source-Code</u></a>
          </p>
            
        </div>
        <div className="img">
          <img src="./img/ott.png" className="img1 portimg" alt="portfolio"/>
        </div>
    </div>


    )
}
                