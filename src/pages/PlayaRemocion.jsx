import React from 'react'
import BannerPlayaRemocion from '../components/PlayaRemocion/BannerPlayaRemocion'
import IframeConsulta from '../components/PlayaRemocion/IframeConsulta'
import MapaPlaya from '../components/PlayaRemocion/MapaPlaya'
import TextPlaya from '../components/PlayaRemocion/TextPlaya'
import ButtonAtras from '../components/Default/ButtonAtras'

const PlayaRemocion = () => {
  return (
    <div>
      <BannerPlayaRemocion />
      <IframeConsulta />
      <TextPlaya />
      <MapaPlaya />
      <div className='container flex mx-auto items-center justify-center'>
        <ButtonAtras />
      </div>
    </div>
  )
}

export default PlayaRemocion
