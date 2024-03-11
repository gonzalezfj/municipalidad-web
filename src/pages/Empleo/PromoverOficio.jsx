import React from 'react'
import img from '@assets/mobilEmpleo/empleoMobile_ProgramaPomoveTuOficioGuia.jpg'
import img2 from '@assets/img temporal/estoyBuscandoUn.jpg'

export const PromoverOficio = () => {
  return (
    <div>
      {/* IMG */}
      <img src={img} alt='img not found' className='w-full object-cover h-80' />
      <div className='container mx-auto flex flex-col gap-4 pt-10 px-10'>
        {/* TITULO */}
        <h1 className='text-[#4B0984] font-extrabold text-2xl lg:text-3xl'>PROMOVÉ TU OFICIO: LA GUÍA DIGITAL DE ESPECIALIASTAS DE CAPITAL</h1>
        {/* TEXT */}
        <section className='font-semibold text-[#3E3E3E] text-sm lg:text-[1.1rem] flex flex-col gap-4 pr-20'>
          <p>Si necesitás algún arreglo en tu domicilio, podés encontrar al profesional más cercano. También podés registrarte si trabajás en alguno de esos oficios.</p>
          <p>En la Guía podrás encontrar una lista georreferencial a electricistas, pintores, plomeros, albañiles, modistas, gasistas, carpinteros, técnicos en aire acondicionado, metalúrgicos, programadores y reparadores de PC de la Capital.</p>
          <p>Usando el buscador, podés encontrar al más cercano a tu domicilio y contratarlo sencillamente.</p>
          <p>Ayuda: Deberás permitir que el sistema acceda a tu ubicación actual para poder ubicar a los profesionales más próximos.
            A continuación aparecerán con un ícono de pin rojo los profesionales listados con tarjetas en las que aparecerán nombres y teléfonos.
            De la lista de disponibles, podrás contactar al más afín a tu necesidad.
          </p>
        </section>
        {/* FORMULARIO */}
        <div className='items-center justify-center flex'>
          <img src={img2} alt='img not found' className='w-[32rem] h-[32rem] object-cover' />
        </div>
        <section className='flex flex-col gap-4'>
          <h2 className='text-2xl lg:text-3xl font-extrabold'>Registrate como trabajador de oficios</h2>
          <p className='font-bold text-[23px]'>El trabajador que viva en Capital y quiera ofrecer sus servicios puede registrarse y validar sus datos, en vistas a futuras contrataciones.</p>
          <button className='text-white bg-[#4B0984] rounded-3xl h-10 lg:w-[40rem] lg:text-[1.2rem] lg:h-14'>Quiero inscribirme con mi oficio</button>
        </section>
        {/* FINAL */}
        <div className='flex flex-col gap-10 pt-10'>
          <h1 className='text-[#8A43EF] font-extrabold text-1xl lg:text-2xl'>Dirección de Empleo y Desarrollo Productivo</h1>
          <section>
            <h3 className='font-extrabold text-sm lg:text-[1.2rem]'>Anexo Municipal Güemes.</h3>
            <ul className='font-bold text-sm lg:text-[1.2rem]'>
              <li>Mitre 646 este, subsuelo.</li>
              <li>Tel: 264 494 6853</li>
              <li>Horarios de atención: De 7 a 13hs.</li>
            </ul>
          </section>
          {/* FALTA RECURSO  !!!! */}
        </div>
      </div>
    </div>
  )
}
