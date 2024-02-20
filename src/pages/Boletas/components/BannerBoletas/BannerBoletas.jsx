import img1 from '@assets/iconosBlancos/Boleta-Icono-Blanco.svg'

const BannerBoletas = () => {
  return (
    <div className=''>
      <div className='bg-[#D85B35] w-full h-20' />
      <div className='bg-[#D85B35] w-full h-40 rounded-br-full'>
        <div className='container mx-auto flex items-center'>
          <svg className='w-36 h-40 relative -top-7 -left-6'>
            <image className='w-[200px] lg:w-[210px] xl:w-[210px] 2xl:w-[210px]' href={img1} />
          </svg>
          <div className='text-white'>
            <h1 className='text-l md:text-xl font-bold'>PAGAR E IMPRIMIR BOLETAS</h1>
            <h2 className='text-sm md:text-base'>Tasas de inmuebles y comercios</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerBoletas
