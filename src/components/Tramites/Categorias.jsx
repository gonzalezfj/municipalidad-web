import { MdExpandMore } from 'react-icons/md'
import Subcategorias from './Subcategorias' // Asegúrate de importar Subcategorias desde la ruta correcta

const Categorias = ({ dropdownStates, setDropdownStates }) => {
  const toggleDropdown = (index) => {
    const newStates = dropdownStates.map((state, i) => (i === index ? !state : false))
    setDropdownStates(newStates)
  }

  return (
    <div className='container lg:relative px-4 rounded-xl transition-all transform-gpu ease-in-out duration-300'>
      {['General', 'Arbolado', 'Rentas', 'Comercio', 'Obras'].map((categoria, index) => (
        <div key={index} className={`flex flex-col w-full lg:w-[12%] border border-transparent bg-[#D85B35] rounded-xl font-bold mb-1 focus:bg-white ${dropdownStates[index] ? 'bg-white' : 'bg-[#D85B35]'}`}>
          <button
            onClick={() => toggleDropdown(index)}
            className={`flex flex-col items-center text-xl lg:w-[100%] w-full py-3 group transition-all transform-gpu ease-in-out duration-300 ${dropdownStates[index] ? 'text-[#D85B35]' : 'text-white'}`}
          >
            <div className='relative flex items-center w-full'>
              <div className='flex w-[95%] lg:w-[80%] ml-4 justify-center'>
                {categoria}
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
              <div className='lg:relative lg:left-48 lg:w-[69vw] rounded-xl lg:shadow-none shadow-lg'>
                <Subcategorias />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categorias
