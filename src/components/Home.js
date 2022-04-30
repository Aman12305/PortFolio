
import React from "react";
import Typewriter from "typewriter-effect";
import "./allcss/home.css";

import * as des from './data';
import TextAnimation from "./textanimation";

// new Typewriter('#typewriter', {
//   strings: ['SoftWare Developer','Full-Stack Developer'],
//   autoStart: true,
// });

export default function Home() {
  return (
      <div className="container" id="home">
        <div className="container-top"></div>
        <div className="container-topcode">{des.data[0].start}</div>
        <div className="div-top">{des.div[0].start}</div>

        <div className="container-middle">
            <div className="content">
                <h3 className="hi">Hi There,👋</h3>
                <h1 className="iam">I'm <span className="namehover">A</span><span className="namehover">m</span><span className="namehover">a</span><span className="namehover">n</span></h1>
                <h2 className="dev"><Typewriter
                    options={{
                      strings: ['Software Developer', 'Full-Stack Developer'],
                      autoStart: true,
                      cursorClassName: 'cursor',
                      pauseFor: 1000,
                      loop: true,
                    }}
                  // onInit={(typewriter) => {
                  //   typewriter.typeString('Software Developer')
                  //     .pauseFor(2500)
                  //     .deleteAll()
                  //     .typeString('Full Stack Developer')
                  //     .pauseFor(2500)
                  //     .deleteAll()
                      
                  //     .start();
                  // }}
                />
                </h2>
            </div>
            <div className="img">
             <img src="./img/coding.png" className="img" ></img>
            </div>
        </div>
        <div className="div-bottom">{des.div[0].end}</div>
        <div className="container-bottomcode" >{des.data[0].end}</div>
       </div>
  );
}