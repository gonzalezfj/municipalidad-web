import Categorias from './components/Categorias/Categorias'
import { useEffect, useState } from 'react'
import ButtonBack from '../../components/Default/ButtonBack'
const imgFondo = import.meta.env.VITE_ASSETS_URL + '/assets/group_61.png'

const Tramites = () => {
  const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false, false, false, false])
  const [tramiteData, setTramiteData] = useState()
  useEffect(() => {
    const getInfoStrapi = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/tramite?populate=*')
        const data = await response.json()
        const responseTramite = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/tramite?populate[0]=Categoria&populate[1]=Categoria.Tramite')
        const dataPrime = await responseTramite.json()
        const dataTramite = Object.assign(data.data.attributes, dataPrime.data.attributes)
        setTramiteData(dataTramite)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getInfoStrapi()
  }, [])

  return (
    <>
      <div className='w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent' />
      <div className='container mx-auto p-4 font-extrabold text-[#FFC14F]'>
        <h1 className='text-2xl'>GESTIÓN DE TRAMITES</h1>
      </div>
      <div className='container mx-auto'>
        <Categorias tramiteData={tramiteData} dropdownStates={dropdownStates} setDropdownStates={setDropdownStates} />
      </div>
      <div className='flex justify-between'>
        <img className='scale-x-[-1] -z-10' src={imgFondo} />
      </div>
      <div className='container mx-auto flex justify-center items-center xl:block xl:p-4'>
        <ButtonBack />
      </div>
    </>
  )
}

export default Tramites
