import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <footer className='bg-[#4B0984] text-white w-screen'>
      <div className='bg-white h-20 rounded-br-full'>-
      </div>
      <div className='lg:container lg:mx-auto lg:flex'>
        <div className='flex justify-center items-center sm:px-12 lg:h-full lg:px-0 lg:w-full lg:ml-10 px-4 py-5'>
          <img className='lg:w-auto' src='src\assets\logo_capital_blanco.png' />
        </div>
        <div className='container'>
          <div className='flex justify-center lg:w-full lg:mt-5 items-center sm:px-12 px-4 py-4'>
            <h1
              className='lg:text-l text-xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5 text-center'
            >
              Caseros sur 298,
              San Juan, Argentina
            </h1>
          </div>
          <div className='lg:p-20'>
            <SocialIcons />
          </div>
        </div>
        <div className='flex justify-center items-center sm:px-12 lg:h-full lg:px-0 lg:w-full lg:ml-10 lg:mt-3 px-4 py-5'>
          <img className='h-auto' src='src\assets\logo_telefono_blanco.png' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
