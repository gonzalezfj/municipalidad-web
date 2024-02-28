import { useEffect, useState } from 'react'
import { Card } from './Card'
import ButtonBack from '@components/Default/ButtonBack'
import img4 from '@assets/BuscadorNoticias_mobile/BuscarNoticias_graficaFondo.svg'
import img5 from '@assets/BuscadorNoticias_mobile/BuscarNoticias_graficaFondo2.svg'
import Pagination from './Pagination/Pagination'

export const Noticias = () => {
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)
  const PAGE_SIZE = 3

  const incrementPage = () => {
    if (page < news.meta.pagination.pageCount) { setPage(page + 1) }
  }

  const decrementPage = () => {
    if (page !== 1) {
      setPage(page - 1)
    }
  }

  useEffect(() => {
    const getNews = async () => {
      try {
        const params = new URLSearchParams({
          populate: '*',
          'pagination[page]': page,
          'pagination[pageSize]': PAGE_SIZE,
          'pagination[withCount]': true
        })
        const response = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/noticias?' + params)
        const news = await response.json()
        console.log(news)
        setNews(news)
      } catch (error) {
        console.error('Error happened while fetching data', error)
      }
    }
    getNews()
  }, [page])

  return (
    <div className='w-full'>
      <img src={img4} alt='img not found' className='w-full h-32 lg:h-44 absolute object-cover' />
      <h1 className='font-extrabold text-[#3E3E3E] text-2xl lg:text-3xl p-10 lg:pl-[18em] lg:pb-[7rem] pt-[15rem]'> NOTICIAS</h1>
      <img src={img5} alt='img not found' className='w-36 h-w-36 absolute -z-10 lg:w-60 lg:h-w-60' />
      <div className='container mx-auto px-8 flex flex-col gap-3 items-center pt-10'>
        {news.data
          ? news.data.map((newItem) => (
            <Card
              key={newItem.id}
              identifier={newItem.id}
              date={newItem.attributes.createdAt}
              description={newItem.attributes.Contenido.slice(0, 190) + '...'}
              imageUrl={newItem.attributes.Imagen.data.attributes.url}
              title={newItem.attributes.Titulo}
            />
          ))
          : <p>Cargando Noticias</p>}

      </div>
      {news.meta && <Pagination actualPage={page} totalPages={news.meta.pagination.pageCount} incrementPage={incrementPage} decrementPage={decrementPage} />}
      <div className='lg:pt-8 lg:flex justify-end hidden'>
        <div className='bg-amber-400 w-[30rem] h-36 flex flex-col items-center justify-center rounded-room lg:transform lg:rotate-180'>
          <label className='text-white text-2xl lg:transform lg:rotate-180'>Buscar Noticias</label>
          <input className='rounded-lg border-slate-200 mt-2 lg:transform lg:rotate-180' type='text' />
        </div>
      </div>
      <div className='pt-10 pl-8 lg:pl-[33rem]'>
        <ButtonBack />
      </div>
    </div>
  )
}

export default Noticias
