import React from 'react'
import ButtonBack from '../components/Default/ButtonBack'
import img1 from '../assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
import img2 from '../assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoTransito.svg'

export const Ocupacion = () => {
    return (
        <div className='w-full'>
            <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[100px] border-b-[100px] lg:border-l-[200px] lg:border-b-[200px] border-l-[#FFC14F]  border-b-transparent border-r-[75px] border-r-transparent' />
            <div className='absolute right-0 top-24'>
                <svg className='h-20 w-20 lg:h-64 lg:w-64  -rotate-90 scale-y-[-1]'>
                    <image className='w-[190px] lg:w-[590px] object-cover ' href={img1} alt="img not found" />
                </svg>
            </div>
            <div className='container mx-auto flex flex-col gap-4 w-80 lg:w-8/12 pt-48'>
                <div className='lg:w-4/5'>
                    <h1 className='font-extrabold text-2xl text-[#4B0984] pb-10 lg:text-4xl'>Permisos de ocupación de calzada, arterias y/o boxes de estacionamiento</h1>
                </div>
                <p className='font-bold text-lg text-[#3E3E3E]'>Para solicitar permisos de ocupación de la calzada vea los requisitos aquí.</p>
                <div className=''>
                    <p className='text-[#3E3E3E] text-base'>Para solicitar permisos de ocupación de la calzada en casos de mudanzas, descargas de materiales de construcción, colocación de contenedores y/o cualquier otra ocupación que no sea el estacionamiento de vehículos, es necesario iniciar un expediente por mesa de entrada del municipio con 48hs. de anticipación a la fecha en que se desea ocupar la calle. El canon del trámite lo determinará la dirección técnica administrativa según el espacio que necesite utilizar. Los requisitos son:</p>
                    <div className='text-[#3E3E3E] pl-2 scroll-pt-52 lg:pt-4'>
                        <li>Nombre y Apellido</li>
                        <li>DNI</li>
                        <li>Domicilio</li>
                        <li>Telefono y/o celular</li>
                        <li>Lugar donde se solicita la ocupacíon</li>
                    </div>
                    <h3 className='text-[#3E3E3E] font-bold pt-5 pb-5'>Contacto</h3>
                    <div className='list-none pl-2'>
                        <li>Teléfonos dependencia: 4309692 - 4309800</li>
                        <li>Días de atención: LUNES A VIERNESHorarios de atención: 8 a 13 hs.</li>
                        <li>Conmutador y centro de atención remota al ciudadano 4309600 / 01 / 02 / 03 / 05</li>
                    </div>
                </div>
                <div className='pt-20'>
                    <div className='items-center justify-center'>
                        <ButtonBack />
                    </div>
                    <div className='relative lg:pb-10'>
                        <svg className='h-36 w-36 lg:h-60 lg:w-60 absolute right-0 -top-20'>
                            <image href={img2} alt="img not found" className='w-36 lg:w-auto lg:h-auto' />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
