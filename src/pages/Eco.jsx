import React, { useEffect, useState } from 'react'
import imgPlaystore from '../assets/ecoMobile_seccion2_botonPlaystore.svg'
import imgApplestore from '../assets/ecoMobile_seccion2_botonApplestore.svg'
import BannerEco from '../components/Eco/BannerEco'
import InfoEco from '../components/Eco/InfoEco'
import DestacadaEco from '../components/Eco/DestacadaEco'
import ButtonsEco from '../components/Eco/ButtonsEco'
import ButtonBack from '../components/Default/ButtonBack'

const Eco = () => {
  const [ecoData, setEcoData] = useState()

  useEffect(() => {
    const getInfoStrapi = async () => {
      try {
        // const response = await fetch('https://0pd31rwn-3000.brs.devtunnels.ms/api/home?populate[0]=Botones&populate[1]=Botones.Icono')
        const response = await fetch('https://0pd31rwn-3000.brs.devtunnels.ms/api/eco?populate=*')
        const data = await response.json()
        // const responseImagen = await fetch('https://0pd31rwn-3000.brs.devtunnels.ms/api/home?populate[0]=Destacados&populate[1]=Destacados.Imagen')
        // const dataImagen = await responseImagen.json()
        // const dataHome = Object.assign(data.data.attributes, dataImagen.data.attributes)
        setEcoData(data.data.attributes)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getInfoStrapi()
  }, [])
  console.log(ecoData, 'dataeco')

  return (
    <>
      <BannerEco ecoData={ecoData} />
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
          <InfoEco ecoData={ecoData} />
        </div>
        <DestacadaEco ecoData={ecoData} />
        <ButtonsEco />
        <div className='lg:container flex justify-center lg:justify-normal p-6'>
          <ButtonBack />
        </div>
      </div>
    </>
  )
}

export default Eco
