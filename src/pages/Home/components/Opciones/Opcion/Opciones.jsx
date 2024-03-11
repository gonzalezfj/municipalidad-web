import React, { useEffect, useState } from 'react'
import { Card } from '../Card'

const Opciones = ({ isLoading }) => {
  const [ButtonsData, setButtonsData] = useState()
  useEffect(() => {
    const getInfoStrapi = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/home?populate[0]=Botones&populate[1]=Botones.Icono')
        const data = await response.json()
        setButtonsData(data.data.attributes)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getInfoStrapi()
  }, [])

  return (
    <div className='bg-secondary'>
      <div className='items-center justify-center flex bg-primary rounded-secondary lg:rounded-tl-[50vh]'>
        <Card isLoading={isLoading} botones={ButtonsData?.Botones} />
      </div>
    </div>
  )
}

export default Opciones
