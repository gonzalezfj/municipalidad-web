import CarruselNoticias from './CarruselNoticias'
import img1 from '../../assets/home_seccion4_noticiaPirotecnia.jpg'
import img2 from '../../assets/home_seccion4_noticiaLimpieza.jpg'
import img3 from '../../assets/home_seccion4_noticiaHomenaje.jpg'
import img4 from '../../assets/homemovil_seccion4_fondo.svg'

export const Noticias = () => {
  const slides = [img1, img2, img3]
  return (
    <div className='flex flex-col top-40 items-center justify-center'>
      <h3 className='mb-8 mt-10 text-3xl text-gray-500 font-bold'>NOTICIAS</h3>
      <svg className='absolute -z-10 lg:hidden top-10 md:top-2 w-full h-96 md:h-96'>
        <image className='relative w-full' href={img4} />
      </svg>
      <CarruselNoticias slides={slides} />
    </div>
  )
}
