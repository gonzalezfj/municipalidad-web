import React from 'react'
import ButtonBack from '../Default/ButtonBack'
import { useNavigate } from 'react-router'
const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
const img3 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoComercio.svg'

const HabilitacionesEventos = () => {
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }
  return (
    <div className='w-full'>
      <div className='absolute top-0 w-0 h-0 border-t-[75px] border-t-[#FFC14F] border-l-[75px] border-l-[#FFC14F] border-b-[75px] border-b-transparent border-r-[75px] border-r-transparent' />
      <div className='absolute right-0 top-24 lg:top-5 xl:top-24'>
        <svg className='h-20 w-20 lg:h-64 lg:w-64 -rotate-90 scale-y-[-1]'>
          <image className='w-[190px] lg:w-[350px] xl:w-[590px] object-cover ' href={img2} alt='img not found' />
        </svg>
      </div>
      {/* CONTENIDO */}
      <div className='container mx-auto flex flex-col gap-5 p-10 pt-28'>
        <div className='pt-10 w-full flex flex-col-2 lg:w-full'>
          <h1 className='font-extrabold text-2xl text-[#D85B35] lg:text-3xl'>HABILITACIONES DE LOCALES DE EVENTOS</h1>
        </div>
        {/* INFO  */}
        <div className='text-[#3E3E3E]'>
          <p className=''>Acá podrás consultar los requisitos específicos, no olvides revisarlos.
          </p>
        </div>
        <div className='mb-5'>
          <button onClick={() => handleClick('/habilitaciones')} className='hover:bg-transparent bg-[#FFC14F] text-#3E3E3E text-1xl font-extrabold  hover:text-[#FFC14F] py-4 px-8  border-[#FFC14F] border-2 hover:border-[#FFC14F] rounded-3xl'>
            REQUISITOS GENERALES
          </button>
        </div>
        {/* INFO  */}
        <div className='text-[#3E3E3E]'>
          <p>Entiéndase por Locales Bailables y de Espectáculos, y Salón de Fiestas a los locales inmuebles destinados a reuniones sociales o familiares de cualquier tipo, públicas o privadas, donde se desarrollan bailes, espectáculos o fiestas en forma permanente o transitoria, con o sin expendio y consumo de bebidas o comidas, y asimismo se reproduzca música grabada o en vivo de manera permanente o transitoria. Entre otros, se enuncian los siguientes: confiterías o restoranes bailables, boliches, pub, café, concert, clubes, Uniones Vecinales, o salones privados.</p>
        </div>
      </div>
      <div className='bg-[#FFC14F] text-[#616161] font-bold rounded-r-full p-10 '>
        <p className='2xl:px-44 xl:px-20'>Sin perjuicio de la superficie y previo a peticionar la habilitación se requiere Certificado de Factibilidad de Localización emitido por la Secretaría de Planificación Urbana de la Municipalidad de la Ciudad de San Juan.</p>
      </div>
      <div className='container mx-auto p-10'>
        <p className='font-bold'>Requisitos:</p>
        <ol className='list-decimal list-inside'>
          <li>Certificaciones emitidas por la Dirección de Planeamiento y Desarrollo Urbano Provincial: Certificado de Factibilidad, Certificado Final de Obra o Licencia de Uso. En el presente supuesto la habilitación será por el plazo de tres (3) años cuando faltare el Certificado Final de Obra, debiendo cumplimentar los demás requisitos previamente enunciados.</li>
          <li>Certificado del Servicio de Protección contra Incendio emitido por el Departamento Bomberos de la Provincia de San Juan.</li>
          <li>Certificados de Salud pública extendido por el Ministerio de Salud Pública de la Provincia vigente.</li>
          <li>Certificados de Aptitud Eléctrica emitido por Municipalidad de la Ciudad de San Juan.</li>
          <li>El titular de la actividad debe contratar obligatoriamente un seguro de responsabilidad civil que cubra las eventuales contingencias que se produzcan en el local inmueble.</li>
          <li>El titular de la actividad debe contratar obligatoriamente un servicio de emergencias médicas.</li>
          <li>Certificado de Insonorización del local expedido por la Dirección de Planeamiento y Desarrollo Urbano.</li>
          <li>El titular de la actividad debe contratar obligatoriamente servicio de vigilancia pública o privada debidamente autorizada por la Policía de la Provincia de San Juan,</li>
          <li>Certificado emitido por Salud Pública de la Provincia de San Juan que correspondan.</li>
        </ol>
      </div>
      <div className='bg-[#8A43EF] text-white font-bold rounded-r-full p-10'>
        <p className='2xl:px-44 xl:px-20'>ZONA SATURADA: Declárese Zona Saturada a los fines de los artículos siguientes la zona comprendida por Avenida Libertador General San Martín, Avenida José Ignacio de la Roza, entre calles Justo José de Urquiza y Paula Albarracín de Sarmiento.</p>
      </div>
      <div className='text-[#3E3E3E] container mx-auto p-10'>
        <p><span className='font-bold'>Prohibición de instalación en zona saturada</span> de nuevos locales bailables, de espectáculos y salones de fiesta: La Zona Saturada implica la prohibición de instalación de nuevos Locales Bailables y de Espectáculos, y Salón de Fiestas, o la reapertura de los mismos cuando hubiesen sido cerrados definitivamente.</p>
        <p><span className='font-bold'>Excepción:</span> la transferencia o cambio de razón social, constituyen los únicos supuestos de excepción de la Prohibición de Instalación en Zona Saturada de Nuevos Locales Bailables y de Espectáculos, y Salones de Fiestas, solo en el caso de conservar idéntico rubro. En este supuesto deben contar con habilitación vigente del negocio a transferir, libre deuda municipal y todo otro requisito que a criterio de la Dirección de Comercio, Industria y Publicidad estime necesario.</p>
      </div>
      <div className='items-center justify-center'>
        <ButtonBack />
      </div>
      <div className='relative mb-16'>
        <svg className='h-28 w-28 lg:w-36 lg:h-36 absolute right-5 -top-20'>
          <image href={img3} alt='img not found' className='h-28 w-28' />
        </svg>
      </div>
    </div>
  )
}

export default HabilitacionesEventos
