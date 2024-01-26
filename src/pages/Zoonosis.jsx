import React from 'react'
import TextZoonosis from '../components/Zoonosis/TextZoonosis'
import ButtonTurnos from '../components/Zoonosis/ButtonTurnos'
import ButtonTurnosPropios from '../components/Zoonosis/ButtonTurnosPropios'

const Zoonosis = () => {
  return (
    <div className='container mx-auto'>
      <TextZoonosis />
      <ButtonTurnos />
      <ButtonTurnosPropios />
    </div>

  )
}

export default Zoonosis
