import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img1 from '@assets/Libre Deuda/LibreDeuda_fondo.svg'
export const PodaArbolado = () => {
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
            {/* TITLE */}
            <div>
              <h1 className='text-2xl font-extrabold text-[#D85B35] lg:w-2/3 lg:text-4xl'>PODA DE ARBOLADO</h1>
              <h3 className='font-extrabold text-[#D85B35]'>Periodo de Poda del 15 de mayo hasta el 15 de agosto</h3>
            </div>
            <p className='lg:text-1xl text-[#3E3E3E] font-extrabold'>
              Formulario para solicitud de permisos de poda de arbolado público.
            </p>
            {/* BODY */}
            <section className='flex flex-col gap-2 pt-4 lg:text-xl'>
              <h1 className='font-bold text-1xl text-[#616161]'>Para hacer este trámite deberás informar:</h1>
              <ul className='flex flex-col gap-2 list-disc text-[#616161] pl-8'>
                <li>Tu DNI y datos personales.</li>
                <li>La nomenclatura de tu casa, recordá que este trámite solo puede solicitarlo el frentista. Si no la conocés,
                  podés consultarlo acá:
                </li>
                <div className='flex items-center justify-center'>
                  <a href='https://nomenclaturas.municipiosanjuan.gob.ar/' target='_blank' className='bg-[#FFC14F] rounded-xl w-44 lg:text-xl lg:w-auto lg:px-4 font-extrabold' rel='noreferrer'>NOMENCLATURA</a>
                </div>
                <li>También podrás adjuntar imágenes de los ejemplares a podar.</li>
              </ul>
            </section>
            <p className='text-[#616161]'>Una vez que la Dirección de Ambiente constate la información aportada y se realizen las inspecciones pertinentes, se procederá a informar al solicitante si la solicitud fue aprobada o rechazada.</p>
            <div className='flex flex-col-2 gap-2 lg:items-center lg:flex lg:justify-center'>
              <button className='bg-[#4B0984] rounded-3xl text-white py-2 lg:px-2'>ACCEDER A SOLICITUD</button>
              <button className='bg-[#4B0984] rounded-3xl text-white py-2 lg:px-2'>CONSULTAR SOLICITUDES</button>
            </div>
            <h3 className='text-[#616161]'>Tipo de poda no autorizada:</h3>
            <p className='font-bold text-[#616161]'>Si poda los árboles sin autorización estará en contravención con la Ordenanza Municipal artículo</p>
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
