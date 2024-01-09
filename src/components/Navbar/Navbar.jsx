import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='bg-white py-3 fixed top-0 left-0 right-0 shadow-md rounded-full flex justify-end'>
      <button className='mr-4 mt-1' onClick={() => setOpen(true)}>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
        </svg>
      </button>

      <div className={`${!open && 'hidden'} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}> </div>

      <div className={`${open ? 'w-80' : 'w-0'} bg-white min-h-screen fixed top-0 right-0 transition-all duration-300`}>
        <div className={`${!open && 'hidden'} pt-3`}>
          <button className=' ml-4 text-[#4B0984]' onClick={() => setOpen(false)}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
          <div className='flex justify-center'>
            <input placeholder='Buscar...' className='p-2 mb-2 w-60 rounded-full border border-[#4B0984]' />
          </div>
          <div className='text-right text-[#4B0984] text-xl cursor-pointer py-3 mb-2 mr-10'>Municipio</div>
          <div className='text-right text-[#4B0984] text-xl cursor-pointer py-3 mb-2 mr-10'>Servicios</div>
          <div className='text-right text-[#4B0984] text-xl cursor-pointer py-3 mb-2 mr-10'>Transparencia</div>
          <div className='text-right text-[#4B0984] text-xl cursor-pointer py-3 mb-2 mr-10'>Noticias</div>
          <div className='text-right text-[#4B0984] text-xl cursor-pointer py-3 mb-2 mr-10'>Contacto</div>
        </div>
        <img src='src\assets\group_61.png' className='absolute bottom-20 right-0' />
      </div>
    </div>
  )
}

export default Navbar
