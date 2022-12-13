import React from 'react'
import Typewriter from "typewriter-effect";
import './Css/home.css'

export default function Home({archi,divname}) {
  return (
    <div className='universalBox'>
        <h2>Aman</h2>
        <p className='section_up'>{archi.start}</p>
        <p className='div_up'>{divname.start}</p>
        <div className='row'>
          <div className="leftcolumn">
            <h3 className="">Hi There,<span className='wavehand'>👋</span></h3>
            <h1 className="">I'm
            <span className='name'>
            <span className="namehover">A</span><span className="namehover">m</span><span className="namehover">a</span><span className="namehover">n</span>
            </span> 
            </h1>
            <h2><Typewriter
                options={{
                  strings: ['Software Developer', 'Full-Stack Developer'],
                  autoStart: true,
                  cursorClassName: 'cursor',
                  pauseFor: 1000,
                  loop: true,
                }}
            />
            </h2>
          </div>
          <div className="rightcolumn">
            <div className="animationdiv">
              <img src="./img/coding.png" className='animationdiv' alt='anime'></img>
            </div>
          </div>
        </div>

        <p className='div_down'>{divname.end}</p>
        <p className='section_down'>{archi.end}</p>
    </div>
  )
}
