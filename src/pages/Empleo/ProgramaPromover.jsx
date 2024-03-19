import React from 'react'
import ButtonBack from '@/components/Default/ButtonBack'
const img = import.meta.env.VITE_ASSETS_URL + '/assets/mobilEmpleo/empleoMobile_ProgramaPromover.jpg'
// const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/img temporal/estoyBuscandoUn.jpg'

export const ProgramaPromover = () => {
  return (
    <div>
      {/* IMG */}
      <img src={img} alt='img not found' className='w-full object-cover h-80' />
      <div className='container mx-auto flex flex-col gap-4 pt-10 px-10'>
        {/* TITULO */}
        <h1 className='text-[#4B0984] font-extrabold text-2xl lg:text-3xl'>PROGRAMA PROMOVER</h1>
        {/* TEXT */}
        <section className='font-semibold text-[#3E3E3E] text-sm lg:text-[1.1rem] flex flex-col gap-4 pr-20'>
          <p>El programa Promover ofrece acompañamiento a personas con discapacidad para insertarse en empleos de calidad y/o desarrollar emprendimientos de manera independiente. Mediante talleres de apoyo a la búsqueda de empleo; orientación laboral; orientación al trabajo independiente.</p>
          <h1 className='font-extrabold'>¿A quien está dirigido?</h1>
          <p>A personas mayores de 18 años con discapacidad, que se encuentran desocupadas y residan en Capital.</p>
          <h1 className='font-extrabold'>Requisitos:</h1>
          <ul className='pl-4'>
            <li>DNI</li>
            <li>Acreditar Discapacidad mediante Certificado Único de Discapacidad (CUD) expedido por autoridad competente en los términos del Artículo 3 de la Ley N° 22.431 y su modificatoria o norma análoga local, vigente.</li>
          </ul>
        </section>
        <div className=' container mx-auto flex items-center justify-center xl:block'>
          <ButtonBack />
        </div>
      </div>
    </div>
  )
}
