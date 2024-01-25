import React from 'react';
import img1 from '../assets/iconosBlancos/Boleta-Icono-Blanco.svg'
import img2 from '../assets/imgVideo.jpg'

const Boletas = () => {
  return (
    <div className='top-0 bg-white w-full '>
      {/* AREA NARANJA */}
      <div className='absolute top-0 w-full '>
        <div className='pt-20 h-50 rounded-bl-[60px] lg:h-60 lg:rounded-bl-[200px] bg-[#D85B35] text-white'>
          <div className='container flex flex-col-2 items-center lg:pt-0 justify-center sm:gap'>
            <img src={img1} alt="img not fount" className='w-20 h-20 lg:w-40 lg:h-40 rounded-lg' />
            <div className='lg:ml-10 flex-col'>
              <h1 className='font-bold lg:text-xl'>PAGAR E IMPRIMIR BOLETAS</h1>
              <h5 className='font-semebold'>Tasas de inmueble y comercios</h5>
            </div>
          </div>
        </div>
      </div>
      {/* AREA NARANJA */}
      {/* BOTTON */}
      <div className='container lg:pt-20 flex flex-col lg:gap-y-10 items-center justify-center lg:w-full'>
        <div className='pt-[100px] w-80 lg:w-4/5'>
          <p className='text-gray-400 font-semibold text-sm lg:text-2xl'>Para pagar en línea u obtener boletas de contribución de inmuebles y tasa de comercio.</p>
        </div>
        <div className='lg:pb-10 pb-10 pt-4 w-80 lg:w-80 lg:pt-0 items-start flex justify-start lg:items-start  lg:justify-start'>
          <button className='text-white  text-base p-2 lg:text-2xl rounded-fifth lg:p-6 bg-purple-950 font-bold'>GENERAR BOLETA</button>
        </div>
      </div>
      {/* BOTTON */}
      {/* BOLETA */}
      <div className='bg-[#FFC14F] lg:p-20 lg:rounded-bl-full pb-10  rounded-bl-[300px] lg:pt-20 pt-10 lg:rounded-tl-full rounded-tl-[300px]'>
        <div className='  lg:pl-20 text-gray-600 container'>
          <h2 className='text-xl lg:text-2xl font-bold items-center justify-center flex lg:items-start lg:justify-start'>Boletas Inmueble y Comercial</h2>
          <h5 className='text-xs lg:text-xl font-semibold w-80 lg:w-full pl-[70px] lg:pl-0'>Puede obtener la boleta sobre la tasa de servicio de Inmueble y actividad comercºial.</h5>
          <div className='items-center justify-center flex gap-2 flex-col lg:text-xl text-xs lg:p-0 p-2'>
            <li className='lg:pl-8 w-[250px] lg:w-full'>Personalmente por la Dirección de Rentas del municipio. Con el nombre del titular del inmueble o comercio y/o la nomenclatura catastral e inscripción comercial</li>
            <li className='lg:pl-8 w-[250px] lg:w-full'>De forma online. Debe tener la nomenclatura catastral o la inscripción del comercio y seleccionar qué y cómo desea pagar.</li>
          </div>
        </div>
      </div>
      {/* BOLETA */}
      {/* CONTAINER DATA BTN  */}
      <div className='items-center justify-center flex flex-col gap-10 pt-10 lg:pb-0 lg:pt-0'>
        {/* VIDEO */}
        <div className='flex items-center justify-center w-[350px] h-[200px] lg:pt-10 lg:pb-20 lg:w-full lg:h-full'>
          <img src={img2} alt="img de prueba" className='cursor-pointer rounded-2xl w-full h-full lg:w-2/4 lg:h-2/4 object-cover' />
        </div>
        {/* VIDEO */}
        <div className='bg-[#9747FF] h-72 z-20 flex flex-col justify-center items-center'>
          <div className='bg-white relative -top-12 h-20 w-full z-10 rounded-br-full' />
          <div className='items-center justify-center flex flex-col gap-y-6 text-center w-full lg:w-2/4'>
            <div className='lg:p-0 w-3/4 lg:w-full'>
              <p className=' text-white font-bold lg:text-xl text-sm'>Asimismo, podés completar la siguiente encuesta sobre la gestión de trámites online que brinda el municipio. Tu opinión es importante para la mejora continua de nuestra atención.</p>
            </div>
            <div>
              <button className='bg-orange-500 text-white rounded-3xl pt-2 pb-2 pl-10 pr-10 font-bold'>REALIZAR ENCUESTA</button>
            </div>
          </div>
        </div>
      </div>
      {/* CONTAINER DATA BTN  */}
      {/* FINAL */}
      <div className='bg-[#FFFFF] w-full z-20 text-[#9747FF] items-center justify-center lg:p-0 p-10 lg:grid lg:grid-rows lg:pb-20'>
        <div className='lg:w-4/5 lg:pl-60 lg:pt-20'>
          <h1 className='lg:text-xl font-bold lg:pb-10'>¿Dónde consigo la Nomeclatura Catastral?</h1>
          <p className='lg:pb-10'>La nomenclatura catastral es una serie de números que se encuentra impreso en el margen superior de la boleta de tasa municipal.</p>
          <h3 className='lg:text-xl font-bold lg:pb-10'>Vencimiento de Boletas</h3>
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
