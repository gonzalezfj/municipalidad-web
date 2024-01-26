import React from 'react'
import TextZoonosis from '../components/Zoonosis/TextZoonosis'
import ButtonTurnos from '../components/Zoonosis/ButtonTurnos'
import ButtonTurnosPropios from '../components/Zoonosis/ButtonTurnosPropios'
import fondo from '../assets/fondo_zoonosis.svg'

const Zoonosis = () => {
  return (
    <div className='relative'>
      <div className='container mx-auto'>
        <TextZoonosis />
        <ButtonTurnos />
        <ButtonTurnosPropios />
      </div>
      <div className='absolute -bottom-20'>
        <svg className='h-32 w-32'>
          <image className='w-full' href={fondo} />
        </svg>
      </div>
    </div>

  )
}

export default Zoonosis
