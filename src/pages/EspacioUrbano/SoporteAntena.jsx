import React from 'react'
import img5 from '@assets/Ocupacion_Calzada/espacioUrbano_iconoFondo2.svg'
import ButtonBack from '../Default/ButtonBack'
export const SoporteAntena = () => {
  return (
    <div>
      <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent' />
      {/* BODY */}
      <div className='container mx-auto flex flex-col gap-4 pt-40 items-center justify-center px-10 lg:px-40 lg:w-[80rem]'>
        {/* TITULO AND SUBTITULO */}
        <div className='lg:items-baseline flex flex-col gap-6'>
          <h1 className='text-[#4B0984] text-2xl lg:text-3xl font-extrabold '>HABILITACIÓN DE ESTRUCTURA EXISTENTE DE SOPORTE DE ANTENA </h1>
          <h3 className='text-[#3E3E3E] font-extrabold text-1xl lg:text-2xl'>Requisitos para la habilitación de nueva estructura de soporte de antenas</h3>
          {/* TEXT */}
          <p>
            A efectos de solicitar la habilitación de nuevas estructuras de soporte para antenas regidas por la Ordenanza 12609 estos son los requisitos:
            <ul className='list-disc pl-10'>
              <li>Certificado de Factibilidad</li>
              <li>Permiso de Construcción</li>
              <li>Certificado Final de Obra</li>
              <li>Seguro</li>
              <li>Certificado de Habilitación Municipal</li>
              <li>Habilitación de Compartición de Infraestructura</li>
            </ul>
          </p>
          <p>La solicitud debe presentarse por mesa de entrada general.</p>
          <section className='flex flex-col gap-4'>
            <h2 className='font-extrabold text-[#8A43EF] text-1xl lg:text-2xl'>Subdirección de Control  y Planificación Urbana</h2>
            <h4 className='font-bold lg:text-[1.4rem]'>Anexo Municipal Güemes.</h4>
            <ul>
              <li>Güemes 480 sur, segundo piso.</li>
              <li>Tel.: 2644946835</li>
              <li>Horarios de atención: 8 a 13hs.</li>
            </ul>
            <img src={img5} alt='img not found' className='w-36 h-36 lg:w-52 lg:h-52 absolute ml-[15rem] lg:ml-[75rem] lg:mt-[9rem] mt-[10rem]' />
          </section>
        </div>
      </div>
      <div className='px-8 py-4 pl-[3rem] lg:pl-[29rem]'>
        <div className='pt-4'>
          <ButtonBack />
        </div>
      </div>
    </div>
  )
}
