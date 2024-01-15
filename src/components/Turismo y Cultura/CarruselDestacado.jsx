import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function CarruselDestacado({
    autoSlide = true,
    autoSlideInterval = 2000,
    slides
}) {
    const [curr, setCurr] = useState(0)
    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

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
    };

    return (
        <div className='overflow-hidden items-center justify-center relative' style={{ top: '-20px' }} >
            <Slider {...settings}>
                {slides.map((slide, key, index) => (
                    <div
                        key={key}
                        data-aos="fade-right"
                        className='flex transition-transform ease-out duration-300 rounded-full '
                    >
                        <div className='w-screen flex-shrink-0 flex-col rounded-full items-center justify-center flex'>
                            <div className='lg:max-w-96 lg:max-h-96'>
                                <img className='w-80 h-80 lg:w-96 lg:h-96 md:w-96 md:h-96 object-cover rounded-full shadow-xl' src={slide.imagen} alt={`Slide ${index}`} />
                            </div>
                            <div className='pt-4 items-center justify-center'>
                                <h3 className='text-white lg:text-3xl'>{slide.titulo}</h3>
                            </div>
                            <div className='pt-4 items-center justify-center'>
                                <p className='text-white lg:text-lg'>{slide.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}