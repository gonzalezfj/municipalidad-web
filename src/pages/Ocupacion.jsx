import React, { useEffect, useState } from 'react'
import ButtonBack from '../components/Default/ButtonBack'
import img1 from '../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
import img2 from '../assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoTransito.svg'

export const Ocupacion = () => {
  const [dataOcupacion, setDataOcupacion] = useState([])
  const fetchDataResult = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/ocupacion')
      const jsonResponse = await response.json()
      setDataOcupacion(jsonResponse.data.attributes)
      // console.log(jsonResponse.data.attributes, 'estado de datos')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchDataResult()
  }, [])
  if (!dataOcupacion || Object.keys(dataOcupacion).length === 0) {
    return <p>Cargando...</p>
  }
  return (
    <div className='w-full'>
      {/* FIGURA */}
      <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[100px] border-b-[100px] lg:border-l-[200px] lg:border-b-[200px] border-l-[#FFC14F]  border-b-transparent border-r-[75px] border-r-transparent' />
      <div className='absolute right-0 top-24'>
        <svg className='h-20 w-20 lg:h-64 lg:w-64  -rotate-90 scale-y-[-1]'>
          <image className='w-[190px] lg:w-[590px] object-cover ' href={img1} alt='img not found' />
        </svg>
      </div>
      {/* HOME CONTENIDO */}
      <div className='container mx-auto flex flex-col gap-4 w-80 lg:w-8/12 pt-48'>
        <div>
          <div className='lg:w-4/5'>
            <h1 className='font-extrabold text-2xl text-[#4B0984] pb-10 lg:text-4xl'>{dataOcupacion?.Titulo}</h1>
          </div>
          <p className='font-bold text-lg text-[#3E3E3E]'>{dataOcupacion?.Subtitulo}</p>
          <div className=''>
            <p className='text-[#3E3E3E] text-base'>{dataOcupacion?.Contenido[0].children[0].text}</p>
            <div className='text-[#3E3E3E] pl-2 scroll-pt-52 lg:pt-4'>
              <li>{dataOcupacion?.Contenido[2].children[0].children[0].text}</li>
              <li>{dataOcupacion?.Contenido[2].children[1].children[0].text}</li>
              <li>{dataOcupacion?.Contenido[2].children[2].children[0].text}</li>
              <li>{dataOcupacion?.Contenido[2].children[3].children[0].text}</li>
              <li>{dataOcupacion?.Contenido[2].children[4].children[0].text}</li>
            </div>
            <h3 className='text-[#3E3E3E] font-bold pt-5 pb-5'>{dataOcupacion?.Contenido[4].children[0].text}</h3>
            <div className='list-none pl-2'>
              <li>{dataOcupacion?.Contenido[5].children[0].children[0].text}</li>
              <li>{dataOcupacion?.Contenido[5].children[1].children[0].text}</li>
              <li>{dataOcupacion?.Contenido[5].children[2].children[0].text}</li>
            </div>
          </div>
          <div className='pt-20'>
            <div className='items-center justify-center'>
              <ButtonBack />
            </div>
            <div className='relative lg:pb-10'>
              <svg className='h-36 w-36 lg:h-60 lg:w-60 absolute right-0 -top-20'>
                <image href={img2} alt='img not found' className='w-36 lg:w-auto lg:h-auto' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
