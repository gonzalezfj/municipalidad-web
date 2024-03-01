import React from 'react'
import img from '@assets/mobilEmpleo/empleoMobile_ProgramaInsercionLaboral.jpg'
import img3 from '@assets/img temporal/dotacionTabla2.jpg'
import { Accordion, AccordionTab } from 'primereact/accordion'
export const ProgramaInsercionLaboral = () => {
  return (
    <div>
      {/* IMG */}
      <img src={img} alt='img not found' className='w-full object-cover h-80' />
      <div className='container mx-auto flex flex-col gap-6 pt-10 px-10'>
        {/* TITULO */}
        <h1 className='text-[#4B0984] font-extrabold text-2xl lg:text-3xl'>PROGRAMA DE INSERCIÓN LABORAL FOMENTAR</h1>
        {/* TEXT */}
        <section className='font-semibold text-[#3E3E3E] text-sm lg:text-[1.1rem] flex flex-col gap-2'>
          <h1 className='text-black font-bold text-[1.2rem]'>Objetivo y Vigencia:</h1>
          <span>
            <p>-Transformar de manera gradual y con un criterio federal a los programas sociales, educativos y de empleo en trabajo registrado de calidad; mejorar la empleabilidad y la generación de nuevas propuestas productivas y promover la inclusión social plena de aquellas personas que se encuentran en situación de vulnerabilidad social y económica.</p>
            <p>-Cubrirá las relaciones laborales que se inicien a partir del 1º de octubre de 2022 y durante los primeros 24 meses a partir de esa fecha.</p>
          </span>
          <div className='card'>
            <Accordion activeIndex={0} className='pt-4'>
              <AccordionTab className='text-[#8A43EF] text-[1.1rem] lg:text-[1.4rem] pb-4 lg:pb-10' header='Beneficios'>
                <div className='list-item text-sm lg:text-base text-slate-900 pl-2'>
                  <li>La posibilidad de imputar la asignación dineraria de los programas sociales, educativos o de empleo que se continúe percibiendo, a cuenta del pago de la remuneración a través del Programa de Inserción Laboral del Ministerio de Trabajo, Empleo y Seguridad Social. </li>
                  <li>Una reducción de las contribuciones patronales del 100% por 12 meses.</li>
                </div>
              </AccordionTab>
              <AccordionTab className='text-[#8A43EF] text-[1.1rem] pb-4 lg:pb-10 lg:text-[1.4rem]' header='Destinatarios I'>
                <h1 className='text-black text-lg'>Empresas:</h1>
                <div className='list-item text-sm text-slate-900 pl-2 lg:text-base'>
                  <li>Todas, independientemente de su tamaño.</li>
                  <li>Deben estar inscriptas en AFIP.</li>
                  <li>No deben figurar en el RESAL (Registro Público de Empleadores con Sanciones Laborales)</li>
                  <li>Con la nueva incorporación deben incrementar la dotación de trabajadores/as de la empresa.</li>
                </div>
              </AccordionTab>
              <AccordionTab className='text-[#8A43EF] text-[1.1rem] pb-4 lg:pb-10 lg:text-[1.4rem]' header='Destinatarios II'>
                <h1 className='font-extrabold text-black lg:text-lg'>Trabajadores/as desocupados/as mayores de DIECIOCHO (18) años participantes de:</h1>
                <div className='list-item text-sm text-slate-900 pl-2 lg:text-base'>
                  <li>Programa de Inserción Laboral del Ministerio de Trabajo, Empleo y Seguridad Social de la Nación.</li>
                  <li>Participantes del POGRAMA FOMENTAR EMPLEO del Ministerio de Trabajo, Empleo y Seguridad Social de la Nación, con Tratamiento General y Especial.</li>
                  <li>Titulares del Potenciar Trabajo del Ministerio de Desarrollo Social de la Nación.</li>
                  <li>Programas del Ministerio de las Mujeres, Géneros, y Diversidad de la Nación.</li>
                </div>
              </AccordionTab>
              <AccordionTab className='text-[#8A43EF] text-[1.1rem] pb-4 lg:pb-10 lg:text-[1.4rem]' header='Programa de Inserción Laboral'>
                <div className='flex flex-col gap-4'>
                  <h1 className='font-extrabold text-black  lg:text-xl'>Características:</h1>
                  <ul className='text-slate-600 list-disc list-inside pl-4 lg:text-lg'>
                    <li>Consiste en un incentivo económico que el MTEySS o el Ministerio de Desarrollo Social, aportan durante un plazo de hasta 12 meses a los/as trabajadores/as y que la empresa podrá desconectar del salario a su cargo, abonando la diferencia que corresponda de acuerdo a la normativa aplicable según CCT.</li>
                    <li>La empresa debe registrar a los trabajores dando el Alta Temprana a través de la Administración Federal de Ingresos Públicos (AFIP).</li>
                    <li>La empresa paga los aportes y contribuciones sobre la totalidad del salario.</li>
                  </ul>
                </div>
              </AccordionTab>
              <AccordionTab className='text-[#8A43EF] text-[1.1rem] pb-4 lg:pb-10 lg:text-[1.4rem]' header='Incentivos económicos - Programa Inserción Laboral'>
                <div className='items-center justify-center flex'>
                  <img src={img3} alt='img not found' className='w-[32rem] h-[32rem] object-cover' />
                </div>
              </AccordionTab>
              <AccordionTab className='text-[#8A43EF] text-[1.1rem] pb-4 lg:pb-10 lg:text-[1.4rem]' header='Decreto 551/2022'>
                <div className='flex flex-col gap-4 '>
                  <h1 className='text-black text-sm font-extrabold lg:text-xl'>REDUCCIÓN DE CONTRIBUCIONES PATRONALES</h1>
                  <section className='lg:text-lg'>
                    <ul className='text-slate-600 list-disc pl-4'>
                      <li>Los/as empleadores/as del sector privado que contraten nuevos/as trabajadores/as en el marco de este Programa, además podrán acceder a una reducción del 100% de las contribuciones patronales vigentes*, durante los primeros 12 meses a partir del mes de inicio de la nueva relación laboral.</li>
                      <li>Para acceder al beneficio, la nueva incorporación debe producir un incremento neto en la nómina de personal.</li>
                      <li>*Sistema Integrado Previsional Argentino(SIPA),Ley N°24.241 sus modificatorias y complementarias; Instituto Nacional de Servicios Sociales para Jubilados y Pensionados, Ley N°19032 y sus modificatorias; Fondo Nacional de Empleo, Ley N°24013 y sus modificatorias; Régimen Nacional de Asignaciones Familiares, Ley N°24.714 y sus modificatorias.</li>
                    </ul>
                  </section>
                  <h2 className='text-black font-extrabold text-lg  lg:text-xl'>Modalidades de contratación admitidas:</h2>
                  <section className='pl-4 lg:text-lg'>
                    <ul className='list-decimal text-slate-600'>
                      <li>Contratos de trabajo por plazo indeterminado.</li>
                      <li>Contratos de trabajo a plazo fijo.</li>
                      <li>Contratos de trabajo de temporada.</li>
                      <li>Contratos de trabajo comprendidos en el régimen previsto en la Ley N°22.250.</li>
                    </ul>
                    <ul className='list-disc text-slate-600'>
                      <li>Para contratos de trabajo a tiempo parcial, el beneficio se reduce a la mitad (50%).</li>
                      <li>Los beneficios (PIL y la RCP) se hacen efectivos como resultado de la declaración de las empresas a través de los servicios "Simplificación Registral" y Declaración en Línea" (Formulario 931) de la AFIP, respectivamente.</li>
                    </ul>
                  </section>
                  <section className='flex flex-col gap-2'>
                    <h1 className='text-lg text-black'>Deberán seleccionarse los siguientes códigos:</h1>
                    <img src={img3} alt='img not found' />
                    <h1 className='text-lg text-black font-extrabold'>CÁLCULO DE AHORRO EN CONTRIBUCIONES PATRONALES</h1>
                    <img src='' alt='img not found' />
                    <h1 className='text-lg text-black font-extrabold'>CÁLCULO DE AHORRO REDUCIÓN DE CONSTRIBUCIONES PATRONALES + PIL</h1>
                    <img src='' alt='img not found' />
                    <h2 className='text-neutral-900 font-extrabold pb-2'>Normativa</h2>
                    <ul className='pl-4 list-disc text-slate-600 gap-2 flex flex-col'>
                      <li>Resolución MTEySS N°45/06</li>
                      <li>Resolución SE N°2186/10 y sus modificatorias.</li>
                      <li>Decreto 551/22</li>
                    </ul>
                  </section>
                </div>
              </AccordionTab>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  )
}
