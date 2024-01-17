import React, { useState } from 'react'
import Categorias from '../components/Tramites/Categorias'
import { useNavigate } from 'react-router-dom'

const Tramites = () => {
  const [openDrop, setOpenDrop] = useState(false)
  const navigate = useNavigate()

  const redirectTo = (path) => {
    navigate(path)
  }

  return (
    <div className='top-0'>
      <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent' />
      <div className='container p-10'>
        <div className='mt-10'>
          <Categorias openDrop={openDrop} setOpenDrop={setOpenDrop} />
        </div>
      </div>
      <div className='flex justify-between'>
        <img className='scale-x-[-1] -z-10' src='src\assets\group_61.png' />
        <button onClick={() => redirectTo('/')}>
          <svg className='h-10 w-10 mr-14'>
            <image className='h-10 w-10' href='src\assets\guiaDeTramitesMobile_botonAtras.svg' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Tramites
