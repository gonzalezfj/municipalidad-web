import React, { useState } from 'react'
import { SaludInfo } from './SaludInfo'
import { LaboratorioInfo } from './LaboratorioInfo'
import { KinesiologiaInfo } from './KinesiologiaInfo'

export const HomeSalud = () => {
  const [openTab, setOpenTab] = useState(1)

  return (
    <div>
      <div className='container w-full h-full'>

        <div className='p-4 pt-20 font-sans h-auto items-center justify-center lg:p-0 lg:w-full'>

          <div className=' mx-auto flex flex-col gap-1 lg:grid lg:grid-cols-2 lg:gap-0 w-full'>
            {/* SECCION BOTONES */}
            <div className='mb-0 flex lg:w-36 lg:h-96 h-auto space-x-0 bg-purple-900 rounded-lg shadow-md lg:grid lg:grid-rows'>
              <button onClick={() => setOpenTab(1)} className={`flex-1 w-auto lg:h-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 1 ? 'bg-white text-purple-800 font-bold' : 'text-white'}`}>LOGO</button>
              <button onClick={() => setOpenTab(2)} className={`flex-1 w-auto h-full lg:h-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 2 ? 'bg-white text-purple-800 font-bold' : 'text-white'}`}>LOGO</button>
              <button onClick={() => setOpenTab(3)} className={`flex-1 w-auto h-full lg:h-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 3 ? 'bg-white text-purple-800 font-bold' : 'text-white'}`}>LOGO</button>
              <button onClick={() => setOpenTab(4)} className={`flex-1 w-auto h-full lg:h-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 4 ? 'bg-white text-purple-800 font-bold' : 'text-white'}`}>LOGO</button>
              <button onClick={() => setOpenTab(5)} className={`flex-1 w-auto h-full lg:h-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 5 ? 'bg-white text-purple-800 font-bold' : 'text-white'}`}>LOGO</button>
              <button onClick={() => setOpenTab(6)} className={`flex-1 w-auto h-full lg:h-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 6 ? 'bg-white text-purple-800 font-bold' : 'text-white'}`}>LOGO</button>
              <button onClick={() => setOpenTab(7)} className={`flex-1 w-auto h-full lg:h-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 7 ? 'bg-white text-purple-800 font-bold' : 'text-white'}`}>LOGO</button>
              <button onClick={() => setOpenTab(8)} className={`flex-1 w-auto h-full lg:h-auto rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 8 ? 'bg-white text-purple-800 font-bold' : 'text-white'}`}>LOGO</button>
            </div>
            {/* BODY INFO */}
            <div className=''>
              <div className={`transition-all duration-300 ${openTab === 1 ? 'border-purple-800' : 'border-transparent'}`}>
                {openTab === 1 && (
                  <div className='pb-8 m-0'>
                    <SaludInfo />
                  </div>
                )}
              </div>
              <div className={`transition-all duration-300 ${openTab === 2 ? 'border-purple-800' : 'border-transparent'}`}>
                {openTab === 2 && (
                  <div className='pb-8 m-0'>
                    <LaboratorioInfo />
                  </div>
                )}
              </div>
              <div className={`transition-all duration-300 ${openTab === 3 ? 'border-purple-800' : 'border-transparent'}`}>
                {openTab === 3 && (
                  <div className='pb-8 m-0'>
                    <KinesiologiaInfo />
                  </div>
                )}
              </div>
              <div className={`transition-all duration-300 ${openTab === 4 ? 'border-purple-800' : 'border-transparent'}`}>
                {openTab === 4 && (
                  <div className='pb-8 m-0'>
                    <KinesiologiaInfo />
                  </div>
                )}
              </div>
              <div className={`transition-all duration-300 ${openTab === 5 ? 'border-purple-800' : 'border-transparent'}`}>
                {openTab === 5 && (
                  <div className='pb-8 m-0'>
                    <KinesiologiaInfo />
                  </div>
                )}
              </div>
              <div className={`transition-all duration-300 ${openTab === 6 ? 'border-purple-800' : 'border-transparent'}`}>
                {openTab === 6 && (
                  <div className='pb-8 m-0'>
                    <KinesiologiaInfo />
                  </div>
                )}
              </div>
              <div className={`transition-all duration-300 ${openTab === 7 ? 'border-purple-800' : 'border-transparent'}`}>
                {openTab === 7 && (
                  <div className='pb-8 m-0'>
                    <KinesiologiaInfo />
                  </div>
                )}
              </div>
              <div className={`transition-all duration-300 ${openTab === 8 ? 'border-purple-800' : 'border-transparent'}`}>
                {openTab === 8 && (
                  <div className='pb-8 m-0'>
                    <KinesiologiaInfo />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* <div className="mb-4 flex space-x-4 bg-purple-900 rounded-lg shadow-md">
{[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
  <button
    key={index}
    onClick={() => setOpenTab(index)}
    className={`flex-1 py-2 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
      openTab === index ? 'bg-white text-purple-800 font-bold' : 'text-white'
    }`}
  >
    LOGO
  </button>
))}
</div> */

/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
  <div key={index} className={`transition-all duration-300 ${openTab === index ? 'border-purple-800' : 'border-transparent'}`}>
    {openTab === index && (
      <div className="p-4 bg-white rounded-lg shadow-md border-l-4 border-purple-800">
        {/* Renderiza el componente correspondiente al tab abierto */
//   {index === 1 && <SaludInfo />}
// {index === 2 && <LaboratorioInfo />}
//    {index === 3 && <KinesiologiaInfo />}
//     {/* Agrega más condiciones según sea necesario */}
//  </div>
//   )}
// </div>
// ))}
// </div> */}
