import React from 'react'

const ButtonTurnos = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-7 text-[#616161]'>
      <h1 className='font-extrabold'>PEDIR TURNO</h1>
      <div className='flex gap-4'>
        <button className='bg-[#FFC14F] w-36 h-36 rounded-3xl'>
          <svg className='w-36 h-36'>
            <image />
          </svg>
        </button>
        <button className='bg-[#FFC14F] w-36 h-36 rounded-3xl'>
          <svg className='w-36 h-36'>
            <image />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ButtonTurnos
