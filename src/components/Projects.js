import React from "react";
import "./allcss/project.css";
import * as des from './data';
import Donation from "./Donation";
import StreamTrend from "./Streamtrend";
import Learnify from "./Learnify";
import Spotify from "./Spotify";

export default function Projects() {
  return (
    <div className="container project-page" id="projects">
        <div className="container-top"></div>
        <div className="container-topcode">{des.data[3].start}</div>
        <div className="div-top">{des.div[0].start}</div>

        <div className="project-middle">
                <Spotify/>
                <Donation/>
                <Learnify/>
                <StreamTrend/>
        </div>
        
        <div className="div-bottom">{des.div[0].end}</div>
        <div className="container-bottomcode">{des.data[3].end}</div>
   </div>
  );
}