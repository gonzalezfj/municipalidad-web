import React from 'react'
import ButtonBack from '../Default/ButtonBack'
const img2 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_fondo2.svg'
const img3 = import.meta.env.VITE_ASSETS_URL + '/assets/gia_tramites_turnos_obleas/guiaDeTramitesMobile_iconoComercio.svg'

const Habilitaciones = () => {
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
          <h1 className='font-extrabold text-2xl text-[#D85B35] lg:text-3xl'>HABILITACIONES</h1>
        </div>
        {/* INFO  */}
        <div className='text-[#3E3E3E]'>
          <p className=''>Requisitos y trámite para la obtención, modificación y baja de habilitaciones comerciales, industriales y de servicios.
          </p>
        </div>
        {/* INFO  */}
        <div className='text-[#3E3E3E]'>
          <h1 className='text-[#D85B35] text-xl font-bold mb-2'>Vigencia:</h1>
          <p>La Habilitación Comercial, Industrial y de Servicios tiene una vigencia de (5) cinco años, salvo excepciones dispuestas en la presente Ordenanza.</p>
          <p>Requisitos Generales para la obtención de una habilitación:</p>
          <li>Para el caso de Personas Humanas, D.N.I. del responsable de la actividad comercial, industrial o de servicios, en caso de apoderado, poder del mismo;</li>
          <li>En el supuesto de que el responsable de la actividad comercial, industrial o de servicios sea una persona de existencia jurídica, Estatuto o Contrato Social.</li>
          <li>Reflejo de Datos emitido por la A.F.I.P. respecto del responsable de la actividad comercial;</li>
          <li>Instrumento que vincule al responsable de la actividad comercial, industrial y de servicios con el inmueble donde se desarrolla la actividad;</li>
          <li>Declaración Jurada de Catastro Municipal.</li>
          <li>Certificado de Salud Pública extendido por el Ministerio de Salud Pública de la Provincia</li>
        </div>
        <div className='text-[#3E3E3E]'>
          <h1 className='text-[#D85B35] text-xl font-bold mb-2'>De acuerdo con la superficie del inmueble:</h1>
          <p>Teniendo en cuenta la superficie de los locales inmuebles donde se desarrolla la actividad comercial industrial o de servicios y el riego de la actividad, las habilitaciones se clasifican en:</p>
          <p className='font-bold mt-4'>Habilitación de Locales Inmuebles hasta ciento cincuenta metros cuadrados (150m2). En este supuesto se requiere:</p>
          <li>Certificaciones emitidas por la Dirección de Planeamiento y Desarrollo Urbano Provincial: Certificado de Factibilidad, Certificado de Habitabilidad, Certificado Final de Obra o Licencia de Uso. Excepcionalmente, en caso de no contar con los certificados antes mencionados o estar vencido los mismos, puede suplirse por la presentación de una Declaración Jurada Edilicia, debidamente suscripta por profesional matriculado idóneo en la materia, y el titular de la actividad comercial, industrial o de servicios.</li>
          <li>Certificado del Servicio De Protección Contra Incendio emitido por el Departamento Bomberos de la Provincia de San juan vigente. Excepcionalmente, en caso de no contar con los certificados antes mencionados o estar vencido los mismos, puede suplirse por la presentación de una Declaración Jurada de Seguridad, debidamente suscripta por profesional matriculado idóneo en la materia, y el titular de la actividad comercial, industrial o de servicios.</li>
          <li>Certificado de Salud Pública extendido por el Ministerio de Salud Pública de la Provincia.</li>
          <li>Certificados de Aptitud Eléctrica emitido por Municipalidad de la Ciudad de San Juan.</li>
          <li>Todo otro requisito que a criterio del área técnica así lo disponga de manera fundada considerando el riesgo de la actividad.</li>
        </div>
        <div className='text-[#3E3E3E]'>
          <p className='font-bold'>Habilitación más de ciento cincuenta metros cuadrados (150m2). En este supuesto se requiere:</p>
          <li>Certificaciones emitidas por la Dirección de Planeamiento y Desarrollo Urbano Provincial: Certificado de Factibilidad, Certificado Final de Obra o Licencia de Uso. En el presente supuesto la habilitación será por el plazo de tres (3) años cuando faltare el Certificado Final de Obra, debiendo cumplimentar los demás requisitos previamente enunciados.</li>
          <li>Certificado del Servicio de Protección contra Incendio emitido por el Departamento Bomberos de la Provincia de San Juan.</li>
          <li>Certificado de Salud pública extendido por el Ministerio de Salud Pública de la Provincia vigente.</li>
          <li>Certificados de Aptitud Eléctrica emitido por Municipalidad de la Ciudad de San Juan.</li>
        </div>
        <div className='text-[#3E3E3E]'>
          <h1 className='text-[#D85B35] text-xl font-bold mb-2'>Renovación, traslado, modificación de rubro, cambio de razón social, modificación de datos y cese de actividad:</h1>
          <p>Para la realización de los trámites Renovación de la Habilitación, Traslado, Alta y Baja de Rubro, Cambio de Rubro, Cambio de Razón Social, Modificación de Datos y Cese de Actividad debe solicitarse en el mismo expediente administrativo.</p>
        </div>
        <div className='items-center justify-center'>
          <ButtonBack />
        </div>
        <div className='relative mb-16'>
          <svg className='h-28 w-28 lg:w-36 lg:h-36 absolute right-5 -top-20'>
            <image href={img3} alt='img not found' className='w-28 h-28' />
          </svg>
        </div>
      </div>
      {/* CONTENIDO */}
    </div>
  )
}

export default Habilitaciones
