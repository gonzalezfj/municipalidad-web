import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
// import { ChevronLeft, ChevronRight } from 'react-feather';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarruselNoticias({
  autoSlide = true,
  autoSlideInterval = 3000,
  slides
}) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: autoSlide,
    autoplaySpeed: autoSlideInterval,
  };

  return (
    <div className='overflow-hidden w-5/6 lg:invisible'>
      <Slider {...settings}>
        {slides.map((img, key, index) => (
          <div
            data-aos="fade-left"
            key={key}
            className='w-screen flex-shrink-0 rounded-lg overflow-hidden shadow-lg lg:h-full bg-white'
          >
            <div className='h-82 lg:h-96 rounded-lg flex object-cover'>
              <img className='w-full h-64 lg:h-full object-cover rounded-lg' src={img} alt={`Slide ${key}`} />
            </div>
            <div className='px-6 py-4'>
              <div className='font-bold text-3xl text-fifth'>Pirotecnia Cero en la Ciudad de San Juan</div>
            </div>
            <div className='px-6 pt-2 pb-2 rounded-xl'>
              <span className='inline-block bg-gray-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 shadow-xl'>
                + info
              </span>
            </div>
          </div>
        ))}
      </Slider>
      <div
        data-aos="fade-right"
        className='container items-center justify-center flex pt-10 pb-10'
      >
        <span className='items-center justify-center flex bg-six rounded-3xl w-40 h-10 transform hover:translate-y-1 transition-transform shadow-xl'>
          <h2 className='text-white items-center justify-center font-bold'>Más Noticias</h2>
        </span>
      </div>

      {/* PRUEBA HOME */}
      <div className=" grid-cols-2 gap-4 justify-center hidden md:block">
        <div className="col-span-1 grid grid-cols-2 gap-4 lg:visible">
          {/* Imagen 1 */}
          <div>
            <img
              className="w-62 h-62 object-cover rounded-md"
              src="https://via.placeholder.com/400x300"
              alt="Imagen Pequeña 1"
            />
          </div>
          {/* Imagen 2 */}
          <div>
            <img
              className="w-62 h-62 object-cover rounded-md"
              src="https://via.placeholder.com/400x300"
              alt="Imagen Pequeña 2"
            />
          </div>
          {/* Imagen 3 */}
          <div>
            <img
              className="w-62 h-62 object-cover rounded-md"
              src="https://via.placeholder.com/400x300"
              alt="Imagen Pequeña 3"
            />
          </div>
          {/* Imagen 4  */}
          <div>
            <img
              className="w-62 h-62 object-cover rounded-md"
              src="https://via.placeholder.com/400x300"
              alt="Imagen Pequeña 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
