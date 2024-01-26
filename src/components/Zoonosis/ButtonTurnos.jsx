import React from 'react'
import imgPerro from '../../assets/mascotasmobile_botonPerro.svg'
import imgGato from '../../assets/mascotasmobile_botonGato.svg'

const ButtonTurnos = () => {
  return (
    <div className='flex flex-col gap-4 p-7 text-[#616161]'>
      <h1 className='font-extrabold'>PEDIR TURNO</h1>
      <div className='flex gap-4'>
        <button className='bg-[#FFC14F] w-36 h-36 rounded-3xl'>
          <svg className='w-36 h-36'>
            <image className='w-36 h-36' href={imgPerro} />
          </svg>
        </button>
        <button className='bg-[#FFC14F] w-36 h-36 rounded-3xl'>
          <svg className='w-36 h-36 mt-4 ml-4'>
            <image className='w-28 h-28' href={imgGato} />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ButtonTurnos
