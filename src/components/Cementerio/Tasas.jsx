import React from 'react'
const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/imgCementerio/cementerio_fondo_Mesa de trabajo 1.svg'

export const Tasas = () => {
  return (
    <div className='w-[100vw] h-[42.5rem]'>
      <div className='container mx-auto px-4 flex flex-col gap-4 items-center justify-center pt-44'>
        <h1 className='text-2xl text-[#3E3E3E] font-bold pb-4 pr-64 lg:pr-[32rem]'>Tasas 2024</h1>
        <div className='relative overflow-x-auto'>
          <table className='lg:w-[40rem] text-sm text-left rtl:text-right'>
            <tbody>
              <tr className='border-b bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Certificado original:
                </th>
                <td className='px-6 py-4'>
                  $3000,00
                </td>
              </tr>
              <tr className='bg-white border-b bg-gray-80'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace'>
                  Solicitud de Certificado:
                </th>
                <td className='px-6 py-4 text-black'>
                  $2000,00
                </td>
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Duplicado del certificado:
                </th>
                <td className='px-6 py-4 text-black'>
                  $3600,00
                </td>
              </tr>
              <tr className='bg-white'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Triplicado del certificado:
                </th>
                <td className='px-6 py-4 text-black'>
                  $4000,00
                </td>
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Cuadriplicado del certificado o posteriores:
                </th>
                <td className='px-6 py-4 text-black'>
                  $5000,00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='absolute lg:w-96 lg:bottom-[12.7rem] bottom-[31.5rem] left-0 lg:left-0 -z-2 lg:-z-0'>
          <img src={img2} alt='img not found' className='w-full object-cover' />
        </div>
      </div>
    </div>
  )
}
