import React from 'react'
import { aboutDescription } from '../util'

export default function About({archi,divname}) {
  return (
    <div className='universalBox' id='About'>
        <p className='section_up'>{archi.start}</p>
        <p className='div_up'>{divname.start}</p>
        <div className='row'>
          <div className='leftcolumn'>
          <h1 className='title'>Who i Am?</h1>
          {
              aboutDescription.map((val,key)=>{
                  return <div className='description' key={key}>{val}</div>
              })
          }
          <div style={{margin:"5px 5px"}}>
            <a className='link link_box' href="https://drive.google.com/file/d/1qZTaYg9hlF2ek0HDeSHtfGxQYnZpNKCS/view" target='_blank' rel="noreferrer" >My_Resume</a>
          </div>
          </div>
          <div className='rightcolumn'>
            <div className="animationdiv">
                <img src="./img/aman1.png" className='myimage' alt='aman_image'></img>
              </div>
          </div>
        </div>
        <p className='div_down'>{divname.end}</p>
        <p className='section_down'>{archi.end}</p>
    </div>
  )
}
