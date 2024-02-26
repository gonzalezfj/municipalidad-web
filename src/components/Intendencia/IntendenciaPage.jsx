import React from 'react'
import img1 from '@assets/intendente/intendente_fotoIntendente.jpg'
// import img2 from '@assets/img temporal/formularioIntendencia.jpg'
import img3 from '@assets/intendente/intendente_graficoFondo.svg'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export const IntendenciaPage = () => {
  return (
    <div className='w-full'>
      {/* IMG */}
      <div className='w-full h-[40rem] lg:h-[50rem]'>
        <img src={img3} alt='img not found' className='absolute h-[20rem] lg:h-[20rem] pl-72 lg:pl-[110rem]' />
        <img src={img1} alt='img not found' className='w-full h-full lg:object-top object-cover' />
      </div>
      {/* BODY */}
      <div className='container mx-auto w-[22rem] lg:w-full pt-8 flex flex-col gap-4'>
        <div className='lg:flex lg:flex-col-2 gap-[40rem]'>
          {/* TITLE */}
          <div className='text-[#4B0984]'>
            <h1 className='font-extrabold text-2xl lg:text-[3rem]'>Dra. Susana Laciar</h1>
            <h4 className='font-bold text-1xl lg:text-[2rem]'>Intendente</h4>
          </div>
          {/* REDES */}
          <div className='flex flex-col-3 gap-2 lg:gap-8'>
            <div className='border-purple-800 border-2 rounded-full px-2 py-2 flex items-center justify-center lg:px-5'>
              <FaInstagram className='cursor-pointer lg:w-8 lg:h-8' style={{ color: '#4B0984' }} />
            </div>
            <div className='border-purple-800 border-2 rounded-full px-2 py-2 flex items-center justify-center lg:px-5'>
              <FaFacebookF className='cursor-pointer lg:w-8 lg:h-8' style={{ color: '#4B0984' }} />
            </div>
            <div className='border-purple-800 border-2 rounded-full px-2 py-2 flex items-center justify-center lg:px-5'>
              <BsTwitterX className='cursor-pointer lg:w-8 lg:h-8' style={{ color: '#4B0984' }} />
            </div>
          </div>
        </div>
        {/* TEXT */}
        <section className='text-[#3E3E3E] flex flex-col gap-2 lg:text-[1.3rem] lg:pt-10'>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
          <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </section>
        <h3 className='text-[#3E3E3E] font-bold lg:text-2xl'>Palacio Municipal Ciudad de San Juan- Primer piso. Caseros 298 sur. Tel.: 264 430 9601.</h3>
        {/* FORM */}
        {/* <div>
          <div className='w-full h-[15rem] object-cover'>
            <img src={img2} alt='img not found' className='w-full h-full' />
          </div>
        </div> */}
      </div>
    </div>
  )
}
