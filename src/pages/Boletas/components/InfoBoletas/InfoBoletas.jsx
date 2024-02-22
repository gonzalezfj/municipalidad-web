import React from 'react'
import Markdown from 'react-markdown'

const InfoBoletas = ({ BoletasData }) => {
  return (
    <div className='relative bg-[#FFC14F] w-full h-auto lg:h-64 lg:flex lg:items-center lg:rounded-l-full lg:text-xl'>
      <div className='absolute right-0 -top-16 bg-[#D85B35] w-32 h-32 rounded-tl-full shadow-lg' />
      <div className='p-11 container lg:mx-auto'>
        <Markdown className='prose max-w-full text-[#616161]'>{BoletasData?.Informacion}</Markdown>
        {/* <style>{
          `.prose h1,
          .prose h2,
          .prose h3,
          .prose h4,
          .prose h5,
          .prose h6 {
            color: #616161;
          }`
        }
        </style> */}
      </div>
    </div>
  )
}

export default InfoBoletas
