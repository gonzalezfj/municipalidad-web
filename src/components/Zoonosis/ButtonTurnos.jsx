import React from 'react'
import imgPerro from '../../assets/mascotasmobile_botonPerro.svg'
import imgGato from '../../assets/mascotasmobile_botonGato.svg'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'

const ButtonTurnos = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/consultaturnos')
  }

  return (
    <div className='flex flex-col gap-4 p-7 text-[#616161]'>
      <h1 className='font-extrabold'>PEDIR TURNO</h1>
      <div className='flex gap-4'>
        <Tooltip anchorSelect='.button-redirection' place='bottom'>
          Redirecciona a página antigua hasta implementar sistema Turnero
        </Tooltip>
        <a href='https://municipiosanjuan.gob.ar/zoonosis/esterilizacion-de-perros' target='_blank' className='button-redirection bg-[#FFC14F] w-36 h-36 lg:w-48 lg:h-48 rounded-3xl lg:flex lg:justify-center lg:items-center' rel='noreferrer'>
          <svg className='w-36 h-36'>
            <image className='w-36 h-36' href={imgPerro} />
          </svg>
        </a>
        <a href='https://municipiosanjuan.gob.ar/zoonosis/esterilizacion-de-gatos' target='_blank' className='button-redirection bg-[#FFC14F] w-36 h-36 lg:w-48 lg:h-48 rounded-3xl lg:flex lg:justify-center lg:items-center' rel='noreferrer'>
          <svg className='w-36 h-36 mt-4 ml-4 lg:mt-8 lg:ml-8'>
            <image className='w-28 h-28' href={imgGato} />
          </svg>
        </a>
      </div>
      <div className='flex justify-center items-center lg:justify-normal'>
        <button onClick={handleClick} className='bg-[#9747FF] rounded-full text-white font-bold p-2 w-32'>Mis turnos</button>
      </div>
    </div>
  )
}

export default ButtonTurnos
