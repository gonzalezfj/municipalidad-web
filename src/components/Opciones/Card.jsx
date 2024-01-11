import boletas from '../../assets/home_seccion2_botonBoletas.svg'
import boletas2 from '../../assets/home_seccion2_botonEco.svg'
import boletas3 from '../../assets/home_seccion2_botonEmpleo.svg'
import boletas4 from '../../assets/home_seccion2_botonGestion.svg'
import boletas5 from '../../assets/home_seccion2_botonZoonosis.svg'
import boletas6 from '../../assets/home_seccion2_botonReclamo.svg'

export const Card = () => {
  return (
    <div className='grid gap-x-14 gap-y-6 grid-cols-2 sm:gap-x-4 sm:gap-y-4 sm:grid-cols-3 mt-32 mb-20'>
      <div className='w-40 h-52 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col items-center justify-center'>
        <div className='w-36 h-36'>
          <img src={boletas} className='w-full h-full object-cover' alt='Boletas' />
        </div>
        <div className='flex-1 w-40 bg-secondary'>
          <h4 className='text-sm w-full h-full items-center justify-center flex'>PAGO DE BOLETAS</h4>
        </div>
      </div>

      <div className='w-40 h-52 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col items-center justify-center'>
        <div className='w-36 h-36'>
          <img src={boletas2} className='w-full h-full object-cover' alt='Boletas' />
        </div>
        <div className='flex-1 w-40 bg-secondary  items-center justify-center flex'>
          <h4 className='text-xs ml-6 w-full h-full items-center flex'>ESTACIONAMIENTO CONTROLADO</h4>
        </div>
      </div>

      <div className='w-40 h-52 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col justify-center items-center'>
        <div className='w-36 h-36'>
          <img src={boletas3} className='w-full h-full object-cover items-center justify-center' alt='Boletas2' />
        </div>
        <div className='flex-1 w-40 bg-secondary flex items-center justify-center'>
          <h4 className='text-base'>EMPLEO</h4>
        </div>
      </div>

      <div className='w-40 h-52 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col'>
        <img src={boletas4} className='w-full h-36 object-cover' alt='Boletas3' />
        <div className='flex-1 bg-secondary flex items-center justify-center'>
          <h4 className='text-base'>GESTION DE TRAMITES</h4>
        </div>
      </div>

      <div className='w-40 h-52 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col'>
        <img src={boletas5} className='w-full h-36 object-cover' alt='Boletas4' />
        <div className='flex-1 bg-secondary flex items-center justify-center'>
          <h4 className='text-base'>ESTERILIZACIÓN DE MASCOTAS</h4>
        </div>
      </div>

      <div className='w-40 h-52 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col'>
        <img src={boletas6} className='w-full h-36 object-cover ' alt='Boletas5' />
        <div className='flex-1 bg-secondary flex items-center justify-center'>
          <h4 className='text-base'>RECLAMOS</h4>
        </div>
      </div>
    </div>
  )
}
