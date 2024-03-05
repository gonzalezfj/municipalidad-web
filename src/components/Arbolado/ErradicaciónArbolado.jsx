import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img1 from '@assets/LibreDeuda/LibreDeuda_fondo.svg'

export const ErradicaciónArbolado = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto gap-8 flex flex-col'>
        {/* TITLE */}
        <div className='
        block absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent
         lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[140px] lg:border-t-[#FFC14F] lg:border-l-[140px] lg:border-l-[#FFC14F] lg:border-b-[140px] lg:border-b-transparent lg:border-r-[140px] lg:border-r-transparent'
        />
        {/* TEXT AND TITLE */}
        <div className='pt-44 gap-10 flex flex-col text-[#3E3E3E] font-semibold'>
          {/* PARRAFOS */}
          <div className='flex flex-col gap-4 lg:px-96 px-8 lg:text-2xl'>
            <h1 className='text-2xl font-extrabold text-[#D85B35] lg:w-2/3 lg:text-4xl'>ERRADICACIÓN DE ARBOLADO</h1>
            <p className='lg:text-1xl text-[#3E3E3E] font-extrabold'>
              Formulario para solicitud de permisos de erradicación de arbolado público.
            </p>
            {/* <section className='flex flex-col gap-2 pt-4 lg:text-xl'>
              <h1 className='font-bold text-1xl text-[#616161]'>Para hacer este trámite deberás informar:</h1>
              <ul className='flex flex-col gap-2 list-disc text-[#616161] pl-8'>
                <li className='text-sm text-[#616161] lg:text-xl'>Tu DNI y número de trámite del mismo ,acá podés ver como consultarlo:</li>
                <div className='items-center flex justify-center'>
                  <button className='bg-[#FFC14F] rounded-xl w-44 lg:text-xl lg:w-auto lg:px-4 font-extrabold'>TRÁMITE DE DNI</button>
                </div>
                <li className='text-sm text-[#616161] lg:text-xl'>La nomenclatura de tu casa, recordá que este trámite solo puede solicitarlo el frentista. Si no la conocés,podés consultarlo acá:</li>
                <div className='items-center flex justify-center'>
                  <a href='https://nomenclaturas.municipiosanjuan.gob.ar/' target='_blank' className='bg-[#FFC14F] rounded-xl w-44 lg:text-xl lg:w-auto lg:px-4 font-extrabold' rel='noreferrer'>NOMENCLATURA</a>
                </div>
              </ul>
            </section>
            <section className='text-[#616161] lg:text-xl'>
              <h2 className=''>Además deberás aportar lo que se indica a continuación, en caso de no hacerlo la solicitud no será aprobada:</h2>
              <ul className='pl-8 list-disc'>
                <li>Imagenes del ejemplar a erradicar</li>
                <li>Si el motivo de la erradicación es que hay daños estructurales, se deberá adjuntar imágenes de estos, o un informe de algún técnico habilitado (formato pdf o imagen)</li>
                <li>Si el motivo de la erradicación es que hay o habrá una construcción edilicia, se deberá adjuntar un plano de la misma (formato pdf o imagen)</li>
              </ul>
            </section> */}
            {/* <p className='text-[#616161] lg:text-xl'>Una vez que la Dirección de Ambiente constate la información aportada y se realizen las inspecciones pertinentes, se procederá a informar al solicitante si la solicitud fue aprobada o rechazada.</p> */}
            <div className='flex flex-col-2 gap-2 lg:items-center lg:flex lg:justify-center'>
              {/* <a href='https://municipiosanjuan.gob.ar/guia-de-tramites/item/1298-erradicacion' target='_blank' className='bg-[#4B0984] rounded-3xl text-white py-2 lg:px-2' rel='noreferrer'>ACCEDER A SOLICITUD</a> */}
              {/* <a className='bg-[#4B0984] rounded-3xl text-white py-2 lg:px-2'>CONSULTAR SOLICITUDES</a> */}
              <iframe width='750' height='1000' src='https://poda.municipiosanjuan.gob.ar/' frameBorder='0' scrolling='no' />
            </div>
          </div>
          <div className='relative z-0'>
            <svg className='h-32 w-32 lg:h-96 lg:w-96 absolute -top-[10px] -right-0 lg:-top-[280px] rotate-180 scale-y-[-1]'>
              <image href={img1} alt='img not found' className='w-20 lg:w-96 lg:h-96' />
            </svg>
          </div>
        </div>
        {/* BTN BACK */}
        <div className='container mx-auto'>
          <div className=''>
            <ButtonBack />
          </div>
        </div>
      </div>
    </div>
  )
}
