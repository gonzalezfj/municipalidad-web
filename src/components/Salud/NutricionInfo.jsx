import React from 'react'

export const NutricionInfo = () => {
  return (
    <div>
      <div className='container flex flex-col h-full px-8 gap-2 border border-purple-800 rounded-3xl shadow-2xl p-10'>
        <h1 className='text-[#4B0984] font-extrabold text-[2rem]'>Nutrición</h1>
        <p className='font-semibold text-[#9C9C9C]'>
          Medición de peso y talla, cálculo de
          IMC y requerimientos nutricionales.
          Plan alimentario personalizado.
          Entrega de recetas y controles
          nutricionales.
          Programa Mis Primeros y Segundos
          1000 Días.
        </p>
        <h1 className='text-[#4B0984] font-extrabold text-2xl'>Atención</h1>
        <div className='font-semibold pl-2'>
          <li>
            Dirección de Salud Municipal
            Subsuelo del Concejo Deliberante.
            Lunes y martes de 8 a 12 hs.
          </li>
          <li>
            CIC Barrio Manantial
            Agustín Gómez 201 oeste.
            Viernes de 8 a 12 hs, solo con turnos.
          </li>
        </div>
        <button className='bg-[#FFC14F] text-white w-[10rem] py-1 mt-2 mb-2 rounded-xl'>Pedir turnos</button>
        <div>
          <h1 className='text-[#D85B35] font-extrabold text-2xl'>Lic. Jimena Oliver</h1>
          <h4 className='text-[#D85B35] font-extrabold text-base'>Matrícula N° 593</h4>
        </div>
        <h3 className='text-[#9C9C9C]'>Destinada a todo público sin obra social.</h3>
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
            <li>En caso de padecer alguna patología (hipertensión, diabetes, hipercolesterolemia, entre otros) y contar con estudios médicos/análisis clínicos, debe asistir a la consulta con ellos.</li>
            <li>Traer DNI.</li>
            <li>Asistir con cubreboca/barbijo.</li>
          </div>
          <p className='font-bold'>Desde el Área de Nutrición se coordina la iniciativa Merenderos Seguros, en los cuales se elaboran comidas o copa de leche. Se brinda asesoramiento nutricional para elaboradores de alimentos, lineamientos generales sobre la composición nutricional de los alimentos. Taller educativo sobre buenas prácticas de manufactura (higiene, indumentaria correcta, temperaturas seguras, rotulación y entrega de kit de indumentaria: delantal, cofia y cubre boca).</p>
        </div>
      </div>
    </div>
  )
}
