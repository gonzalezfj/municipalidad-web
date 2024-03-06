import React, { useState } from 'react'
export const CementerioHome = ({ menuItems }) => {
  const [isOpenIndex, setIsOpenIndex] = useState(null)
  // const resultado = menuItems
  console.log(isOpenIndex, 'resultado map')
  const handleOpen = (index) => {
    setIsOpenIndex(prevIndex => prevIndex === index ? null : index)
  }
  return (
    <div className='space-y-4 '>
      {menuItems.map((item, index) => (
        <div key={index} className='relative items-center justify-center flex'>
          <button
            onClick={() => handleOpen(index)}
            className='flex items-center h-16 justify-between w-80 px-4 py-2 bg-transparent border-2 border-[#4B0984] rounded-3xl focus:outline-none focus:bg-gray-300'
          >
            <span className='text-[#4B0984] font-extrabold'>{item.title}</span>
          </button>
        </div>
      ))}
    </div>
  )
}
