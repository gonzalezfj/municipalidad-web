import React from 'react'
import videoBoletas from '../assets/Libre_deuda_2024.mp4'
import BannerBoletas from '../components/Boletas/BannerBoletas'
import InfoBoletas from '../components/Boletas/InfoBoletas'
import InfoNomenclatura from '../components/Boletas/InfoNomenclatura'

const Boletas = () => {
  return (
    <div>
      <BannerBoletas />
      <div className='container flex-col flex lg:mx-auto p-6'>
        <div className='text-[#616161]'>
          <p>Para pagar en línea boletas de contribución de inmuebles y tasa de comercio</p>
        </div>
        <div className='text-white mt-5'>
          <button className='bg-[#4B0984] p-3 rounded-full'>GENERAR BOLETA</button>
        </div>
      </div>
      <InfoBoletas />
      <div className='mt-10 container mx-auto flex flex-col items-center'>
        <video className='w-auto h-auto lg:w-[100vh]' autoPlay loop muted>
          <source src={videoBoletas} type='video/mp4' />
        </video>
        <p className='p-6 font-bold text-[#4B0984]'>Asimismo, podés completar la siguiente encuesta sobre la gestión de trámites online que brinda el municipio. Tu opinión es importante para la mejora continua de nuestra atención.</p>
        <button className='w-52 rounded-full bg-[#D85B35] text-white p-3'>REALIZAR ENCUESTA</button>
      </div>
      <InfoNomenclatura />
    </div>
  )
}

export default Boletas
