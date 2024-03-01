import React from 'react'
import img1 from '../../assets/img temporal/img form ubi domicilio.jpg'
import img2 from '../../assets/img temporal/img mapa.jpg'
import img3 from '../../assets/img temporal/img form2.jpg'
import img4 from '../../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoTransito.svg'
import img5 from '../../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
import ButtonBack from '../Default/ButtonBack'

export const DenunciaVehiculos = () => {
  return (
    <div className='w-full'>
      <div className='flex items-end justify-center top-0 w-full lg:w-full bg-[#FFC14F] h-52'>
        <h3 className='font-extrabold text-[20px] flex items-center justify-center px-6 pb-4 text-[#4B0984] lg:text-3xl lg:w-[64rem]'>DENUNCIA VEHÍCULOS Y MUEBLES ABANDAONADOS EN LA VÍA PÚLICA</h3>
      </div>
      <div className='container mx-auto'>
        <div className='px-6 lg:items-center lg:justify-center lg:flex flex flex-col gap-3'>
          <p className='font-bold text-1xl pt-4 text-[#3E3E3E] lg:text-2xl lg:w-2/3'>Denuncie la existencia de vehículo / c osa mueble abandonado/a en la siguiente dirección.</p>
          <div className='lg:w-2/3'>
            <img src={img1} alt='img not found' className='lg:w-auto' />
          </div>
          <div className='lg:w-2/3'>
            <h1 className='text-[#4B0984] text-2xl font-extrabold lg:text-3xl'>¿Dónde se encuentra? Marcalo en el mapa</h1>
            <p className='font-bold text-[23px] text-[#4B0984]'>Ubicacíon</p>
            <hr className='lg:w-3/4' />
            <div className='w-full'>
              <img src={img2} alt='img not found' />
            </div>
            <div>
              <img src={img3} alt='img not found' />
            </div>
            <div className='pt-4 lg:w-full'>
              <button className='lg:w-[45rem] w-full bg-[#8A43EF] rounded-xl text-[#FFFF] py-2'>Enviar</button>
            </div>
          </div>
          <div className='lg:flex lg:items-center lg:justify-center lg:flex-col-2 lg:pt-20 lg:pr-44'>
            <div className='items-center justify-center pt-10 lg:pr-80'>
              <ButtonBack />
            </div>
            <div className='relative'>
              <svg className='h-24 w-24 lg:h-40 lg:w-60 absolute right-0 -top-10 lg:left-44 left-[14rem]'>
                <image href={img4} alt='img not found' className='w-full lg:w-full lg:h-40' />
              </svg>
            </div>
          </div>
          <div className='absolute right-0 lg:bottom-96 bottom-[30rem]'>
            <svg className='h-20 w-20 lg:h-64 lg:w-64  -rotate-90 scale-y-[-1]'>
              <image className='w-[190px] lg:w-[590px] object-cover' href={img5} alt='img not found' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
