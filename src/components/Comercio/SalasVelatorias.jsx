import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import { useNavigate } from 'react-router'
const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
const img3 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoComercio.svg'

const SalasVelatorias = () => {
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }
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
          <h1 className='font-extrabold text-2xl text-[#D85B35] lg:text-3xl'>SALAS VELATORIAS</h1>
        </div>
        {/* INFO  */}
        <div className='text-[#3E3E3E]'>
          <p className=''>Acá podrás consultar los requisitos específicos, no olvides revisarlos.
          </p>
        </div>
        {/* INFO  */}
        <div className='mb-5'>
          <button onClick={() => handleClick('/habilitaciones')} className='hover:bg-transparent bg-[#FFC14F] text-#3E3E3E text-1xl font-extrabold  hover:text-[#FFC14F] py-4 px-8  border-[#FFC14F] border-2 hover:border-[#FFC14F] rounded-3xl'>
            REQUISITOS GENERALES
          </button>
        </div>
        <div className='text-[#3E3E3E]'>
          <p className='mb-6'>El titular de la actividad destinada a Salas Velatorias, previo a iniciar el trámite de Habilitación debe obtener la factibilidad de localización emitida por la Secretaría de Planificación Urbana de la Municipalidad de la Ciudad de San Juan.</p>
        </div>
        <div className='items-center justify-center'>
          <ButtonBack />
        </div>
        <div className='relative mb-16'>
          <svg className='h-28 w-28 lg:w-36 lg:h-36 absolute right-5 -top-20'>
            <image href={img3} alt='img not found' className='w-28 h-28' />
          </svg>
        </div>
      </div>
      {/* CONTENIDO */}
    </div>
  )
}

export default SalasVelatorias
