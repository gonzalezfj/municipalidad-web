import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router'
import { formatDate } from '@utils'
import { NoticiasRelacionadas } from '../NoticiasRelacionadas'

export const DetalleNoticia = () => {
  const [newContent, setNewContent] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const getNewContent = async () => {
      try {
        const params = new URLSearchParams({
          populate: '*'
        })
        const response = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/noticias/' + id + '?' + params)
        const newData = await response.json()
        console.log(newData.data.attributes)
        setNewContent(newData.data.attributes)
      } catch (error) {
        console.error('Error happened while fetching', error)
      }
    }
    getNewContent()
  }, [id])

  if (Object.keys(newContent).length === 0) {
    return <p>Cargando Noticia...</p>
  }

  return (
    <div className='container lg:mx-auto'>
      {/* IMG BODY */}
      <div className='lg:flex lg:flex-col-2 lg:gap-3 lg:pt-[6rem]'>
        <div className='p-8 rounded-t-lg lg:w-[90rem]'>
          <img className='rounded-t-lg pb-2' src={import.meta.env.VITE_STRAPI_URL + newContent.Imagen.data.attributes.url} alt='img not fount' />
          <h5 className='font-semibold text-six'>{formatDate(newContent.createdAt)}</h5>
          <h1 className='font-extrabold text-3xl text-secondary my-4'>{newContent.Titulo}</h1>
          <h4 className='italic font-semibold text-six'>{newContent.Descripcion}</h4>
          <Markdown className='prose max-w-full text-[#616161] mt-6'>{newContent.Contenido}</Markdown>
          <p className='font-semibold text-six mt-4'>{formatDate(newContent.updatedAt)}</p>
          <p className='font-semibold text-six'>Publicado en Noticias</p>
        </div>
        {/* BUSCAR NOTICIAS */}
        <div className='lg:pt-8'>
          <div className='bg-amber-400 h-36 flex flex-col items-center justify-center rounded-room lg:transform lg:rotate-180'>
            <label className='text-white text-2xl lg:transform lg:rotate-180'>Buscar Noticias</label>
            <input className='rounded-lg border-slate-200 mt-2 lg:transform lg:rotate-180' type='text' />
          </div>
          <div className='mt-10'>
            <h2 className='font-bold text-1xl ml-10'>NOTICIAS RELACIONADAS</h2>
            {/* COMPONENTE */}
            <NoticiasRelacionadas />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalleNoticia
