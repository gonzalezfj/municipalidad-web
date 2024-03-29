import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdExpandMore } from 'react-icons/md'
import Links from './Links'
// const imgSearch = import.meta.env.VITE_ASSETS_URL + '/assets/home_menu_buscador.svg'
const sidebarImage = import.meta.env.VITE_ASSETS_URL + '/assets/group_61.png'

const endpoints = {
  menuItems: import.meta.env.VITE_STRAPI_URL + '/api/navegacion?populate[0]=Items&populate[1]=Items.Subitems&populate[2]=Logo'
}

const Logo = ({ path }) => {
  return (
    <div className='flex items-center'>
      <NavLink to='/'>
        {
          path && <img className='px-3 h-16 lg:h-auto' src={import.meta.env.VITE_STRAPI_URL + path} />
        }
      </NavLink>
    </div>
  )
}

const HamburgerMenu = ({ setOpen }) => {
  return (
    <div className='flex items-center'>
      <button className='mr-3 lg:hidden' onClick={() => setOpen(true)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-7 h-7'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </button>
    </div>
  )
}

const Navbar = () => {
  const [navData, setNavData] = useState()
  const [open, setOpen] = useState(false)
  const [openDrops, setOpenDrops] = useState({})

  useEffect(() => {
    const getInfoStrapi = async () => {
      try {
        const responseLinks = await fetch(endpoints.menuItems).then((res) =>
          res.json()
        )
        setNavData(responseLinks.data.attributes)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getInfoStrapi()
  }, [])

  return (
    <div className='container absolute p-2 left-0 right-0 mx-auto'>
      <div className='z-50 bg-white sticky top-0 left-0 right-0 shadow-md rounded-xl flex justify-between lg:'>
        <Logo path={navData?.Logo.data.attributes.url} />
        <HamburgerMenu open={open} setOpen={setOpen} />
        <div className='hidden md:hidden lg:px-24 lg:container lg:flex lg:items-center lg:justify-between lg:mx-auto lg:text-gray-600'>
          {navData?.Items.map((e) => (
            <div key={e?.id} className='relative'>
              <Link to={e?.Link}>
                <button
                  className={`lg:flex lg:items-center h-20 px-6 hover:bg-[#4B0984] hover:text-white hover:rounded-b-lg transition-transform transform-gpu ${openDrops[e?.id] ? 'bg-[#4B0984] text-white rounded-b-lg ' : ''}`}
                  onClick={() => {
                    const newOpenDrops = Object.fromEntries(
                      Object.keys(openDrops).map((key) => [key, false])
                    )
                    setOpenDrops((prevState) => ({ ...newOpenDrops, [e?.id]: !prevState[e?.id] || false }))
                  }}
                >
                  <span>{e?.Titulo}</span>
                  {e?.Subitems && e?.Subitems.length > 0 && (
                    <MdExpandMore />
                  )}
                </button>
              </Link>
              {e?.Subitems && e?.Subitems.length > 0 && (
                <div className={`absolute mt-2 w-48 flex rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 transition-transform transform-gpu duration-300 origin-top ${openDrops[e?.id] ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`} onClick={() => setOpenDrops(prevState => ({ ...prevState, [e?.id]: false }))}>
                  <div className='container'>
                    {e?.Subitems.map((subItem) => (
                      <div key={subItem?.id} className='flex w-auto px-4'>
                        <Link to={subItem?.Link}>
                          <button className='text-[#4B0984] flex items-center justify-end text-l w-full py-2 mb-2'>
                            {subItem?.Titulo}
                          </button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* <div className='hidden lg:block lg:container lg:w-60'>
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
        </div> */}

        {/* ACA EMPIEZA EL SIDEBAR */}
        <div className={`${!open && 'hidden'} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}> </div>

        <div className={`${open ? 'translate-x-0' : 'translate-x-80'} bg-white min-h-screen w-80 fixed top-0 right-0 transition-all duration-300`}>
          <div className={`${!open && 'hidden'} pt-3`}>
            <button className=' ml-4 text-[#4B0984]' onClick={() => setOpen(false)}>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
            {/* <div className='flex justify-center'>
              <input placeholder='Buscar...' className='p-2 mb-2 w-60 rounded-full border border-[#4B0984]' />
            </div> */}
            <Links navData={navData} setOpen={setOpen} />
          </div>
          <img src={sidebarImage} className='absolute bottom-20 right-0' />
        </div>
      </div>
    </div>

  )
}

export default Navbar
