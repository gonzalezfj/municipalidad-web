import React from 'react'
import { ButtonSalud } from './ButtonSalud'

export const HomeSalud = () => {
  return (
    <div className='w-full h-[80rem] container flex flex-col gap-4 mx-auto'>
      <div className='pt-20'>
        <h1 className='text-[#4B0984] font-extrabold text-2xl items-center justify-center flex'>SALUD</h1>
        {/* BUTTON OPTION */}
        <div className='flex flex-col-5 gap-2'>
          <ButtonSalud />
          {/* MORE OPTIONS */}
        </div>
      </div>
    </div>
  )
}
