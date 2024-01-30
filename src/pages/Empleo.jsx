import React from 'react'
import CarruselEmpleo from '../components/Empleo/CarruselEmpleo'
import boton from '../assets/mobilEmpleo/empleo_botonCalendario.svg'
import img1 from '../assets/mobilEmpleo/empleoMobile_ProgramaCursosyCapacitacionLaboral.jpg'
import img2 from '../assets/mobilEmpleo/empleoMobile_ProgramaEntrenamientoParaElTrabajo.jpg'
import img3 from '../assets/mobilEmpleo/empleoMobile_ProgramaPomoveTuOficioGuia.jpg'
import buttonAtras from '../assets/guiaDeTramitesMobile_botonAtras.svg'

export const Empleo = () => {
  const slides = [img1, img2, img3]
  return (
    <div className=''>
      {/* PRIMERA PARTE */}
      <div className='lg:flex lg:flex-cols lg:w-3/4 lg:pl-40'>
        <div className='p-12 w-full items-center justify-center grid'>
          <h1 className='font-bold text-fifth text-2xl mb-2'>EMPLEO</h1>
          <p className='font-semibold text-six text-sm lg:w-2/3'>Brindamos acompañamiento en la búsqueda de empleo y cursos disponibles para el ingreso al mercado laboral de los capitalinos/as desocupados/as o que requieran capacitación.</p>
        </div>
        <div className='items-center justify-center flex flex-col-2 lg:pt-10 mr-8 lg:flex lg:flex-col'>
          <div className='pr-4 lg:pr-0'>
            <img className='bg-secondary p-1 w-24 h-24 object-cover rounded-3xl' src={boton} alt='' />
          </div>
          <div className='w-36'>
            <h2 className='font-bold text-xl lg:text-sm lg:text-center lg:pt-4'>CALENDARIO DE PAGO</h2>
          </div>
        </div>
      </div>
      {/* PRIMERA PARTE */}
      <div className='lg:items-center relative lg:justify-center lg:w-full'>
        <h1 className='font-bold text-2xl pt-4 pl-10 lg:pt-0 lg:pl-0 lg:ml-[12.5rem] text-seven'>PROGRAMAS</h1>
        <div className='bg-primary  relative w-full h-auto text-white'>
          <div className='bg-white w-full h-20 z-60 absolute lg:w-full rounded-br-full' />
          <div>
            <CarruselEmpleo slides={slides} />
          </div>
        </div>
        <div className='bg-primary absolute -bottom-30 w-full h-20 rounded-br-full lg:flex lg:items-center lg:justify-center'/>
      </div>
    </div>
  )
}
