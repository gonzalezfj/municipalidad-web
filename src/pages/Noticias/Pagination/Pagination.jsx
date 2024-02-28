import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Pagination = ({ actualPage, totalPages, incrementPage, decrementPage }) => {
  return (
    <div className='flex items-center lg:pl-[18em] lg:pt-[4em]'>
      <button onClick={decrementPage}>
        <IoIosArrowBack size={48} color='#FFC14F' />
      </button>
      <div className='flex items-center gap-x-4'>
        <p className='text-3xl px-4 py-2 border-2 border-[#FFC14F] rounded font-bold'>{actualPage}</p>
        <p className='text-3xl'>{totalPages}</p>
      </div>
      <button onClick={incrementPage}>
        <IoIosArrowForward size={48} color='#FFC14F' />
      </button>
    </div>
  )
}

export default Pagination
