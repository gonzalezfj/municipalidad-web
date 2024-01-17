import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MdExpandMore } from 'react-icons/md'
import Sublinks from './Sublinks'
import Links from './Links'
import logoCapital from '../../assets/capital_sanjuan_blanco.png'
import imgSearch from '../../assets/home_menu_buscador.svg'
import sidebarImage from '../../assets/group_61.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [openDrop, setOpenDrop] = useState(false)
  const navigate = useNavigate()

  const redirectTo = (path) => {
    navigate(path)
  }
  return (
    <div className='container p-2 mx-auto'>
      <div className='z-50 bg-white sticky top-0 left-0 right-0 shadow-md rounded-xl flex justify-between lg:'>
        <div>
          <NavLink to='/home'><img className='px-3 h-16 lg:h-auto lg:mt-2' src={logoCapital} /></NavLink>
        </div>
        <div className='flex items-center'>
          <button className='mr-3 lg:hidden' onClick={() => setOpen(true)}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-7 h-7'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
          </button>
        </div>

        <div className='hidden md:hidden lg:px-24 lg:container lg:flex lg:items-center lg:justify-between lg:mx-auto lg:text-gray-600'>
          <div className='relative' onBlur={() => setOpenDrop(false)}>
            <button
              className={`lg:flex lg:items-center h-20 px-6 hover:bg-[#4B0984] hover:text-white hover:rounded-b-lg transition-transform transform-gpu ${openDrop ? 'bg-[#4B0984] text-white rounded-b-lg ' : ''}`}
              onClick={() => setOpenDrop(!openDrop)}
            >
              <span>Municipio</span>
              <MdExpandMore />
            </button>
            <div className={`fixed mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 transition-transform transform-gpu duration-300 origin-top ${openDrop ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`} onClick={() => setOpenDrop(false)}>
              <Sublinks />
            </div>
          </div>

          <button
            className='h-20 px-6 hover:bg-[#4B0984] hover:text-white hover:rounded-b-lg transition-transform transform-gpu'
            onClick={() => redirectTo('/servicios')}
          >
            Servicios
          </button>

          <button
            className='lg:flex lg:items-center h-20 px-6 hover:bg-[#4B0984] hover:text-white hover:rounded-b-lg transition-transform transform-gpu'
            onClick={() => redirectTo('/culturayturismo')}
          >
            <span>Cultura y Turismo</span>
            <MdExpandMore />
          </button>

          <button
            className='lg:flex lg:items-center h-20 px-6 hover:bg-[#4B0984] hover:text-white hover:rounded-b-lg transition-transform transform-gpu'
            onClick={() => redirectTo('/transparencia')}
          >
            <span>Transparencia</span>
            <MdExpandMore />
          </button>

          <button
            className='h-20 px-6 hover:bg-[#4B0984] hover:text-white hover:rounded-b-lg transition-transform transform-gpu'
            onClick={() => redirectTo('/noticias')}
          >
            Noticias
          </button>

          <button
            className='h-20 px-6 hover:bg-[#4B0984] hover:text-white hover:rounded-b-lg transition-transform transform-gpu'
            onClick={() => redirectTo('/contacto')}
          >
            Contacto
          </button>
        </div>
        <div className='hidden lg:block lg:container lg:w-60'>
          <div className='group'>
            <input
              type='text'
              placeholder='Buscar...'
              className='group-hover:w-60 h-10 w-0 border rounded-full absolute top-5 right-0 mr-5 p-2 transition-all ease-out duration-500 focus:outline-none'
            />
            <svg className='group mr-2 h-12 w-12 absolute top-4 right-0'>
              <image className='w-12' href={imgSearch} alt='Buscar' />
            </svg>
          </div>
        </div>

        {/* ACA EMPIEZA EL SIDEBAR */}
        <div className={`${!open && 'hidden'} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}> </div>

        <div className={`${open ? 'translate-x-0' : 'translate-x-80'} bg-white min-h-screen w-80 fixed top-0 right-0 transition-all duration-300`}>
          <div className={`${!open && 'hidden'} pt-3`}>
            <button className=' ml-4 text-[#4B0984]' onClick={() => setOpen(false)}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
            <div className='flex justify-center'>
              <input placeholder='Buscar...' className='p-2 mb-2 w-60 rounded-full border border-[#4B0984]' />
            </div>
            <Links />
          </div>
          <img src={sidebarImage} className='absolute bottom-20 right-0' />
        </div>
      </div>
    </div>

  )
}

export default Navbar
