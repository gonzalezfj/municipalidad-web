import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img1 from '@assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoJuzgado.svg'

const DescargoTransito = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto gap-8 flex flex-col'>
        {/* TITLE */}
        <div className='
        block absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent
         lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[140px] lg:border-t-[#FFC14F] lg:border-l-[140px] lg:border-l-[#FFC14F] lg:border-b-[140px] lg:border-b-transparent lg:border-r-[140px] lg:border-r-transparent'
        />
        {/* TEXT AND TITLE */}
        <div className='container mx-auto pt-40 lg:pt-64 gap-10 flex flex-col text-[#3E3E3E] font-semibold'>
          {/* PARRAFOS */}
          <div className='flex flex-col gap-4 px-8 lg:text-xl'>
            <h1 className='text-2xl font-extrabold text-[#4B0984] lg:text-3xl'>DESCARGO INFRACCIONES DE TRANSITO</h1>
            <p className='lg:text-lg text-[#3E3E3E] font-extrabold'>
              En caso de que desees efectuar descargos de infracciones de tránsito en línea.
            </p>
            <section className='flex flex-col gap-3 lg:text-lg'>
              <a href='https://municipiosanjuan.gob.ar/descargoweb-transito' className='bg-[#4B0984] text-white flex justify-center items-center rounded-2xl w-44 h-12 lg:w-64 lg:text-xl font-extrabold'>TRAMITAR ONLINE</a>
              <p className='font-bold'>Para efectuar el descargo en línea deberás contar con el número de dominio de su vehículo (La patente) y una cuenta de correo electrónico. Es conveniente que cuente con el número de acta y la fecha.</p>
              <p className='font-bold'>Para otras infracciones municipales:</p>
              <a href='https://municipiosanjuan.gob.ar/descargoweb-juzgados' target='_blank' className='bg-[#FFC14F] rounded-2xl flex justify-center items-center w-56 h-12 lg:w-72 text-center lg:text-xl font-extrabold' rel='noreferrer'>OTRAS INFRACCIONES</a>
            </section>
            <section className='text-[#3E3E3E] flex flex-col gap-3 lg:text-lg'>
              <p className='text-[#4B0984] font-bold'>Los Juzgados Municipales atienden de 8 a 19hs todos los días hábiles.</p>
              <p>A efectos de facilitar el ejercicio del derecho de defensa se enlazan las ordenanzas más pertinentes, pudiendo consultarse todas las ordenanzas en la sección: </p>
            </section>
            <div className='flex flex-col gap-2'>
              <a href='https://municipiosanjuan.gob.ar/ordenanzas' target='_blank' className='w-60 h-12 lg:w-72 lg:h-16 bg-[#D85B35] rounded-2xl text-white lg:px-2 flex items-center justify-center' rel='noreferrer'>ORDENANZAS</a>
              <a href='https://municipiosanjuan.gob.ar/ordenanzas/ordenanzas-2003/7320-ord-7783/file' target='_blank' className='flex flex-col w-60 h-12 lg:w-72 lg:h-16 bg-[#D85B35] rounded-2xl text-white lg:px-2 items-center justify-center' rel='noreferrer'>ORDENANZA 7783<span className='text-[10px]'>Código Municipal de Faltas</span></a>
              <a href='https://municipiosanjuan.gob.ar/ordenanzas/ordenanzas-2013-1/10376-ord-10986/file' target='_blank' className='flex flex-col w-60 h-12 lg:w-72 lg:h-16 bg-[#D85B35] rounded-2xl text-white lg:px-2 items-center justify-center' rel='noreferrer'>ORDENANZA 10986<span className='text-[10px]'>Juicios y Procesos Especiales</span></a>
            </div>
          </div>
          <div className='relative z-0'>
            <svg className='h-36 w-36 lg:h-44 lg:w-44 absolute -top-[10px] lg:-top-[100px] right-10 lg:-top-[280px] rotate-180 scale-y-[-1]'>
              <image href={img1} alt='img not found' className='w-24 lg:w-44 lg:h-44' />
            </svg>
          </div>
        </div>
        {/* BTN BACK */}
        <div className='container mx-auto'>
          <div className=''>
            <ButtonBack />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DescargoTransito
