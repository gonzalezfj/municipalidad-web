import React from 'react'
import imgPlaystore from '../assets/ecoMobile_seccion2_botonPlaystore.svg'
import imgApplestore from '../assets/ecoMobile_seccion2_botonApplestore.svg'
import BannerEco from '../components/Eco/BannerEco'
import InfoEco from '../components/Eco/InfoEco'
import DestacadaEco from '../components/Eco/DestacadaEco'
import ButtonsEco from '../components/Eco/ButtonsEco'
import ButtonBack from '../components/Default/ButtonBack'

const Eco = () => {
  return (
    <>
      <BannerEco />
      <div className='lg:flex-col lg:flex lg:items-center'>
        <div className='lg:container'>
          <div className='p-7 text-[#616161]'>
            <h1 className='text-xl font-bold'>Descarga la app</h1>
            <p className='mt-2'>Puedes pagar a través de nuestra app para IOs y Android. La puedes descargar gratis desde las tiendas oficiales o bien haciendo clic acá:</p>
            <div className='flex gap-5 mt-3'>
              <svg className='bg-[#D85B35] rounded-full w-24 h-24'>
                <image className='w-24 h-24' href={imgPlaystore} />
              </svg>
              <svg className='bg-[#D85B35] rounded-full w-24 h-24'>
                <image className='w-24 h-24' href={imgApplestore} />
              </svg>
            </div>
          </div>
          <InfoEco />
        </div>
        <DestacadaEco />
        <ButtonsEco />
        <div className='lg:container flex justify-center lg:justify-normal p-6'>
          <ButtonBack />
        </div>
      </div>
    </>
  )
}

export default Eco
