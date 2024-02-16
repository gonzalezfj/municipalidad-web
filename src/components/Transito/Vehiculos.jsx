import React from 'react'
import ButtonBack from '../../components/Default/ButtonBack'
import img2 from '../../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
import img3 from '../../assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoTransito.svg'

export const Vehiculos = () => {
  return (
    <div className='w-full'>
      <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent' />
      <div className='absolute right-0 top-24'>
        <svg className='h-20 w-20 lg:h-64 lg:w-64  -rotate-90 scale-y-[-1]'>
          <image className='w-[190px] lg:w-[590px] object-cover ' href={img2} alt='img not found' />
        </svg>
      </div>
      <div className='container mx-auto flex flex-col gap-5 p-10 pt-28 lg:px-60'>
        {/* TITULO, SUBTITULO */}
        <div className='pt-10 w-full flex flex-col-2 lg:w-full'>
          <h1 className='font-extrabold text-2xl text-purple-800 lg:text-4xl'>VEHÍCULOS ABANDONADOS</h1>
        </div>
        <div className='text-sm lg:text-1xl py-4'>
          <p className='text-[#3E3E3E] font-extrabold lg:font-extrabold lg:text-xl'>Si desea denunciar un vehículo abandonado o alguna otra cosa mueble que obstaculice la vía pública puede denunciarlo aquí.</p>
        </div>
        {/* IFRAME */}
        <div className='flex items-center justify-center'>
          <div className='py-4'>
            <button className='bg-transparent hover:bg-[#D85B35] text-[#D85B35] text-1xl lg:text-2xl font-extrabold  hover:text-white py-2 px-4 lg:py-8 lg:px-32 border-[#D85B35] border-2 hover:border-transparent rounded-2xl'>
              TRAMITAR ONLINE
            </button>
          </div>
        </div>
        {/* PARRAFO */}
        <div className='px-2 py-4'>
          <p className='font-bold lg:font-medium text-sm lg:text-xl'>
            Vehículos, carros u objetos abandonados en la vía pública son un factor de congestión visual, entorpecimiento vial y foco infeccioso. Con el propósito de optimizar el uso del espacio público, Capital avanzará en la remoción de estos obstáculos.
            La denuncia del ciudadano es fundamental todos para identificar vehículos u otras cosas muebles abandonadas en las calles.
            La denuncia es anónima, pero si el interesado envía su correo electrónico, podrá seguir desde allí el número de reclamo para seguimiento de la denuncia.
          </p>
        </div>
        {/* BUTTON */}
        <div className='items-center justify-center'>
          <ButtonBack />
        </div>
        <div className='relative'>
          <svg className='h-24 w-24 lg:h-40 lg:w-60 absolute right-0 -top-20'>
            <image href={img3} alt='img not found' className='w-full lg:w-full lg:h-40' />
          </svg>
        </div>
      </div>
    </div>
  )
}
