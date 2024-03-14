import React from 'react'

export const LaboratorioInfo = () => {
  return (
    <div>
      <div className='container flex flex-col h-full px-8 gap-2 border border-purple-800 rounded-3xl shadow-2xl p-10'>
        <h1 className='text-[#4B0984] font-extrabold text-2xl'>Laboratorio</h1>
        <h4 className='text-[#4B0984] font-extrabold text-1xl'>Atencion</h4>
        <p className='font-semibold'>De lunes a viernes de 8 a 12:30 hs
          por orden de llegada.
        </p>
        <p className='font-semibold'>Dirección de Salud Municipal
          Subsuelo del Consejo Deliberante
          CIC Barrio Manantial
          Agustín Gómez 201 oeste
        </p>
        <h3 className='text-[#4B0984] font-extrabold text-1xl'>
          Vacunas gratuitas disponibles
        </h3>
        <div className='list-disc pl-4'>
          <li>Hepatitis B. (Adultos y pediátricos)</li>
          <li>Neumococo conjugado 13 valente</li>
          <li>Pentavalente o quíntuple</li>
          <li>Antipoliomelítica inactivada
            (Salk.)
          </li>
          <li>Rotavirus</li>
          <li>Antimeningococo conjugado
            (Menveo)
          </li>
          <li>Hepatitis A (pediátrica)</li>
          <li>Triple viral</li>
          <li>Doble viral</li>
          <li>Varicela</li>
          <li>Triple bacteriana Celular (DPT)</li>
          <li>Triple bacteriana Acelular (DPTA)</li>
          <li>HPV</li>
          <li>Doble bacteriana (DT)</li>
          <li>Antigripal adulto hasta 65 años</li>
          <li>Antigripal pediátrico</li>
          <li>Neumococo polisacárido
            23 valente
          </li>
        </div>
        <h1 className='text-[#4B0984] font-extrabold text-1xl'>Requisitos</h1>
        <div className='list-disc pl-4'>
          <li>Traer calendario de vacunas (OBLIGATORIO).
            En caso de haberlo extraviado puede dirigirse a la Dirección de Salud a fin de constatar en el sistema el registro de vacunación
          </li>
          <li>Asistir con DNI.</li>
          <li>cubreboca/barbijo.</li>
          <p>Se colocan todas las vacunas contempladas en el Calendario Nacional de Vacunación, respetando en tiempo y forma la colocación de cada una.</p>
        </div>
        {/* CONTAINER PURPLE */}
        <div className='bg-[#4B0984] rounded-3xl w-[22rem] h-auto'>
          <div className='px-4 py-2'>
            <p className='text-white '>En caso que exista una situación particular, por favor comunicarse al 4309673 (Dir. Salud Municipal) antes de dirigirse al lugar de atención.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
