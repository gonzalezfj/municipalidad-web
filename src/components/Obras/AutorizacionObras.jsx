import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img1 from '@assets/Libre Deuda/LibreDeuda_fondo.svg'
import img2 from '@assets/obras/obras_icono.svg'
export const AutorizacionObras = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto gap-8 flex flex-col'>
        {/* TITLE */}
        <div className='
      block absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent
       lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[75px] lg:border-t-[#FFC14F] lg:border-l-[75px] lg:border-l-[#FFC14F] lg:border-b-[75px] lg:border-b-transparent lg:border-r-[75px] lg:border-r-transparent'
        />
        {/* TEXT AND TITLE */}
        <div className='pt-44 gap-10 flex flex-col text-[#3E3E3E] font-semibold'>
          {/* PARRAFOS */}
          <div className='flex flex-col gap-4 lg:px-96 px-8 lg:text-2xl'>
            <h1 className='text-1xl font-extrabold text-[#4B0984] lg:items-center lg:justify-center lg:flex lg:w-2/3 lg:text-4xl'>AUTORIZACION A EMPRESAS DE SERVICIOS PARA OCUPAR EL ESPACIO PÚBLICO CON REDES DE INFRAESTRUCTURA</h1>
            <p className='lg:text-xl text-[#3E3E3E]'>
              Permisos poder ocupar el espacio público y hacer las instalaciones necesarias
              Para obtener la autorización municipal y poder ocupar el espacio público para hacer las instalaciones necesarias, las empresas de servicios deben estar inscriptas y figurar en la base de datos municipal. De no estarlo, un/a representante debe acercarse por el égido municipal, 3er piso, dirección de Catástro y retirar un formulario de inscripción, completarlo e iniciarlo expediente. Esta inscripción se hace una sola vez.
              Una vez inscripta la empresa se puede realizar el expediente de obra donde se debe describir el tipo de obra y el lugar donde se realizará.
              Es imperiosa la presencia de un/a titular y su matriculado para retirar la autorización correspondiente.
            </p>
            <section className='flex flex-col gap-2'>
              <h1 className='font-extrabold'>Documentación necesaría:</h1>
              <div className='pl-4 lg:text-lg'>
                <li>Nota de solicitud emanada de la empresa de servicios designando contratista</li>
                <li>Plano de obra con medidas en escala conveniente</li>
                <li>Plan de obras</li>
                <li>Pago de las tasas por ocupación e inspecciones</li>
              </div>
            </section>
          </div>
          <div className='relative z-0'>
            <svg className='h-32 w-32 lg:h-96 lg:w-96 absolute -top-[10px] -right-0 lg:-top-[280px] rotate-180 scale-y-[-1]'>
              <image href={img1} alt='img not found' className='w-20 lg:w-96 lg:h-96' />
            </svg>
          </div>
          <div className='relative z-0'>
            <svg className='h-48 w-48 lg:h-64 lg:w-64 absolute -top-[10px] right-32 lg:right-96 lg:-top-[20px] rotate-180 scale-y-[-1]'>
              <image href={img2} alt='img not found' className='w-auto lg:w-64 lg:h-64' />
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
