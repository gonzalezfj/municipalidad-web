import img1 from '../../assets/home_seccion4_noticiaPirotecnia.jpg'
import img2 from '../../assets/home_seccion4_noticiaLimpieza.jpg'
import img3 from '../../assets/home_seccion4_noticiaHomenaje.jpg'
import img4 from '../../assets/homemovil_seccion4_fondo.svg'
import CarruselDestacado from './CarruselDestacado'

export const Destacado = () => {
  const slides = [img1, img2, img3]

  return (
    <div className='container relative'>
      <h3 className='ml-4 mt-3 text-3xl text-slate-500'>Destacado</h3>
      <div className='flex flex-col relative bg-no-repeat bg-fifth mt-10 h-96'>
        <CarruselDestacado slides={slides} />
      </div>
    </div>
  )
}