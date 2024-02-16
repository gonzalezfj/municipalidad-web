import React from 'react'

const DestacadaEco = ({ ecoData }) => {
  return (
    <div className='bg-[#8A43EF] p-7 lg:p-24 lg:px-52 text-white'>
      {ecoData?.Destacado.map((e) => (
        <div key={e?.id}>
          <h1 className='text-xl mt-3 font-bold'>{e?.Titulo}</h1>
          <p className='mt-2'>{e?.Descripcion}</p>
        </div>
      ))}
    </div>
  )
}

export default DestacadaEco
