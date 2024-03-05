import React from 'react'
import img5 from '@assets/Ocupacion_Calzada/espacioUrbano_iconoFondo2.svg'
import ButtonBack from '../Default/ButtonBack'

export const ConstrucciónArregloVeredas = () => {
  return (
    <div>
      <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent' />
      <div className='container mx-auto flex flex-col gap-4 pt-40 items-center justify-center px-10 lg:px-40 lg:w-[80rem]'>
        {/* BODY */}
        <div className='lg:items-baseline flex flex-col gap-6'>
          <h1 className='text-[#4B0984] text-2xl lg:text-3xl font-extrabold '>CONSTRUCCIÓN Y ARREGLO DE VEREDAS</h1>
          <p className='lg:text-[1.3rem]'>Ahora puedes obtener en línea y de forma gratuita la autorización municipal necesaria para la construcción reparación de veredas por parte del vecino.</p>
          <button className='bg-[#D85B35] text-white text-1xl font-bold rounded-2xl py-2 lg:py-4 lg:px-10'>TRAMITAR ONLINE</button>
          <p className='lg:text-[1.3rem]'>Para completar el trámite deberás conocer la nomenclatura catastral de tu inmueble, la puedes consultar en las boletas de tasas municipales o en las boleta de servicios del inmueble. Puede figurar como "N.C."</p>
        </div>
        <img src={img5} alt='img not found' className='w-36 h-36 lg:w-52 lg:h-52 absolute ml-[15rem] lg:ml-[98rem] lg:mt-[25rem] mt-[39rem]' />
      </div>
      <div className='px-8 py-4 pl-[3rem] lg:pl-[29rem]'>
        <div className='pt-4'>
          <ButtonBack />
        </div>
      </div>
    </div>
  )
}
