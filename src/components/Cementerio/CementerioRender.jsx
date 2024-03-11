import React from 'react'
import img from '@assets/imgCementerio/cementerioMunicipal.jpg'
import img2 from '@assets/imgCementerio/cementerio_fondo_Mesa de trabajo 1.svg'
import { CementerioHome } from './CementerioHome'
export const CementerioRender = () => {
  const menuItems = [
    {
      title: 'Tasas 2024',
      path: '/tasas'
    },
    {
      title: 'Transferencia de los Derechos de Concesión',
      path: '/transferenciaconcesion'
    },
    {
      title: 'Servicio de Mantenimiento',
      path: '/serviciomantenimiento'
    },
    {
      title: 'Obras y reparaciones',
      path: '/obrasreparaciones'
    },
    {
      title: 'Inhumaciones y Exhumaciones:',
      path: '/inhumacionesexhumaciones'
    },
    {
      title: 'Regularización de la deuda',
      path: '/regulaciondeudas'
    }
  ]
  return (
    <div>
      <div className='container mx-auto px-10 flex flex-col gap-4 lg:pt-36 pt-36'>
        <div className='lg:flex lg:flex-col lg:gap-4'>
          <h1 className='font-extrabold text-[#4B0984] text-[1.6rem] lg:text-3xl'>CEMENTERIO MUNICIPAL</h1>
        </div>
        <div className='flex flex-col-reverse lg:flex-row lg:justify-start lg:items-start lg:gap-44 gap-4'>
          <CementerioHome menuItems={menuItems} />
          <div className='text-[#3E3E3E] lg:w-96 gap-2 flex flex-col '>
            <h1>Podés visitar el Cementerio Municipal todos los días.</h1>
            <ul className='list-disc pl-4 font-extrabold'>
              <li>Lunes a sábados: de 08:00 a 12:30 hs. y de 16:00 a 20:00 hs.</li>
              <li>Domingos y feriados: de 08:00 a 13:00 hs. y de 16:00 a 20:00 hs.</li>
            </ul>
            <p>Si necesitas realizar una inhumación u otro trámite ante el Cementerio Municipal podés acercarte a las oficinas junto a la puerta de ingreso en los mismos horarios.</p>
          </div>
        </div>
        <div>
          <div className='z-20 relative rounded-2xl lg:w-full lg:h-[40rem] mb-20'>
            <img src={img} alt='img not found' className='rounded-2xl lg:w-full lg:h-full object-cover' />
          </div>
          <div className='absolute lg:w-96 lg:bottom-[12.7rem] bottom-[31.5rem] left-0 lg:left-0 -z-2 lg:-z-0'>
            <img src={img2} alt='img not found' className='w-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}
