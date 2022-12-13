import React from 'react'
import { Fa500Px, FaTruckLoading, FaUpload } from 'react-icons/fa'
import './Css/Loading.css'

export default function Loading() {
  return (
    <div className='universalbox backgroundimage'
    style={{
        backgroundImage: `linear-gradient(rgb(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(
       "https://cdn.pixabay.com/photo/2016/09/08/20/52/starry-sky-1655503__480.jpg"
        )
        `,
        backgroundRepeat:"no-repeat"
    }} 
    >
    <img className='loadingimage' src="./img/loading.gif" alt="loading"></img>
    </div>
  )
}
