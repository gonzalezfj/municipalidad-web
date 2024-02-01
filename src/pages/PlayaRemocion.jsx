import React from 'react'
import BannerPlayaRemocion from '../components/PlayaRemocion/BannerPlayaRemocion'
import IframeConsulta from '../components/PlayaRemocion/IframeConsulta'
import MapaPlaya from '../components/PlayaRemocion/MapaPlaya'
import TextPlaya from '../components/PlayaRemocion/TextPlaya'
import ButtonBack from '../components/Default/ButtonBack'

const PlayaRemocion = () => {
  return (
    <div>
      <BannerPlayaRemocion />
      <IframeConsulta />
      <TextPlaya />
      <MapaPlaya />
      <div className='container flex mx-auto items-center justify-center'>
        <ButtonBack />
      </div>
    </div>
  )
}

export default PlayaRemocion
