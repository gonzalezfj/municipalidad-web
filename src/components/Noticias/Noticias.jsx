import React from 'react'
import imagen1 from '../../assets/image3.jpg'
export const Noticias = () => {
 return (
        <div className=''>
            <h1 className='m-4'>Noticias</h1>
            {/* CONTENEDOR */}
            <div className=''>
                {/* IMG */}
                <div className=''>
                    <img src="" alt="" />
                </div>
                {/* TITULO, SUB */}
                <div className='m-4'>
                    <h3 className='text-xl'>Conoce planificacion semanal de limpieza en la cuidad</h3>
                    <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, corporis, consequuntur animi adipisci qui laborum laboriosam fugiat...</p>
                </div>
                {/* CARD TAILWIND */}
                <div className="items-center justify-center max-w-sm rounded overflow-hidden shadow-lg m-5">
                    <img className="w-full items-center justify-center flex" src={imagen1} />
                    <div className="px-6 py-4 items-center justify-center">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                      <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                </div>
            </div>
        </div>
  )
}
