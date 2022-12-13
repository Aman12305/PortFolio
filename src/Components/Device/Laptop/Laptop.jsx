import React from 'react'
import './Laptop.css'

export default function Laptop() {
  return (
    <div className="laptop" >
        <div className="lapupper border">
        <div className="lapmid">
            
            <img src="./img/laptop.png" className="lapmid" alt="laptop"/>

        </div>
        <div className="lapbottom" >
            <img src="./img/apple.png" className="lapicon" alt="appleicon"/>
        </div>
        </div>
        <div className="laplower">
            <div className="lup"></div>
            <div className="ldo"></div>
        </div>
    </div>
  )
}
