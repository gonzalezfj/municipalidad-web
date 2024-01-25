import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarruselEmpleo({
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
        <div className='overflow-hidden items-center z-10 justify-center'>
            <Slider {...settings}>
                {slides.map((img, key, index) => (
                    <div
                        data-aos="fade-left"
                        key={key}
                        className=' w-screen flex-shrink-0 rounded-lg overflow-hidden p-10 lg:h-full'
                    >
                        <div className='h-82 lg:h-96 rounded-lg flex object-cover'>
                            <img className='w-full h-64 lg:h-full object-cover rounded-t-lg' src={img} alt={`Slide ${key}`} />
                        </div>
                        <div className=' bg-secondary rounded-b-lg shadow-lg'>
                            <div className='px-6 py-10'>
                                <h3 className='font-bold text-3xl text-third'>Pirotecnia Cero en la Ciudad de San Juan</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
