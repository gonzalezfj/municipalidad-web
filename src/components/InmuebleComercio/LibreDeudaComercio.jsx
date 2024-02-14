import React from 'react'
import img2 from '../../assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoRentas.svg'
import ButtonBack from '../Default/ButtonBack'

export const LibreDeudaComercio = () => {
    return (
        <div className='w-full'>
            <div className='mx-auto gap-8 flex flex-col'>
                {/* TITLE */}
                <div className='hidden lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[75px] lg:border-t-[#FFC14F] lg:border-l-[75px] lg:border-l-[#FFC14F] lg:border-b-[75px] lg:border-b-transparent lg:border-r-[75px] lg:border-r-transparent' />
                <div className='bg-purple-700 h-44 lg:h-44 px-10 lg:w-full'>
                    <div className='pt-24 flex flex-col-2 gap-2 w-full items-center justify-center lg:items-center lg:justify-center lg:flex lg:pt-20'>
                        <div className='w-14'>
                            <img src={img2} alt="img not found" className='object-cover w-full' />
                        </div>
                        <h1 className='text-1xl font-extrabold w-full text-white lg:items-center lg:justify-center lg:flex lg:w-1/3 lg:text-3xl'>LIBRE DEUDA INMUEBLE Y COMERCIO</h1>
                    </div>
                </div>
                {/* TEXT AND TITLE*/}
                <div className='lg:px-96 px-8 gap-4 flex flex-col'>
                    <h1 className='font-extrabold text-[20px] text-[#4B0984] lg:text-[30px]'>AUTENTICIDAD LIBRE DE DEUDA</h1>
                    <p className='text-[#3E3E3E] font-bold lg:text-2xl lg:w-3/5'>Puede comprobar la autenticidad de los certificados de libre deuda municipales.</p>
                    <div className='flex flex-col gap-4'>
                        {/* INMUEBLE */}
                        <div className=''>
                            <div>
                                <h1 className='font-extrabold text-[#4B0984] text-[20px] lg:text-3xl'>Inmueble</h1>
                                <p className='font-bold text-purple-900 italic lg:text-2xl'>Para verificar la Autenticidad del Libre Deuda ingrese el Numero de control del mismo.</p>
                            </div>
                            <div className='lg:flex lg:flex-col-3 lg:gap-8'>
                                <div className='flex py-4'>
                                    <label className='font-bold text-base w-28 lg:text-1xl'>Número de control:</label>
                                    <input type="text" className='rounded-xl border border-[#4B0984]' />
                                </div>
                                <div className='lg:items-center lg:flex'>
                                    <button className='bg-[#4B0984] rounded-2xl text-[#FFFF] px-4 py-2 lg:px-6 lg:py-3'>Buscar</button>
                                </div>
                            </div>
                        </div>
                        {/* COMERCIO */}
                        <div className=''>
                            <div>
                                <h1 className='font-extrabold text-[#4B0984] text-[20px] lg:text-3xl'>Comercio</h1>
                                <p className='font-bold text-purple-900 italic lg:text-2xl'>Para verificar la Autenticidad del Libre Deuda ingrese el Numero de control del mismo.</p>
                            </div>
                            <div className='lg:flex lg:flex-col-3 lg:gap-8'>
                                <div className='flex py-4'>
                                    <label className='font-bold text-base w-28'>Número de control:</label>
                                    <input type="text" className='rounded-xl border border-[#4B0984]' />
                                </div>
                                <div className='lg:items-center lg:flex'>
                                    <button className='bg-[#4B0984] rounded-2xl text-[#FFFF] px-4 py-2 lg:px-6 lg:py-3'>Buscar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BTN BACK */}
                <div className='px-10 py-4'>
                    <div className='pt-10 lg:items-center lg:justify-center lg:flex'>
                        <ButtonBack />
                    </div>
                </div>
            </div>
        </div>
    )
}
