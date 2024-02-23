import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img1 from '@assets/Libre Deuda/LibreDeuda_fondo.svg'
export const SolicitudDePoda = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto gap-8 flex flex-col'>
        {/* TITLE */}
        <div className='
      block absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent
       lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[140px] lg:border-t-[#FFC14F] lg:border-l-[140px] lg:border-l-[#FFC14F] lg:border-b-[140px] lg:border-b-transparent lg:border-r-[140px] lg:border-r-transparent'
        />
        <div className='pt-44 gap-10 flex flex-col text-[#3E3E3E] font-semibold'>
          <div className='flex flex-col items-center justify-center lg:items-stretch lg:justify-stretch gap-4 lg:px-96 px-8 lg:text-2xl'>
            {/* TITLE */}
            <div className='lg:w-3/4'>
              <h1 className='text-1xl font-extrabold text-[#D85B35] lg:text-4xl lg:w-full'>SEGUIMIENTO DE SOLICITUDES DE PODA O ERRADICACION</h1>
            </div>
            {/* FORM */}
            <div className='flex flex-col gap-6 items-center lg:items-baseline pt-20'>
              <div>
                <input type='text' className='bg-[#FFC14F] rounded-xl lg:rounded-2xl w-72 h-8 lg:w-[30rem] lg:h-10' />
                <p className='items-center flex justify-center text-[#8E8E8E]'>DNI Titular</p>
              </div>
              <div>
                <input type='text' className='bg-[#FFC14F] rounded-xl lg:rounded-2xl w-72 h-8 lg:w-[30rem] lg:h-10' />
                <p className='items-center flex justify-center text-[#8E8E8E]'>Número de trámite DNI</p>
              </div>
              <div className='lg:pl-40'>
                <button className='text-white bg-[#D85B35] rounded-2xl w-36 h-8'>Buscar</button>
              </div>
            </div>
          </div>
          <div className='relative z-0'>
            <svg className='h-32 w-32 lg:h-96 lg:w-96 absolute -top-[10px] -right-0 lg:-top-[280px] rotate-180 scale-y-[-1]'>
              <image href={img1} alt='img not found' className='w-20 lg:w-96 lg:h-96' />
            </svg>
          </div>
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
