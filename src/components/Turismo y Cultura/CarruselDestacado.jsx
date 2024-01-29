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
    dots: false,
    className: 'center',
    centerMode: true,
    centerPadding: '0px',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000
  }

  return (
    <div className='overflow-hidden relative -top-5 container flex flex-col mx-auto'>
      <style>
        {`
          .slick-slide.slick-center {
            transform: scale(1.2);
            transition: transform 1.6s ease;
          }
          .slick-slide:not(.slick-center) {
            transform: scale(1);
            transition: transform 1.2s ease;
          }
        `}
      </style>
      <Slider {...settings}>
        {slides.map((slide, key, index) => (
          <div
            key={key}
          >
            <div className='w-full lg:h-[56vh] flex-col rounded-full items-center justify-center flex'>
              <div className='lg:w-auto lg:h-auto'>
                <img className='w-80 h-80 lg:w-96 lg:h-96 md:w-96 md:h-96 object-cover rounded-full shadow-xl' src={slide.imagen} alt={`Slide ${index}`} />
              </div>
              <div className='flex items-center justify-center'>
                <h3 className='text-white lg:text-2xl text-l font-bold text-center'>{slide.titulo}</h3>
              </div>
              <div className='items-center justify-center lg:visible invisible'>
                <p className='text-white lg:text-l'>{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
