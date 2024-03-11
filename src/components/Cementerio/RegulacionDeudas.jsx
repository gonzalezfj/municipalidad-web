import React from 'react'
import img2 from '@assets/imgCementerio/cementerio_fondo_Mesa de trabajo 1.svg'
export const RegulacionDeudas = () => {
  return (
    <div className='w-full h-[100vh]'>
      <div className='container mx-auto px-6 md:px-0 pt-44 flex flex-col gap-4'>
        <h1 className='text-2xl font-extrabold text-[#3E3E3E] lg:text-[2rem]'>Regularización de Deudas:</h1>
        <div className='flex flex-col gap-2 lg:text-[1.3rem]'>
          <p>Los titulares de nichos, columnas, lotes o mausoleos del Cementerio de la Capital, que mantuvieren deuda por la Contribución prevista en el Artículo 69º de la presente, deberán regularizarla previo a la iniciación de cualquier tipo de trámite administrativo, tales como solicitud de títulos, transferencias, inhumaciones, exhumaciones, traslados, reducciones, cambio de metálica de ataúdes, obras y reparaciones, etc.</p>
          <p>Las urnas, producto de las reducciones que se hicieren en la Necrópolis, deberán estar soldadas y exhibir la chapa identificatoria con el nombre y la fecha de fallecimiento del extinto/a reducido/a.</p>
          <p>El Departamento Ejecutivo queda facultado para modificar los importes detallados en el presente Capítulo, autorizar la concesión de nichos de propiedad de la Municipalidad y autorizar al Cementerio Municipal a otorgar facilidades de pago por deudas originadas en las contribuciones fijadas en el presente Capítulo.</p>
        </div>
      </div>
      <div className='absolute lg:w-96 lg:bottom-[12.7rem] bottom-[25rem] left-0 lg:left-0 -z-8 lg:-z-0'>
        <img src={img2} alt='img not found' className='w-full object-cover' />
      </div>
    </div>
  )
}
