import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineSearch } from 'react-icons/md'

const Navbar = () => {
  const navigate = useNavigate()
  const [searchVisible, setSearchVisible] = useState(false)

  const toggleSearch = () => {
    setSearchVisible(!searchVisible)
  }

  const redirectTo = (path) => {
    navigate(path)
  }

  return (
    <nav className='bg-white shadow rounded-full'>
      <div className='container mx-auto relative flex h-16 items-center justify-between'>
        <div className='relative flex h-16 justify-between'>
          <img src='src\assets\capital_sanjuan_blanco.png' alt='Logo' />
        </div>
        <div className='container flex items-center justify-between p-6 mx-auto text-gray-600'>
          <button
            className='h-20 px-6 hover:bg-purple-800 hover:text-white hover:rounded-b-lg'
            onClick={() => redirectTo('/')}
          >
            Municipio
          </button>

          <button
            className='h-20 px-6 hover:bg-purple-800 hover:text-white hover:rounded-b-lg'
            onClick={() => redirectTo('/servicios')}
          >
            Servicios
          </button>

          <button
            className='h-20 px-6 hover:bg-purple-800 hover:text-white hover:rounded-b-lg'
            onClick={() => redirectTo('/culturayturismo')}
          >
            Cultura y Turismo
          </button>

          <button
            className='h-20 px-6 hover:bg-purple-800 hover:text-white hover:rounded-b-lg'
            onClick={() => redirectTo('/transparencia')}
          >
            Transparencia
          </button>

          <button
            className='h-20 px-6 hover:bg-purple-800 hover:text-white hover:rounded-b-lg'
            onClick={() => redirectTo('/noticias')}
          >
            Noticias
          </button>

          <button
            className='h-20 px-6 hover:bg-purple-800 hover:text-white hover:rounded-b-lg'
            onClick={() => redirectTo('/contacto')}
          >
            Contacto
          </button>

          <div className='relative flex h-16 items-center justify-between'>
            <button
              onClick={toggleSearch}
              className='group h-10 w-10 hover:bg-purple-800 hover:text-white hover:rounded-full text-gray-800 focus:outline-none mx-2 flex justify-center items-center'
            >
              <MdOutlineSearch className='w-6 group-hover:filter group-hover:invert(0)' alt='Lupa' />
            </button>

            <div
              className={`${
                searchVisible ? 'scale-x-100' : 'scale-x-0'
              } transform origin-top relative top-0 right-0 w-64 transition-transform duration-300`}
            >
              <input
                type='text'
                placeholder='Buscar...'
                className='border w-60 h-10 border-gray-300 p-2 focus:outline-none focus:border-purple-700 rounded-full'
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
