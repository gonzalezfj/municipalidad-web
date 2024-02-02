import React from 'react'
import img1 from '../../assets/img temporal/img form ubi domicilio.jpg'
import img2 from '../../assets/img temporal/img mapa.jpg'
import img3 from '../../assets/img temporal/img form2.jpg'
import img4 from '../../assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoTransito.svg'
import ButtonBack from '../Default/ButtonBack'

export const DenunciaVehiculos = () => {
    return (
        <div className='w-full'>
            <div className='flex items-end justify-center top-0 w-full bg-[#FFC14F] h-52'>
                <h3 className='font-extrabold text-[20px] flex items-center justify-center px-6 pb-4 text-[#4B0984]' >DENUNCIA VEHÍCULOS Y MUEBLES ABANDAONADOS EN LA VÍA PÚLICA</h3>
            </div>
            <div className='container mx-auto px-6 flex flex-col gap-2'>
                <p className='font-bold text-1xl pt-4 text-[#3E3E3E] '>Denuncie la existencia de vehículo / c osa mueble abandonado/a en la siguiente dirección.</p>
                <div>
                    <img src={img1} alt="img not found" />
                </div>
                <div>
                    <h1 className='text-[#4B0984] text-2xl font-extrabold'>¿Dónde se encuentra? Marcalo en el mapa</h1>
                    <p className='font-bold text-[23px] text-[#4B0984]'>Ubicacíon</p>
                    <div>
                        <img src={img2} alt="img not found" />
                    </div>
                    <div>
                        <img src={img3} alt="img not found" />
                    </div>
                    <div className='pt-4'>
                        <button className='w-96 bg-[#8A43EF] rounded-xl text-[#FFFF] py-2'>Enviar</button>
                    </div>
                </div>
                <div className='items-center justify-center pt-10'>
                    <ButtonBack />
                </div>
                <div className='relative '>
                    <svg className='h-24 w-24 lg:h-40 lg:w-60 absolute right-0 -top-10'>
                        <image href={img4} alt="img not found" className='w-full lg:w-full lg:h-40' />
                    </svg>
                </div>
            </div>
        </div>
    )
}
