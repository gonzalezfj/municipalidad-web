import React from 'react'
import ButtonBack from '../Default/ButtonBack'
const img1 = import.meta.env.VITE_ASSETS_URL + '/assets/LibreDeuda/LibreDeuda_fondo.svg'
// const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/obras/obras_icono.svg'

export const ReposiciónDeMedidores = () => {
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
            <h1 className='text-2xl font-extrabold text-[#4B0984] lg:w-2/3 lg:text-4xl'>REPOSICIÓN DE MEDIDORES</h1>
            <p className='lg:text-1xl text-lg text-[#3E3E3E] font-normal'>
              Requisitos para la conexión de medidores.
            </p>
            <h1 className='italic font-extrabold text-[#D85B35]'>Son trámites que se realizan de manera presencial. Deberá acercarse por el edificio municipal con la siguiente documentación:</h1>
            <section className='flex flex-col gap-2 pt-4'>
              <h1 className='font-extrabold text-1xl'>Documentación que se adjunta a los planos</h1>
              <ul className='pl-4 font-normal lg:text-xl text-lg list-decimal'>
                <li>Memoria técnica descriptiva de la obra;</li>
                <li>Fotocopia de la DJ expedida por La dirección de Catastro Municipal vigente;</li>
                <li>Fotocopia de la documentación que acredite titularidad del inmueble;</li>
                <li>Nota de designación de Instalador electricista habilitado por parte del propietario o locatario según corresponda;</li>
                <li>Nota de presentación de matriculado y plano;</li>
                <li>Nota de solicitud de aprobación de plano.</li>
              </ul>
            </section>
            <section className='flex flex-col gap-2 pt-4'>
              <p className='italic font-extrabold text-[#D85B35]'>Requisitos para la obtención del “certificado de instalación eléctrica para habilitación” (también llamado certificado de bomberos).</p>
              <ul className='pl-4 font-normal lg:text-xl text-lg list-decimal'>
                <li>Inspección de la instalación eléctrica aprobada por el inspector del Departamento de Construcciones Eléctricas;</li>
                <li>Si la instalación al momento de la inspección presenta modificaciones de relevancia deberá presentar plano conforme a obra;</li>
                <li>Fotocopia de la Declaración Jurada Catastral vigente;</li>
                <li>Si es locatario, fotocopia del contrato de alquiler aforado y con actuación notarial;</li>
                <li>Si es una sociedad comercial, fotocopia del contrato social de constitución de la empresa;</li>
                <li>Protocolo de medición de puesta a tierra, prueba de interruptores diferenciales y continuidad de todas las masas eléctricas;</li>
                <li>Fotocopia del ticket de pago de los aranceles correspondientes según la OTA.</li>
              </ul>
            </section>
            <section className='flex flex-col gap-2 pt-4'>
              <p className='italic font-extrabold text-[#D85B35]'>Requisitos para la emisión del certificado de conexión del medidor eléctrico.</p>
              <h2 className='font-extrabold text-lg lg:text-xl'>1. Obra nueva o reacondicionada:</h2>
              <ul className='pl-8 font-normal lg:text-xl text-lg list-disc'>
                <li>Inspección de la instalación eléctrica aprobada por el inspector del Departamento de Construcciones Eléctricas;</li>
                <li>Si la instalación al momento de la inspección presenta modificaciones de relevancia deberá presentar plano conforme a obra;</li>
                <li>Fotocopia de la Declaración Jurada Catastral vigente;</li>
                <li>Si es locatario, fotocopia del contrato de alquiler aforado y con actuación notarial;</li>
                <li>Si es una sociedad comercial, fotocopia del contrato social de constitución de la empresa;</li>
                <li>Protocolo de medición de puesta a tierra, prueba de interruptores diferenciales y continuidad de todas las masas eléctricas;</li>
                <li>Fotocopia del ticket de pago de los aranceles correspondientes según la OTA.</li>
              </ul>
              <h2 className='font-extrabold text-lg lg:text-xl'>2. Separación de medidores:</h2>
              <ul className='pl-8 font-normal lg:text-xl text-lg list-disc'>
                <li>Designación de matriculado;</li>
                <li>Inspección de cableado final aprobada por el inspector del Departamento de Construcciones Eléctricas donde quede establecido la cantidad de derivaciones familiares o comerciales, y si son monofásica, trifásicas o según corresponda;</li>
                <li>Inspección del puesto de medición aprobada por el inspector del Departamento de Construcciones;</li>
                <li>Fotocopia de la Declaración Jurada Catastral actualizada donde se incorporan las nuevas unidades vigente;</li>
                <li>Fotocopia del ticket de pago de los aranceles correspondientes según la OTA;</li>
                <li>Plano conforme a obra aprobado por el inspector del Departamento de Construcciones, donde se justifica el pedido del nuevo medidor.</li>
              </ul>
              <h2 className='font-extrabold text-lg lg:text-xl'>3. Aumento de potencia</h2>
              <ul className='pl-8 font-normal lg:text-xl text-lg list-disc'>
                <li>Designación de matriculado;</li>
                <li>Inspección de cableado final aprobada por el inspector del Departamento de Construcciones Eléctricas donde quede establecido la cantidad de derivaciones familiares o comerciales, y si son monofásica, trifásicas o según corresponda que se incorporan a la instalación eléctrica;</li>
                <li>Inspección del puesto de medición aprobada por el inspector del Departamento de Construcciones;</li>
                <li>Fotocopia de la Declaración Jurada Catastral vigente;</li>
                <li>Fotocopia del ticket de pago de los aranceles correspondientes según la OTA;</li>
                <li>Plano conforme a obra aprobado por el inspector del Departamento de Construcciones, donde se justifica el pedido de aumento de potencia.</li>
              </ul>
              <h2 className='font-extrabold text-lg lg:text-xl'>4. Reconexiones familiares y comerciales</h2>
              <ul className='pl-8 font-normal lg:text-xl text-lg list-disc'>
                <li>Inspección del puesto de medición aprobada por el inspector del Departamento de Construcciones;</li>
                <li>Fotocopia de la Declaración Jurada Catastral vigente;</li>
                <li>Fotocopia de la última factura de energía San Juan antes del retiro del medidor;</li>
                <li>Fotocopia del ticket de pago de los aranceles correspondientes según la OTA.</li>
              </ul>
            </section>
            <p className='font-extrabold text-lg lg:text-xl '>Nota: para la reconexión comercial es necesario designar un matriculado habilitado en este departamento</p>
          </div>
          <div className='relative z-0'>
            <svg className='h-32 w-32 lg:h-96 lg:w-96 absolute -top-[10px] -right-0 lg:-top-[280px] rotate-180 scale-y-[-1]'>
              <image href={img1} alt='img not found' className='w-20 lg:w-96 lg:h-96' />
            </svg>
          </div>
          {/* <div className='relative z-0'>
            <svg className='h-48 w-48 lg:h-64 lg:w-64 absolute -top-[10px] right-32 lg:right-96 lg:-top-[20px] rotate-180 scale-y-[-1]'>
              <image href={img2} alt='img not found' className='w-auto lg:w-64 lg:h-64' />
            </svg>
          </div> */}
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
