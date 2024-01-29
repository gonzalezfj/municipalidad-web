import React from 'react'
import img from '../../assets/homemovile_seccion1_foto1.jpg'
import video from '../../assets/home_seccion1_video.mp4'
export const Banner = () => {
  return (
    <div className='absolute top-0 lg:h-96'>
      <video className='hidden relative -top-[56vh] lg:block' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      <img src={img} className='object-cover md:object-cover h-full w-full lg:hidden' />
    </div>
  )
}
