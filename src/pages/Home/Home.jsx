import React, { useEffect, useState } from 'react'
import { Banner, ItemDestacadas as Destacado, ItemNoticias as Noticias, Opciones } from './components'

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
