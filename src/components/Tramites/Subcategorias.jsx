import iconoComercio from '../../assets/guíadeTramitesMobile_iconoComercio.svg'

const Sublinks = () => {
  return (
    <div className='container bg-white lg:bg-transparent lg:absolute lg:top-0 lg:grid lg:grid-cols-2 lg:gap-4'>
      <div className='flex'>
        <button className='text-[#D85B35] flex flex-col items-center rounded-xl border border-[#D85B35] justify-center lg:hover:scale-95 text-l w-full py-3 mb-1 transition-all transform-gpu ease-in-out lg:duration-500'>
          Manipulación de alimentos
          <p className='font-normal p-1'>Curso gratuito online para obtener el carnet
            obligatorio de Manipulación de alimentos.
          </p>
        </button>
      </div>
      <div className='flex'>
        <button className='text-[#D85B35] flex flex-col items-center rounded-xl border border-[#D85B35] justify-center lg:hover:scale-95 text-l w-full py-3 mb-1 transition-all transform-gpu ease-in-out lg:duration-500'>
          Habilitaciones de locales de eventos
          <p className='font-normal p-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et tempore sit, fugiat labore fugit odit nesciunt cum officiis sint, laborum illum praesentium, voluptatum nostrum! Provident deleniti rem nobis officia accusantium!
          </p>
        </button>
      </div>
      <div className='flex'>
        <button className='text-[#D85B35] flex flex-col items-center rounded-xl border border-[#D85B35] justify-center lg:hover:scale-95 text-l w-full py-3 mb-1 transition-all transform-gpu ease-in-out lg:duration-500'>
          Galerías, paseos y shoppings
        </button>
      </div>
      <div className='flex'>
        <button className='text-[#D85B35] flex flex-col items-center rounded-xl border border-[#D85B35] justify-center lg:hover:scale-95 text-l w-full py-3 mb-1 transition-all transform-gpu ease-in-out lg:duration-500'>
          Establecimientos geriátricos
        </button>
      </div>
      <div className='flex'>
        <button className='text-[#D85B35] flex flex-col items-center rounded-xl border border-[#D85B35] justify-center lg:hover:scale-95 text-l w-full py-3 mb-1 transition-all transform-gpu ease-in-out lg:duration-500'>
          Playas de estacionamiento
        </button>
      </div>
      <div className='flex'>
        <button className='text-[#D85B35] flex flex-col items-center rounded-xl border border-[#D85B35] justify-center lg:hover:scale-95 text-l w-full py-3 mb-1 transition-all transform-gpu ease-in-out lg:duration-500'>
          Salas velatorias
        </button>
      </div>
      <div className='flex'>
        <button className='text-[#D85B35] flex flex-col items-center rounded-xl border border-[#D85B35] justify-center lg:hover:scale-95 text-l w-full py-3 mb-1 transition-all transform-gpu ease-in-out lg:duration-500'>
          Habilitaciones
        </button>
      </div>
      <div className='flex justify-end lg:col-span-2'>
        <svg className='h-30 w-44'>
          <image href={iconoComercio} />
        </svg>
      </div>
    </div>
  )
}

export default Sublinks
