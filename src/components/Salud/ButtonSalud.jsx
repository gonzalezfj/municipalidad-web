import React, { useState } from 'react'
import { SaludInfo } from './SaludInfo'

export const ButtonSalud = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(true)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className='w-full items-center justify-center flex mt-10'>
      <div className='text-left w-[30rem]'>
        <div className='w-44'>
          <button
            type='button'
            className='flex w-28 justify-center gap-x-1.5 rounded-tl-3xl bg-[#4B0984] px-3 py-4 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-purple-800 border-none'
            id='menu-button'
            aria-expanded={isOpen}
            aria-haspopup='true'
            onClick={isOpen ? closeMenu : openMenu}
          >
            LOGO
            {/* <svg
              className='-mr-1 h-5 w-5 text-gray-400'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clipRule='evenodd' />
            </svg> */}
          </button>
        </div>

        {isOpen
          ? (
            <div className=''>
              <SaludInfo />
            </div>
            )
          : ''}
      </div>
    </div>
  )
}
