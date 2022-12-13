import React from 'react'
import { projectDescription } from '../util'
import Project from './Project'

export default function Allproject({archi,divname}) {

  return (
    <div className='universalBox' id="Projects">
        <p className='section_up'>{archi.start}</p>
        <p className='div_up'>{divname.start}</p>
        
        {
          projectDescription.map((project,key)=>{
              return <Project project={project} key={key}/>
          })
        }  
        <p className='div_down'>{divname.end}</p>
        <p className='section_down'>{archi.end}</p>
    </div>   
  )
}
