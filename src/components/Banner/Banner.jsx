import React from 'react'
import img from '../../assets/homemovile_seccion1_foto1.jpg'
import video from '../../assets/home_seccion1_video.mp4'
export const Banner = () => {
  return (
    <div className='absolute h-96 top-0 z-1 md:w-full md:object-cover lg:w-full lg:object-cover'>
      <video className='hidden lg:top-[-32vw] w-screen lg:block' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      <img src={img} className='object-cover md:object-cover h-full w-full lg:hidden' />
    </div>
  )
}
