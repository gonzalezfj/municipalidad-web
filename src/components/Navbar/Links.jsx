import { useState } from 'react'
import { MdArrowBackIos } from 'react-icons/md'

const Links = ({ navData }) => {
  const [openItems, setOpenItems] = useState({})

  const handleToggle = (itemId) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [itemId]: !prevOpenItems[itemId] || false
    }))
  }

  return (
    <div className='container'>
      {navData?.Items.map((e) => (
        <div key={e?.id} className='relative'>
          <div className='container px-9'>
            <a href={e?.Link}>
              <button onClick={() => handleToggle(e?.id)} className='text-[#4B0984] flex items-center justify-between text-xl w-full py-3 mb-2'>
                <MdArrowBackIos className={`${e?.Subitems && e?.Subitems.length > 0 ? 'visible' : 'invisible'}`} />
                {e?.Titulo}
              </button>
            </a>
          </div>
          <div className={`${!openItems[e?.id] && 'hidden'} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-10`} onClick={() => handleToggle(e?.id)}> </div>
          <div className={`${openItems[e?.id] ? 'translate-x-0' : 'translate-x-80'} bg-white min-h-screen w-80 fixed top-0 right-0 transition-all duration-300 z-20`}>
            <div className={`${!openItems[e?.id] && 'hidden'} pt-3`}>
              <button className=' ml-4 text-[#4B0984]' onClick={() => handleToggle(e?.id)}>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
              <div className='container'>
                {e?.Subitems?.map(subItem => (
                  <div key={subItem?.id} className='flex ml-10'>
                    <a href={subItem?.Link}>
                      <button className='text-[#4B0984] flex items-center justify-end text-xl w-full py-3 mb-2'>
                        {subItem?.Titulo}
                      </button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Links
