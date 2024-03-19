import React, { useEffect, useState } from 'react'
import { BannerBoletas, InfoBoletas } from './components'
import DestacadoBoletas from './components/DestacadoBoleta/DestacadoBoleta'
const videoBoletas = import.meta.env.VITE_ASSETS_URL + '/assets/Libre_deuda_2024.mp4'

const Boletas = () => {
  const [BoletasData, SetBoletasData] = useState()
  useEffect(() => {
    const getInfoStrapi = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/boleta?populate=*')
        const data = await response.json()
        SetBoletasData(data.data.attributes)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getInfoStrapi()
  }, [])
  console.log(BoletasData, 'boletas')

  return (
    <div>
      <BannerBoletas BoletasData={BoletasData} />
      <div className='container flex-col flex lg:mx-auto p-6'>
        <div className='text-[#616161]'>
          <p>Para pagar en línea boletas de contribución de inmuebles y tasa de comercio</p>
        </div>
        <div className='text-white mt-5'>
          <a href='https://generadorboletas.municipiosanjuan.gob.ar/' target='_blank' className='bg-[#4B0984] p-3 rounded-full' rel='noreferrer'>GENERAR BOLETA</a>
        </div>
      </div>
      <InfoBoletas BoletasData={BoletasData} />
      <div className='mt-10 container mx-auto flex flex-col items-center'>
        <video className='w-auto h-auto lg:w-[100vh]' autoPlay loop muted>
          <source src={videoBoletas} type='video/mp4' />
        </video>
        <p className='p-6 font-bold text-[#4B0984]'>Asimismo, podés completar la siguiente encuesta sobre la gestión de trámites online que brinda el municipio. Tu opinión es importante para la mejora continua de nuestra atención.</p>
        <a href='https://municipiosanjuan.gob.ar/component/chronoforms6/?chronoform=encuesta-web-rentas' target='_blank' className='w-52 rounded-full bg-[#D85B35] text-white p-3 text-center' rel='noreferrer'>REALIZAR ENCUESTA</a>
      </div>
      <DestacadoBoletas BoletasData={BoletasData} />
    </div>
  )
}

export default Boletas
