import React from 'react'
import ButtonBack from '@components/Default/ButtonBack'
import { Link } from 'react-router-dom'
const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
const img3 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoTransito.svg'

const Obleas = () => {
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
          <h1 className='font-extrabold text-2xl text-purple-800 lg:text-[2rem]'>OBLEAS DE ESTACIONAMIENTO</h1>
        </div>
        <p className='font-semibold text-neutral-600 text-base lg:text-[1rem] lg:w-1/2'>Destinadas a personas con discapacidad, medios de prensa y carga y descarga de mercadería.</p>
        <h1 className='text-1xl font-extrabold text-purple-800 lg:text-[1.2rem]'>MEDIOS DE PRENSA</h1>
        <p className='font-semibold text-[#D85B35] lg:text-[1rem] italic'>Obleas destinadas a facilitar la labor de los medios de prensa en la Ciudad de San Juan.</p>
        <div className='rounded-xl'>
          <Link to='/plantillaobleas'>
            <span className='inline-block font-bold bg-[#4B0984] rounded-full lg:px-4 lg:py-2 px-3 py-1 shadow-lg text-sm lg:text-base text-white mr-2 mb-2 cursor-pointer'>
              + info
            </span>
          </Link>
        </div>
        <hr />
        <h1 className='text-1xl font-extrabold text-purple-800 lg:text-[1.2rem]'>PERSONAS CON DISCAPACIDAD</h1>
        <p className='font-semibold text-[#D85B35] lg:text-[1rem] italic'>Obleas de estacionamiento para personas con Certificado Único de Discapacidad.</p>
        <div className='rounded-xl'>
          <Link to='/personascondiscapacidad'>
            <span className='inline-block font-bold bg-[#4B0984] rounded-full lg:px-4 lg:py-2 px-3 py-1 shadow-lg text-sm lg:text-base text-white mr-2 mb-2 cursor-pointer'>
              + info
            </span>
          </Link>
        </div>
        <hr />
        <h1 className='text-1xl font-extrabold text-purple-800 lg:text-[1.2rem]'>CARGA Y DESCARGA DE MERCADERÍA</h1>
        <p className='font-semibold text-[#D85B35] lg:text-[1rem] italic'>Solicitud de habilitación de oblea de carga y descarga de mercadería. </p>
        <p className='font-semibold text-purple-500 lg:text-[1rem]'>Es necesario contar con un permiso previamente gestionado en el edificio municipal</p>
        <div className='rounded-xl'>
          <Link to='/cargaydescargamercaderia'>
            <span className='inline-block font-bold bg-[#4B0984] rounded-full lg:px-4 lg:py-2 px-3 py-1 shadow-lg text-sm lg:text-base text-white mr-2 mb-2 cursor-pointer'>
              + info
            </span>
          </Link>
        </div>
        <hr />
        <h1 className='text-1xl font-extrabold text-purple-800 lg:text-[1.2rem]'>PARA DE TAXI</h1>
        <p className='font-semibold text-[#D85B35] lg:text-[1rem] italic'>Solicitud de oblea de estacionamiento de taxi.</p>
        <div className='rounded-xl'>
          <Link to='/paradataxi'>
            <span className='inline-block font-bold bg-[#4B0984] rounded-full lg:px-4 lg:py-2 px-3 py-1 shadow-lg text-sm lg:text-base text-white mr-2 mb-2 cursor-pointer'>
              + info
            </span>
          </Link>
        </div>
        {/* CONTENIDO */}
        <div className='pr-72 lg:items-center lg:justify-center'>
          <ButtonBack />
        </div>
        <div className='relative'>
          <svg className='h-28 w-28 lg:w-64 lg:h-64 absolute -right-8 -top-20 lg:-top-40'>
            <image href={img3} alt='img not found' className='w-28 h-28 lg:w-full lg:h-full' />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Obleas
