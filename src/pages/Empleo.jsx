import React from 'react'
import CarruselEmpleo from '../components/Empleo/CarruselEmpleo'
import boton from '../assets/mobilEmpleo/empleo_botonCalendario.svg'
import img1 from '../assets/mobilEmpleo/empleoMobile_ProgramaCursosyCapacitacionLaboral.jpg'
import img2 from '../assets/mobilEmpleo/empleoMobile_ProgramaEntrenamientoParaElTrabajo.jpg'
import img3 from '../assets/mobilEmpleo/empleoMobile_ProgramaPomoveTuOficioGuia.jpg'

export const Empleo = () => {
  const slides = [img1, img2, img3]
  return (
    <div className='container'>
      {/* PRIMERA PARTE */}
      <div className='lg:flex lg:flex-cols lg:w-3/4 lg:pl-40'>
        <div className='p-12 w-full items-center justify-center grid'>
          <h1 className='font-bold text-fifth text-2xl mb-2'>EMPLEO</h1>
          <p className='font-semibold text-six text-sm lg:w-2/3'>Brindamos acompañamiento en la búsqueda de empleo y cursos disponibles para el ingreso al mercado laboral de los capitalinos/as desocupados/as o que requieran capacitación.</p>
        </div>
        <div className='items-center justify-center flex flex-col-2 mr-8 lg:flex lg:flex-col'>
          <div className='pr-4 lg:pr-0'>
            <img className='bg-secondary p-1 w-24 h-24 object-cover rounded-3xl' src={boton} alt='' />
          </div>
          <div className='w-36'>
            <h2 className='font-bold text-xl lg:text-sm lg:text-center lg:pt-4'>CALENDARIO DE PAGO</h2>
          </div>
        </div>
      </div>
      {/* PRIMERA PARTE */}
      <div className='lg:items-center lg:justify-center lg:w-[100vw]'>
        <h1 className='font-bold text-2xl pt-4 pl-10 lg:pt-0 lg:pl-0 lg:ml-[12.5rem] text-seven'>PROGRAMAS</h1>
        <div className='bg-primary lg:w-full w-full'>
          <div className='bg-white w-full h-60 z-60 absolute lg:w-[100vw]' />
          <CarruselEmpleo slides={slides} />
        </div>
      </div>
    </div>
  )
}
