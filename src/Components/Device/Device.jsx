import React from 'react'
import '../Css/Device.css'
import Laptop from './Laptop/Laptop'
import Phone from './Phone/Phone'
import Tablet from './Tablet/Tablet'

export default function Device() {
  return (
        <div className="device">
            <Phone/>
            <Laptop/>
            <Tablet/>
        </div>
  )
}
