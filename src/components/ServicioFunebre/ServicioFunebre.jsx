import React from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion'
const img = import.meta.env.VITE_ASSETS_URL + '/assets/imgCementerio/cementerioCapital.jpg'
export const ServicioFunebre = () => {
  return (
    <div className='w-full'>
      <div className='container mx-auto px-10 lg:px-32 flex flex-col gap-4 pt-40'>
        <h1 className='font-extrabold text-[#4B0984] text-2xl lg:text-[2rem]'>SERVICIOS FUNÉBRES</h1>
        <p className='lg:text-[1.1rem]'>En la Municipalidad de Capital brindamos un servicio social de fácil acceso, de bajo costo y alta calidad para que el ciudadano pueda solicitarlo.</p>
        <div className='w-80 h-w-48 lg:w-full lg:h-96 flex items-center justify-center rounded-2xl'>
          <img src={img} alt='img not found' className='w-full h-full object-cover rounded-2xl' />
        </div>
        <section className='flex flex-col gap-4 text-[#3E3E3E] lg:text-[1.1rem]'>
          <p>La Dirección de Servicio Fúnebre de Capital cuenta con modernas movilidades, entre ellas carrozas, porta coronas, coches de acompañamiento de alta gama y furgón para realizar los traslados.Además se encuentran disponibles cinco amplias y cómodas salas velatorias, dotadas con aire acondicionado, calefacción y servicio de buffet las 24 horas.</p>
          <p>El servicio se brinda los 365 días del año, con guardias las 24 hs.</p>
          <p>Para quienes no deseen utilizar las salas velatorias,se ofrece el servicio a domicilio, donde se instala la capilla ardiente con los candelabros correspondientes y las movilidades de ser solicitadas para el correcto servicio de sepelio.</p>
          <p>Se realizan traslados de cementerio a cementerio, utilizando el furgón para el mismo a muy bajo costo.</p>
          <p>Esta dirección posee diferentes convenios con el Ministerio de Desarrollo Humano y Promoción Social para personas vulnerables, con Obra Social Provincia, en el cual sus beneficiarios tienen una cobertura total sin abonar ningún tipo de diferencia monetaria. Asimismo, la cochería municipal asienta en el Registro Civil correspondiente a los fallecidos.</p>
        </section>
        <h2 className='font-extrabold text-[1.1rem] text-[#3E3E3E] lg:text-[1.5rem]'>Requisitos para acceder a los servicios</h2>
        <div className='card'>
          <Accordion activeIndex={0} className='pt-4'>
            <AccordionTab className='text-[#8A43EF] text-[1.1rem] lg:text-[1.4rem] pb-4 lg:pb-10 font-bold' header='A través del Ministerio de Desarrollo Humano y Promoción Social'>
              <div className='list-disc text-sm lg:text-base text-slate-600 pl-4'>
                <li>No poseer Obra Social, Jubilación o cobertura de servicio fúnebre de ningún tipo.</li>
                <li>DNI del fallecido</li>
                <li>Certificado estadístico</li>
                <li>Certificado de defunción</li>
                <li>Certificación negativa</li>
                <li>CUIL del fallecido</li>
                <li>Orden emitida por el Ministerio de Desarrollo Humano</li>
                <li>Certificado de No Cobertura, según el caso que así lo requiera</li>
                <li>En caso de ser menor de edad: DNI y CUIL de los padres.</li>
              </div>
            </AccordionTab>
            <AccordionTab className='text-[#8A43EF] text-[1.1rem] pb-4 lg:pb-10 lg:text-[1.4rem] font-bold' header='Obra social provincia'>
              <div className='list-item text-sm text-slate-600 pl-4 lg:text-base'>
                <li>Último recibo de sueldo del fallecido o de la persona que lo tenía a cargo</li>
                <li>DNI del fallecido</li>
                <li>Carnet de afiliación del fallecido</li>
                <li>Certificado estadístico</li>
                <li>Certificado de defunción</li>
              </div>
            </AccordionTab>
            <AccordionTab className='text-[#8A43EF] text-[1.1rem] pb-4 lg:pb-10 lg:text-[1.4rem] font-bold' header='Particulares'>
              <div className='list-item  text-sm text-slate-600 pl-4 lg:text-base'>
                <li>DNI del fallecido</li>
                <li>Certificado estadístico</li>
                <li>Certificado de defunción</li>
              </div>
            </AccordionTab>
            <AccordionTab className='text-[#8A43EF] text-[1.1rem] pb-4 lg:pb-10 lg:text-[1.4rem] font-bold' header='Requisitos para la Inscripción en el Registro Civil'>
              <div className='flex flex-col gap-4'>
                <ul className='text-slate-600 list-disc list-inside pl-4 lg:text-base'>
                  <li>DNI del fallecido</li>
                  <li>Certificado estadístico</li>
                  <li>Certificado de Defunción</li>
                  <li>Libreta de casamiento en el caso de que el fallecido fuese casado</li>
                  <li>En el caso de ser viudo, el Acta de Defunción del esposo/a, en caso de ser divorciado la constancia de divorcio</li>
                </ul>
              </div>
            </AccordionTab>
          </Accordion>
        </div>
        <p className='font-extrabold text-[1.1rem]'>Se realizan Servicios de Sepelio a los departamentos alejados de nuestra provincia.</p>
        <ul>
          <li>Av. Rawson Sur 449 San Juan, San Juan 5400 Argentina</li>
          <li>Tel: 264 430 9656</li>
        </ul>
        <p className='font-extrabold text-[1.1rem]'>El servicio funciona las 24 hs. todos los días del año</p>
      </div>
      {/* FALTA RECURSO */}
    </div>
  )
}
