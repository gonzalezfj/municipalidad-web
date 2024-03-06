import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img2 from '../../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
import img3 from '../../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoTransito.svg'

export const MediosDePrensa = () => {
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
          <h1 className='font-extrabold text-2xl text-purple-800 lg:text-3xl'>MEDIOS DE PRENSA</h1>
        </div>
        <p className='font-extrabold text-base italic  lg:text-2xl lg:w-1/2 text-[#D85B35] pb-10'>Obleas destinadas a facilitar la labor de los medios de prensa en la Ciudad de San Juan.</p>
        {/* INFO  */}
        <div className='text-[#3E3E3E]'>
          <div className='px-4'>
            <li className='mb-4'>Las obleas están destinadas a los vehículos de exteriores o móviles de los medios de prensa. No son para estacionamiento de uso particular.</li>
            <li className='mb-4'>Se autoriza la emisión de 2 obleas (franquicias) por medio de comunicación, con la documentación pertinente. Si el medio requiere más de dos obleas deberá requerir la autorización pertinente.</li>
            <li className='mb-4'>Estas obleas tendrán una validez anual, contando desde la fecha de emisión.</li>
            <li className='mb-4'>Por el trámite se deberá pagar un canon de $2.000 estipulado en Ordenanza Tributaria Anual por gastos administrativos por única vez, válido hasta la próxima renovación.</li>
            <li>El trámite es completamente digital</li>
          </div>
          <h3 className='font-bold py-3'>Para completar el formulario de solicitud vamos a solicitarte:</h3>
          <div className='px-4'>
            <li className='mb-4'>Del medio de prensa: Nombre, CUIT, inscripción en el ENACOM o declaración jurada de medio de prensa.</li>
            <li className='mb-4'>Del Solicitante: Nombre, DNI, Teléfono, email, domicilio.</li>
            <li className='mb-4'>De cada vehículo: Marca, modelo, dominio (patente), copia de la RTO.</li>
          </div>
        </div>
        {/* INFO  */}
        <div className='py-4'>
          <button className='bg-transparent hover:bg-[#D85B35] text-[#D85B35] text-1xl font-extrabold  hover:text-white py-4 px-8  border-[#D85B35] border-2 hover:border-transparent rounded-3xl'>
            SOLICITAR OBLEA
          </button>
        </div>
        {/* BTN BACK */}
        <ButtonBack />
        <div className='relative'>
          <svg className='h-28 w-28 lg:w-36 lg:h-36 absolute right-5 -top-20'>
            <image href={img3} alt='img not found' className='w-28 h-28' />
          </svg>
        </div>
      </div>
      {/* CONTENIDO */}
    </div>
  )
}
