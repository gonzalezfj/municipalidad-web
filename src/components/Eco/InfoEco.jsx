import React from 'react'

const InfoEco = () => {
  return (
    <>
      <div className='p-7 text-[#616161]'>
        <h1 className='text-xl font-bold'>Horarios</h1>
        <p className='mt-2'>El Estacionamiento Controlado en la Ciudad de San Juan actualmente funciona de lunes
          a viernes de 07:00 a 13.00 hs y 17.00 a 21.00 hs, mientras que los sábados de 9.00 a 13.00 hs.
        </p>
      </div>
      <div className='p-7 text-[#616161]'>
        <h1 className='text-xl font-bold mb-2'>Zonas</h1>
        <p className='bg-[#FFBDAB] p-1'>Zona 1: $140 por hora ($112 por la aplicación)</p>
        <p className='bg-[#9EC0B5] p-1'>Zona 2: $105 por hora ($84 por la aplicación) </p>
        <p className='bg-[#EBD983] p-1'>Zona 3: $70 por hora ($56 por la aplicación)</p>
        <div className='flex items-center justify-center'>
          <iframe className='w-full h-80 lg:h-[60vh] lg:w-[60vw] mt-2' src='https://www.google.com/maps/d/embed?mid=1vMRbLNy00DMVwnFeR64NihzBEQ-Ky1ep&ehbc=2E312F' />
        </div>
      </div>
    </>
  )
}

export default InfoEco
