import React from 'react'
import ButtonBack from '../components/Default/ButtonBack'
import img2 from '../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
import img3 from '../assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoTransito.svg'

export const Transito = () => {
    return (
        <div className='w-full'>
            <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent' />
            <div className='absolute right-0 top-24'>
                <svg className='h-20 w-20 lg:h-64 lg:w-64  -rotate-90 scale-y-[-1]'>
                    <image className='w-[190px] lg:w-[590px] object-cover ' href={img2} alt="img not found" />
                </svg>
            </div>
            {/* CONTENIDO */}
            <div className='container mx-auto flex flex-col gap-5 p-10 pt-28 lg:px-60'>
                {/* TITULO, SUBTITULO */}
                <div className='pt-10 w-full flex flex-col-2 lg:w-full'>
                    <h1 className='font-extrabold text-2xl text-purple-800 lg:text-4xl'>LIBRE DEUDA TRÁNSITO</h1>
                </div>
                <div className='text-sm lg:text-1xl'>
                    <p className='text-[#3E3E3E] font-semibold lg:font-semibold'>Podés consultar el estado de deuda de tu vehículo correspondiente a infracciones de tránsito municipales y obtener tu libre deuda.</p>
                    <p className='text-[#3E3E3E] font-extrabold lg:font-bold'>En caso de registrar deudas por infracciones de tránsito municipales, deberás dirigirte al Juzgado de Faltas correspondiente, en el edificio del Anexo Güemes ubicado en Güemes 480 sur, en horario de 8 a 17 de lunes a viernes.</p>
                </div>
                {/* IFRAME */}
                <div className='flex items-center justify-center'> 
                    <div className='w-full h-96'>
                        <iframe className='w-full h-full' src="https://libredeudatransito.municipiosanjuan.gob.ar/Libre_Deuda_Transito"></iframe>
                    </div>
                </div>
                {/* BUTTON */}
                <div className='items-center justify-center'>
                    <ButtonBack />
                </div>
                <div className='relative'>
                    <svg className='h-24 w-24 lg:h-40 lg:w-60 absolute right-0 -top-20'>
                        <image href={img3} alt="img not found" className='w-full lg:w-full lg:h-40' />
                    </svg>
                </div>
            </div>
        </div>
    )
}
