import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { Opciones } from '../components/Opciones/Opciones'
import { Destacado } from '../components/Turismo y Cultura/Destacado'
import { Noticias } from '../components/Noticias/Noticias'

const Home = () => {
  return (
    <>
      <Banner />
      <Opciones />
      <Destacado />
      <Noticias />
    </>
  )
}

export default Home
