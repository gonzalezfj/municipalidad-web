import React, { useState } from 'react'
import { SaludInfo } from './SaludInfo'
import { LaboratorioInfo } from './LaboratorioInfo'

export const HomeSalud = () => {
  const [openTab, setOpenTab] = useState(1)

  return (
    <div>
      <div className='container w-full h-full'>
        <div className='bg-gray-100 font-sans h-auto items-center justify-center'>
          <div className='p-4'>
            <div className='max-w-xl mx-auto'>
              <div className='mb-0 flex space-x-0 bg-purple-900 rounded-lg shadow-md'>
                <button onClick={() => setOpenTab(1)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 1 ? 'bg-white text-purple-800 font-bold' : 'text-white'}`}>LOGO</button>
                <button onClick={() => setOpenTab(2)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 2 ? 'bg-white text-purple-800 font-bold' : 'text-white'}`}>LOGO</button>
                <button onClick={() => setOpenTab(3)} className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 3 ? 'bg-white text-purple-800 font-bold' : 'text-white'}`}>LOGO</button>
              </div>

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
                    <h2 className='text-2xl font-semibold mb-2 text-blue-600'>Section 2 Content</h2>
                    <p className='text-gray-700'>Proin non velit ac purus malesuada venenatis sit amet eget lacus. Morbi quis purus id ipsum ultrices aliquet Morbi quis.</p>
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
