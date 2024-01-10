import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img2 from '../../assets/imagen2.jpg'
import img3 from '../../assets/imagen4.jpg'
import img4 from '../../assets/imagen5.webp'
import img5 from '../../assets/home/home_seccion3_deporteysalud_foto.jpg'

export const Desctacado = () => {
  const images = [img2, img3, img4, img5]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  return (
    <div className='bg-room items-center justify-center'>
      <h1 className='p-8 bg-third mt-4 z-4 text-neutral-400'>Turismo y Cultura</h1>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className='mb-4'>
            <div className=' w-72 h-72 rounded-full overflow-hidden ' style={{ margin: '0 4rem' }}>
              <img
                className='w-full h-full object-cover z-100 relative top-0 left-0'
                src={img}
                alt={`Imagen ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
      <h4 className='flex items-center justify-center mt-8 text-lg font-bold text-stone-200'>Guía Turística</h4>
    </div>
  )
}
