import { useEffect, useState } from 'react'

const Footer = () => {
  const [footerData, setFooterData] = useState()

  useEffect(() => {
    const getInfoStrapi = async () => {
      try {
        const responseLogo = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/pie-de-pagina?populate=*')
        const dataLogo = await responseLogo.json()
        const responseRedes = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/pie-de-pagina?populate[0]=Redes&populate[1]=Redes.Icono')
        const dataRedes = await responseRedes.json()
        const dataFooter = Object.assign(dataLogo.data.attributes, dataRedes.data.attributes)
        setFooterData(dataFooter)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getInfoStrapi()
  }, [])

  return (
    <footer className='bg-[#4B0984] z-20 text-white w-full'>
      <div className='bg-white h-20 z-10 rounded-br-full' />
      <div className='lg:container lg:mx-auto lg:flex lg:flex-row lg:items-center'>
        {/* Logo a la izquierda */}
        <div className='flex justify-center items-center sm:px-12 lg:w-[20%] lg:px-0 px-4 pt-4'>
          <svg className='h-36'>
            <image className='lg:w-full' href={import.meta.env.VITE_STRAPI_URL + footerData?.Logo.data.attributes.url} />
          </svg>
        </div>

        {/* Descripcion y redes en el centro */}
        <div className='container lg:w-[60%] lg:ml-10'>
          <div className='flex justify-center lg:mt-5 items-center px-12 lg:px-4 py-4'>
            <h1 className='lg:text-l text-xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 text-center'>
              {footerData?.Descripcion}
            </h1>
          </div>
          <div className='md:mt-5 2xl:mt-7'>
            <div className='flex justify-between items-center md:px-64 sm:px-12 lg:h-5 lg:px-44 2xl:px-72 px-24'>
              {footerData?.Redes.map((e) => (
                <svg key={e?.id} className='h-12 w-12'>
                  <image className='h-12' href={import.meta.env.VITE_STRAPI_URL + e?.Icono.data.attributes.url} />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Logo de telefono a la derecha */}
        <div className='flex justify-center items-center sm:px-12 lg:h-full lg:w-[20%] lg:px-0 lg:ml-7 lg:mt-5 px-6 py-5'>
          <svg className='h-36'>
            <image className='w-full' href={import.meta.env.VITE_STRAPI_URL + footerData?.Telefono.data.attributes.url} />
          </svg>
        </div>
      </div>
    </footer>
  )
}

export default Footer
