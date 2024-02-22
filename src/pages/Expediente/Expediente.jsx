import img1 from '@assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoGeneral.svg'
import React from 'react'

const Expediente = () => {
  return (
    <div>
      <div className='container mx-auto py-32 flex-col justify-center items-center text-center'>
        <div>
          <h1 className='text-2xl font-bold text-[#D85B35]'>CONSULTA DE EXPEDIENTES</h1>
          <h3 className='text-lg'>Solo para los expedientes en formato papel</h3>
        </div>
        <div className='flex justify-center items-center'>
          <iframe width='400px' height='345px' style={{ width: 'full', height: 'full' }} src='https://consultaexpedientes.municipiosanjuan.gob.ar/' allowFullScreen='allowfullscreen' />
        </div>
        <div className='relative lg:pb-10'>
          <svg className='h-40 w-40 lg:h-60 lg:w-60 absolute right-0 -top-20'>
            <image href={img1} alt='img not found' className='w-36 lg:w-auto lg:h-auto' />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Expediente
