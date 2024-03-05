import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img2 from '../../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
import img3 from '../../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoTransito.svg'

export const CargaYDescargaMercaderia = () => {
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
          <h1 className='font-extrabold text-2xl text-purple-800 lg:text-3xl'>CARGA Y DESCARGA DE MERCADERIA</h1>
        </div>
        <p className='font-extrabold text-base italic  lg:text-2xl lg:w-1/2 text-[#D85B35] pb-10'>Solicitud de habilitación de oblea de carga y descarga de mercadería.</p>
        {/* INFO  */}
        <div className='text-[#3E3E3E] flex flex-col gap-4'>
          <p>Es necesario contar con un permiso previamente gestionado en el edificio municipal. Monitores urbanos y agentes de la Policía Comunal se encargaran de cerciorarse que lo tenga a mano.</p>
          <p className='text-[#D85B35] font-extrabold'>Nota solicitud carga y descarga</p>
          <h1 className='font-extrabold'>Requisitos para el otorgamiento de oblea:</h1>
          <div className='px-4'>
            <ul className='list-disc pl-4 flex flex-col gap-4'>
              <li>Solicitud firmada.</li>
              <li>Número de Inscripción de comercio, inmueble, acreditando la actividad comercial.</li>
              <li>Fotocopia del título y tarjeta verde.</li>
              <li>Fotocopia de carnet de conducir de todos los choferes que compartan el rodado en el que se efectuará la actividad, donde se constate la categoría correspondiente al mismo.</li>
              <li>Fotocopia del comprobante de Revisión Técnica Obligatoria, vigente y expedida por un ente certificador autorizado por el Gobierno de la Provincia de San Juan.</li>
              <li>Fotocopia de la póliza de seguro y último pago del seguro obligatorio del automóvil por el cual se solicita la oblea.</li>
              <li>Libre deuda de infracciones de la movilidad, emitido por la Dirección de Movilidad Urbana de la Municipalidad de la Ciudad de San Juan.</li>
              <li>Todas las fotocopias adjuntas, deben ser certificadas, como copia fiel del original a través de Mesa de Entradas de la Municipalidad de la Ciudad de San Juan.</li>
            </ul>
          </div>
          <h3 className='font-extrabold'>Condiciones de uso de espacios reservados para carga y descarga:</h3>
          <div className='px-4'>
            <ul className='list-disc pl-4 flex flex-col gap-4'>
              <li>Respetar las normas de la Ley Nacional de Tránsito 24.449.</li>
              <li>No exceder el tiempo de ocupación del reservado de 30 minutos – Ordenanza Tributaria Anual Vigente.</li>
              <li>Exhibir la oblea en el vehículo mientras se realice la actividad – Ordenanza Nº 9118.</li>
              <li>Estacionar dentro del espacio señalizado para la actividad sin generar obstrucciones de cocheras u otros boxes.</li>
              <li>La vigencia de la misma será igual al tiempo estipulado en el comprobante de pago. (Boleta de ingreso).</li>
            </ul>
          </div>
          <div className='py-4'>
            <button className='bg-transparent hover:bg-[#D85B35] text-[#D85B35] text-1xl font-extrabold  hover:text-white py-4 px-8  border-[#D85B35] border-2 hover:border-transparent rounded-3xl'>
              SOLICITAR OBLEA
            </button>
          </div>
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
      {/* CONTENIDO */}
    </div>
  )
}
