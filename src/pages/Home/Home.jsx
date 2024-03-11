import React, { useEffect, useState } from 'react'
import {
  Banner,
  BannerPlacerholder,
  ItemDestacadas as Destacado,
  ItemNoticias as Noticias,
  Opciones
} from './components'

const Home = () => {
  const [homeData, setHomeData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getInfoStrapi = async () => {
      try {
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        const response = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/home?populate=*')
        const data = await response.json()
        const responseImagen = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/home?populate[0]=Destacados&populate[1]=Destacados.Imagen')
        const dataImagen = await responseImagen.json()
        const dataHome = Object.assign(data.data.attributes, dataImagen.data.attributes)
        setHomeData(dataHome)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getInfoStrapi()
  }, [])

  return (
    <>
      {isLoading
        ? <BannerPlacerholder />
        : <Banner videoUrl={homeData?.BannerVideo.data.attributes.url} imageFallbackUrl={homeData?.BannerImagen.data.attributes.url} />}
      <Opciones isLoading={isLoading} />
      <Destacado isLoading={isLoading} destacados={homeData?.Destacados} />
      <Noticias homeData={homeData} />
    </>
  )
}

export default Home
