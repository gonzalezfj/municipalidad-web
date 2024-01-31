import React from 'react'
import ButtonAtras from '../components/Default/ButtonAtras'
import img1 from '../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo.svg'
import img2 from '../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
import img3 from '../assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoTransito.svg'
export const Obleas = () => {
    return (
        <div className='w-full'>
            <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent' />
            <div className='absolute right-0 top-24'>
                <svg className='h-20 w-20 -rotate-90 scale-y-[-1]'>
                    <image className='w-[190px] object-cover ' href={img2} alt="img not found" />
                </svg>
            </div>
            <div className='container flex flex-col gap-5 p-10 pt-28'>
                <div className='pt-10 w-24 flex flex-col-2'>
                    <h1 className='font-extrabold text-1xl text-purple-800'>OBLEAS DE ESTACIONAMIENTO</h1>
                </div>
                <p className='font-semibold text-neutral-600 text-base'>Destinadas a personas con discapacidad, medios de prensa y carga y descarga de mercadería.</p>
                <h1 className='text-1xl font-extrabold text-purple-800'>MEDIOS DE PRENSA</h1>
                <p className='font-semibold text-[#D85B35]'>Obleas destinadas a facilitar la labor de los medios de prensa en la Ciudad de San Juan.</p>
                <div className='rounded-xl'>
                    <span className='inline-block font-bold bg-slate-100 rounded-full px-3 py-1 shadow-lg text-sm text-gray-700 mr-2 mb-2 cursor-pointer'>
                        + info
                    </span>
                </div>
                <hr />
                <h1 className='text-1xl font-extrabold text-purple-800'>PERSONAS CON DISCAPACIDAD</h1>
                <p className='font-semibold text-[#D85B35]'>Obleas de estacionamiento para personas con Certificado Único de Discapacidad.</p>
                <div className='rounded-xl'>
                    <span className='inline-block font-bold bg-slate-100 rounded-full px-3 py-1 shadow-lg text-sm text-gray-700 mr-2 mb-2 cursor-pointer'>
                        + info
                    </span>
                </div>
                <hr />
                <h1 className='text-1xl font-extrabold text-purple-800'>CARGA Y DESCARGA DE MERCADERÍA</h1>
                <p className='font-semibold text-[#D85B35]'>Solicitud de habilitación de oblea de carga y descarga de mercadería. </p>
                <p className='font-semibold text-purple-500'>Es necesario contar con un permiso previamente gestionado en el edificio municipal</p>
                <div className='rounded-xl'>
                    <span className='inline-block font-bold bg-slate-100 rounded-full px-3 py-1 shadow-lg text-sm text-gray-700 mr-2 mb-2 cursor-pointer'>
                        + info
                    </span>
                </div>
                <div className='items-center justify-center'>
                    <ButtonAtras />
                </div>
                <div className='relative'>
                    <svg className='h-48 w-48 absolute right-0 -top-20'>
                        <image href={img3} alt="img not found" className='w-auto' />
                    </svg>
                </div>
            </div>
        </div>
    )
}
