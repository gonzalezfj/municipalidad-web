import Slider from 'react-slick'

import range from '@/utils/range'

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

const Item = ({ image, description, title }) => {
  return (
    <div>
      <div className='w-full h-[52vh] lg:h-[73vh] md:h-[50vh] 2xl:h-[58vh] flex-col rounded-full items-center justify-center flex'>
        <div className='cursor-pointer'>
          {image && <img className='w-72 h-72 lg:w-96 lg:h-96 md:w-56 md:h-56 object-cover rounded-full shadow-xl' src={image} alt={description} />}
          {!image && <div className='w-72 h-72 lg:w-96 lg:h-96 md:w-56 md:h-56 object-cover bg-gray-300 rounded-full shadow-xl' />}
        </div>
        <div className='flex items-center justify-center'>
          <h3 className='text-white lg:text-xl text-l font-bold text-center'>{title}</h3>
        </div>
        <div className='items-center justify-center lg:visible invisible'>
          <p className='text-white lg:text-base'>{description}</p>
        </div>
      </div>
    </div>

  )
}

export default function CarruselDestacado ({
  slides,
  isLoading
}) {
  if (isLoading) {
    return (
      <Slider {...settings}>
        {range(5).map((_, index) => (
          <Item key={index} description='' title='' />
        ))}
      </Slider>
    )
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
        {slides.map((slide) => {
          const image = import.meta.env.VITE_STRAPI_URL + slide.Imagen.data.attributes.url
          const description = slide.Descripcion
          const title = slide.Titulo

          return <Item key={slide.id} {...{ image, description, title }} />
        })}
      </Slider>
    </div>
  )
}
