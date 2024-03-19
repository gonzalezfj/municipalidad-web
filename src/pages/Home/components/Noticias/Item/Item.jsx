import CarruselNoticias from '../Carousel/Carousel'
const img1 = import.meta.env.VITE_ASSETS_URL + '/assets/home_seccion4_noticiaPirotecnia.jpg'
const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/home_seccion4_noticiaLimpieza.jpg'
const img3 = import.meta.env.VITE_ASSETS_URL + '/assets/home_seccion4_noticiaHomenaje.jpg'
const img4 = import.meta.env.VITE_ASSETS_URL + '/assets/homemovil_seccion4_fondo.svg'

const Noticias = () => {
  const slides = [img1, img2, img3]
  return (
    <div className='flex relative flex-col items-center justify-center'>
      <h3 className='mb-8 mt-10 text-3xl text-gray-500 font-bold'>NOTICIAS</h3>
      <svg className='absolute -z-10 lg:hidden top-10 md:top-2 w-full h-96 md:h-96'>
        <image className='relative w-full' href={img4} />
      </svg>
      <CarruselNoticias slides={slides} />
    </div>
  )
}

export default Noticias
