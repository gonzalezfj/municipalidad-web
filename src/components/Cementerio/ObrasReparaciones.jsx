import React from 'react'
import img2 from '@assets/imgCementerio/cementerio_fondo_Mesa de trabajo 1.svg'
export const ObrasReparaciones = () => {
  return (
    <div className='w-full h-[100vh]'>
      <div className='container mx-auto px-6 md:px-0 pt-44 flex flex-col gap-4'>
        <h1 className='text-2xl font-extrabold text-[#3E3E3E] lg:text-[2rem]'>Obras y Reparaciones:</h1>
        <div className='flex flex-col gap-2 lg:text-[1.3rem]'>
          <p>Para la construcción o reparación de nichos, columnas, panteones o mausoleos, se solicitará autorización a la Dirección del Cementerio, y por la Secretaría de Planificación Urbana, a través del Departamento que ésta indique, se procederá a la aprobación de la obra, previa presentación de planos aprobados, y posteriormente, a su inspección, debiendo abonarse:</p>
          <p>1.- Un derecho de construcción e inspección, según lo establecido en los Artículos 49° y 51° de la presente Ordenanza.</p>
          <p>2.- Por el Certificado de Final de Obra, según lo establecido en el Artículo 52° de la presente Ordenanza.</p>
          <p>3.- Por el permiso o autorización para colocar placas identificatorias y/o recordatorias, floreros, vidrios, cerraduras y/o realizar reparaciones menores, etc., y adjuntando copia de la factura de compra del o los elementos a colocar, se deberá abonar: $1.800,00 </p>
          <p>4.- Por los Derechos de cierre de nichos, pintura de mausoleos, impermeabilización de techos y colocación de membrana asfáltica, se deberá abonar:</p>
        </div>
        <ul className='list-item pl-4 lg:text-[1.3rem]'>
          <li>a) Derecho por cierre de nichos de ladrillos, con materiales y mano de obra: $ 5.950,00</li>
          <li>b) Derecho de cierre de nichos, sin materiales y por cuenta de terceros (placas cementicias, piedras, puertas, revestimientos, obras de pintura, impermeabilización de techos y colocación de membrana asfáltica, etc.) presentando las correspondientes facturas de compra: $ 5.100,00</li>
        </ul>
      </div>
      <div className='absolute lg:w-96 lg:bottom-[12.7rem] bottom-[25rem] left-0 lg:left-0 -z-8 lg:-z-0'>
        <img src={img2} alt='img not found' className='w-full object-cover' />
      </div>
    </div>
  )
}
