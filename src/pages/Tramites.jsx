import Categorias from '../components/Tramites/Categorias'
import { useState } from 'react'
import ButtonAtras from '../components/Default/ButtonAtras'

const Tramites = () => {
  const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false])

  return (
    <div className=''>
      <div className='w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent' />
      <div className='container mx-auto'>
        <Categorias dropdownStates={dropdownStates} setDropdownStates={setDropdownStates} />
      </div>
      <div className='flex justify-between'>
        <img className='scale-x-[-1] -z-10' src='src\assets\group_61.png' />
      </div>
      <div className='flex justify-center'>
        <ButtonAtras />
      </div>
    </div>
  )
}

export default Tramites
