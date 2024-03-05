import React from 'react'
import { CarteleriaPublica } from './CarteleriaPublica'
import img4 from '@assets/Ocupacion_Calzada/espacioUrbano_iconoCartel.svg'

export const CarteleriaRender = () => {
  const menuItems = [
    {
      title: 'Habilitación de carteles y Pantallas LED',
      description: 'Habilitación de Carteles y Pantallas LED',
      text: 'Cualesquiera sea el tipo de herramienta publicitaria a habilitar (cartel y/o pantallas LED) debe presentarse el modelo de la Declaración Jurada del profesional actuante.',
      subTitle: {
        title: 'Requisitos Generales',
        subs: [
          'Fotocopia de DNI del contribuyente.',
          'Constancia de CUIT del contribuyente.',
          'Fotocopia estatuto o contrato social (si es persona jurídica).',
          'Copia del poder otorgado al apoderado (si es persona jurídica).',
          'Copia del contrato de locación, escritura del inmueble o cualquier otro título que autorice el uso del terreno o edificación donde se realizara el  emplazamiento de la estructura (de  dominio catastral).',
          'Nota de autorización del propietario para colocar la cartelería, fotocopia del certificado de domicilio catastral, fotocopia del DNI del propietario del inmueble.',
          'Dos (2) fotos impresas que muestren características y ubicación del elemento publicitario.',
          'Formulario de solicitud de inscripción de Carteles/ Formulario de solicitud de inscripción para Pantallas LED:',
          'Libre deuda de impuesto municipal de comercio, inmueble y publicidad.'
        ]
      }
    },
    {
      title: 'Requisitos técnicos para carteles',
      description: 'Aquí va la descripción del segundo menú desplegable.'
    },
    {
      title: 'Requisitos técnicos para Pantallas LED',
      description: 'Aquí va la descripción del segundo menú desplegable.'
    },
    {
      title: 'Tipología de Carteles Permitidos',
      description: 'Aquí va la descripción del segundo menú desplegable.'
    },
    {
      title: 'Límite de ocupación visual y de ochavas',
      description: 'Aquí va la descripción del segundo menú desplegable.'
    },
    {
      title: 'Croquis de carteles que no superan los 2m2',
      description: 'Aquí va la descripción del segundo menú desplegable.'
    },
    {
      title: 'Normativa de pasacalles',
      description: 'Aquí va la descripción del segundo menú desplegable.'
    },
    {
      title: 'Información de contacto',
      description: 'Aquí va la descripción del segundo menú desplegable.'
    }
  ]
  return (
    <div>
      <div className='lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[75px] lg:border-t-[#FFC14F] lg:border-l-[75px] lg:border-l-[#FFC14F] lg:border-b-[75px] lg:border-b-transparent lg:border-r-[75px] lg:border-r-transparent
            top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent'
      />
      <div className='container mx-auto px-10 flex flex-col gap-4 lg:pt-36'>
        <div className='lg:pl-36 lg:flex lg:flex-col lg:gap-4'>
          <h1 className='font-extrabold text-[#4B0984] text-2xl lg:text-3xl lg:w-44'>CARTELERÍA PÚBLICA</h1>
          <h3 className='font-normal lg:text-1xl'>Solicitudes de cartelería pública.</h3>
        </div>
        <CarteleriaPublica menuItems={menuItems} />
        <div className='w-24 ml-64 lg:w-44 lg:ml-[86rem]'>
          <img src={img4} alt='img not found' className='w-full h-full' />
        </div>
      </div>
    </div>
  )
}
