import React, { useEffect, useState } from 'react'
import BannerEco from './components/Banner/BannerEco'
import InfoEco from './components/Informacion/InfoEco'
import DestacadaEco from './components/Destacadas/DestacadaEco'
import ButtonsEco from './components/Buttons/ButtonsEco'
import ButtonBack from '@components/Default/ButtonBack'
import { Link } from 'react-router-dom'
const imgPlaystore = import.meta.env.VITE_ASSETS_URL + '/assets/ecoMobile_seccion2_botonPlaystore.svg'
const imgApplestore = import.meta.env.VITE_ASSETS_URL + '/assets/ecoMobile_seccion2_botonApplestore.svg'

const Eco = () => {
  const [ecoData, setEcoData] = useState()

  useEffect(() => {
    const getInfoStrapi = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/eco?populate=*')
        const data = await response.json()
        setEcoData(data.data.attributes)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getInfoStrapi()
  }, [])

  return (
    <>
      <BannerEco ecoData={ecoData} />
      <div className='lg:flex-col lg:flex lg:items-center'>
        <div className='lg:container'>
          <div className='p-7 text-[#616161]'>
            <h1 className='text-xl font-bold'>Descarga la app</h1>
            <p className='mt-2'>Puedes pagar a través de nuestra app para IOs y Android. La puedes descargar gratis desde las tiendas oficiales o bien haciendo clic acá:</p>
            <div className='flex gap-5 mt-3'>
              <Link to='https://play.google.com/store/apps/details?id=com.elinpar.mpark.mobile.android.eco_sanjuan&pli=1'>
                <svg className='bg-[#D85B35] rounded-full w-24 h-24'>
                  <image className='w-24 h-24' href={imgPlaystore} />
                </svg>
              </Link>
              <Link to='https://apps.apple.com/ar/app/eco-san-juan/id1389422806'>
                <svg className='bg-[#D85B35] rounded-full w-24 h-24'>
                  <image className='w-24 h-24' href={imgApplestore} />
                </svg>
              </Link>
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
