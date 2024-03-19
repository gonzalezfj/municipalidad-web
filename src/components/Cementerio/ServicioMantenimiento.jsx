import React from 'react'
const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/imgCementerio/cementerio_fondo_Mesa de trabajo 1.svg'
export const ServicioMantenimiento = () => {
  return (
    <div className='w-[100vw] h-full'>
      <div className='container mx-auto px-4 h-full flex flex-col gap-4 items-center justify-center pt-44 pb-20'>
        <h1 className='text-2xl text-[#3E3E3E] font-extrabold pb-4'>SERVICIO DE MANTENIMIENTO:</h1>
        <p>Por servicios de mantenimiento en el cementerio (barrido, limpieza, recolección de residuos, etc.), los contribuyentes, responsables o titulares de propiedad o concesiones en la necrópolis, abonarán anualmente:  </p>
        <div className='container flex justify-center relative overflow-x-auto'>
          <table className='lg:w-[45rem] text-sm text-left rtl:text-right'>
            <tbody>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Nicho:
                </th>
                <td className='px-6 py-4 text-black'>
                  $4.000,00
                </td>
              </tr>
              <tr className='bg-white border-b bg-gray-80'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace'>
                  Columna completa:
                </th>
                <td className='px-6 py-4 text-black'>
                  $8.500,00
                </td>
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Lote: Concesión Edificio Cofradía del Stmo. Rosario
                </th>
                <td className='px-6 py-4 text-black'>
                  $9.100,00
                </td>
              </tr>
              <tr className='bg-white'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Nicho:
                </th>
                <td className='px-6 py-4 text-black'>
                  $8.350,00
                </td>
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Nichos urna:
                </th>
                <td className='px-6 py-4 text-black'>
                  $1.600,00
                </td>
              </tr>
              <tr className='bg-white'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Mausoleo:
                </th>
                <td className='px-6 py-4 text-black' />
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Chico (hasta 7 m²):
                </th>
                <td className='px-6 py-4 text-black'>
                  $10.000,00
                </td>
              </tr>
              <tr className='bg-white'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Mediano (más de 7 m² y hasta 15 m²):
                </th>
                <td className='px-6 py-4 text-black'>
                  $12.650,00
                </td>
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Grande (más de 15 m²):
                </th>
                <td className='px-6 py-4 text-black'>
                  $20.400,00
                </td>
              </tr>
              <tr className='bg-white'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Nichos, Urnas (chicas o grandes):
                </th>
                <td className='px-6 py-4 text-black'>
                  $1.250,00
                </td>
              </tr>
              <tr className='bg-[#FFC14F]'>
                <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap '>
                  Alquiler de Depósito por mes:
                </th>
                <td className='px-6 py-4 text-black'>
                  $6.000,00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Todos los contribuyentes que estén al día con el pago de la Contribución por el Servicio de Mantenimiento de espacios comunes, al 31/12/2022, serán beneficiados con el veinte por ciento (20%) de descuento sobre el importe del mencionado servicio en el año 2023.-</p>
        <p>(Nota: Conforme a lo dispuesto en el Capítulo I - Artículo 2º, se fija una alícuota mensual en concepto de “Intereses Resarcitorios” del 3,00%)</p>
        <div className='absolute lg:w-96 lg:bottom-[12.7rem] bottom-[25rem] left-0 lg:left-0 -z-8 lg:-z-0'>
          <img src={img2} alt='img not found' className='w-full object-cover' />
        </div>
      </div>
    </div>
  )
}
