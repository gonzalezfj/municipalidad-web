import React from 'react';
import img1 from '../assets/home_seccion2_botonBoletas.svg'
import img2 from '../assets/imgVideo.jpg'

const Boletas = () => {
  return (
    <div className='absolute top-14 bg-white'>
      <div className='h-60 w-screen rounded-bl-full bg-[#D85B35]  text-white flex items-center pl-60 pt-20 '>
        <img src={img1} alt="" className='w-20 h-20 bg-slate-50 rounded-lg' />
        <div className='pl-10'>
          <h1 className='font-bold text-xl'>PAGAR E IMPRIMIR BOLETAS</h1>
          <h5 className='font-semebold'>Tasas de inmueble y comercios</h5>
        </div>
      </div>
      <p className='text-gray-400 font-semibold p-10 pl-40 text-xl'>Para pagar en línea u obtener boletas de contribución de inmuebles y tasa de comercio.</p>
      <div className='items-center pl-40 pb-10'>
        <button className='text-white text-2xl rounded-fifth p-6 bg-purple-900 font-bold'>GENERAR BOLETA</button>
      </div>
      <div className='bg-amber-300 p-20 rounded-bl-full rounded-tl-full'>
        <div className='pl-20 text-gray-600'>
          <h2 className='text-2xl font-bold'>Boletas Inmueble y Comercial</h2>
          <h5>Puede obtener la boleta sobre la tasa de servicio de Inmueble y actividad comercºial.</h5>
          <span>
            <li>Debe tener la nomenclatura catastral o la inscripción del comercio y seleccionar qué y cómo desea pagar.</li>
            <li>Personalmente por la Dirección de Rentas del municipio. Con el nombre del titular del inmueble o comercio y/o la nomenclatura catastral e inscripción comercial.
              De forma online. Debe tener la nomenclatura catastral o la inscripción del comercio y seleccionar qué y cómo desea pagar.
            </li>
          </span>
        </div>
      </div>
      <div className='items-center justify-center flex  pt-10 pb-20 w-full h-full'>
        <img src={img2} alt="img de prueba" className='rounded-2xl w-2/4 h-2/4' />
      </div>
      <div className='text-center w-2/4 items-center justify-center flex ml-80'>
        <p className='text-purple-900 font-bold text-xl'>Asimismo, podés completar la siguiente encuesta sobre la gestión de trámites online que brinda el municipio. Tu opinión es importante para la mejora continua de nuestra atención.</p>
      </div>
      <div className='items-center justify-center flex pt-4 pb-10'>
        <button className='bg-orange-500 text-white rounded-3xl pt-2 pb-2 pl-10 pr-10 font-bold'>REALIZAR ENCUESTA</button>
      </div>
      {/* FINAL */}
      <div className='bg-[#9747FF] w-screen z-20 text-slate-50 items-center justify-center grid grid-rows pb-20'>
        <div className='bg-white h-20 z-10 rounded-br-full w-full'>
        </div>
        <div className='w-4/5 pl-60 pt-20'>
          <h1 className='text-xl font-bold pb-10'>¿Dónde consigo la Nomeclatura Catastral?</h1>
          <p className='pb-10'>La nomenclatura catastral es una serie de números que se encuentra impreso en el margen superior de la boleta de tasa municipal.</p>
          <h3 className='text-xl font-bold pb-10'>Vencimiento de Boletas</h3>
          <p>Son 12 (doce) boletas que deben pagarse al año, sean de inmueble o comercio. Las formas de pago pueden ser.</p>
          <span>
            <li>
              Anual o semetral
              <span>
                <li className='pl-8'>Pago anual y primer semestre vencen en el mes de marzo.</li>
                <li className='pl-8'>Pago del segundo sementre vence en el mes de julio.</li>
              </span>
            </li>
            <li>Mensual. El pago vence en el ultimo dia hábil del mes.</li>
          </span>
        </div>
      </div>
    </div>

  )
}

export default Boletas
