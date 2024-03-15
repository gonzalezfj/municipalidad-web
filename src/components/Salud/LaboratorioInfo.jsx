import React from 'react'

export const LaboratorioInfo = () => {
  return (
    <div>
      <div className='container flex flex-col h-full px-8 gap-2 border border-purple-800 rounded-3xl shadow-2xl p-10'>
        <h1 className='text-[#4B0984] font-extrabold text-[2rem]'>Laboratorio</h1>
        <h4 className='text-[#4B0984] font-extrabold text-2xl'>Atencion</h4>
        <li className='font-semibold'>Dirección de Salud Municipal
          Subsuelo del Concejo Deliberante.
          Extracciones: Lunes a viernes de
          7:30 a 9:30hs, solo con turnos.
          Grupo sanguíneo: 7:30 a 12hs.
        </li>
        <button className='bg-[#FFC14F] text-white w-[10rem] py-1 mt-2 mb-2 rounded-xl'>Pedir turnos</button>
        <li className='font-semibold'>CIC Barrio Manantial
          Agustín Gómez 201 oeste.
          Miércoles de 8 a 10hs, por orden
          de llegada.
        </li>
        <h2 className='text-[#D85B35] font-extrabold text-2xl'>
          Lic. Alberto Tripolone
        </h2>
        <h2 className='text-[#4B0984] font-bold'>Análisis</h2>
        <div className='list-disc pl-4'>
          <li>Hemograma completo</li>
          <li>Eritrosedimentación</li>
          <li>Glucemia</li>
          <li>Uremia</li>
          <li>Calcemia</li>
          <li>Ácido úrico</li>
          <li>Colesterol total</li>
          <li>HDL y LDL</li>
          <li>Triglicéridos</li>
          <li>GOT y GPT</li>
          <li>Fosfatasa alcalina</li>
          <li>Gama GT</li>
          <li>Coagulación (TP y KPTT)</li>
          <li>Creatinina</li>
          <li>Antiestreptolisina</li>
          <li>Proteína C reactiva</li>
          <li>Chagas</li>
          <li>Huddleson</li>
          <li>Toxoplasmosis</li>
          <li>Test de embarazo</li>
          <li>Grupo sanguíneo y factor Rh</li>
          <li>Orina completa</li>
          <li>HIV</li>
          <li>Hepatitis B</li>
          <li>Hepatitis C</li>
          <li>V.D.R.L. (Sífilis)</li>
        </div>
        <h1 className='text-[#4B0984] font-extrabold text-2xl'>Requisitos</h1>
        <div className='list-disc pl-4'>
          <li>No poseer obra social y/o cobertura médica.</li>
          <li>Traer DNI.</li>
          <li>Traer calendario de vacunación.</li>
          <li>Asistir con cubreboca/barbijo.</li>
        </div>
        <h1 className='text-[#4B0984] font-extrabold text-2xl'>Indicaiones para los análisis de rutina</h1>
        <div className='list-disc pl-4'>
          <li>Asistir en ayunas.</li>
          <li>Dieta libre de grasas 24 horas previas a la extracción.</li>
          <li>Recolectar la primera orina de la mañana (en el caso de ser solicitada en la indicación médica).</li>
          <li>Asistir con indicación médica del análisis a realizar.</li>
        </div>
        <h1 className='text-[#4B0984] font-extrabold text-2xl'>Indicaciones factor y grupo sanguíneo</h1>
        <div className='list-disc pl-4'>
          <li>No es necesario asistir en ayunas.</li>
          <li>Dieta libre de grasas 24hs previas a la extracción</li>
        </div>
      </div>
    </div>
  )
}
