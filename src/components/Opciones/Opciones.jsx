import React, { useEffect, useState } from 'react'
import { Card } from './Card'

export const Opciones = () => {
  const [ButtonsData, setButtonsData] = useState()
  useEffect(() => {
    const getInfoStrapi = async () => {
      try {
        const response = await fetch('https://0pd31rwn-3000.brs.devtunnels.ms/api/home?populate[0]=Botones&populate[1]=Botones.Icono')
        // const response = await fetch('https://0pd31rwn-3000.brs.devtunnels.ms/api/home?populate=*')
        const data = await response.json()
        setButtonsData(data.data.attributes)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getInfoStrapi()
  }, [])
  console.log(ButtonsData, 'opciones')

  return (
    <div className=''>
      <div className='bg-secondary'>
        <div className='items-center justify-center flex bg-primary rounded-secondary lg:rounded-tl-[50vh]'>
          <Card buttonsData={ButtonsData} />
        </div>
      </div>
    </div>
  )
}
