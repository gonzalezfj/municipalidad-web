import React, { useEffect, useState } from 'react'
import { Banner } from '../components/Banner/Banner'
import { Opciones } from '../components/Opciones/Opciones'
import { Destacado } from '../components/Turismo y Cultura/Destacado'
import { Noticias } from '../components/Noticias/Noticias'

const Home = () => {
  const [homeData, setHomeData] = useState()

  useEffect(() => {
    const getInfoStrapi = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/home?populate=*')
        const data = await response.json()
        const responseImagen = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/home?populate[0]=Destacados&populate[1]=Destacados.Imagen')
        const dataImagen = await responseImagen.json()
        const dataHome = Object.assign(data.data.attributes, dataImagen.data.attributes)
        setHomeData(dataHome)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getInfoStrapi()
  }, [])

  return (
    <>
      <Banner homeData={homeData} />
      <Opciones />
      <Destacado homeData={homeData} />
      <Noticias homeData={homeData} />
    </>
  )
}

export default Home
