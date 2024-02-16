import React from 'react'
import ButtonBack from '../components/Default/ButtonBack'
import img2 from '../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
import img3 from '../assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoTransito.svg'
import { Link } from 'react-router-dom'
export const Obleas = () => {
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
        <div className='pt-10 w-24 flex flex-col-2 lg:w-full '>
          <h1 className='font-extrabold text-1xl text-purple-800 lg:text-3xl'>OBLEAS DE ESTACIONAMIENTO</h1>
        </div>
        <p className='font-semibold text-neutral-600 text-base lg:text-2xl lg:w-1/2'>Destinadas a personas con discapacidad, medios de prensa y carga y descarga de mercadería.</p>
        <h1 className='text-1xl font-extrabold text-purple-800 lg:text-3xl'>MEDIOS DE PRENSA</h1>
        <p className='font-semibold text-[#D85B35] lg:text-2xl'>Obleas destinadas a facilitar la labor de los medios de prensa en la Ciudad de San Juan.</p>
        <div className='rounded-xl'>
          <Link to='/plantillaObleas'>
            <span className='inline-block font-bold bg-slate-100 rounded-full lg:px-4 lg:py-2 px-3 py-1 shadow-lg text-sm lg:text-base text-gray-700 mr-2 mb-2 cursor-pointer'>
              + info
            </span>
          </Link>
        </div>
        <hr />
        <h1 className='text-1xl font-extrabold text-purple-800 lg:text-3xl'>PERSONAS CON DISCAPACIDAD</h1>
        <p className='font-semibold text-[#D85B35] lg:text-2xl'>Obleas de estacionamiento para personas con Certificado Único de Discapacidad.</p>
        <div className='rounded-xl'>
          <span className='inline-block font-bold bg-slate-100 rounded-full lg:px-4 lg:py-2 px-3 py-1 shadow-lg text-sm lg:text-base text-gray-700 mr-2 mb-2 cursor-pointer'>
            + info
          </span>
        </div>
        <hr />
        <h1 className='text-1xl font-extrabold text-purple-800 lg:text-3xl'>CARGA Y DESCARGA DE MERCADERÍA</h1>
        <p className='font-semibold text-[#D85B35] lg:text-2xl'>Solicitud de habilitación de oblea de carga y descarga de mercadería. </p>
        <p className='font-semibold text-purple-500 lg:text-2xl'>Es necesario contar con un permiso previamente gestionado en el edificio municipal</p>
        <div className='rounded-xl'>
          <span className='inline-block font-bold bg-slate-100 rounded-full lg:px-4 lg:py-2 px-3 py-1 shadow-lg text-sm lg:text-base text-gray-700 mr-2 mb-2 cursor-pointer'>
            + info
          </span>
        </div>
        {/* CONTENIDO */}
        <div className='items-center justify-center'>
          <ButtonBack />
        </div>
        <div className='relative'>
          <svg className='h-48 w-48 absolute right-0 -top-20'>
            <image href={img3} alt='img not found' className='w-auto' />
          </svg>
        </div>
      </div>
    </div>
  )
}
