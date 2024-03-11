import React from 'react'
import img2 from '@assets/imgCementerio/cementerio_fondo_Mesa de trabajo 1.svg'
export const InhumacionesExhumaciones = () => {
  return (
    <div className='w-[100vw] h-full'>
      <div className='container mx-auto px-4 h-full flex flex-col gap-4 items-center justify-center pt-44 pb-20'>
        <h1 className='text-2xl text-[#3E3E3E] font-extrabold pb-4'>Inhumaciones y Exhumaciones:</h1>
        <p>Por los servicios de inhumación y exhumación, se abonará:</p>
        <div className='container relative overflow-x-auto'>
          <table className='lg:w-[45rem] text-sm text-left rtl:text-right'>
            <tbody>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Nichos para niños:
                </th>
                <td className='px-6 py-4 text-black'>
                  $2.880,00
                </td>
              </tr>
              <tr className='bg-white border-b bg-gray-80'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace'>
                  Nichos para adultos:
                </th>
                <td className='px-6 py-4 text-black'>
                  $4.000,00
                </td>
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Mausoleos:
                </th>
                <td className='px-6 py-4 text-black'>
                  $5.800,00
                </td>
              </tr>
              <tr className='bg-white'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Traslados internos:
                </th>
                <td className='px-6 py-4 text-black'>
                  $3.900,00
                </td>
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Traslados externos:
                </th>
                <td className='px-6 py-4 text-black'>
                  $5.100,00
                </td>
              </tr>
              <tr className='bg-white'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Cambios de metálica de ataúdes (estos trabajos serán realizados por el personal de panteoneros
                </th>
                <td className='px-6 py-4 text-black'>
                  $9.000,00
                </td>
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Derecho de introducción de cadáveres:
                </th>
                <td className='px-6 py-4 text-black'>
                  $6.000,00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='absolute lg:w-96 lg:bottom-[12.7rem] bottom-[25rem] left-0 lg:left-0 -z-8 lg:-z-0'>
          <img src={img2} alt='img not found' className='w-full object-cover' />
        </div>
      </div>
    </div>
  )
}
