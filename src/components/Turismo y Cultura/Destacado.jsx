import React from 'react'
import img2 from '../../assets/imagen2.jpg'
import img3 from '../../assets/imagen4.jpg'
import img4 from '../../assets/imagen5.webp'

export const Desctacado = () => {
  return (
    <div className='bg-red-200'>
      <h1 className='m-4'>Desctacado</h1>
      <div className=' gap-3 columns-3 p-2'>
        {/* CONTENEDOR IMG */}
        <div className=''>
          {/* SUB CONTENEDORES */}
          <div className=''>
            <img className='w-36 h-32  rounded-full' src={img2} />
          </div>
          {/* SUB CONTENEDORES */}
          <div className=''>
            <img className='w-80 h-40 object-cover rounded-full' src={img3} />
          </div>
          {/* SUB CONTENEDORES */}
          <div className=''>
            <img className='w-36 h-32  rounded-full' src={img4} />
          </div>
        </div>
      </div>
      <h4 className='items-center justify-center flex'>GUIA</h4>
    </div>
  )
}
