import img1 from '../../assets/home_seccion4_noticiaPirotecnia.jpg'
import img2 from '../../assets/home_seccion4_noticiaLimpieza.jpg'
import img3 from '../../assets/home_seccion4_noticiaHomenaje.jpg'
import CarruselDestacado from './CarruselDestacado'

export const Destacado = () => {
  // const slides = [img1, img2, img3]
  const prueba = [
    {
      imagen: img1,
      titulo: 'La Pirotecnia en el Año de la Ciencia',
      text: 'lorem input lorem input lorem input'
    },
    {
      imagen: img2,
      titulo: 'Cuidemos a los animales',
      text: 'lorem input lorem input lorem input'
    },
    {
      imagen: img3,
      titulo: 'Homenaje al Profesor Don Carlos Sánchez',
      text: 'lorem input lorem input lorem input'
    }
  ]

  return (
    <div className='top-40 lg:max-w-full lg:pr-20 mt-10'>
      <h3 className='lg:ml-20 mt-3 text-3xl text-gray-500 font-bold text-center'>DESTACADO</h3>
      <div className='flex flex-col relative lg:w-full bg-fifth mt-10 h-90 lg:rounded-room'>
        <CarruselDestacado slides={prueba} />
      </div>
    </div>
  )
}
