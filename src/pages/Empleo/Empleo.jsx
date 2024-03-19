import React from 'react'
import { CarruselEmpleo } from './components/CarruselEmpleo'
const boton = import.meta.env.VITE_ASSETS_URL + '/assets/mobilEmpleo/empleo_botonCalendario.svg'
const img1 = import.meta.env.VITE_ASSETS_URL + '/assets/mobilEmpleo/empleoMobile_ProgramaCursosyCapacitacionLaboral.jpg'
const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/mobilEmpleo/empleoMobile_ProgramaEntrenamientoParaElTrabajo.jpg'
const img3 = import.meta.env.VITE_ASSETS_URL + '/assets/mobilEmpleo/empleoMobile_ProgramaPomoveTuOficioGuia.jpg'
const img4 = import.meta.env.VITE_ASSETS_URL + '/assets/mobilEmpleo/empleoMobile_ProgramaInsercionLaboral.jpg'
const img5 = import.meta.env.VITE_ASSETS_URL + '/assets/mobilEmpleo/empleoMobile_ProgramaPomoveTuOficioRegisto.jpg'
const img6 = import.meta.env.VITE_ASSETS_URL + '/assets/mobilEmpleo/empleoMobile_ProgramaPromover.jpg'
// import ButtonBack from '@components/Default/ButtonBack'

/*
 <Route path='/programapromover' element={<ProgramaPromover />} />
<Route path='/registraroficio' element={<RegistrarOficio />} />
<Route path='/promoveroficio' element={<PromoverOficio />} />
<Route path='/programaentrenamientotrabajo' element={<ProgramaEntrenamiento />} />
<Route path='/capacitacionlaboral' element={<CapacitacionLaboral />} />
<Route path='/programainsercionlaboral' element={<ProgramaInsercionLaboral />} />
*/

const Empleo = () => {
  const slides = [
    {
      title: 'Cursos y capacitación laboral',
      image: img1,
      path: '/capacitacionlaboral'
    },
    {
      title: 'Entrenamiento para el trabajo',
      image: img2,
      path: '/programaentrenamientotrabajo'
    },
    {
      title: 'Promové tu oficio guía Digital',
      image: img3,
      path: '/promoveroficio'
    },
    {
      title: 'Inserción laboral',
      image: img4,
      path: '/programainsercionlaboral'
    },
    {
      title: 'Promové tu oficio Registro de oficio',
      image: img5,
      path: '/registraroficio'
    },
    {
      title: 'Promover',
      image: img6,
      path: '/programapromover'
    },
    {
      title: 'Cursos y capacitación laboral',
      image: img1,
      path: '/capacitacionlaboral'
    },
    {
      title: 'Entrenamiento para el trabajo',
      image: img2,
      path: '/programaentrenamientotrabajo'
    },
    {
      title: 'Promové tu oficio guía Digital',
      image: img3,
      path: '/promoveroficio'
    },
    {
      title: 'Inserción laboral',
      image: img4,
      path: '/programainsercionlaboral'
    },
    {
      title: 'Promové tu oficio Registro de oficio',
      image: img5,
      path: '/registraroficio'
    },
    {
      title: 'Promover',
      image: img6,
      path: '/programapromover'
    }
  ]
  return (
    <div className='pt-20'>
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
      <div className='relative lg:items-center lg:justify-center lg:w-full'>
        <div className='lg:pl-[13rem]'>
          <h1 className='font-bold text-2xl pt-4 pl-10 lg:pt-0 lg:pl-0 text-seven'>PROGRAMAS</h1>
        </div>
        <div className='bg-primary relative w-full h-auto text-white pb-10'>
          <div className='bg-white w-full h-20 z-60 absolute lg:w-full rounded-br-full' />
          <div>
            <CarruselEmpleo slides={slides} />
          </div>
          <div className='items-center justify-center flex pt-10'>
            <button className='font-bold  rounded-3xl w-[15rem] h-10 bg-[#D85B35]'>CONSULTAS FRECUENTES</button>
          </div>
        </div>
        <div className='bg-primary absolute -bottom-30 w-full h-20 rounded-br-full lg:flex lg:items-center lg:justify-center' />
      </div>
    </div>
  )
}

export default Empleo
