import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img2 from '@assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoRentas.svg'
import img5 from '@assets/Libre Deuda/LibreDeuda_fondo.svg'

export const Recategorizacion = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto gap-8 flex flex-col'>
        {/* TITLE */}
        <div className='hidden lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[75px] lg:border-t-[#FFC14F] lg:border-l-[75px] lg:border-l-[#FFC14F] lg:border-b-[75px] lg:border-b-transparent lg:border-r-[75px] lg:border-r-transparent' />
        <div className='bg-[#D85B35] h-44 lg:h-48 px-10 lg:w-full'>
          <div className='pt-24 flex flex-col-2 gap-2 w-full items-center justify-center lg:items-center lg:justify-center lg:flex lg:pt-28'>
            <div className='w-14'>
              <img src={img2} alt='img not found' className='object-cover w-full' />
            </div>
            <h1 className='text-1xl font-extrabold text-white lg:items-center lg:justify-center lg:flex lg:w-1/3 lg:text-3xl'>RECATEGORIZACIÓN DE INMUEBLE</h1>
          </div>
        </div>
        {/* TEXT AND TITLE */}
        <div className='gap-10 flex flex-col text-[#3E3E3E] font-semibold'>
          {/* PARRAFOS */}
          <div className='flex flex-col gap-4 lg:px-96 px-8 lg:text-2xl'>
            <p>
              El municipio ha dispuesto un mecanismo de reclamos con el fin de que los propietarios puedan denunciar las modificaciones de sus inmuebles.
            </p>
            <p>
              Completando el formulario, el propietario podrá informar al municipio cualquier modificación de la parcela, lo que impactará en la contribución una vez resuelto el trámite.
            </p>
            <p>
              Son sumamente importantes todos los datos que se puedan brindar sobre la fecha en la que el lote dejó de ser “baldío”. El equipo se dirigirá al domicilio denunciado y constatará el estado del terreno, iniciando el procedimiento de redeterminación de la situación parcelaria.
            </p>
          </div>
          <div className='w-full flex flex-col gap-8 items-center justify-center bg-[#FFC14F] p-10 rounded-t-2xl'>
            <p className='text-center w-60 text-[#3E3E3E] lg:text-3xl lg:w-3/5'>Si deseas que revisemos la calificación catastral o de rentas de un inmueble puede solicitarlo acá.</p>
            <button className='rounded-3xl bg-[#D85B35] text-white py-4 px-6 shadow-md lg:py-8 lg:px-12 lg:text-3xl'>TRAMITES ONLINE</button>
          </div>
          <div className='relative z-0'>
            <svg className='h-48 w-48 lg:h-60 lg:w-60 absolute -top-[10px] -right-0 lg:-top-[90px] rotate-180 scale-y-[-1]'>
              <image href={img5} alt='img not found' className='w-auto lg:w-96 lg:h-full' />
            </svg>
          </div>
        </div>
        {/* BTN BACK */}
        <div className='lg:px-96 px-8 py-4 lg:-left-20'>
          <div className='pt-10'>
            <ButtonBack />
          </div>
        </div>
      </div>
    </div>
  )
}
