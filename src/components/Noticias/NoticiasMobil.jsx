import React from 'react'

export const NoticiasMobil = () => {
    return (
        <div className='container flex grid-cols-2 justify-center items-center'>
            <div className="flex gap-x-32">
                {/* CONTENEDOR IMAGEN  */}
                <div className="grid grid-cols-2 gap-4 gap-y-0 lg:visible relative">
                    {/* Imagen 1 */}
                    <div className='relative'>
                        <img
                            className="transition duration-500 hover:scale-125 shadow-lg  w-28 h-28 cursor-pointer object-cover rounded-md absolute"
                            src="https://via.placeholder.com/400x300"
                            alt="Imagen Pequeña 1"
                        />
                    </div>
                    {/* Imagen 2 */}
                    <div>
                        <img
                            className="transition duration-500 hover:scale-125ñ w-28 h-28 shadow-lg cursor-pointer object-cover rounded-md"
                            src="https://via.placeholder.com/400x300"
                            alt="Imagen Pequeña 2"
                        />
                    </div>
                    {/* Imagen 3 */}
                    <div>
                        <img
                            className="transition duration-500 hover:scale-125ñ w-28 h-28 shadow-lg cursor-pointer object-cover rounded-md"
                            src="https://via.placeholder.com/400x300"
                            alt="Imagen Pequeña 3"
                        />
                    </div>
                    {/* Imagen 4  */}
                    <div className=''>
                        <img
                            className="transition duration-500 hover:scale-125ñ w-28 h-28 shadow-lg cursor-pointer object-cover rounded-md"
                            src="https://via.placeholder.com/400x300"
                            alt="Imagen Pequeña 3"
                        />
                    </div>
                </div>
                {/* CONTENEDOR INFO */}
                <div className='w-96'>
                    <h2 className='text-fifth font-bold text-xl text-left'>Conocé la planificación semanal de limpieza en la Ciudad</h2>
                    <h3 className='text-fifth font-medium'>Desamparados</h3>
                    <p className='text-left mt-6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut </p>
                    <div className='mt-8'>
                        <div className=' pt-2 pb-2 rounded-xl ml-0'>
                            <span className='cursor-pointer inline-block bg-gray-50 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 shadow-lg'>
                                + info
                            </span>
                        </div>
                        <div className=' pt-2 pb-2 rounded-xl'>
                            <span className='cursor-pointer inline-block rounded-full px-3 py-1 text-sm font-bold text-white bg-six mr-2 mb-2 shadow-lg'>
                                Más Noticias
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
