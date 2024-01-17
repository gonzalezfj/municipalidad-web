import { MdExpandMore } from 'react-icons/md'
import Subcategorias from './Subcategorias'
// import { useState } from 'react'

const Categorias = ({ openDrop, setOpenDrop }) => {
  // const [openDrop, setOpenDrop] = useState(false)
  return (
    <div className='container px-4 rounded-xl transition-all transform-gpu ease-in-out duration-300'>
      <div className='flex border border-transparent bg-[#D85B35] rounded-xl mb-1'>
        <button className='text-white flex items-center text-xl font-bold w-full py-3'>
          <div className='w-[95%] flex justify-center'>
            General
          </div>
          <div className='w-[5%] flex justify-end'>
            <MdExpandMore />
          </div>
        </button>
      </div>
      <div className='flex border border-transparent bg-[#D85B35] rounded-xl font-bold mb-1'>
        <button className='text-white flex items-center text-xl w-full py-3'>
          <div className='w-[95%] flex justify-center'>
            Arbolado
          </div>
          <div className='w-[5%] flex justify-end'>
            <MdExpandMore />
          </div>
        </button>
      </div>
      <div className='flex border border-transparent bg-[#D85B35] rounded-xl font-bold mb-1'>
        <button className='text-white flex items-center text-xl w-full py-3'>
          <div className='w-[95%] flex justify-center'>
            Rentas
          </div>
          <div className='w-[5%] flex justify-end'>
            <MdExpandMore />
          </div>
        </button>
      </div>
      <div className={`flex flex-col w-full border border-transparent bg-[#D85B35] rounded-xl font-bold mb-1 focus:bg-white ${openDrop ? 'bg-white' : 'bg-[#D85B35]'}`}>
        <button
          onClick={() => setOpenDrop(!openDrop)}
          className={`flex flex-col items-center text-xl w-full py-3 group transition-all transform-gpu ease-in-out duration-300 ${openDrop ? 'text-[#D85B35]' : 'text-white'}`}
        >
          <div className='flex items-center w-full'>
            <div className='flex w-[95%] ml-4 justify-center'>
              Comercio
            </div>
            <div className={`flex w-[5%] ${openDrop ? 'rotate-180' : 'rotate-0'}`}>
              <MdExpandMore />
            </div>
          </div>
        </button>
        <div
          className={`${
                  openDrop ? 'scale-y-100' : 'scale-y-0 h-0'
          } transition-all transform-gpu ease-in-out origin-top duration-300`}
          onClick={() => setOpenDrop(false)}
        >
          <div className='flex-col w-full rounded-xl shadow-lg bg-white'>
            <Subcategorias />
          </div>
        </div>
      </div>
      <div className='flex border border-transparent bg-[#D85B35] rounded-xl font-bold mb-1'>
        <button className='text-white flex items-center text-xl w-full py-3'>
          <div className='w-[95%] flex justify-center'>
            Obras
          </div>
          <div className='w-[5%] flex justify-end'>
            <MdExpandMore />
          </div>
        </button>
      </div>
    </div>
  )
}

export default Categorias
