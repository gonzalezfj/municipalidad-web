import React from 'react'
import img from '@assets/imgCementerio/cementerioMunicipal.jpg'
import { CementerioHome } from './CementerioHome'
export const CementerioRender = () => {
  const menuItems = [
    {
      title: 'Tasas 2024',
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
      title: 'Transferencia de los Derechos de Concesión',
      description: 'Aquí va la descripción del segundo menú desplegable.'
    },
    {
      title: 'Servicio de Mantenimiento:',
      description: 'Aquí va la descripción del segundo menú desplegable.'
    },
    {
      title: 'Obras y reparaciones',
      description: 'Aquí va la descripción del segundo menú desplegable.'
    },
    {
      title: 'Inhumaciones y Exhumaciones:',
      description: 'Aquí va la descripción del segundo menú desplegable.'
    },
    {
      title: 'Regularización de la deuda',
      description: 'Aquí va la descripción del segundo menú desplegable.'
    }
  ]
  return (
    <div>
      <div className='container mx-auto px-10 flex flex-col gap-4 lg:pt-36 pt-36'>
        <div className='lg:flex lg:flex-col lg:gap-4'>
          <h1 className='font-extrabold text-[#4B0984] text-2xl lg:text-3xl '>CEMENTERIO MUNICIPAL</h1>
        </div>
        <CementerioHome menuItems={menuItems} />
        <div className='rounded-2xl lg:w-full lg:h-72'>
          <img src={img} alt='img not found' className='rounded-2xl lg:w-full lg:h-full object-cover' />
        </div>
        {/* FALTA RECURSO !!! */}
      </div>
    </div>
  )
}
