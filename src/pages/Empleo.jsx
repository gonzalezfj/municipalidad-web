import React from 'react'
import CarruselEmpleo from '../components/Empleo/carruselEmpleo'
import boton from '../../assets/mobilEmpleo/empleo_botonCalendario.svg'
import img1 from '../../assets/mobilEmpleo/empleoMobile_ProgramaCursosyCapacitacionLaboral.jpg'
import img2 from '../../assets/mobilEmpleo/empleoMobile_ProgramaEntrenamientoParaElTrabajo.jpg'
import img3 from '../../assets/mobilEmpleo/empleoMobile_ProgramaPomoveTuOficioGuia.jpg'

export const Empleo = () => {
  const slides = [img1, img2, img3]
  return (
    <div className='container'>
      <div className='p-12 w-full items-center justify-center grid'>
        <h1 className='font-bold text-fifth text-2xl mb-2'>EMPLEO</h1>
        <p className='font-semibold text-six text-sm'>Brindamos acompañamiento en la búsqueda de empleo y cursos disponibles para el ingreso al mercado laboral de los capitalinos/as desocupados/as o que requieran capacitación.</p>
      </div>
      <div className='items-center justify-center flex flex-col-2 mr-8'>
        <div className='pr-4'>
          <img className='bg-secondary p-1 w-24 h-24 object-cover rounded-3xl' src={boton} alt='' />
        </div>
        <div className='w-36'>
          <h2 className='font-bold text-xl'>CALENDARIO DE PAGO</h2>
        </div>
      </div>
      <h1 className='font-bold text-2xl mt-10 ml-10 text-seven'>PROGRAMAS</h1>
      <div className='bg-primary'>
        <CarruselEmpleo slides={slides} />
      </div>
    </div>
  )
}
