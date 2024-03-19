import React from 'react'
import ButtonBack from '../Default/ButtonBack'
const img1 = import.meta.env.VITE_ASSETS_URL + '/assets/LibreDeuda/LibreDeuda_fondo.svg'
const doc1 = import.meta.env.VITE_ASSETS_URL + '/assets/img temporal/documentoImgDePrueba.jpg'
const doc2 = import.meta.env.VITE_ASSETS_URL + '/assets/img temporal/documentoImgDePruebaAtras.jpg'
export const CodigoDeTramite = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto gap-8 flex flex-col'>
        {/* TITLE */}
        <div className='
    block absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent
     lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[140px] lg:border-t-[#FFC14F] lg:border-l-[140px] lg:border-l-[#FFC14F] lg:border-b-[140px] lg:border-b-transparent lg:border-r-[140px] lg:border-r-transparent'
        />
        <div className='pt-44 gap-10 flex flex-col text-[#3E3E3E] font-semibold'>
          <div className='flex flex-col gap-4 lg:px-96 px-8 lg:text-2xl'>
            <div>
              {/* TEXT AND TITLE */}
              <h1 className='text-2xl font-extrabold text-[#D85B35] lg:w-2/3 lg:text-4xl'>CÓDIGO DEL TRÁMITE DE DNI</h1>
            </div>
            <section className='flex flex-col gap-2 pt-4 lg:text-xl'>
              {/* PARRAFOS */}
              <div>
                <h1 className='font-bold text-1xl text-[#616161]'>Si no sabés como ver el código de trámite de tu DNI te mostramos dónde encontrarlo.</h1>
                <h3 className='text-[#616161]'>El código de trámite figura en tu DNI:</h3>
              </div>
              <ul className='flex flex-col list-disc text-[#616161] pl-8 gap-4'>
                <li className='text-sm text-[#616161] lg:text-xl'>Si tenés DNI tarjeta celeste figura en el frente, como muestra en la siguiente figura:</li>
                <img src={doc1} alt='img not found' className='lg:w-80' />
                <li className='text-sm text-[#616161] lg:text-xl'>Si tenés DNI tarjeta rosada figura en la parte posterior, como muestra la siguiente figura:</li>
                <img src={doc2} alt='img not found' className='lg:w-80' />
              </ul>
            </section>
          </div>
          <div className='relative z-0'>
            <svg className='h-32 w-32 lg:h-96 lg:w-96 absolute -top-[10px] -right-0 lg:-top-[280px] rotate-180 scale-y-[-1]'>
              <image href={img1} alt='img not found' className='w-20 lg:w-96 lg:h-96' />
            </svg>
          </div>
        </div>
        {/* BTN BACK */}
        <div className='lg:px-96 px-8 py-4 lg:-left-20'>
          <div className='pt-10'>
            <ButtonBack />
          </div>
        </div>
      </div>
    </div>
  )
}
