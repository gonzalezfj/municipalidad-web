import { useNavigate } from 'react-router'

export const Card = ({ buttonsData }) => {
  const navigate = useNavigate()
  console.log()
  const handleClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <div className='grid gap-x-14 gap-y-6 grid-cols-2 md:gap-x-16 md:gap-y-8 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-28 sm:gap-x-4 sm:gap-y-4 sm:grid-cols-3 mt-20 mb-20'>
      {buttonsData?.Botones.map((e) => (
        <div key={e?.id} onClick={() => handleClick(e?.Link)} className='w-40 h-52 lg:w-52 lg:h-62 overflow-hidden shadow-lg bg-third rounded-primary flex flex-col items-center justify-center cursor-pointer' data-aos='fade-right'>
          <div className='w-36 h-36'>
            <img src={'https://0pd31rwn-3000.brs.devtunnels.ms' + e.Icono.data.attributes.url} className='object-cover' alt='Boletas' />
          </div>
          <div className='flex-1 w-40 lg:w-full flex items-center justify-center transition ease-in-out delay-150 bg-secondary hover:bg-purple-600 duration-200'>
            <h4 className='text-sm uppercase text-center w-full h-full items-center justify-center flex text-slate-50'>{e?.Titulo}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}
