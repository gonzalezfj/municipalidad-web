import React from 'react'
import ButtonBack from '../../components/Default/ButtonBack'
const img1 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoGeneral.svg'

const ConsultaTurnos = () => {
  return (
    <div>
      <div className='container mx-auto pt-28 flex-col justify-center items-center text-center'>
        <div>
          <h1 className='text-2xl font-bold text-[#D85B35]'>CONSULTA DE TURNOS WEB</h1>
          <h3 className='text-lg'>Si pediste un turno podés controlarlo acá</h3>
        </div>
        <div className='flex justify-center items-center'>
          <iframe style={{ width: '95%', height: '473px', border: 'none' }} src='https://api.municipiosanjuan.gob.ar/consulta-turno-web.html' />
        </div>
        <div className='relative'>
          <svg className='h-40 w-40 lg:h-60 lg:w-60 absolute right-0 -top-20'>
            <image href={img1} alt='img not found' className='w-36 lg:w-auto lg:h-auto' />
          </svg>
        </div>
      </div>
      <div className='container mx-auto flex justify-center xl:block'>
        <ButtonBack />
      </div>
    </div>
  )
}

export default ConsultaTurnos
