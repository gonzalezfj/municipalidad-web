import { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md'
import SublinksMobile from './SublinksMobile'

const Links = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='container'>
      <div className='flex mr-10'>
        <button onClick={() => setOpen(true)} className='text-[#4B0984] flex items-center justify-between text-xl w-full py-3 mb-2'>
          <MdArrowBackIos className='ml-10' />
          Municipio
        </button>
      </div>
      <div className='flex mr-10'>
        <button className='text-[#4B0984] flex items-center justify-end text-xl w-full py-3 mb-2'>
          Servicios
        </button>
      </div>
      <div className='flex mr-10'>
        <button className='text-[#4B0984] flex items-center justify-between text-xl w-full py-3 mb-2'>
          <MdArrowBackIos className='ml-10' />
          Cultura y Turismo
        </button>
      </div>
      <div className='flex mr-10'>
        <button className='text-[#4B0984] flex items-center justify-between text-xl w-full py-3 mb-2'>
          <MdArrowBackIos className='ml-10' />
          Transparencia
        </button>
      </div>
      <div className='flex mr-10'>
        <button className='text-[#4B0984] flex items-center justify-end text-xl w-full py-3 mb-2'>
          Noticias
        </button>
      </div>
      {/* Acá empieza el Sidebar */}
      <div className={`${!open && 'hidden'} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}> </div>

      <div className={`${open ? 'translate-x-0' : 'translate-x-80'} bg-white min-h-screen w-80 fixed top-0 right-0 transition-all duration-300`}>
        <div className={`${!open && 'hidden'} pt-3`}>
          <button className=' ml-4 text-[#4B0984]' onClick={() => setOpen(false)}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
          <SublinksMobile />
        </div>
      </div>
    </div>
  )
}

export default Links
