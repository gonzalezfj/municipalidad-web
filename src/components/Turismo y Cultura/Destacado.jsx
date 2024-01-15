import img1 from '../../assets/home_seccion4_noticiaPirotecnia.jpg'
import img2 from '../../assets/home_seccion4_noticiaLimpieza.jpg'
import img3 from '../../assets/home_seccion4_noticiaHomenaje.jpg'
import img4 from '../../assets/homemovil_seccion4_fondo.svg'
import CarruselDestacado from './CarruselDestacado'

export const Destacado = () => {
  // const slides = [img1, img2, img3]
  const prueba = [
    {
      imagen: img1,
      titulo: "La Pirotecnia en el Año de la Ciencia",
      text: "lorem input lorem input lorem input"
    },
    {
      imagen: img2,
      titulo: "Cuidemos a los animales",
      text: "lorem input lorem input lorem input"
    },
    {
      imagen: img3,
      titulo: "Homenaje al Profesor Don Carlos Sánchez",
      text: "lorem input lorem input lorem input"
    }
  ]

  return (
    <div className='container relative lg:max-w-full lg:pr-20'>
      <h3 className='ml-4 mt-3 text-3xl text-slate-500'>Destacado</h3>
      <div className='flex flex-col relative lg:w-full bg-fifth mt-10 h-90 rounded-room'>
        <CarruselDestacado slides={prueba} />
      </div>
    </div>
  )
}