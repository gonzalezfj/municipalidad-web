import React from 'react'
import img2 from '@assets/gia_tramites_turnos_obleas/guíaDeTramitesMobile_iconoRentas.svg'
import ButtonBack from '../Default/ButtonBack'
import img4 from '@assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
import img5 from '@assets/Libre Deuda/rentas_botonComercio.svg'
import img6 from '@assets/Libre Deuda/rentas_botonInmueble.svg'
import videoBoletas from '@assets/Libre Deuda/Libre_deuda_2024_1.mp4'
import { useNavigate } from 'react-router'

export const LibreDeuda = () => {
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <div className='w-full'>
      <div className='mx-auto gap-8 flex flex-col'>
        {/* TITULO */}
        <div className='hidden lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[75px] lg:border-t-[#FFC14F] lg:border-l-[75px] lg:border-l-[#FFC14F] lg:border-b-[75px] lg:border-b-transparent lg:border-r-[75px] lg:border-r-transparent' />
        <div className='bg-purple-700 h-44 lg:h-56 px-10 lg:w-full'>
          <div className='pt-24 flex flex-col-2 gap-2 w-full items-center justify-center lg:items-center lg:justify-center lg:flex lg:pt-32'>
            <div className='w-14'>
              <img src={img2} alt='img not found' className='object-cover w-full' />
            </div>
            <h1 className='text-1xl font-extrabold w-full text-white lg:items-center lg:justify-center lg:flex lg:w-1/3 lg:text-3xl'>LIBRE DEUDA INMUEBLE Y COMERCIO</h1>
          </div>
        </div>
        {/* TEXT Y IMG */}
        <div className='px-8 gap-4 flex flex-col lg:items-center lg:justify-center'>
          <p className='text-[#3E3E3E] font-bold lg:text-2xl lg:w-3/5'>Para generar tu libre deuda de comercio o inmueble debés buscar en el generador de boletas si tenés deuda y en caso de que no tengas tendrás la opción de descargar el certificado.</p>
          <video className='w-auto h-auto lg:w-[100vh]' autoPlay loop muted>
            <source src={videoBoletas} type='video/mp4' />
          </video>
        </div>
        {/* TEXT Y BUTTON */}
        <div className='rounded-t-2xl bg-yellow-400 px-8 grid grid-rows gap-8 py-4'>
          <p className='text-1xl font-extrabold lg:text-2xl lg:items-center lg:justify-center lg:flex'>Para obtener tus certificados de libre deuda de comercios o inmuebles.</p>
          <div className='flex flex-col-2 gap-8 items-center justify-center'>
            <a href='https://generadorboletas.municipiosanjuan.gob.ar/' target='_blank' rel='noreferrer'>
              <div className='w-40 h-52 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col items-center justify-center cursor-pointer'>
                <div className='w-32 h-32'>
                  <img src={img6} className='object-cover' alt='Boletas Inmueble' />
                </div>
                <div className='flex-1 w-40 lg:w-full flex items-center justify-center transition ease-in-out delay-150 bg-secondary hover:bg-purple-600 duration-200'>
                  <h4 className='text-sm uppercase text-center w-full h-full items-center justify-center flex text-slate-50'>INMUEBLE</h4>
                </div>
              </div>
            </a>
            <a href='https://generadorboletas.municipiosanjuan.gob.ar/' target='_blank' rel='noreferrer'>
              <div className='w-40 h-52 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col items-center justify-center cursor-pointer'>
                <div className='w-32 h-32'>
                  <img src={img5} className='object-cover' alt='Boletas Comercio' />
                </div>
                <div className='flex-1 w-40 lg:w-full flex items-center justify-center transition ease-in-out delay-150 bg-secondary hover:bg-purple-600 duration-200'>
                  <h4 className='text-sm uppercase text-center w-full h-full items-center justify-center flex text-slate-50'>COMERCIO</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* FINAL */}
        <div className='px-10 py-4'>
          <div className='flex flex-col-2 lg:items-center lg:justify-center lg:flex lg:gap-10'>
            <p className='font-bold text-[#3E3E3E] text-sm lg:text-2xl lg:w-1/3'>Asimismo, podés consultar la autenticidad de los certificados de libre deuda municipal que recibes a través del siguiente enlace.</p>
            <div className='flex items-center z-10'>
              <button onClick={() => handleClick('/autenticidad')} className='font-extrabold text-sm text-white bg-purple-800 px-6 h-11 rounded-3xl lg:rounded-primary lg:text-2xl lg:px-4 lg:h-20'>Autenticidad libre deuda</button>
            </div>
          </div>
          {/* IMG */}
          <div className='relative z-0'>
            <svg className='h-48 w-48 lg:h-64 lg:w-64 absolute lg:-right-10 -top-20 rotate-90 scale-y-[-1]'>
              <image href={img4} alt='img not found' className='w-auto lg:w-96 lg:h-full' />
            </svg>
          </div>
          {/* BUTTON BACK */}
          <div className='container mx-auto flex justify-center xl:justify-normal'>
            <div className='pt-10'>
              <ButtonBack />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
