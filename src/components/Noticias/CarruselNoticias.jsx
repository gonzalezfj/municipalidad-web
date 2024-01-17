import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { NoticiasMobil } from './NoticiasMobil'

export default function CarruselNoticias ({
  autoSlide = true,
  autoSlideInterval = 3000,
  slides
}) {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval, next])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: autoSlide,
    autoplaySpeed: autoSlideInterval
  }

  const formato = window.innerWidth >= 1024

  return (
    <div className='overflow-hidden w-5/6 lg:w-full items-center justify-center flex'>
      {formato
        ? (
          <NoticiasMobil />
          )
        : (
          <div className='overflow-hidden items-center justify-center bg-white rounded-lg'>
            <Slider {...settings}>
              {slides.map((img, key, index) => (
                <div
                  data-aos='fade-left'
                  key={key}
                  className='w-screen flex-shrink-0 rounded-lg overflow-hidden shadow-lg lg:h-full '
                >
                  <div className='h-82 lg:h-96 rounded-lg flex object-cover '>
                    <img className='w-full h-64 lg:h-full object-cover rounded-lg' src={img} alt={`Slide ${key}`} />
                  </div>
                  <div className='pl-2'>
                    <div className=' py-4'>
                      <div className='font-bold text-3xl text-fifth text-left'>Pirotecnia Cero en la Ciudad de San Juan</div>
                    </div>
                    <div className=' pt-2 pb-2 rounded-xl'>
                      <span className='inline-block font-bold bg-six rounded-full px-3 py-1 shadow-lg text-sm text-gray-700 mr-2 mb-2'>
                        + info
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div
              data-aos='fade-right'
              className='container items-center justify-center flex pt-10 pb-10'
            >
              <span className='items-center justify-center flex bg-orange-400 rounded-3xl w-40 h-10 shadow-lg transform hover:translate-y-1 transition-transform'>
                <h2 className='text-gray-600 items-center justify-center '>Mostrar más ...</h2>
              </span>
            </div>
          </div>
          )}
    </div>
  )
}
