import React from 'react'
import ButtonBack from '../components/Default/ButtonBack'
import img1 from '../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
import img2 from '../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoTransito.svg'

export const Senaletica = () => {
  return (
    <div className='w-full'>
      <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[100px] border-b-[100px] lg:border-l-[200px] lg:border-b-[200px] border-l-[#FFC14F]  border-b-transparent border-r-[75px] border-r-transparent' />
      <div className='absolute right-0 top-24'>
        <svg className='h-20 w-20 lg:h-64 lg:w-64  -rotate-90 scale-y-[-1]'>
          <image className='w-[190px] lg:w-[590px] object-cover ' href={img1} alt='img not found' />
        </svg>
      </div>
      <div className='container mx-auto flex flex-col gap-4 w-80 lg:w-8/12 pt-48'>
        <div className='lg:w-4/5'>
          <h1 className='font-extrabold text-3xl text-[#4B0984] pb-6 lg:text-4xl'>Señalética urbana</h1>
        </div>
        <p className='font-extrabold text-base text-[#3E3E3E]'>Solicitudes de señalización vial, semáforos, reductores de velocidad.</p>
        <p className='text-[#3E3E3E]'>Los trámites referidos a esta temática se realizan de manera presencial presentando una nota por escrito en Mesa de entrada del municipio. Las solicitudes que puede realizar son:</p>
        <div className='text-[#3E3E3E] flex flex-col gap-4'>
          <div className=''>
            <p className='text-[#3E3E3E] text-base font-bold'>1. Solicitud de colocación de reductores de velocidad.</p>
            <p>Se presenta una nota vecinal, en caso de que exista unión vecinal lo hace ésta, ante la necesidad que consideren conveniente, situación que será evaluada técnicamente por el departamento señalización de tránsito. Los requisitos son:</p>
            <div className='text-[#3E3E3E] pl-2 scroll-pt-52 lg:pt-4 font-bold'>
              <li>Nombre y Apellido</li>
              <li>DNI</li>
              <li>Domicilio</li>
              <li>Telefono y/o celular</li>
              <li>Ubicación precisa del lugar y/o intersecciones</li>
              <li>Foto</li>
            </div>
          </div>
          <div className=''>
            <p className='text-[#3E3E3E] text-base font-bold'>2. Solicitud de colocación de semáforos.</p>
            <p>Los requisitos son:</p>
            <div className='text-[#3E3E3E] pl-2 scroll-pt-52 lg:pt-4 font-bold'>
              <li>Nombre y Apellido</li>
              <li>DNI</li>
              <li>Domicilio</li>
              <li>Telefono y/o celular</li>
              <li>Ubicación precisa del lugar y/o intersecciones</li>
              <li>Foto</li>
            </div>
          </div>
          <div className=''>
            <p className='text-[#3E3E3E] text-base font-bold'>3. Solicitud de señalización vial horizontal y vertical</p>
            <p>Éstos son carteles referidos a: no arrojar residuos, señales viales (pare, cruces peligrosos, etc). Los requisitos son:</p>
            <div className='text-[#3E3E3E] pl-2 scroll-pt-52 lg:pt-4 font-bold'>
              <li>Nombre y Apellido</li>
              <li>DNI</li>
              <li>Domicilio</li>
              <li>Telefono y/o celular</li>
              <li>Ubicación precisa del lugar y/o intersecciones</li>
              <li>Foto</li>
            </div>
          </div>
          <div className=''>
            <p className='text-[#3E3E3E] text-base font-bold'>4. Solicitud de repintado.</p>
            <p>Pueden ser sendas peatonales, cordones, espacios reservados, reductores, entre otros. Los requisitos son:</p>
            <div className='text-[#3E3E3E] pl-2 scroll-pt-52 lg:pt-4 font-bold'>
              <li>Nombre y Apellido</li>
              <li>DNI</li>
              <li>Domicilio</li>
              <li>Telefono y/o celular</li>
              <li>Ubicación precisa del lugar y/o intersecciones</li>
              <li>Foto</li>
            </div>
          </div>
          <div className=''>
            <p className='text-[#3E3E3E] text-base font-bold'>5. Solicitud de espacios reservados.</p>
            <p>Es un trámite que se inicia para poder obtener espacio reservado conforme Ordenanza Nº 9118. Los requisitos son:</p>
            <div className='text-[#3E3E3E] pl-2 scroll-pt-52 lg:pt-4 font-bold'>
              <li>Nombre y Apellido</li>
              <li>DNI</li>
              <li>Domicilio</li>
              <li>Telefono y/o celular</li>
            </div>
          </div>
        </div>
        <div className='pt-20'>
          <ButtonBack />
          <div className='relative lg:pb-10'>
            <svg className='h-28 w-28 lg:w-36 lg:h-36 absolute right-5 -top-20'>
              <image href={img2} alt='img not found' className='w-28 h-28' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
