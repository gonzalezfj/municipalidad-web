import React from 'react'
import { useNavigate } from 'react-router'
const buttonAtras = import.meta.env.VITE_ASSETS_URL + '/assets/guiaDeTramitesMobile_botonAtras.svg'

const ButtonBack = () => {
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }
  return (
    <div className='container flex justify-center lg:justify-normal'>
      <button onClick={() => handleClick(-1)}>
        <svg className='w-16 h-16'>
          <image className='w-full' href={buttonAtras} />
        </svg>
      </button>
    </div>
  )
}

export default ButtonBack
