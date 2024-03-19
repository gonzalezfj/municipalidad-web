import React from 'react'
import ButtonBack from '@/components/Default/ButtonBack'
const img5 = import.meta.env.VITE_ASSETS_URL + '/assets/Ocupacion_Calzada/espacioUrbano_iconoFondo2.svg'

export const HabilitacionEstructura = () => {
  return (
    <div>
      <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent' />
      {/* BODY */}
      <div className='container mx-auto flex flex-col gap-4 pt-40 items-center justify-center px-10 lg:px-40 lg:w-[80rem]'>
        {/* TITULO AND SUBTITULO */}
        <div className='lg:items-baseline flex flex-col gap-6'>
          <h1 className='text-[#4B0984] text-2xl lg:text-3xl font-extrabold '>HABILITACIÓN DE ESTRUCTURA EXISTENTE DE SOPORTE DE ANTENA</h1>
          <h3 className='text-[#3E3E3E] font-extrabold text-1xl lg:text-2xl'>Requisitos para la habilitación de una nueva estructura de soporte de antena</h3>
          {/* TEXT */}
          <p className='text-[#3E3E3E] font-semibold lg:text-1xl'>
            Las infraestructuras de servicios de comunicaciones existentes, deberán ser adecuadas a lo determinado en la Ordenanza N° 12609 antes del fin del presente año 2020.
          </p>
          <p>
            Para la inscripción los propietarios de estructuras de soporte deberán presentar la documentación recurrente, que se detalla a continuación:
            <ul className='list-decimal pl-10'>
              <li>Copia autenticada del Estatuto Social de la sociedad propietaria de la estructura.</li>
              <li>Constancia de CUIT</li>
              <li>Licencia de Operador de Telecomunicaciones (en caso de corresponder)</li>
              <li>Notificación de domicilio legal y contacto.</li>
            </ul>
          </p>
          <section className='flex flex-col gap-4'>
            <h1 className='text-2xl font-extrabold text-[#3E3E3E]'>Seguro</h1>
            <p>
              Desde el inicio de los trabajos de montaje de las instalaciones y durante todo el tiempo en que estas se mantengan en pie y aún para los trabajos de mantenimiento y desmantelamiento, el operador deberá constituir el correspondiente seguro de Responsabilidad Civil hacia terceros, en resguardo ante los eventuales daños que pudieran causar las instalaciones y/o la actividad de las empresas involucradas en las tareas de montaje, mantenimiento y desmontaje.
            </p>
            <h2 className='font-extrabold text-[#8A43EF] text-1xl lg:text-2xl'>Subdirección de Control  y Planificación Urbana</h2>
            <h4 className='font-bold lg:text-[1.4rem]'>Anexo Municipal Güemes.</h4>
            <ul>
              <li>Güemes 480 sur, segundo piso.</li>
              <li>Tel.: 2644946835</li>
              <li>Horarios de atención: 8 a 13hs.</li>
            </ul>
            <img src={img5} alt='img not found' className='w-36 h-36 lg:w-52 lg:h-52 absolute ml-[15rem] lg:ml-[75rem] lg:mt-[18rem] mt-[30rem]' />
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
