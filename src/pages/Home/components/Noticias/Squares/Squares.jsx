import React, { useState } from 'react'
import fondo from '@assets/home_seccion4_fondo.svg'

const originPosition = [
  'origin-bottom-right',
  'origin-bottom-left',
  'origin-top-right',
  'origin-top-left'
]

const NoticiasDesktop = () => {
  const noticias = [
    {
      id: 4,
      Titulo: 'Campaña de vacunación y testeos de Chagas e ITS en el Barrio Costa Canal ',
      Descripcion: 'El municipio capitalino invita a los vecinos de Concepción a sumarse a una nueva jornada de esta campaña preventiva, gratuita y de fácil acceso.',
      url: '/uploads/edb2eb909582e38e8cd4129b39e59914_XL_210ff3efd7.jpg'
    },
    {
      id: 1,
      Titulo: 'Con diálogo y gestión compartida, Capital y Rivadavia impulsan obras en puntos limítrofes',
      Descripcion: 'Se trata de concretar obras y mejoramiento de zonas compartidas por los municipios, con una mirada integradora y en beneficio de los vecinos.',
      url: '/uploads/53553730294_d8971f7998_c_9ecf5eb8f6.webp'
    },
    {
      id: 2,
      Titulo: 'La Ciudad encaró trabajos de limpieza y colocación de bocas de tormenta en el microcentro',
      Descripcion: 'Se trata del saneamiento de los desagües del microcentro para prevenir desbordes y mantener la infraestructura urbana. ',
      url: '/uploads/b5027d0102a4a8048d6c376341ca6705_L_bf4378eeac.jpg'
    },
    {
      id: 3,
      Titulo: 'Prestaciones integrales y gratuitas para las mascotas de la Ciudad',
      Descripcion: 'En el marco de un importante operativo, la Plaza Juan Jufré recibió a funcionarios municipales y provinciales que, junto a los vecinos y sus mascotas, pusieron en marcha programas y acciones tendientes a reforzar la tenencia responsable de animales de compañía.',
      url: '/uploads/7d2b44e1acb81d8cdd76dd8b774e17df_L_1485ca87cc.jpg'
    }
  ]

  const [noticiaElegida, setNoticiaElegida] = useState(noticias[0])
  const [noticiaAmostrar, setNoticiaAmostrar] = useState(noticias[0])

  const onClick = (noticia) => {
    setNoticiaElegida(noticia)
  }

  const onMouseEnter = (noticia) => {
    setNoticiaAmostrar(noticia)
  }

  const onMouseLeave = () => {
    setNoticiaAmostrar(noticiaElegida)
  }

  return (
    <div className='container relative flex grid-cols-2 justify-center items-center lg:mb-3'>
      <svg className='lg:absolute lg:top-2 2xl:left-44 xl:left-10 lg:-left-16 lg:w-full lg:h-full'>
        <image className='lg:relative lg:h-full' href={fondo} />
      </svg>
      <div className='flex gap-x-32 mt-10 mb-10'>
        {/* CONTENEDOR IMAGEN  */}
        <div className='grid grid-cols-2 gap-4 gap-y-4 lg:visible relative'>
          {noticias.map((noticia, i) => (
            <div key={noticia.id}>
              <img
                className={`${noticiaElegida.id === noticia.id ? 'border-[#4B0984] border-2' : ''} transition duration-500 transform ${noticiaAmostrar.id === noticia.id ? 'scale-125' : 'hover:scale-125'}  shadow-lg w-40 h-40 cursor-pointer object-cover rounded-md ${originPosition[i]} hover:${originPosition[i]}`}
                src={import.meta.env.VITE_STRAPI_URL + noticia.url}
                onClick={() => onClick(noticia)}
                onMouseEnter={() => onMouseEnter(noticia)}
                onMouseLeave={() => onMouseLeave()}
                alt={`notician Pequeña ${noticia.id}`}
              />
            </div>
          ))}
        </div>
        {/* CONTENEDOR INFO */}
        <div className='w-96'>
          <h2 className='text-fifth font-bold text-xl text-left'>{noticiaAmostrar.Titulo}</h2>
          <h3 className='text-fifth font-medium'>??</h3>
          <p className='text-left mt-6'>{noticiaAmostrar.Descripcion}</p>
          <div className='mt-8'>
            <div className=' pt-2 pb-2 rounded-xl ml-0'>
              <span className='cursor-pointer inline-block bg-gray-50 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 shadow-lg'>
                + info
              </span>
            </div>
            <div className=' pt-2 pb-2 rounded-xl'>
              <span className='cursor-pointer inline-block rounded-full px-3 py-1 text-sm font-bold text-white bg-six mr-2 mb-2 shadow-lg'>
                Más Noticias
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticiasDesktop
