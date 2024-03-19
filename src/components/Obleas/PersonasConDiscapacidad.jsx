import React from 'react'
import ButtonBack from '../Default/ButtonBack'
const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
const img3 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoTransito.svg'

export const PersonasConDiscapacidad = () => {
  return (
    <div className='w-full'>
      <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent' />
      <div className='absolute right-0 top-24'>
        <svg className='h-20 w-20 lg:h-64 lg:w-64  -rotate-90 scale-y-[-1]'>
          <image className='w-[190px] lg:w-[590px] object-cover ' href={img2} alt='img not found' />
        </svg>
      </div>
      {/* CONTENIDO */}
      <div className='container mx-auto flex flex-col gap-5 p-10 pt-28'>
        <div className='pt-10 w-full flex flex-col-2 lg:w-full'>
          <h1 className='font-extrabold text-2xl text-purple-800 lg:text-3xl'>PERSONAS CON DISCAPACIDAD</h1>
        </div>
        <p className='font-extrabold text-base italic  lg:text-2xl lg:w-1/2 text-[#D85B35] pb-10'>Obleas de estacionamiento para personas con Certificado Único de Discapacidad. </p>
        {/* INFO  */}
        <div className='text-[#3E3E3E] flex flex-col gap-4'>
          <p>Para solicitar la oblea de estacionamiento es necesario que quien solicite el servicio cuente con un Certificado Único de Discapacidad.</p>
          <h1 className='font-extrabold'>Los requisitos para el otorgamiento de oblea son:</h1>
          <div className='px-4'>
            <ul className='list-disc pl-4'>
              <li className='mb-4'>Solicitud firmada por el destinatario de la oblea para persona con discapacidad o persona responsable a cargo;</li>
              <li className='mb-4'>Copia legalizada por la entidad emisora, del Certificado Único de Discapacidad, vigente;</li>
              <li className='mb-4'>Copia de DNI de la persona con discapacidad y de su tutor, curador o persona responsable.</li>
              <li className='mb-4'>Todas las fotocopias adjuntas deben ser certificadas como copia fiel del original a través de Mesa de Entradas del Municipio.</li>
            </ul>
          </div>
          <p>Una vez concedida la autorización a través de Decreto, el beneficiario será contactado por la Dirección de Estacionamiento controlado (ECO) para hacer entrega de la oblea de estacionamiento para personas con discapacidad cuya vigencia será anual.</p>
          <h3 className='font-extrabold'>Renovación de obleas</h3>
          <p>Si su oblea está próxima al vencimiento deberá concurrir a las oficinas del ECO en calle Rivadavia este 788 en horario de 07:30 hs. a 13:00 hs. con los siguientes requisitos:</p>
          <div className='px-4'>
            <ul className='list-disc pl-4'>
              <li className='mb-4'>Oblea vencida</li>
              <li className='mb-4'>DNI de la persona con discapacidad (Original, no fotocopia)</li>
              <li className='mb-4'>DNI de la persona que va a realizar el trámite (En caso de que corresponda)</li>
            </ul>
          </div>
          <p>En el momento se entregará la oblea actualizada y se retendrá la anterior.</p>
        </div>
        {/* BTN BACK */}
        <ButtonBack />
        <div className='relative'>
          <svg className='h-28 w-28 lg:w-36 lg:h-36 absolute right-5 -top-20'>
            <image href={img3} alt='img not found' className='w-28 h-28' />
          </svg>
        </div>
      </div>
    </div>
  )
}
