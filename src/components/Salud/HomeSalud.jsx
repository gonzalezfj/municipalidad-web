import React, { useState } from 'react'
import { SaludInfo } from './SaludInfo'
import { LaboratorioInfo } from './LaboratorioInfo'
import { KinesiologiaInfo } from './KinesiologiaInfo'

export const HomeSalud = () => {
  const [openTab, setOpenTab] = useState(1)

  return (
    <div className='container mx-auto p-4 pt-20 font-sans'>
      <div className='flex flex-col lg:flex-row lg:gap-4'>
        {/* SECCION BOTONES */}
        <div className='flex flex-wrap lg:h-[28rem]  rounded-xl border w-[auto] lg:w-[6rem] bg-purple-800 gap-2 lg:flex-col'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <button
              key={index}
              onClick={() => setOpenTab(index)}
              className={`flex-1 h-12  rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                openTab === index ? 'bg-white hover:bg-white font-bold  hover:text-black' : ' text-black'
              }`}
            >
              LOGO
            </button>
          ))}
        </div>
        {/* BODY INFO */}
        <div className='flex-1'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className={`transition-all duration-300 ${openTab === index ? 'border-purple-800' : 'border-transparent'} mb-4`}>
              {openTab === index && (
                <div className=''>
                  {index === 1 && <div><SaludInfo /></div>}
                  {index === 2 && <LaboratorioInfo />}
                  {index === 3 && <KinesiologiaInfo />}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
