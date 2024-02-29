import React from 'react'
import img2 from '../../assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoRentas.svg'
// import img3 from '../../assets/Libre Deuda/LibreDeuda_graficoInmueble.svg'
// import img4 from '../../assets/Libre Deuda/LibreDeuda_graficoComercio.svg'
import img5 from '../../assets/Libre Deuda/LibreDeuda_fondo.svg'
import ButtonBack from '../Default/ButtonBack'

export const LibreDeudaComercio = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto gap-8 flex flex-col'>
        {/* TITLE */}
        <div className='hidden lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[75px] lg:border-t-[#FFC14F] lg:border-l-[75px] lg:border-l-[#FFC14F] lg:border-b-[75px] lg:border-b-transparent lg:border-r-[75px] lg:border-r-transparent' />
        <div className='bg-purple-700 h-44 lg:h-48 px-10 lg:w-full'>
          <div className='pt-24 flex container mx-auto w-full items-center justify-center lg:items-center lg:justify-center lg:flex lg:pt-28'>
            <div className='w-full flex md:justify-center'>
              <img src={img2} alt='img not found' className='w-14' />
              <h1 className='text-xl font-extrabold text-white lg:items-center lg:justify-center lg:flex lg:text-3xl'>LIBRE DEUDA INMUEBLE Y COMERCIO</h1>
            </div>
          </div>
        </div>
        {/* TEXT AND TITLE */}
        <div className='container mx-auto gap-4 flex flex-col'>
          <h1 className='font-extrabold text-center text-[20px] text-[#4B0984] lg:text-[30px]'>AUTENTICIDAD LIBRE DE DEUDA</h1>
          <p className='text-[#3E3E3E] font-bold text-center lg:text-2xl '>Puede comprobar la autenticidad de los certificados de libre deuda municipales.</p>
          <div className='flex flex-col gap-4'>
            <iframe width='100%' height='700px' style={{ border: 'none' }} src='https://verificadorlibredeuda.municipiosanjuan.gob.ar/' name='libreDeuda' scrolling='Yes' />
            {/* <div>
              <div>
                <div className='flex flex-col-2'>
                  <img src={img3} alt='img not found' className='w-8 h-8' />
                  <h1 className='font-extrabold text-[#4B0984] text-[20px] lg:text-3xl'>Inmueble</h1>
                </div>
                <p className='font-bold text-purple-900 italic lg:text-2xl'>Para verificar la Autenticidad del Libre Deuda ingrese el Numero de control del mismo.</p>
              </div>
              <div className='lg:flex lg:flex-col-3 lg:gap-8'>
                <div className='flex py-4'>
                  <label className='font-bold text-base w-28 lg:text-1xl'>Número de control:</label>
                  <input type='text' className='rounded-xl border border-[#4B0984]' />
                </div>
                <div className='lg:items-center lg:flex'>
                  <button className='bg-[#4B0984] rounded-2xl text-[#FFFF] px-4 py-2 lg:px-6 lg:py-3'>Buscar</button>
                </div>
              </div>
            </div> */}
            {/* <div>
              <div>
                <div className='flex flex-col-2'>
                  <img src={img4} alt='img not found' className='w-8 h-8' />
                  <h1 className='font-extrabold text-[#4B0984] text-[20px] lg:text-3xl'>Comercio</h1>
                </div>
                <p className='font-bold text-purple-900 italic lg:text-2xl'>Para verificar la Autenticidad del Libre Deuda ingrese el Numero de control del mismo.</p>
              </div>
              <div className='lg:flex lg:flex-col-3 lg:gap-8'>
                <div className='flex py-4'>
                  <label className='font-bold text-base w-28'>Número de control:</label>
                  <input type='text' className='rounded-xl border border-[#4B0984]' />
                </div>
                <div className='lg:items-center lg:flex'>
                  <button className='bg-[#4B0984] rounded-2xl text-[#FFFF] px-4 py-2 lg:px-6 lg:py-3'>Buscar</button>
                </div>
              </div>
            </div> */}
          </div>
          <div className='relative z-0'>
            <svg className='hidden xl:block h-48 w-48 lg:h-64 lg:w-64 absolute lg:-right-44 -right-6 -top-[330px] rotate-180 scale-y-[-1]'>
              <image href={img5} alt='img not found' className='w-auto lg:w-96 lg:h-full' />
            </svg>
          </div>
        </div>
        {/* BTN BACK */}
        <div className='container mx-auto flex justify-center xl:justify-normal'>
          <ButtonBack />
        </div>
      </div>
    </div>
  )
}
