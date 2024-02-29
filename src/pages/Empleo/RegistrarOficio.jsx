import React from 'react'
import img from '@assets/mobilEmpleo/empleoMobile_ProgramaPomoveTuOficioRegisto.jpg'
import img2 from '@assets/img temporal/formularioOficio.jpg'
import img3 from '@assets/img temporal/formularioOficioImg.jpg'
export const RegistrarOficio = () => {
  return (
    <div>
      <img src={img} alt='img not found' className='w-full object-cover h-80' />
      <div className='container mx-auto flex flex-col gap-4 pt-10 px-10'>
        {/* IMG */}
        {/* TITULO */}
        <h1 className='text-[#4B0984] font-extrabold text-2xl lg:text-3xl'>¿TENES ALGÚN OFICIO? REGISTRATE ACA</h1>
        {/* TEXT */}
        <section className='font-semibold text-[#3E3E3E] text-sm lg:text-[1.1rem] flex flex-col gap-2'>
          <p>Bienvenido al catálogo georreferenciado de oficios de Capital. Aquí podrás inscribirte para ofrecer tus servicios en albañilería, pintura, metalurgia; entre otras especialidades.</p>
          <p>El objetivo es que el ciudadano pueda encontrar cerca de su domicilio el servicio que necesita y contratarlo directamente.</p>
          <p>Si sos trabajador especializado en albañilería, electricista, pintor, plomero, modista, gasista, carpintero, técnico en aire acondicionado, metalúrgico, programador o reparadores de PC; con sede en Capital; podés dejar tus datos completando un sencillo formulario online aquí. Tu solicitud será revisada en la Dirección de Empleo y Desarrollo Productivo de Capital, para su aprobación.</p>
        </section>
        {/* FORMULARIO */}
        <div className='items-center justify-center flex'>
          <img src={img2} alt='img not found' className='w-[32rem] h-[32rem] object-cover' />
        </div>
        {/* AGREGA SOLICITUD */}
        <div className='items-center justify-center flex'>
          <img src={img3} alt='img not found' className='w-[32rem] h-[32rem] object-cover' />
        </div>
        {/* FINAL */}
        <div className='flex flex-col gap-2'>
          <h1 className='text-[#8A43EF] font-extrabold text-1xl lg:text-2xl'>Dirección de Empleo y Desarrollo Productivo</h1>
          <section>
            <h3 className='font-extrabold text-sm lg:text-[1.2rem]'>Anexo Municipal Güemes.</h3>
            <ul className='font-bold text-sm lg:text-[1.2rem]'>
              <li>Mitre 646 este, subsuelo.</li>
              <li>Tel: 264 494 6853</li>
              <li>Horarios de atención: De 7 a 13hs.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
