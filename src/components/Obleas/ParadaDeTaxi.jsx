import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img2 from '../../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
import img3 from '../../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoTransito.svg'

export const ParadaDeTaxi = () => {
  return (
    <div className='w-full'>
      <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent' />
      <div className='absolute right-0 top-24'>
        <svg className='h-20 w-20 lg:h-64 lg:w-64  -rotate-90 scale-y-[-1]'>
          <image className='w-[190px] lg:w-[590px] object-cover ' href={img2} alt='img not found' />
        </svg>
      </div>
      {/* CONTENIDO */}
      <div className='container mx-auto flex flex-col gap-5 pt-28'>
        <div className='pt-10 w-full flex flex-col-2 lg:w-full'>
          <h1 className='font-extrabold text-2xl text-purple-800 lg:text-3xl'>PARADA DE TAXI</h1>
        </div>
        <p className='font-extrabold text-base italic  lg:text-2xl lg:w-1/2 text-[#D85B35] pb-10'>Solicitud de oblea de estacionamiento para taxi.</p>
        {/* INFO  */}
        <div className='text-[#3E3E3E] flex flex-col gap-4'>
          <p>Para solicitar la oblea de estacionamiento para taxi el primer paso es dirigirse a la dirección de Eco, ubicada en esquina Ig. de la Roza y Las Heras, para corroborar disponibilidad de estacionamiento y efectivamente iniciar el trámite por mesa de entrada en el edificio municipal.</p>
          <p className='text-[#D85B35] font-extrabold'>Requisitos para obtener oblea de estacionamiento:</p>
          <div className='py-4'>
            <button className='bg-transparent hover:bg-[#D85B35] text-[#D85B35] text-1xl font-extrabold  hover:text-white py-4 px-8  border-[#D85B35] border-2 hover:border-transparent rounded-3xl'>
              FORMULARIO DE ESTACIONAMIENTO
            </button>
          </div>
          <div className='px-4'>
            <ul className='list-disc pl-4 flex flex-col gap-4'>
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
          </div>
          <h3 className='font-extrabold'>Condiciones de Uso de Espacios Reservados para Paradas de Taxi:</h3>
          <div className='px-4'>
            <ul className='list-disc pl-4 flex flex-col gap-4'>
              <li>Respetar las Normas de la Ley Nacional de Tránsito 24.449;</li>
              <li>Exhibir la oblea en el vehículo mientras se realice la actividad;</li>
              <li>Estacionar dentro del espacio señalizado para la actividad sin generar obstrucciones de cocheras u otros boxes;</li>
              <li>La vigencia de la misma será igual al tiempo estipulado en el comprobante de pago. (Boleta de ingreso).</li>
            </ul>
          </div>
          <div className='pr-72 lg:items-center lg:justify-center'>
            <ButtonBack />
          </div>
          <div className='relative'>
            <svg className='h-48 w-48 absolute right-0 -top-20'>
              <image href={img3} alt='img not found' className='w-full' />
            </svg>
          </div>
        </div>
      </div>
      {/* CONTENIDO */}
    </div>
  )
}
