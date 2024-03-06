import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img1 from '@assets/LibreDeuda/LibreDeuda_fondo.svg'
// import img2 from '@assets/obras/obras_icono.svg'

export const InstalacionesElectricas = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto gap-8 flex flex-col'>
        {/* TITLE */}
        <div className='
        block absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent
        lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[140px] lg:border-t-[#FFC14F] lg:border-l-[140px] lg:border-l-[#FFC14F] lg:border-b-[140px] lg:border-b-transparent lg:border-r-[140px] lg:border-r-transparent'
        />
        {/* TEXT AND TITLE */}
        <div className='pt-44 gap-10 flex flex-col text-[#3E3E3E] font-semibold'>
          {/* PARRAFOS */}
          <div className='flex flex-col gap-4 lg:px-96 px-8 lg:text-2xl'>
            <h1 className='text-1xl font-extrabold text-[#4B0984] lg:items-center lg:justify-center lg:flex lg:w-2/3 lg:text-4xl'>BOLETAS PARA EL PAGO DE CONTRIBUCIONES SOBRE INSTALACIONES ELÉCTRICAS</h1>
            <p className='lg:text-xl'>
              Desde esta sección se podrán descargar las boletas para el pago de las contribuciones eléctricas.
            </p>
            <iframe className='max-w-auto' height='450' src='https://permisosobras.municipiosanjuan.gob.ar/' frameBorder='0' scrolling='no' />
            {/* <section className='gap-4 flex flex-col-2'>
              <input type='text' placeholder='Increse la Nomenclatura o Inscripción' className='w-60 lg:w-2/5 h-10 bg-[#E6E6E6] rounded-xl py-4 px-4 text-slate-800' />
              <button className='rounded-xl bg-[#9C9C9C] px-4 text-white'>Iniciar</button>
            </section> */}
          </div>
          <div className='relative z-0'>
            <svg className='h-32 w-32 lg:h-60 lg:w-60 absolute -top-[10px] -right-0 lg:-top-[280px] rotate-180 scale-y-[-1]'>
              <image href={img1} alt='img not found' className='w-20 lg:w-96 lg:h-full' />
            </svg>
          </div>
          {/* <div className='relative z-0'>
            <svg className='h-48 w-48 lg:h-64 lg:w-64 absolute -top-[10px] right-32 lg:right-96 lg:-top-[20px] rotate-180 scale-y-[-1]'>
              <image href={img2} alt='img not found' className='w-auto lg:w-64 lg:h-64' />
            </svg>
          </div> */}
        </div>
        {/* BTN BACK */}
        <div className='lg:px-96 px-8 py-4 lg:-left-20'>
          <div className='pt-10'>
            <ButtonBack />
          </div>
        </div>
      </div>
    </div>
  )
}
