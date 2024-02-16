import React from 'react'
import imgCard from '../../assets/imagen2.jpg'
import img1 from '../../assets/mobilDesktopAgenda/Miscelanias-Agenda.svg'
import img2 from '../../assets/mobilDesktopAgenda/Icono-Calendario-Agenda.svg'
import { FaArrowLeft } from 'react-icons/fa'

export const NuestraAgenda = () => {
  return (
    <div className='container lg:gap-1 lg:pl-20 items-center lg:items-center lg:justify-center lg:flex lg:w-full justify-center flex w-full flex-col'>
      <div className='p-10 lg:w-full lg:pl-16'>
        <h1 className='text-4xl lg:text-6xl font-bold text-purple-800'>Nuestra Agenda</h1>
      </div>
      {/* RECURSO IMG */}
      <div className='w-full h-36 mb-10'>
        <img src={img1} alt='' className='w-full h-full object-cover' />
      </div>
      {/* RECURSO IMG */}
      <div className='lg:flex-row  items-center justify-center flex flex-col'>
        {/* CARD  */}
        <div className='border-2 border-purple-800 max-w-[350px] items-center justify-center flex flex-col rounded-3xl overflow-hidden shadow-lg'>
          <img className='w-full rounded-3xl shadow-lg' src={imgCard} alt='Sunset in the mountains' />
          <div className='px-6 pt-4'>
            <div className='font-bold text-4xl mb-2 px-2 text-violet-900'>Campamento Sanitario</div>
          </div>
          <div className='flex flex-col w-full'>
            <div className='w-20 h-20 ml-4'>
              <img src={img2} alt='img not found' className='w-full h-full' />
            </div>
            <div className='px-6 pb-2 '>
              <span className='inline-block px-3 py-0 text-sm font-semibold text-gray-700 mr-2 mb-2'>8 de enero - 9hs a 12hs</span>
              <span className='inline-block px-3 py-0 text-sm font-semibold text-gray-700 mr-2 mb-2'>Laprida 892 este</span>
            </div>
            <div className='px-8 py-4'>
              <button className='bg-purple-500 font-bold rounded-2xl text-white py-1 px-4'>
                Salud
              </button>
            </div>
          </div>
        </div>
        {/* CARD  */}
        {/* FINAL */}
        <div className='container flex flex-col gap-4 p-10 lg:mt-0 lg:pt-0 lg:pb-60 lg:top-0'>
          <div className=''>
            <h2 className='text-2xl text-purple-800 font-bold lg:text-4xl'>Destinada para todo publico</h2>
          </div>
          <div className='text-slate-800 px-6'>
            <span className='font-bold '>
              <li>Control de TA</li>
              <li>Talla y peso</li>
              <li>Control médico y odontológico</li>
              <li>Glucemia</li>
              <li>Asesoramiento nutriciona</li>
              <li>Programa “Mis Primeros 1000 días</li>
              <li>Vacunación Covid-19</li>
            </span>
          </div>
          <p className='text-slate-500 font-semibold'>
            Según Calendario Nacional:
            asistir con carnet, DNI, menores acompañados por un adulto.
          </p>
          <button className='bg-primary rounded-2xl w-14 py-2 items-center justify-center flex'><FaArrowLeft /></button>
        </div>
        {/* FINAL */}
      </div>
    </div>
  )
}
