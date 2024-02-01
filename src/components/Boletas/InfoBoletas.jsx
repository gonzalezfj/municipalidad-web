import React from 'react'

const InfoBoletas = () => {
  return (
    <div className='relative bg-[#FFC14F] w-full h-auto lg:h-64 lg:flex lg:items-center lg:rounded-l-full lg:text-xl'>
      <div className='absolute right-0 -top-16 bg-[#D85B35] w-32 h-32 rounded-tl-full shadow-lg' />
      <div className='text-[#616161] p-11 container lg:mx-auto'>
        <h1 className='font-bold'>Boletas Inmueble y Comercial</h1>
        <p>Puede obtener boletas de la tasa de servicio sobre inmueble y actividad comercial:
          <ul className='list-inside list-disc'>
            <li>Personalmente por la Dirección de Rentas del municipio. Con el nombre del titular del inmueble o comercio y/o la nomenclatura catastral e inscripción comercial.</li>
            <li>De forma online. Debe tener la nomenclatura catastral o la inscripción del comercio y seleccionar qué y como desea pagar.</li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default InfoBoletas
