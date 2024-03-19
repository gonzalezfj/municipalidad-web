import React from 'react'
import ButtonBack from '../Default/ButtonBack'
const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
const img3 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoComercio.svg'

const ManipulacionAlimentos = () => {
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
          <h1 className='font-extrabold text-2xl text-[#D85B35] lg:text-3xl'>CURSO DE MANIPULACION DE ALIMENTOS</h1>
        </div>
        {/* INFO  */}
        <div className='text-[#3E3E3E]'>
          <div className=''>
            <p className='mb-4'>Si vas a trabajar manipulando alimentos o materias primas el Carnet de Manipulación de Alimentos es un requisito obligatorio que te van a solicitar. En nuestra plataforma de Aula virtual podrás realizarlo de manera gratuita.
            </p>
            <p className='mb-4'>En CIUDAD SAN JUAN te podemos ayudar a obtener tu carnet de Manipulador de Alimentos a través de nuestro curso virtual:</p>
            <li className='mb-4'>100% en línea.</li>
            <li className='mb-4'>Gratuito.</li>
            <li>A tu propio tiempo.</li>
          </div>
          <p className='py-3'>Cuando lo hayas finalizado y apruebes los exámenes te vamos a dar tu carnet válido en todo el país.</p>
          <p>Accedé al Aula Virtual del Municipio, registrate y comenzá el curso. Así de fácil.</p>
        </div>
        {/* INFO  */}
        <div className='py-4'>
          <a href='https://capitalsanjuan.edu.ar/moodle/' target='_blank' rel='noreferrer'>
            <button className='hover:bg-transparent bg-[#D85B35] text-white text-1xl font-extrabold  hover:text-[#D85B35] py-4 px-8  border-[#D85B35] border-2 hover:border-[#D85B35] rounded-3xl'>
              INGRESA AL AULA VIRTUAL
            </button>
          </a>
        </div>
        <div className='items-center justify-center'>
          <ButtonBack />
        </div>
        <div className='relative'>
          <svg className='h-28 w-28 lg:w-36 lg:h-36 absolute right-5 -top-20'>
            <image href={img3} alt='img not found' className='w-28 h-28' />
          </svg>
        </div>
      </div>
      {/* CONTENIDO */}
    </div>
  )
}

export default ManipulacionAlimentos
