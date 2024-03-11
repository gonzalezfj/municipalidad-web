import React from 'react'
import { Link } from 'react-router-dom'
export const CementerioHome = ({ menuItems }) => {
  return (
    <div className='space-y-4 '>
      {menuItems.map((item, index) => (
        <div key={index} className='relative items-center justify-center flex'>
          <Link
            to={item?.path}
            className='flex items-center h-16 justify-between w-80 px-4 py-2 bg-transparent border-2 border-[#4B0984] rounded-3xl focus:outline-none focus:bg-gray-300'
          >
            <span className='text-[#4B0984] font-extrabold'>{item.title}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}
