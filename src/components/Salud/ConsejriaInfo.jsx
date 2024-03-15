import React from 'react'

export const ConsejriaInfo = () => {
  return (
    <div>
      <div className='container flex flex-col h-full px-8 gap-2 border border-purple-800 rounded-3xl shadow-2xl p-10'>
        <h1 className='text-[#4B0984] font-extrabold text-[2rem]'>Consejería y Testeo de ITS</h1>
        <h2 className='text-[#4B0984] font-bold text-2xl'>Atención</h2>
        <p className='font-semibold'>
          Dirección de Salud Municipal
          Subsuelo del Concejo Deliberante.
          De lunes a viernes de 8 a 12 hs
        </p>
        <h1 className='text-[#4B0984] font-extrabold text-2xl'>Farmacia</h1>
        <h2 className='text-[#4B0984] font-bold text-2xl'>Atención</h2>
        <p className='font-semibold'>
          CIC Barrio Manantial
          Agustín Gómez 201 oeste.
          De lunes a viernes de 8 a 12 hs.
        </p>
        <h1 className='text-[#4B0984] font-extrabold text-[2rem]'>Médico Clínicos</h1>
        <h2 className='text-[#4B0984] font-bold text-2xl'>Atención</h2>
        <p className='font-semibold'>
          CIC Barrio Manantial
          Agustín Gómez 201 oeste.
          De lunes a viernes de 8 a 12 hs, turnos de manera presencial.
        </p>
      </div>
    </div>
  )
}
