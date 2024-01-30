import React from 'react'
import img from '../../assets/homemovile_seccion1_foto1.jpg'
import video from '../../assets/home_seccion1_video.mp4'
export const Banner = () => {
  return (
    <div className='h-[60vh] w-full bg-slate-700 overflow-hidden relative'>
      <video className='hidden lg:block object-cover w-full h-full absolute bottom-0' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      <img src={img} className='object-cover md:object-cover h-full w-full lg:hidden' />
    </div>
  )
}
