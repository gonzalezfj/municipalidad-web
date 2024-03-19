import React from 'react'
import ButtonBack from '../Default/ButtonBack'
const img3 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoTransito.svg'
const img4 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'

export const Infraccion = () => {
  return (
    <div className='w-full'>
      <div className='container mx-auto gap-8 flex flex-col'>
        {/* TITLE */}
        <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent
        lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[75px] lg:border-t-[#FFC14F] lg:border-l-[75px] lg:border-l-[#FFC14F] lg:border-b-[75px] lg:border-b-transparent lg:border-r-[75px] lg:border-r-transparent'
        />
        <div className='relative z-0'>
          <svg className='lg:w-48 lg:top-[8rem] absolute top-[140px] lg:-right-0 -right-16 rotate-90'>
            <image href={img4} alt='img not found' className='lg:h-40 lg:w-auto' />
          </svg>
        </div>
        {/* CUERPO */}
        <div className='gap-10 flex flex-col text-[#3E3E3E] font-semibold w-full'>
          <div className='flex flex-col gap-4 lg:px-96 px-8 pt-36 lg:text-2xl'>
            <h1 className='text-2xl font-extrabold text-[#4B0984] lg:text-3xl'>PAGO ANTICIPADO ANTE UNA INFRACCION</h1>
            <p className='text-[#D85B35] italic font-bold'>Para infracciones de estacionamiento vencido que se abonen voluntariamente dentro de los 72 hs. siguientes.</p>
            <p className='text-[#3E3E3E] font-semibold lg:text-lg'>
              Pago anticipado ante una infracción
            </p>
            <div className='flex flex-col gap-4 lg:text-lg'>
              <p>¿Recibiste una infracción por estacionamiento vencido? Con esta facultad de hacer uso del pago anticipado el usuario tiene posibilidad de cancelar dicha infracción abonando $1000 por distintos medios de pago. El pago anticipado podrá efectuarse dentro de las 72 hs. posteriores a la hora de labrada el Acta, por medio de cualquier asistente en terreno. (Ejemplo: Boleta labrada 11:30 hs. Se podrá realizar el pago hasta las 13:00 hs. Con cualquier Asistente de ECO en el turno siguiente).</p>
            </div>
          </div>
        </div>
        {/* BTN BACK */}
        <div className='lg:px-96 px-8 py-4 lg:-left-20'>
          <div className='pt-10'>
            <ButtonBack />
          </div>
        </div>
        <div className='relative'>
          <svg className='h-28 w-28 lg:w-36 lg:h-36 absolute right-5 -top-20'>
            <image href={img3} alt='img not found' className='w-28 h-28' />
          </svg>
        </div>
      </div>
    </div>
  )
}
