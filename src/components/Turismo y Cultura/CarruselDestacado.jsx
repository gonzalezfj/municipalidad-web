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
    arrows: false,
    className: 'center',
    centerMode: true,
    centerPadding: '0px',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  }

  return (
    <div className='relative -top-5 md:-top-10'>
      <style>
        {`
          .slick-slide.slick-center {
            transform: scale(1.2);
            transition: transform 0.8s ease;
          }
          .slick-slide:not(.slick-center) {
            transform: scale(1);
            transition: transform 0.6s ease;
          }
          .slick-dots li button:before {
            color: #FFF !important;
            font-size: 1rem !important;
          }
        `}
      </style>
      <Slider {...settings}>
        {slides.map((slide, key, index) => (
          <div
            key={key}
          >
            <div className='w-full h-[52vh] lg:h-[73vh] md:h-[50vh] 2xl:h-[58vh] flex-col rounded-full items-center justify-center flex'>
              <div className='cursor-pointer'>
                <img className='w-72 h-72 lg:w-96 lg:h-96 md:w-56 md:h-56 object-cover rounded-full shadow-xl' src={slide.imagen} alt={`Slide ${index}`} />
              </div>
              <div className='flex items-center justify-center'>
                <h3 className='text-white lg:text-xl text-l font-bold text-center'>{slide.titulo}</h3>
              </div>
              <div className='items-center justify-center lg:visible invisible'>
                <p className='text-white lg:text-base'>{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
