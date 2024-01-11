import { useState } from 'react'
import Links from './Links'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='bg-white py-3 sticky top-0 left-0 right-0 shadow-md rounded-full flex justify-between'>
      <NavLink to='/home'><img className='px-3' src='src\assets\capital_sanjuan_blanco.png' /></NavLink>
      <button className='mr-4 mt-1' onClick={() => setOpen(true)}>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 mr-1'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
        </svg>
      </button>

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
        <img src='src\assets\group_61.png' className='absolute bottom-20 right-0' />
      </div>
    </div>
  )
}

export default Navbar
