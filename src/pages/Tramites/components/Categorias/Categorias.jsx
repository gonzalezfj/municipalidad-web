import { MdExpandMore } from 'react-icons/md'
import { useNavigate } from 'react-router'

const Categorias = ({ tramiteData, dropdownStates, setDropdownStates }) => {
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }
  const toggleDropdown = (index) => {
    const newStates = dropdownStates.map((state, i) => (i === index ? !state : false))
    setDropdownStates(newStates)
  }

  return (
    <div className='container lg:relative px-4 rounded-xl transition-all transform-gpu ease-in-out duration-300'>
      <div className={`lg:block hidden absolute text-xl text-[#FFC14F] top-1/2 left-1/2 ${dropdownStates.every((element) => element === false) ? 'lg:block' : 'lg:hidden'}`}>
        <p className='text-xl'>Seleccione una categoría</p>
      </div>
      {tramiteData?.Categoria?.map((e, index) => (
        <div key={index} className={`flex flex-col w-full lg:w-[17%] xl:w-[12%] border border-transparent bg-[#D85B35] rounded-xl font-bold mb-1  ${dropdownStates[index] ? ' bg-opacity-20' : 'bg-[#D85B35]'}`}>
          <button
            onClick={() => toggleDropdown(index)}
            className={`flex flex-col items-center text-lg lg:w-[100%] w-full py-3 group transition-all transform-gpu ease-in-out duration-300 ${dropdownStates[index] ? 'text-[#D85B35]' : 'text-white'}`}
          >
            <div className='relative flex items-center w-full'>
              <div className='flex w-[95%] lg:w-[80%] ml-4 justify-center'>
                {e?.Titulo}
              </div>
              <div className={`flex w-[5%] lg:w-[20%] ${dropdownStates[index] ? 'rotate-180 lg:rotate-90' : 'rotate-0 lg:-rotate-90'}`}>
                <MdExpandMore />
              </div>
            </div>
          </button>
          <div className='lg:absolute lg:-top-0'>
            <div
              className={`lg:absolute ${dropdownStates[index] ? 'scale-y-100 lg:scale-100' : 'scale-y-0 lg:scale-0 h-0'
                } transition-all transform-gpu ease-in-out origin-top lg:origin-left duration-300 lg:duration-500`}
              onClick={() => toggleDropdown(index)}
            >
              <div className='lg:relative lg:left-48 lg:w-[69vw] rounded-xl lg:shadow-none'>
                <div className='container lg:bg-transparent lg:absolute lg:top-0 lg:grid lg:grid-cols-2 lg:gap-4'>
                  {e?.Tramite?.map((x) => (
                    <div key={x?.id} className='flex bg-transparent'>
                      <button onClick={() => handleClick(x?.Link)} className='text-[#D85B35] flex flex-col items-center rounded-xl border border-[#D85B35] bg-white justify-center lg:hover:scale-95 text-l w-full h-full py-3 mb-1 transition-all transform-gpu ease-in-out lg:duration-500'>
                        {x?.Titulo}
                        <p className='font-normal p-1'>
                          {x?.Descripcion}
                        </p>
                      </button>
                    </div>
                  ))}
                  {/* <div className='flex justify-end lg:col-span-2'>
                    <svg className='h-30 w-44'>
                      <image href={import.meta.env.VITE_STRAPI_URL + e?.Imagen} />
                    </svg>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categorias
