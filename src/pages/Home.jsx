import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { Opciones } from '../components/Opciones/Opciones'
import { Desctacado } from '../components/Turismo y Cultura/Destacado'
import { Noticias } from '../components/Noticias/Noticias'

const Home = () => {
  return (
    <div>
      <Banner />
      <Opciones />
      <Desctacado />
      <Noticias />
    </div>
  )
}

export default Home
