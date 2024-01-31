import boletas from '../../assets/home_seccion2_botonBoletas.svg'
import boletas2 from '../../assets/home_seccion2_botonEco.svg'
import boletas3 from '../../assets/home_seccion2_botonEmpleo.svg'
import boletas4 from '../../assets/home_seccion2_botonGestion.svg'
import boletas5 from '../../assets/home_seccion2_botonZoonosis.svg'
import boletas6 from '../../assets/home_seccion2_botonReclamo.svg'
import { useNavigate } from 'react-router'

export const Card = () => {
  const navigate = useNavigate()

  const handleClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0) // Esto debería llevar la vista al inicio de la página
  }

  return (
    <div className='grid gap-x-14 gap-y-6 grid-cols-2 md:gap-x-16 md:gap-y-8 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-28 sm:gap-x-4 sm:gap-y-4 sm:grid-cols-3 mt-20 mb-20'>
      <div onClick={() => handleClick('/boletas')} className='w-40 h-52 lg:w-52 lg:h-62 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col items-center justify-center cursor-pointer' data-aos='fade-right'>
        <div className='w-36 h-36'>
          <img src={boletas} className='object-cover' alt='Boletas' />
        </div>
        <div className='flex-1 w-40 lg:w-full flex items-center justify-center transition ease-in-out delay-150 bg-secondary hover:bg-purple-600 duration-200'>
          <h4 className='text-sm w-full h-full items-center justify-center flex text-slate-50'>PAGO DE BOLETAS</h4>
        </div>
      </div>

      <div onClick={() => handleClick('/estacionamientocontrolado')} className='w-40 h-52 lg:w-52 lg:h-62  overflow-hidden shadow-lg bg-third rounded-primary flex flex-col items-center justify-center cursor-pointer' data-aos='fade-right'>
        <div className='w-36 h-36'>
          <img src={boletas2} className='object-cover' alt='Boletas' />
        </div>
        <div className='flex-1 w-40 lg:w-full flex items-center justify-center transition ease-in-out delay-150 bg-secondary hover:bg-purple-600 duration-200'>
          <h4 className='text-xs ml-6 lg:ml-10 w-full h-full items-center flex text-slate-50'>ESTACIONAMIENTO CONTROLADO</h4>
        </div>
      </div>

      <div className='w-40 h-52 lg:w-52 lg:h-62  overflow-hidden shadow-lg bg-third rounded-primary flex flex-col justify-center items-center cursor-pointer' data-aos='fade-right'>
        <div className='w-36 h-36'>
          <img src={boletas3} className='object-cover' alt='Boletas2' />
        </div>
        <div onClick={() => handleClick('/empleo')} className='flex-1 w-40 lg:w-full flex items-center justify-center transition ease-in-out delay-150 bg-secondary hover:bg-purple-600 duration-200'>
          <h4 className='text-base text-slate-50'>EMPLEO</h4>
        </div>
      </div>
      {/* CONTENEDORES GRANDES */}
      <div onClick={() => handleClick('/tramites')} className='w-40 h-52 lg:w-52 lg:h-62 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col items-center justify-center cursor-pointer' data-aos='fade-right'>
        <div className='w-36 h-36 mr-6'>
          <img src={boletas4} className='object-cover' alt='Boletas3' />
        </div>
        <div className='flex-1 w-40 lg:w-full flex items-center justify-center transition ease-in-out delay-150 bg-secondary hover:bg-purple-600 duration-200'>
          <h4 className='text-sm ml-10 lg:ml-2 text-slate-50'>GESTION DE TRAMITES</h4>
        </div>
      </div>

      <div onClick={() => handleClick('/zoonosis')} className='w-40 h-52 lg:w-52 lg:h-62  overflow-hidden shadow-lg bg-third rounded-primary flex flex-col items-center justify-center cursor-pointer' data-aos='fade-right'>
        <div className='w-36 h-36'>
          <img src={boletas5} className='object-cover' alt='Boletas4' />
        </div>
        <div className='flex-1 w-40 lg:w-full flex items-center justify-center transition ease-in-out delay-150 bg-secondary hover:bg-purple-600 duration-200'>
          <h4 className='text-xs ml-6 text-slate-50'>ESTERILIZACIÓN DE MASCOTAS</h4>
        </div>
      </div>

      <div className='w-40 h-52 lg:w-52 lg:h-62  overflow-hidden shadow-lg bg-third rounded-primary flex flex-col items-center justify-center cursor-pointer' data-aos='fade-right'>
        <div className='w-36 h-36'>
          <img src={boletas6} className='mt-6 object-cover' alt='Boletas5' />
        </div>
        <div className='flex-1 w-40 lg:w-full flex items-center justify-center transition ease-in-out delay-150 bg-secondary hover:bg-purple-600 duration-200'>
          <h4 className='text-base text-slate-50'>RECLAMOS</h4>
        </div>
      </div>
    </div>
  )
}
