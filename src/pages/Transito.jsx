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
            <div className='container mx-auto flex flex-col gap-5 p-10 pt-28'>
                {/* TITULO, SUBTITULO */}
                <div className='pt-10 w-full flex flex-col-2 lg:w-full'>
                    <h1 className='font-extrabold text-2xl text-purple-800 lg:text-3xl'>LIBRE DEUDA TRÁNSITO</h1>
                </div>
                <div className='text-[#3E3E3E] '>
                    <p className='font-semibold text-base lg:text-2xl lg:w-1/2 pb-10'>Podés consultar el estado de deuda de tu vehículo correspondiente a infracciones de tránsito municipales y obtener tu libre deuda.</p>
                    <p className='font-extrebold'>En caso de registrar deudas por infracciones de tránsito municipales, deberás dirigirte al Juzgado de Faltas correspondiente, en el edificio del Anexo Güemes ubicado en Güemes 480 sur, en horario de 8 a 17 de lunes a viernes.</p>
                </div>
                {/* TITULO, SUBTITULO */}
                {/* IFRAME */}
                <div className=''>
                    <iframe width="700" height="450" src="https://libredeudatransito.municipiosanjuan.gob.ar/Libre_Deuda_Transito" frameborder="0" scrolling="no"></iframe>
                </div>
                {/* IFRAME */}
                {/* BUTTON */}
                <div className='items-center justify-center'>
                    <ButtonBack />
                </div>
                <div className='relative'>
                    <svg className='h-48 w-48 absolute right-0 -top-20'>
                        <image href={img3} alt="img not found" className='w-auto' />
                    </svg>
                </div>
                {/* BUTTON */}
            </div>
            {/* CONTENIDO */}
        </div>
    )
}
