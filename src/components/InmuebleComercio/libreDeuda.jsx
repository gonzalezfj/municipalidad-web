import React from 'react'
import img1 from '../../assets/img temporal/img prueba video.jpg'
import img2 from '../../assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoRentas.svg'
import ButtonBack from '../Default/ButtonBack'
import img3 from '../../assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoTransito.svg'
import img4 from '../../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
export const LibreDeuda = () => {
    return (
        <div className='w-full'>
            <div className='container flex flex-col gap-4'>
                {/* TITULO */}
                <div className='bg-purple-700 h-44 px-10'>
                    <div className='pt-24 flex flex-col-2 gap-2 w-full items-center justify-center'>
                        <div className='w-14'>
                            <img src={img2} alt="" className='object-cover w-full' />
                        </div>
                        <h1 className='text-1xl font-extrabold w-full text-white'>LIBRE DEUDA INMUEBLE Y COMERCIO</h1>
                    </div>
                </div>
                {/* TEXT Y IMG */}
                <div className='px-8 gap-4 flex flex-col'>
                    <p>Para generar tu libre deuda de comercio o inmueble debés buscar en el generador de boletas si tenés deuda y en caso de que no tengas tendrás la opción de descargar el certificado.</p>
                    <div className='cursor-pointer'>
                        <img src={img1} alt="" className='' />
                    </div>
                </div>
                {/* TEXT Y BUTTON */}
                <div className='rounded-t-2xl bg-yellow-400 px-8 grid grid-rows gap-8 py-4'>
                    <p className='text-1xl font-extrabold'>Para obtener tus certificados de libre deuda de comercios o inmuebles.</p>
                    <div className='flex flex-col-2 gap-8 items-center justify-center'>
                        <div className='w-40 h-52 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col items-center justify-center cursor-pointer'>
                            <div className='w-36 h-32'>
                                <img src='' className='object-cover' alt='Boletas Inmueble' />
                            </div>
                            <div className='flex-1 w-40 lg:w-full flex items-center justify-center transition ease-in-out delay-150 bg-secondary hover:bg-purple-600 duration-200'>
                                <h4 className='text-sm uppercase text-center w-full h-full items-center justify-center flex text-slate-50'>INMUEBLE</h4>
                            </div>
                        </div>
                        <div className='w-40 h-52 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col items-center justify-center cursor-pointer'>
                            <div className='w-36 h-32'>
                                <img src='' className='object-cover' alt='Boletas Comercio' />
                            </div>
                            <div className='flex-1 w-40 lg:w-full flex items-center justify-center transition ease-in-out delay-150 bg-secondary hover:bg-purple-600 duration-200'>
                                <h4 className='text-sm uppercase text-center w-full h-full items-center justify-center flex text-slate-50'>COMERCIO</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FINAL */}
                <div className='px-10 py-4'>
                    <div className='flex flex-col-2'>
                        <p className='font-bold text-[#3E3E3E] text-sm'>Asimismo, podés consultar la autenticidad de los certificados de libre deuda municipal que recibes a través del siguiente enlace.</p>
                        <div className='flex items-center z-10'>
                            <button className='font-extrabold text-sm text-white bg-purple-800 px-6 h-11 rounded-3xl'>Autenticidad libre deuda</button>
                        </div>
                    </div>
                    {/* IMG */}
                    <div className='relative z-0'>
                        <svg className='h-48 w-48 absolute -right-32 -top-20 rotate-90 scale-y-[-1]'>
                            <image href={img4} alt="img not found" className='w-auto' />
                        </svg>
                    </div>
                    {/* BUTTON BACK */}
                    <div className='pt-10'>
                        <ButtonBack />
                    </div>
                </div>
            </div>
        </div>
    )
}
