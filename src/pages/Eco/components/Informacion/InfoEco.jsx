import React from 'react'

const InfoEco = ({ ecoData }) => {
  return (
    <>
      <div className='p-7 text-[#616161]'>
        <h1 className='text-xl font-bold'>{ecoData?.Informacion[0].Titulo}</h1>
        <p className='mt-2'>{ecoData?.Informacion[0].Descripcion}</p>
      </div>
      <div className='p-7 text-[#616161]'>
        <h1 className='text-xl font-bold mb-2'>Zonas</h1>
        <p className='bg-[#FFBDAB] p-1'>{ecoData?.Zonas.Zona1}</p>
        <p className='bg-[#9EC0B5] p-1'>{ecoData?.Zonas.Zona2}</p>
        <p className='bg-[#EBD983] p-1'>{ecoData?.Zonas.Zona3}</p>
        <div className='flex items-center justify-center'>
          <iframe className='w-full h-80 lg:h-[60vh] lg:w-[60vw] mt-2' src='https://www.google.com/maps/d/embed?mid=1vMRbLNy00DMVwnFeR64NihzBEQ-Ky1ep&ehbc=2E312F' />
        </div>
      </div>
    </>
  )
}

export default InfoEco
