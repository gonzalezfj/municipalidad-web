import React from 'react'
import logoEco from '../../assets/Eco-Icono-Blanco.svg'

const BannerEco = () => {
  return (
    <>
      <div className='absolute px-5 flex items-center top-0 w-full h-64 bg-[#8A43EF] rounded-br-3xl'>
        <div className='container mx-auto flex'>
          <svg className='relative w-48 h-30'>
            <image className='w-[200px] lg:w-[210px] xl:w-[210px] 2xl:w-[210px]' href={logoEco} />
          </svg>
          <div className='w-46 flex flex-col mt-14 justify-center'>
            <div className='text-white md:text-xl font-extrabold'>ECO</div>
            <div className='text-white text-sm lg:text-base'>Estacionamiento Controlado</div>
          </div>
        </div>
      </div>
      <div className='flex lg:justify-center w-full h-96 text-center p-4 md:p-10 lg:p-7 xl:p-9 text-base lg:text-xl text-white items-end bg-[#D85B35] rounded-bl-3xl'>
        <p className='lg:px-40'>El centro de la Ciudad de San Juan cuenta con un servicio de estacionamiento controlado,
          denominado ECO, que regula el estacionamiento en el área de mayor flujo vehicular.
        </p>
      </div>
    </>
  )
}

export default BannerEco
