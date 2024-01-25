import React from 'react'
import img1 from '../assets/iconosBlancos/Boleta-Icono-Blanco.svg'
import videoBoletas from '../assets/Libre_deuda_2024.mp4'
import buttonAtras from '../assets/guiaDeTramitesMobile_botonAtras.svg'
import { useNavigate } from 'react-router'

const Boletas = () => {
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0) // Esto debería llevar la vista al inicio de la página
  }

  return (
    <div>
      <div className=''>
        <div className='absolute top-0 bg-[#D85B35] w-full h-20' />
        <div className='relative flex py-12 items-center justify-center bg-[#D85B35] w-full h-20 rounded-bl-full'>
          <svg className='w-28 h-30'>
            <image href={img1} />
          </svg>
          <div className='text-white'>
            <h1 className='text-l font-bold'>PAGAR E IMPRIMIR BOLETAS</h1>
            <h2 className='text-sm'>Tasas de inmuebles y comercios</h2>
          </div>
        </div>
      </div>
      <div className='container flex-col flex p-6'>
        <div className='text-[#616161]'>
          <p>Para pagar en línea boletas de contribución de inmuebles y tasa de comercio</p>
        </div>
        <div className='text-white mt-5'>
          <button className='bg-[#4B0984] p-3 rounded-full'>GENERAR BOLETA</button>
        </div>
      </div>
      <div className='relative bg-[#FFC14F] w-full h-auto'>
        <div className='absolute right-0 -top-16 bg-[#D85B35] w-32 h-32 rounded-tl-full shadow-lg' />
        <div className='text-[#616161] p-11'>
          <h1 className='font-bold'>Boletas Inmueble y Comercial</h1>
          <p>Puede obtener boletas de la tasa de servicio sobre inmueble y actividad comercial:
            <ul className='list-inside list-disc'>
              <li>Personalmente por la Dirección de Rentas del municipio. Con el nombre del titular del inmueble o comercio y/o la nomenclatura catastral e inscripción comercial.</li>
              <li>De forma online. Debe tener la nomenclatura catastral o la inscripción del comercio y seleccionar qué y como desea pagar.</li>
            </ul>
          </p>
        </div>
      </div>
      <div className='mt-10 container mx-auto flex flex-col items-center'>
        <video className='w-auto h-auto' autoPlay loop muted>
          <source src={videoBoletas} type='video/mp4' />
        </video>
        <p className='p-6 font-bold text-[#4B0984]'>Asimismo, podés completar la siguiente encuesta sobre la gestión de trámites online que brinda el municipio. Tu opinión es importante para la mejora continua de nuestra atención.</p>
        <button className='w-52 rounded-full bg-[#D85B35] text-white p-3'>REALIZAR ENCUESTA</button>
      </div>
      <div className='bg-[#9747FF] relative w-full h-auto text-white'>
        <div className='bg-white w-screen h-20 rounded-br-full' />
        <div className='p-6'>
          <h1 className='font-bold mb-2'>¿Dónde consigo la Nomenclatura Catastral?</h1>
          <p className='text-sm mb-2'>La nomenclatura catastral es una serie de números que se encuentra impreso en el margen superior de la boleta de tasa municipal.</p>
          <h1 className='font-bold mb-2'>Vencimiento de Boletas</h1>
          <p className='text-sm mb-2'>Son 12 (doce) boletas que deben pagarse al año, sean de inmueble o comercio. Las formas de pago pueden ser:
            <ul className='list-inside list-disc'>
              <li>Anual o semestral.</li>
              <li>Pago anual y primer semestre vencen en el mes de marzo.</li>
              <li>Pago del segundo semestre vence en el mes de julio.</li>
              <li>Mensual. El pago vence el último día hábil de cada mes.</li>
            </ul>
          </p>
        </div>
        <div className='bg-[#9747FF] absolute -bottom-30 w-full h-20 rounded-br-full'>
          <button onClick={() => handleClick('/')} className='p-4'>
            <svg className='w-16 h-16'>
              <image className='w-full' href={buttonAtras} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Boletas
