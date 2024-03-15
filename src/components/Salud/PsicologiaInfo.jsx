import React from 'react'

export const PsicologiaInfo = () => {
  return (
    <div>
      <div className='container flex flex-col h-full px-8 gap-2 border border-purple-800 rounded-3xl shadow-2xl p-10'>
        <h1 className='text-[#4B0984] font-extrabold text-[2rem]'>Psicología</h1>
        <p className='font-semibold text-[#9C9C9C]'>
          Evaluación y diagnósticos psicológicos.
          Tratamientos psicológicos (individual).
          Asesoramiento y promoción de la salud
          mental (programa de estimulación cognitiva
          y emocional). Orientación parental (niño,
          adolescente y adulto)
        </p>
        <h1 className='text-[#4B0984] font-extrabold text-2xl'>Atención solo con turnos</h1>
        <div className='font-semibold pl-2'>
          <li>
            Dirección de Salud Municipal
            Subsuelo del Consejo Deliberante.
            Martes y jueves de 8 a 12hs, solo con turnos.
          </li>
        </div>
        <button className='bg-[#FFC14F] text-white w-[10rem] py-1 mt-2 mb-2 rounded-xl'>Pedir turnos</button>
        <div>
          <h1 className='text-[#D85B35] font-extrabold text-2xl'>Lic. Natalia Andrea Arévalo</h1>
          <h4 className='text-[#D85B35] font-extrabold text-base'>Matrícula N° 1392</h4>
        </div>
        <h3 className='text-[#9C9C9C]'>Destinado a personas de 3 a 80 años sin obra social.</h3>
        <div>
          <h1 className='text-[#4B0984] text-2xl'>Prácticas</h1>
          <div className='pl-2 list-disc'>
            <li>Medición de peso y talla.</li>
            <li>Cálculo de IMC y requerimientos nutricionales.</li>
            <li>Entrega de recetas y controles nutricionales.</li>
            <li>Planes alimentarios personalizados para niños, adultos y embarazadas.</li>
            <li>Tratamientos de patologías (diabetes, hipertensión, hipercolesterolemia).</li>
          </div>
          <h1 className='text-[#4B0984] text-2xl'>Requisitos</h1>
          <div className='pl-2 list-disc'>
            <li>Traer derivación escrita, firmada y señada por la institución y profesional que deriva</li>
            <li>Asistir con DNI.</li>
          </div>
        </div>
      </div>
    </div>
  )
}
