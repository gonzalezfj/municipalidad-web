import React from 'react'

export const OdontologiaInfo = () => {
  return (
    <div>
      <div className='container flex flex-col h-full px-8 gap-2 border border-purple-800 rounded-3xl shadow-2xl p-10'>
        <h1 className='text-[#4B0984] font-extrabold text-[2rem]'>Odontología</h1>
        <p className='font-normal text-[#9C9C9C]'>
          Operatorias (eliminación de caries y
          tapaduras), extracciones y atención
          preventiva (enseñanza de higiene
          bucal y flúor).
        </p>
        <h1 className='text-[#4B0984] font-bold text-2xl'>Atención</h1>
        <p className='font-semibold'>De lunes a viernes de 8 a 12 hs, solo con turnos.
          CIC Barrio Manantial
          Agustín Gómez 201 oeste.
        </p>
        <h1 className='text-[#4B0984] font-extrabold text-1xl'>Requisitos</h1>
        <div className='list-disc pl-4'>
          <li>No poseer obra social y/o
            cobertura médica.
          </li>
          <li>Traer DNI.</li>
          <li>Asistir con cubreboca/barbijo.</li>
        </div>
        <h1 className='text-[#D85B35] font-extrabold text-2xl'>Dr. Daniel Campillay</h1>
      </div>
    </div>
  )
}
