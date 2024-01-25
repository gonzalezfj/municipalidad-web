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
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: autoSlide,
        autoplaySpeed: autoSlideInterval,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    variableWidth: true,
                    centerMode: true
                }
            }
        ]
    };
    return (
        <div className='cursor-pointer overflow-hidden z-10 lg:w-full'>
            <Slider {...settings}>
                {slides.map((img, key, index) => (
                    <div
                        data-aos="fade-left"
                        key={key}
                        className='w-full lg:w-60 flex rounded-lg overflow-hidden p-10 lg:h-full'
                    >
                        <div className='h-82 lg:h-40 lg:w-40 rounded-lg flex object-cover'>
                            <img className='w-full h-64 lg:h-full object-cover rounded-t-lg' src={img} alt={`Slide ${key}`} />
                        </div>
                        <div className=' bg-secondary rounded-b-lg lg:w-40 lg:h-20 shadow-lg'>
                            <div className='px-6 py-10 lg:px-0 lg:py-0 lg:w-60 lg:text-center'>
                                <h3 className='font-bold text-3xl lg:w-40 lg:pt-4 lg:text-sm text-third'>Pirotecnia Cero en la Ciudad de San Juan</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
