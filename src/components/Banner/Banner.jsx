import React from 'react'
import img from '../../assets/homemovile_seccion1_foto1.jpg'
export const Banner = () => {
  return (
    <div className='absolute h-96 top-0 z-1 md:w-full md:object-cover lg:w-full lg:object-cover'>
      <img src={img} className='object-cover md:object-cover h-full w-full' />
    </div>
  )
}
