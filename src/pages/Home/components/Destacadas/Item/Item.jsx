// import CarruselDestacado from '../Carousel/Carousel'
import { Carousel as CarruselDestacado } from '../Carousel'

const Destacado = ({ destacados, isLoading }) => {
  return (
    <div className='lg:max-w-full mt-10'>
      <h3 className='mt-3 text-3xl text-gray-500 font-bold text-center'>DESTACADO</h3>
      <div className='flex flex-col relative lg:w-full bg-fifth mt-14 min-h-[450px] h-96 md:h-[42vh] lg:h-[74vh] 2xl:h-[60vh] 2xl:mt-16'>
        <CarruselDestacado isLoading={isLoading} slides={destacados} />
      </div>
    </div>
  )
}

export default Destacado
