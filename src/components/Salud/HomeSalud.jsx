import React, { useState } from 'react'
import { SaludInfo } from './SaludInfo'
import { LaboratorioInfo } from './LaboratorioInfo'
import { KinesiologiaInfo } from './KinesiologiaInfo'
import { OdontologiaInfo } from './OdontologiaInfo'
import { NutricionInfo } from './NutricionInfo'
import { PsicologiaInfo } from './PsicologiaInfo'
import { ConsejriaInfo } from './ConsejriaInfo'
const img1 = import.meta.env.VITE_ASSETS_URL + '/assets/salud/salud_botonVacunacion.svg'
const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/salud/salud_botonKinesiologia.svg'
const img3 = import.meta.env.VITE_ASSETS_URL + '/assets/salud/salud_botonLaboratorio.svg'
const img4 = import.meta.env.VITE_ASSETS_URL + '/assets/salud/salud_botonMasInfo.svg'
const img5 = import.meta.env.VITE_ASSETS_URL + '/assets/salud/salud_botonNutricion.svg'
const img6 = import.meta.env.VITE_ASSETS_URL + '/assets/salud/salud_botonOdontologia.svg'
const img7 = import.meta.env.VITE_ASSETS_URL + '/assets/salud/salud_botonPsicologia.svg'
// const img8 = import.meta.env.VITE_ASSETS_URL + '/assets/salud/salud_graficoFondo.svg'
export const HomeSalud = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7]
  const [openTab, setOpenTab] = useState(1)
  return (
    <div className='container mx-auto p-4 pt-32 font-sans'>
      <div className='flex flex-col lg:flex-row lg:gap-0'>
        {/* SECCION BOTONES */}
        <div className='flex lg:h-[28rem] lg:w-[4rem] border-[#4B0984] rounded-2xl bg-purple-800 gap-2 lg:flex-col'>
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <button
              key={index}
              onClick={() => setOpenTab(index)}
              className={`flex-1 h-12 flex rounded-2xl items-center justify-center  text-xs focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                openTab === index ? 'bg-purple-300 hover:bg-purple-300 font-bold  hover:text-black' : ' text-purple-300'
              }`}
            >
              <img className='w-12 h-w-12 ' src={images[index - 1]} alt={`Button ${index}`} />
            </button>
          ))}
        </div>
        {/* BODY INFO */}
        <div className='flex-1'>
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <div key={index} className={`transition-all duration-300 ${openTab === index ? 'border-purple-800' : 'border-transparent'} `}>
              {openTab === index && (
                <div className=''>
                  {index === 1 && <SaludInfo />}
                  {index === 2 && <KinesiologiaInfo />}
                  {index === 3 && <LaboratorioInfo />}
                  {index === 4 && <ConsejriaInfo />}
                  {index === 5 && <NutricionInfo />}
                  {index === 6 && <OdontologiaInfo />}
                  {index === 7 && <PsicologiaInfo />}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
