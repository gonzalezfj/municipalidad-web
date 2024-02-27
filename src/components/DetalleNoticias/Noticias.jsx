import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import ButtonBack from '../Default/ButtonBack'
import img1 from '@assets/BuscadorNoticias_mobile/BuscarNoticias_foto1.jpg'
import img2 from '@assets/BuscadorNoticias_mobile/BuscarNoticias_foto2.jpg'
import img3 from '@assets/BuscadorNoticias_mobile/BuscarNoticias_foto3.jpg'
export const Noticias = () => {
  return (
    <div className='w-full'>
      <img src='' alt='img not found' className='w-44 h-44' />
      <div className='container mx-auto px-8 flex flex-col gap-3'>
        <h1 className='font-extrabold text-[#3E3E3E] text-2xl'> NOTICIAS</h1>
        <div className='flex flex-col gap-3'>
          <div className='lg:flex lg:flex-col-2 lg:gap-8'>
            <img src={img1} alt='img not found' className='lg:w-[30rem]' />
            <div className='lg:w-[30rem]'>
              <h4 className='text-[#8A43EF] font-bold'>Viernes, 19 Enero 2024 13:08</h4>
              <h1 className='font-extrabold text-[#4B0984] text-[1rem]'>Los niños de la Colonia de Verano recibieron una capacitacíon de RCP</h1>
              <p>Personal especializado de ECO generó un espacio de aprendizaje para los niños durante la temporada de colonia. Trabajaron con los pequeños que serán los encargados de transmitir lo aprendido en sus familias, colegios, clubes y espacios que comparten a diario</p>
              <button className='font-bold flex items-center border rounded-3xl px-3 py-1 shadow-xl w-20'>
                <span className='text-[#616161]'>Info</span>
                <FaPlusCircle className='ml-2' style={{ color: '#8A43EF' }} />
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='lg:flex lg:flex-col-2 lg:gap-8'>
            <img src={img3} alt='img not found' className='w-[30rem]' />
            <div className='lg:w-[30rem]'>
              <h4 className='text-[#8A43EF] font-bold'>Jueves, 18 Enero 2024 12:19</h4>
              <h1 className='font-extrabold text-[#4B0984] text-[1rem]'>Entrega de certificados de capacitación en RCP y Uso de DEA para el Personal de Estacionamiento Controlado ECO de la Ciudad de San Juan</h1>
              <p>La Intendente Susana Laciar encabezó la ceremonia de reconocimiento a los Monitores Urbanos por su compromiso con la seguridad con los vecinos.</p>
              <button className='font-bold flex items-center border rounded-3xl px-3 py-1 shadow-xl w-20'>
                <span className='text-[#616161]'>Info</span>
                <FaPlusCircle className='ml-2' style={{ color: '#8A43EF' }} />
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <img src={img2} alt='img not found' className='w-[30rem]' />
          <h4 className='text-[#8A43EF] font-bold'>Jueves, 18 Enero 2024 09:30</h4>
          <h1 className='font-extrabold text-[#4B0984] text-[1rem]'>Acercamiento institucional entre la Municipalidad y la Facultad de Arquitectura de la UNSJ</h1>
          <p>La intendente Dra. Susana Laciar y el Decano Arq. Guillermo Velasco exploran oportunidades de colaboración para el desarrollo local.</p>
          <button className='font-bold flex items-center border rounded-3xl px-3 py-1 shadow-xl w-20'>
            <span className='text-[#616161]'>Info</span>
            <FaPlusCircle className='ml-2' style={{ color: '#8A43EF' }} />
          </button>
        </div>
        <div className='lg:px-96 lg:-left-20'>
          <div className='pt-10'>
            <ButtonBack />
          </div>
        </div>
      </div>
    </div>
  )
}
