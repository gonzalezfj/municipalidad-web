import CarruselNoticias from './CarruselNoticias'
import img1 from '../../assets/home_seccion4_noticiaPirotecnia.jpg'
import img2 from '../../assets/home_seccion4_noticiaLimpieza.jpg'
import img3 from '../../assets/home_seccion4_noticiaHomenaje.jpg'
import img4 from '../../assets/homemovil_seccion4_fondo.svg'

export const Noticias = () => {
  const slides = [img1, img2, img3]
  return (
    <div className='flex flex-col relative bg-no-repeat items-center justify-center' style={{ backgroundImage: `url(${img4})`}}>
      <h3 className='ml-4 mb-8 mt-3 text-3xl text-gray-500'>NOTICIAS</h3>
      <CarruselNoticias slides={slides} />
    </div>
  )
}
