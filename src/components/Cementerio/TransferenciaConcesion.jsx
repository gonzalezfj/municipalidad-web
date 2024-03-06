import React from 'react'
import img2 from '@assets/imgCementerio/cementerio_fondo_Mesa de trabajo 1.svg'
export const TransferenciaConcesion = () => {
  return (
    <div className='w-[100vw] h-full'>
      {/* EL PB-20 ES UNA PRUEBA PARA EL ESPACIO ENTRE TABLA Y RECURSO */}
      <div className='container mx-auto px-4 h-full flex flex-col gap-4 items-center justify-center pt-44 pb-20'>
        <h1 className='text-2xl text-[#3E3E3E] font-bold pb-4'>Por la transferencia de los Derechos de Concesión, se abonará:</h1>
        <div className='relative overflow-x-auto'>
          <table className='lg:w-[45rem] text-sm text-left rtl:text-right'>
            <tbody>
              <tr className='border-b bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Mausoleos:
                </th>
                <td className='px-6 py-4' />
              </tr>
              <tr className='bg-white border-b bg-gray-80'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace'>
                  Chico (hasta 7 m²):
                </th>
                <td className='px-6 py-4 text-black'>
                  $ 32.400,00b
                </td>
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Mediano (más de 7 m² y hasta 15 m²):
                </th>
                <td className='px-6 py-4 text-black'>
                  $ 50.000,00c
                </td>
              </tr>
              <tr className='bg-white'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Grande (más de 15 m²):
                </th>
                <td className='px-6 py-4 text-black'>
                  $ 67.500,002.
                </td>
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Terrenos:
                </th>
                <td className='px-6 py-4 text-black'>
                  $ 32.900,003.
                </td>
              </tr>
              <tr className='bg-white'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Nichos:
                </th>
                <td className='px-6 py-4 text-black'>
                  $ 67.500,002.
                </td>
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Nicho para Adultos:
                </th>
                <td className='px-6 py-4 text-black'>
                  $ 9.500,00
                </td>
              </tr>
              <tr className='bg-white'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Nicho para Niños:
                </th>
                <td className='px-6 py-4 text-black'>
                  $5.100,004.
                </td>
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Urnas (grandes o chicas):
                </th>
                <td className='px-6 py-4 text-black'>
                  $ 2.200,00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='absolute lg:w-96 lg:bottom-[12.7rem] bottom-[31.5rem] left-0 lg:left-0 -z-8 lg:-z-0'>
          <img src={img2} alt='img not found' className='w-full object-cover' />
        </div>
      </div>
    </div>
  )
}
