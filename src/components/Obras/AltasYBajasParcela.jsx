import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img1 from '@assets/Libre Deuda/LibreDeuda_fondo.svg'
import img2 from '@assets/obras/obras_icono.svg'
export const AltasYBajasParcela = () => {
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
            <h1 className='text-2xl font-extrabold text-[#4B0984] lg:w-2/3 lg:text-4xl'>ALTAS Y BAJAS DE PARCELAS</h1>
            <p className='lg:text-1xl text-[#3E3E3E] font-extrabold'>
              Para actualizar el Estado Parcelario.
            </p>
            <section className='flex flex-col gap-2 pt-4'>
              <p className='font-normal'>
                Para iniciar el trámite en la Dirección de Catastro es requisito necesario contar con cero deuda municipal, a demás debe acercarse por la dirección con la siguiente documentación:
              </p>
              <div className='pl-4 font-normal'>
                <li>Original y copia de DNI</li>
                <li>Original y copia escritura</li>
                <li>Plano de mensura copia autenticada</li>
                <li>Estado de deuda por tasas de servicios sobre inmuebles en cero de la/s Nomenclaturas de Origen hasta la fecha de su/s baja/s (dicha fecha será informada por el Departamento de Catastro Municipal)Se inicia expediente por Mesa de Entrada. El costo del sellado es de $80.
                </li>
              </div>
            </section>
          </div>
          <div className='relative z-0'>
            <svg className='h-32 w-32 lg:h-96 lg:w-96 absolute -top-[10px] -right-0 lg:-top-[280px] rotate-180 scale-y-[-1]'>
              <image href={img1} alt='img not found' className='w-20 lg:w-96 lg:h-96' />
            </svg>
          </div>
          <div className='relative z-0'>
            <svg className='h-48 w-48 lg:h-64 lg:w-64 absolute -top-[10px] right-32 lg:right-96 lg:-top-[20px] rotate-180 scale-y-[-1]'>
              <image href={img2} alt='img not found' className='w-auto lg:w-64 lg:h-64' />
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
