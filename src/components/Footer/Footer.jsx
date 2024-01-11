import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <footer className='bg-[#4B0984] text-white'>
      <div className='bg-white h-20 rounded-br-full'>-
      </div>
      <div className='flex justify-center items-center sm:px-12 px-4 py-5'>
        <img src='src\assets\logo_capital_blanco.png' />
      </div>
      <div className='flex justify-center items-center sm:px-12 px-4 py-4'>
        <h1
          className='lg:text-4xl text-xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5 text-center'
        >
          Caseros sur 298,
          San Juan, Argentina
        </h1>
      </div>
      <SocialIcons />
      <div className='flex justify-between items-center sm:px-12 px-24 py-6'>
        <img src='src\assets\logo_telefono_blanco.png' />
      </div>
    </footer>
  )
}

export default Footer
