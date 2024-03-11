import ContentLoader from 'react-content-loader'
import { useNavigate } from 'react-router'

import range from '@/utils/range'

const CardItem = ({ title, icon, onClick }) => {
  return (
    <div onClick={onClick} className='w-40 h-52 lg:w-52 lg:h-62 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col items-center justify-center cursor-pointer' data-aos='fade-right'>
      <div className='w-36 h-36'>
        <img src={icon} className='object-cover' alt='Boletas' />
      </div>
      <div className='flex-1 w-40 lg:w-full flex items-center justify-center transition ease-in-out delay-150 bg-secondary hover:bg-purple-600 duration-200'>
        <h4 className='text-sm uppercase text-center w-full h-full items-center justify-center flex text-slate-50'>{title}</h4>
      </div>
    </div>
  )
}

const CardItemPlaceholder = () => {
  return (
    <ContentLoader
      speed={2}
      width={160}
      height={200}
      viewBox='0 0 160 200'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='0' y='0' rx='3' ry='3' width='160' height='200' />
    </ContentLoader>
  )
}

const Card = ({ botones, isLoading }) => {
  const navigate = useNavigate()
  console.log()
  const handleClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  if (isLoading) {
    return (
      <div className='grid gap-x-14 gap-y-6 grid-cols-2 md:gap-x-16 md:gap-y-8 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-28 sm:gap-x-4 sm:gap-y-4 sm:grid-cols-3 mt-20 mb-20'>
        {range(6).map((e) => <CardItemPlaceholder key={e} />)}
      </div>
    )
  }

  return (
    <div className='grid gap-x-14 gap-y-6 grid-cols-2 md:gap-x-16 md:gap-y-8 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-28 sm:gap-x-4 sm:gap-y-4 sm:grid-cols-3 mt-20 mb-20'>
      {botones.map((boton) => (
        <CardItem
          key={boton.id}
          onClick={() => handleClick(boton.Link)}
          title={boton.Titulo}
          icon={import.meta.env.VITE_STRAPI_URL + boton.Icono.data.attributes.url}
        />
      ))}
    </div>
  )
}

export default Card
