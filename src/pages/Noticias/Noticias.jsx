import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { Card } from './Card'
import ButtonBack from '@components/Default/ButtonBack'
import img2 from '@assets/BuscadorNoticias_mobile/BuscarNoticias_foto2.jpg'
import img3 from '@assets/BuscadorNoticias_mobile/BuscarNoticias_foto3.jpg'
import img4 from '@assets/BuscadorNoticias_mobile/BuscarNoticias_graficaFondo.svg'
import img5 from '@assets/BuscadorNoticias_mobile/BuscarNoticias_graficaFondo2.svg'

export const Noticias = () => {
  return (
    <div className='w-full'>
      <img src={img4} alt='img not found' className='w-full h-32 lg:h-44 absolute object-cover' />
      <h1 className='font-extrabold text-[#3E3E3E] text-2xl lg:text-3xl p-10 lg:pl-[18em] lg:pb-[7rem] pt-[15rem]'> NOTICIAS</h1>
      <img src={img5} alt='img not found' className='w-36 h-w-36 absolute -z-10 lg:w-60 lg:h-w-60' />
      <div className='container mx-auto px-8 flex flex-col gap-3 items-center pt-10'>
        <Card />
        <div className='flex flex-col gap-3'>
          <div className='lg:flex lg:flex-col-2 lg:gap-8'>
            <img src={img3} alt='img not found' className='lg:w-[30rem] rounded-2xl object-cover' />
            <div className='lg:w-[30rem]'>
              <h4 className='text-[#8A43EF] font-bold lg:text-2xl'>Jueves, 18 Enero 2024 12:19</h4>
              <h1 className='font-extrabold text-[#4B0984] text-[1rem] lg:text-[1.2rem]'>Entrega de certificados de capacitación en RCP y Uso de DEA para el Personal de Estacionamiento Controlado ECO de la Ciudad de San Juan</h1>
              <p className='lg:text-[1.3rem]'>La Intendente Susana Laciar encabezó la ceremonia de reconocimiento a los Monitores Urbanos por su compromiso con la seguridad con los vecinos.</p>
              <div className='pt-2'>
                <button className='font-bold flex items-center border rounded-3xl px-3 py-1 shadow-xl w-20'>
                  <span className='text-[#616161]'>Info</span>
                  <FaPlusCircle className='ml-2' style={{ color: '#8A43EF' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='lg:flex lg:flex-col-2 lg:gap-8'>
            <div className='lg:h-[18rem]'>
              <img src={img2} alt='img not found' className='lg:w-[30rem] lg:h-full rounded-2xl object-cover' />
            </div>
            <div className='lg:w-[30rem]'>
              <h4 className='text-[#8A43EF] font-bold lg:text-2xl'>Jueves, 18 Enero 2024 09:30</h4>
              <h1 className='font-extrabold text-[#4B0984] text-[1rem] lg:text-[1.2rem]'>Acercamiento institucional entre la Municipalidad y la Facultad de Arquitectura de la UNSJ</h1>
              <p className='lg:text-[1.3rem]'>La intendente Dra. Susana Laciar y el Decano Arq. Guillermo Velasco exploran oportunidades de colaboración para el desarrollo local.</p>
              <div className='pt-2'>
                <button className='font-bold flex items-center border rounded-3xl px-3 py-1 shadow-xl w-20'>
                  <span className='text-[#616161]'>Info</span>
                  <FaPlusCircle className='ml-2' style={{ color: '#8A43EF' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:pt-8 lg:flex justify-end hidden'>
        <div className='bg-amber-400 w-[30rem] h-36 flex flex-col items-center justify-center rounded-room lg:transform lg:rotate-180'>
          <label className='text-white text-2xl lg:transform lg:rotate-180'>Buscar Noticias</label>
          <input className='rounded-lg border-slate-200 mt-2 lg:transform lg:rotate-180' type='text' />
        </div>
      </div>
      <div className='pt-10 pl-8 lg:pl-[33rem]'>
        <ButtonBack />
      </div>
    </div>
  )
}

export default Noticias
