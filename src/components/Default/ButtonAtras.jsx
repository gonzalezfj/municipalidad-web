import React from 'react'
import { useNavigate } from 'react-router'
import buttonAtras from '../../assets/guiaDeTramitesMobile_botonAtras.svg'

const ButtonAtras = () => {
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }
  return (
    <div>
      <button onClick={() => handleClick('-1')}>
        <svg className='w-16 h-16'>
          <image className='w-full' href={buttonAtras} />
        </svg>
      </button>
    </div>
  )
}

export default ButtonAtras
