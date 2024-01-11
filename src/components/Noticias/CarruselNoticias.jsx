import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

export default function Carousel ({
  autoSlide = false,
  autoSlideInterval = 3000,
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

  return (
    <div className='overflow-hidden  items-center justify-center'>
      <div
        className='flex transition-transform ease-out duration-450'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img, key, index) => (
          <div key={key} className='w-full flex-shrink-0 rounded-lg overflow-hidden shadow-lg p-4'>
            <div className='h-82 rounded-lg flex object-cover '>
              <img className='w-full h-64 object-cover rounded-lg' src={img} alt={`Slide ${key}`} />
            </div>
            <div className='px-6 py-4'>
              <div className='font-bold text-3xl text-fifth'>Pirotecnia Cero en la Ciudad de San Juan </div>
            </div>
            <div className='px-6 pt-2 pb-2 rounded-xl'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #photography
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-6'>
        <button
          onClick={prev}
          className='p-1 rounded-full shadow bg-white text-gray-800 hover:bg-orange-500'
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className='p-1 rounded-full shadow bg-white text-gray-800 hover:bg-orange-500'
        >
          <ChevronRight size={30} />
        </button>
      </div>
      <div className='relative bottom-10 right-0 left-0'>
        <div className='flex items-center justify-center gap-3'>
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 bg-slate-800 rounded-full ${curr === i ? 'p-2' : 'bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>
    </div>

  )
}
