import React from 'react'
const img1 = import.meta.env.VITE_ASSETS_URL + '/assets/home_seccion3_circuito_foto.jpg'
const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/home_seccion3_agenda_foto.jpg'
const img3 = import.meta.env.VITE_ASSETS_URL + '/assets/home_seccion3_deporteysalud_foto.jpg'

export const NoticiasRelacionadas = () => {
  return (
    <div className='w-62 p-4 items-center justify-center'>
      <div className='flex flex-col-2 gap-4 p-4'>
        <div>
          <img className='w-96 h-20 object-cover' src={img1} alt='' />
        </div>
        <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut tempora optio amet dignissimos placeat...</p>
      </div>
      <div className='w-auto h-1 bg-zinc-400' />
      <div className='flex flex-col-2 gap-4 p-4'>
        <div>
          <img className='w-96 h-20 object-cover' src={img2} alt='' />
        </div>
        <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut tempora optio amet dignissimos placeat...</p>
      </div>
      <div className='w-auto h-1 bg-zinc-400' />
      <div className='flex flex-col-2 gap-4 p-4'>
        <div>
          <img className='w-96 h-20 object-cover' src={img3} alt='' />
        </div>
        <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut tempora optio amet dignissimos placeat...</p>
      </div>
    </div>
  )
}

export default NoticiasRelacionadas
