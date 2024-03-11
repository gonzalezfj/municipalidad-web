import React, { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'

export const CarteleriaPublica = ({ menuItems }) => {
  const [isOpenIndex, setIsOpenIndex] = useState(null)
  // const resultado = menuItems
  // console.log(resultado, 'resultado map')
  const handleOpen = (index) => {
    setIsOpenIndex(prevIndex => prevIndex === index ? null : index)
  }
  return (
    <div className='space-y-4 lg:pt-10'>
      {menuItems.map((item, index) => (
        <div key={index} className='relative'>
          <button
            onClick={() => handleOpen(index)}
            className='flex items-center h-16 justify-between w-80 px-4 py-2 bg-transparent border-2 border-[#4B0984] rounded-3xl focus:outline-none focus:bg-gray-300'
          >
            <span className='text-[#4B0984] font-extrabold'>{item?.title}</span>
            <FaPlusCircle className={`transition-transform duration-300 transform ${isOpenIndex === index ? 'rotate-45' : ''}`} />
          </button>
          {isOpenIndex === index && (
            <div className={`lg:-top-0 absolute z-10 flex flex-col gap-4 bg-white border border-gray-300 rounded-2xl mt-3 lg:mt-0 shadow-lg p-4 transition-opacity duration-1000 lg:left-96 lg:w-auto lg:absolute ${index !== 0 ? 'top-full' : ''}`}>
              <p className='text-[#8A43EF] text-2xl font-bold'>{item?.description}</p>
              <p>{item?.text ? item?.text : ''}</p>
              <section>
                {item.subTitle && (
                  <div>
                    <h1 className='font-extrabold'>{item?.subTitle?.title}</h1>
                    <div>
                      {item.subTitle.subs.map((str, index) => (
                        <ul key={index} className='list-disc pl-4 lg:pl-8'>
                          <li>{str}</li>
                        </ul>
                      ))}
                    </div>
                  </div>
                )}
              </section>
              <button className='mt-2 px-4 py-2 bg-[#4B0984] text-white hover:text-white rounded-3xl transition duration-500 hover:bg-purple-700 lg:w-44'>Formulario</button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
