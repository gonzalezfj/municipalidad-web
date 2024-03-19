import React from 'react'
import ButtonBack from '@/components/Default/ButtonBack'
const img1 = import.meta.env.VITE_ASSETS_URL + '/assets/Ocupacion_Calzada/formulario.jpg'
const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/Ocupacion_Calzada/mapCalzada.jpg'
const img3 = import.meta.env.VITE_ASSETS_URL + '/assets/Ocupacion_Calzada/formularioCalzada.jpg'
const img4 = import.meta.env.VITE_ASSETS_URL + '/assets/Ocupacion_Calzada/espacioUrbano_iconoCartel.svg'

export const OcupacionCalzada = () => {
  return (
    <div>
      <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent' />
      {/* BODY */}
      <div className='container mx-auto flex flex-col gap-4 pt-40 items-center justify-center px-10 lg:px-40 lg:w-[80rem]'>
        {/* TITULO AND SUBTITULO */}
        <div className='lg:items-baseline flex flex-col gap-6'>
          <h1 className='text-[#4B0984] text-2xl lg:text-3xl font-extrabold '>SOLICITUD PERMISO OCUPACIÓN CALZADA</h1>
          <h3 className='text-[#3E3E3E] font-extrabold text-1xl lg:text-2xl'>Formulario online para solicitud de permiso para ocupación de vereda o calzada</h3>
          {/* TEXT */}
          <p className='text-[#3E3E3E] font-semibold lg:text-1xl'>
            Este trámite es totalmente online Una vez aprobado la solicitud, se enviará al mail al solicitante con un enlace para realizar el pago de la contribución correspondiente.Ante cualquier duda comunicarse al Departamento Técnico de la Dirección de Planificación al teléfono 4309697.
          </p>
        </div>
        <section className='lg:flex lg:items-center lg:justify-center lg:flex-col lg:gap-4'>
          {/* IMG FORMULARIO */}
          <img src={img1} alt='img not found' />
          {/* IMG MAPS */}
          <img src={img2} alt='img not found' />
          {/* IMG FORMULARIO */}
          <img src={img3} alt='img not found' />
          {/* IMG SEÑAL */}
        </section>
      </div>
      <div className='px-8 py-4 pl-[3rem] lg:pl-[35rem]'>
        <div className='pt-4'>
          <ButtonBack />
        </div>
      </div>
      <div className='w-24 ml-64 lg:w-44 lg:ml-[100rem]'>
        <img src={img4} alt='img not found' className='w-full h-full' />
      </div>
    </div>
  )
}
