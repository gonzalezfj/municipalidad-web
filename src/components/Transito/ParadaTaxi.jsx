import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img3 from '../../assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoTransito.svg'
import img4 from '../../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
export const ParadaTaxi = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto gap-8 flex flex-col'>
        {/* TITLE */}
        <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent
        lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[75px] lg:border-t-[#FFC14F] lg:border-l-[75px] lg:border-l-[#FFC14F] lg:border-b-[75px] lg:border-b-transparent lg:border-r-[75px] lg:border-r-transparent'
        />
        <div className='relative z-0'>
          <svg className='lg:h-60 lg:w-60 absolute top-[140px] -right-16 lg:-top-[90px] rotate-90'>
            <image href={img4} alt='img not found' className='lg:w-96 lg:h-full' />
          </svg>
        </div>
        <div className='lg:h-48 px-8 lg:w-full'>
          <div className='pt-40 lg:items-center lg:justify-center lg:flex lg:pt-28'>
            <h1 className='text-2xl font-extrabold text-[#4B0984] lg:items-center lg:justify-center lg:flex lg:w-1/3 lg:text-3xl'>PARA DE TAXI</h1>
            <p className='text-[#D85B35] italic font-bold'>Solicitud de oblea de estacionamiento para taxi.</p>
          </div>
        </div>
        <div className='gap-10 flex flex-col text-[#3E3E3E] font-semibold'>
          {/* CUERPO */}
          <div className='flex flex-col gap-4 lg:px-96 px-8 lg:text-2xl items-center justify-center'>
            <p className='text-[#3E3E3E] font-semibold'>
              Para solicitar la oblea de estacionamiento para taxi el primer paso es dirigirse a la dirección de Eco, ubicada en esquina Ig. de la Roza y Las Heras, para corroborar disponibilidad de estacionamiento y efectivamente iniciar el trámite por mesa de entrada en el edificio municipal.
            </p>
            <h2 className='text-[#D85B35] italic font-bold'>Requisitos para obtener oblea de estacionamiento:</h2>
            <button className='border-2 border-secondary rounded-3xl py-2 px-3 w-48 text-[#D85B35] font-extrabold'>FORMULARIO DE ESTACIONAMIENTO</button>
            <ul className='flex flex-col gap-4'>
              <li>Solicitud firmada por el titular de la licencia;</li>
              <li>Resolución emitida por S.T.T., donde se otorga Nº de licencia;</li>
              <li>Certificado de habilitación taxi – vigente y certificado de desinfección vehicular, conforme normas;</li>
              <li>Fotocopia de la póliza de seguro y último pago del seguro obligatorio del automóvil por el cual se solicita la oblea;</li>
              <li>Revisión técnica obligatoria, vigente y expedida por un ente certificador autorizado por el Gobierno de la Provincia de San Juan;</li>
              <li>Constancia de tener regularizada, si correspondiere, deuda en proceso de ejecución judicial por obligaciones fiscales en concepto de contribución por ocupación o utilización de espacios de dominio público municipal;</li>
              <li>Copia de DNI, y certificación de domicilio real del titular de la licencia;</li>
              <li>Fotocopia del título y tarjeta verde;</li>
              <li>Fotocopia de carnet de conducir de todos los choferes que compartan el rodado en el que se efectuará la actividad, donde se constate la categoría correspondiente al mismo;</li>
              <li>Certificado de libre deuda de infracciones de la movilidad, emitido por la Dirección de Tránsito de la Municipalidad de la Ciudad de San Juan;</li>
              <li>Todas las fotocopias adjuntas, deben ser certificadas, como copia fiel del original a través de mesa de entrada de la Municipalidad de la Ciudad de San Juan.</li>
            </ul>
            <h1 className='font-extrabold text-[#3E3E3E]'>Condiciones de Uso de Espacios Reservados para Paradas de Taxi:</h1>
            <ul className='flex flex-col gap-2'>
              <li>Respetar las Normas de la Ley Nacional de Tránsito 24.449;</li>
              <li>Exhibir la oblea en el vehículo mientras se realice la actividad;</li>
              <li>Estacionar dentro del espacio señalizado para la actividad sin generar obstrucciones de cocheras u otros boxes;</li>
              <li>La vigencia de la misma será igual al tiempo estipulado en el comprobante de pago. (Boleta de ingreso).</li>
            </ul>
          </div>
          <div className='relative z-0'>
            <svg className='h-48 w-48 lg:h-60 lg:w-60 absolute -top-[10px] right-4 lg:-top-[90px] rotate-180 scale-y-[-1]'>
              <image href={img3} alt='img not found' className='w-auto lg:w-96 lg:h-full' />
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
