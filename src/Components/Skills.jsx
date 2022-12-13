import React from 'react'
import { skillDescription ,skillIcon} from '../util'
import {CreateIcon}from "./Skillanimation";
import './Css/Skillanimation.css'


export default function Skills({archi,divname}) {
  return (
    <div className='universalBox' id="Skills">
        <p className='section_up'>{archi.start}</p>
        <p className='div_up'>{divname.start}</p>
        <div className='row'>
          <div className="leftcolumn">
            <div className='title'>Skills</div>
            {
                skillDescription.map((val,key)=>{
                    return <div className='description' key={key}>{val}</div>
                })
            }
          </div>
          <div className="rightcolumn">
            <div className="animationdiv">
              {
                skillIcon.map((data,key)=>{
                   return <CreateIcon data={data} key={key}/>
                })
              }
            </div>
          </div>
        </div>
        
        <p className='div_down'>{divname.end}</p>
        <p className='section_down'>{archi.end}</p>
    </div>

  )
}
