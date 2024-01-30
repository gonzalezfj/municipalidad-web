import React from 'react'
import img1 from '../../assets/home_seccion3_agenda_foto.jpg'
import img2 from '../../assets/home_seccion3_circuito_foto.jpg'
import img3 from '../../assets/home_seccion3_deporteysalud_foto.jpg'
import img4 from '../../assets/home_seccion3_ferias_foto.jpg'
import fondo from '../../assets/home_seccion4_fondo.svg'

export const NoticiasDesktop = () => {
  return (
    <div className='container relative flex grid-cols-2 justify-center items-center lg:mb-3'>
      <svg className='lg:absolute lg:top-2 lg:left-[12vw] lg:w-full lg:h-full'>
        <image className='lg:relative lg:h-full' href={fondo} />
      </svg>
      <div className='flex gap-x-32 mt-10 mb-10'>
        {/* CONTENEDOR IMAGEN  */}
        <div className='grid grid-cols-2 gap-4 gap-y-4 lg:visible relative'>
          {/* Imagen 1 */}
          <div>
            <img
              className='transition duration-500 hover:scale-125 shadow-lg w-40 h-40 cursor-pointer object-cover rounded-md absolute'
              src={img1}
              alt='Imagen Pequeña 1'
            />
          </div>
          {/* Imagen 2 */}
          <div>
            <img
              className='transition duration-500 hover:scale-125 w-40 h-40 shadow-lg cursor-pointer object-cover rounded-md'
              src={img2}
              alt='Imagen Pequeña 2'
            />
          </div>
          {/* Imagen 3 */}
          <div>
            <img
              className='transition duration-500 hover:scale-125 w-40 h-40 shadow-lg cursor-pointer object-cover rounded-md'
              src={img3}
              alt='Imagen Pequeña 3'
            />
          </div>
          {/* Imagen 4  */}
          <div className=''>
            <img
              className='transition duration-500 hover:scale-125 w-40 h-40 shadow-lg cursor-pointer object-cover rounded-md'
              src={img4}
              alt='Imagen Pequeña 3'
            />
          </div>
        </div>
        {/* CONTENEDOR INFO */}
        <div className='w-96'>
          <h2 className='text-fifth font-bold text-xl text-left'>Conocé la planificación semanal de limpieza en la Ciudad</h2>
          <h3 className='text-fifth font-medium'>Desamparados</h3>
          <p className='text-left mt-6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut </p>
          <div className='mt-8'>
            <div className=' pt-2 pb-2 rounded-xl ml-0'>
              <span className='cursor-pointer inline-block bg-gray-50 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 shadow-lg'>
                + info
              </span>
            </div>
            <div className=' pt-2 pb-2 rounded-xl'>
              <span className='cursor-pointer inline-block rounded-full px-3 py-1 text-sm font-bold text-white bg-six mr-2 mb-2 shadow-lg'>
                Más Noticias
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
