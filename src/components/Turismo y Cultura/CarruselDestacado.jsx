import { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default function CarruselDestacado ({
  autoSlide = true,
  autoSlideInterval = 2000,
  slides
}) {
  const [curr, setCurr] = useState(0)

  useEffect(() => {
    const next = () => setCurr(c => curr === slides.length - 1 ? 0 : curr + 1)

    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval, slides.length, curr])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: autoSlide,
    autoplaySpeed: autoSlideInterval,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='overflow-hidden items-center justify-center relative ' style={{ top: '-20px' }}>
      <Slider {...settings}>
        {slides.map((slide, key, index) => (
          <div
            key={key}
            data-aos='fade-right'
            className='flex transition-transform ease-out duration-300 rounded-full'
          >
            <div className='w-screen flex-shrink-0 flex-col rounded-full items-center justify-center flex'>
              <div className='lg:max-w-96 lg:max-h-96'>
                <img className='w-80 h-80 lg:w-96 lg:h-96 md:w-96 md:h-96 object-cover rounded-full shadow-xl' src={slide.imagen} alt={`Slide ${index}`} />
              </div>
              <div className='pt-8 flex items-center justify-center w-42'>
                <h3 className='text-white lg:text-3xl text-xl font-bold text-center'>{slide.titulo}</h3>
              </div>
              <div className='pt-4 items-center justify-center lg:visible invisible'>
                <p className='text-white lg:text-lg'>{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
