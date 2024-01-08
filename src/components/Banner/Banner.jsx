import React from 'react'
import img from '../../assets/imagen1.jpg'
export const Banner = () => {
  return (
    <div className="bg-gray-800 h-96 flex items-center justify-center">
       <img src={img} className="object-cover h-full w-full"/>
    </div>
  )
}
