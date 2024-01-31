import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { NoticiasDesktop } from './NoticiasDesktop'

export default function CarruselNoticias ({
  autoSlide = true,
  autoSlideInterval = 3000,
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
    autoplaySpeed: autoSlideInterval
  }

  const formato = window.innerWidth >= 1024

  return (
    <div className='relative overflow-hidden w-3/4 items-center justify-center flex'>
      {formato
        ? (
          <NoticiasDesktop />
          )
        : (
          <div className='overflow-hidden items-center justify-center bg-transparent rounded-lg'>
            <Slider {...settings}>
              {slides.map((img, key, index) => (
                <div
                  data-aos='fade-left'
                  key={key}
                  className='w-full flex-shrink-0 rounded-lg overflow-hidden lg:h-full'
                >
                  <div className='h-82 p-1 lg:h-96 rounded-lg flex object-cover '>
                    <img className='w-full h-64 lg:h-full object-cover rounded-lg' src={img} alt={`Slide ${key}`} />
                  </div>
                  <div className='pl-2'>
                    <div className=' py-4'>
                      <div className='font-bold text-3xl text-fifth text-left'>Pirotecnia Cero en la Ciudad de San Juan</div>
                    </div>
                    <div className='pl-2'>
                      {/* <div className=' py-4'>
                        <div className='font-bold text-3xl text-fifth text-left'>Pirotecnia Cero en la Ciudad de San Juan</div>
                      </div> */}
                      <div className='pt-2 pb-2 rounded-xl'>
                        <button className='font-bold flex gap-2 bg-white rounded-full px-4 py-1 shadow shadow-slate-400 text-sm text-gray-700 mr-2 mb-2'>
                          Info
                          <span className='bg-purple-950 w-5 h-5 rounded-full text-white font-extrabold'>+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div
              data-aos='fade-right'
              className='container items-center justify-center flex pt-10 pb-10'
            >
              <span className='items-center justify-center flex bg-[#FFC14F] rounded-full w-40 h-10 shadow-lg transform hover:translate-y-1 transition-transform'>
                <h2 className='text-white items-center font-bold justify-center '>Más noticias ...</h2>
              </span>
            </div>
          </div>
          )}
    </div>
  )
}
