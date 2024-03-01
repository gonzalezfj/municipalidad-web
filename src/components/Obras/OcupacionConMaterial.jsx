import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import img1 from '@assets/LibreDeuda/LibreDeuda_fondo.svg'
import img2 from '@assets/obras/obras_icono.svg'
export const OcupacionConMaterial = () => {
  return (
    <div className='w-full'>
      <div className='mx-auto gap-8 flex flex-col'>
        {/* TITLE */}
        <div className='
  block absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent
   lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[140px] lg:border-t-[#FFC14F] lg:border-l-[140px] lg:border-l-[#FFC14F] lg:border-b-[140px] lg:border-b-transparent lg:border-r-[140px] lg:border-r-transparent'
        />
        {/* TEXT AND TITLE */}
        <div className='pt-44 gap-10 flex flex-col text-[#3E3E3E] font-semibold'>
          {/* PARRAFOS */}
          <div className='flex flex-col gap-4 lg:px-96 px-8 lg:text-2xl'>
            <h1 className='text-2xl font-extrabold text-[#4B0984] lg:w-2/3 lg:text-4xl'>OCUPACIÓN CON MATERIAL</h1>
            <p className='lg:text-1xl text-[#3E3E3E] font-normal'>
              Solicitud para ocupar espacios públicos con materiales de obra.
            </p>
            <section className='flex flex-col gap-2 pt-4'>
              <h1 className='font-extrabold text-1xl'>Requisitos para la obtención de autorización:</h1>
              <ul className='pl-4 font-normal list-decimal text-xl'>
                <li>Realizar el pedido por intermedio de nota, dirigida al Sr. Intendente. Debe contener los datos personales del solicitador: nombre y apellido, DNI, domicilio y teléfono para contacto; datos del tipo de material que necesita acopiar, cantidad m3 y el lugar donde éste reposará.</li>
                <li>En el formulario se deberá indicar el tipo de material; la cantidad en m3; la cantidad de días a ocupar y el lugar donde reposará (vereda o media calzada).</li>
                <li>Se incluirá las medidas de seguridad que se deben adoptar por parte de los interesados, tales como señalización; vallados y/o cercos y toda acción que sea necesaria para brindar el resguardo físico de los transeúntes (vereda) y automovilistas (calzada).</li>
                <li>Inicio de expediente (mesa de entrada, planta baja del edificio municipal).</li>
                <li>Un inspector del departamento, es el encargado de realizar la inspección en el domicilio para verificar que la ocupación sea de acuerdo a lo solicitado: tipo de material acopiado, cantidad, ubicación y las medidas de seguridad empleadas. Se toman fotografías del domicilio, las cuales son adjuntadas al expediente.</li>
                <li>Se realiza el mismo procedimiento: inspección y tomas fotográficas una vez que la vereda o calzada son despejados.</li>
              </ul>
            </section>
          </div>
          <div className='relative z-0'>
            <svg className='h-32 w-32 lg:h-96 lg:w-96 absolute -top-[10px] -right-0 lg:-top-[280px] rotate-180 scale-y-[-1]'>
              <image href={img1} alt='img not found' className='w-20 lg:w-96 lg:h-96' />
            </svg>
          </div>
          <div className='relative z-0'>
            <svg className='h-48 w-48 lg:h-64 lg:w-64 absolute -top-[10px] right-32 lg:right-96 lg:-top-[20px] rotate-180 scale-y-[-1]'>
              <image href={img2} alt='img not found' className='w-auto lg:w-64 lg:h-64' />
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
