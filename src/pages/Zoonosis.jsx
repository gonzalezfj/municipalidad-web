import React from 'react'
import TextZoonosis from '../components/Zoonosis/TextZoonosis'
import ButtonTurnos from '../components/Zoonosis/ButtonTurnos'
import fondo from '../assets/fondo_zoonosis.svg'
import ButtonAtras from '../components/Default/ButtonAtras.jsx'

const Zoonosis = () => {
  return (
    <div className='relative pt-24 lg:pt-40'>
      <div className='container mx-auto lg:flex lg:flex-row'>
        <TextZoonosis />
        <ButtonTurnos />
      </div>
      <div className='container mx-auto flex justify-center lg:justify-normal'>
        <ButtonAtras />
      </div>
      <div className='absolute -bottom-20 lg:top-0 lg:right-0'>
        <svg className='h-32 w-32 lg:rotate-180 lg:w-52 lg:h-52 xl:w-80 xl:h-80'>
          <image className='w-full' href={fondo} />
        </svg>
      </div>
    </div>
  )
}

export default Zoonosis
