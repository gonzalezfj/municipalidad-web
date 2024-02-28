import React from 'react'
import { slugify, formatDate } from '@utils'
import { FaPlusCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Card = ({ imageUrl, date, title, description }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    const slugifyTitle = slugify(title)
    console.log(slugifyTitle)
    navigate(slugifyTitle)
  }

  return (
    <div className='flex flex-col gap-3 min-h-72'>
      <div className='lg:flex lg:flex-col-2 lg:gap-8'>
        {/* IMAGE */}
        <img src={import.meta.env.VITE_STRAPI_URL + imageUrl} alt='img not found' className='lg:w-[30rem] rounded-2xl object-cover' />
        {/* CONTENT */}
        <div className='lg:w-[30rem] lg:h-[10rem]'>
          <h4 className='text-[#8A43EF] font-bold lg:text-2xl'>{formatDate(date)}</h4>
          <h1 className='font-extrabold text-[#4B0984] text-[1rem] lg:text-[1.2rem]'>{title}</h1>
          <p className='lg:text-[1.3rem]'>{description}</p>
          {/* BUTTON (+INFO) */}
          <div className='pt-2'>
            <button onClick={() => handleClick()} className='font-bold flex items-center border rounded-3xl px-3 py-1 shadow-xl w-20'>
              <span className='text-[#616161]'>Info</span>
              <FaPlusCircle className='ml-2' style={{ color: '#8A43EF' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
