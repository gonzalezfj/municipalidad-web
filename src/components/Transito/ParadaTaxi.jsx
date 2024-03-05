import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img3 from '../../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoTransito.svg'
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
          <svg className='lg:w-48 lg:top-[8rem] absolute top-[140px] lg:-right-0 -right-16 rotate-90'>
            <image href={img4} alt='img not found' className='lg:h-40 lg:w-auto' />
          </svg>
        </div>
        {/* CUERPO */}
        <div className='gap-10 flex flex-col text-[#3E3E3E] font-semibold w-full'>
          <div className='flex flex-col gap-4 lg:px-96 px-8 pt-36 lg:text-2xl'>
            <h1 className='text-2xl font-extrabold text-[#4B0984] lg:text-3xl'>PARADA DE TAXI</h1>
            <p className='text-[#D85B35] italic font-bold'>Solicitud de oblea de estacionamiento para taxi.</p>
            <p className='text-[#3E3E3E] font-semibold lg:text-lg'>
              Para solicitar la oblea de estacionamiento para taxi el primer paso es dirigirse a la dirección de Eco, ubicada en esquina Ig. de la Roza y Las Heras, para corroborar disponibilidad de estacionamiento y efectivamente iniciar el trámite por mesa de entrada en el edificio municipal.
            </p>
            <h2 className='text-[#D85B35] italic font-bold'>Requisitos para obtener oblea de estacionamiento:</h2>
            <div className='items-center justify-center flex lg:items-baseline lg:justify-stretch'>
              <a href='https://drive.google.com/file/d/18FyzbUJGUXUu_iiKb3NJlUBU_ctc1vyY/view' target='_blank' rel='noreferrer'>
                <button className='border-2 border-secondary rounded-3xl py-2 px-3 w-48 lg:w-60 text-[#D85B35] font-extrabold lg:text-lg hover:text-white hover:bg-[#D85B35]'>FORMULARIO DE ESTACIONAMIENTO</button>
              </a>
            </div>
            <div className='flex flex-col gap-4 lg:text-lg pl-4'>
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
            </div>
            <h1 className='font-extrabold text-[#3E3E3E] lg:text-2xl'>Condiciones de Uso de Espacios Reservados para Paradas de Taxi:</h1>
            <div className='flex flex-col gap-2 lg:text-lg pl-4'>
              <li>Respetar las Normas de la Ley Nacional de Tránsito 24.449;</li>
              <li>Exhibir la oblea en el vehículo mientras se realice la actividad;</li>
              <li>Estacionar dentro del espacio señalizado para la actividad sin generar obstrucciones de cocheras u otros boxes;</li>
              <li>La vigencia de la misma será igual al tiempo estipulado en el comprobante de pago. (Boleta de ingreso).</li>
            </div>
          </div>
        </div>
        {/* BTN BACK */}
        <div className='pt-20'>
          <ButtonBack />
        </div>
        <div className='relative'>
          <svg className='h-28 w-28 lg:w-36 lg:h-36 absolute right-5 -top-20'>
            <image href={img3} alt='img not found' className='w-28 h-28' />
          </svg>
        </div>
      </div>
    </div>
  )
}
