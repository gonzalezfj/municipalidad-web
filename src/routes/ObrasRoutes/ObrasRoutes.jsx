import React from 'react'
import { Routes, Route } from 'react-router'
import { InstalacionesElectricas } from '@components/Obras/InstalacionesElectricas'
import { AutorizacionObras } from '@components/Obras/AutorizacionObras'
import { DerechoEdificacion } from '@components/Obras/DerechoEdificacion'
import { ReservaNumerica } from '@components/Obras/ReservaNumerica'
import { AltasYBajasParcela } from '@components/Obras/AltasYBajasParcela'
import { CambioDeTitularidad } from '@components/Obras/CambioDeTitularidad'
import { ValladosDeObras } from '@components/Obras/ValladosDeObras'
import { OcupacionConMaterial } from '@components/Obras/OcupacionConMaterial'
import { DeclaracionJurada } from '@components/Obras/DeclaracionJurada'
import { ReposiciónDeMedidores } from '@components/Obras/ReposiciónDeMedidores'

const ObrasRoutes = () => {
  return (
    <Routes>
      <Route path='/obras' element={<InstalacionesElectricas />} />
      <Route path='/autorizacionobras' element={<AutorizacionObras />} />
      <Route path='/derechoedificacion' element={<DerechoEdificacion />} />
      <Route path='/reservanumericadomicilio' element={<ReservaNumerica />} />
      <Route path='/altasparcelas' element={<AltasYBajasParcela />} />
      <Route path='/cambiotitularidad' element={<CambioDeTitularidad />} />
      <Route path='/valladosdeobra' element={<ValladosDeObras />} />
      <Route path='/ocupaciondematerial' element={<OcupacionConMaterial />} />
      <Route path='/declaracionjurada' element={<DeclaracionJurada />} />
      <Route path='/reposiciondemedidores' element={<ReposiciónDeMedidores />} />
    </Routes>
  )
}

export default ObrasRoutes
