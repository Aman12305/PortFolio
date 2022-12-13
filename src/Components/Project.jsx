import React from 'react'
import Device from './Device/Device'
import { FaGithub, FaGlobe } from 'react-icons/fa'

export default function Project({project}) {
  return (
    <div className='universalBox'>
      <div className="row">
        <div className="leftcolumn">
          <div className='title'> {project.name}</div>
          {
            project.description.map((data,key)=>{
              return <div className='description' key={key}>{data}</div>
            })
          }
          <div className='description'>
            <span className='project_tech'>Tech Stack:</span>
            {project.tech_stack}
            <div style={{margin:"10px 5px"}}>
              <a className='link' target='_blank' href={project.project_link}><FaGlobe className='icons'/></a>
              <a className='link' target='_blank' href={project.github_link}><FaGithub className='icons'/></a>
            </div>
          </div>
        </div>
        <div className="rightcolumn">
          {
            project.name==="Music Player" ?
            (<Device/>):(<img className='projectimage' src={project.image_link} alt={`${project.name} demo link`}></img>)
          }
        </div>
      </div>
    </div>
  )
}
