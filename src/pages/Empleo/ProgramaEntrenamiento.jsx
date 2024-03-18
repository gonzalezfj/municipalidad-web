import React from 'react'
import img from '@assets/mobilEmpleo/empleoMobile_ProgramaEntrenamientoParaElTrabajo.jpg'
import img2 from '@assets/img temporal/dotacionTabla.jpg'
import img3 from '@assets/img temporal/dotacionTabla2.jpg'
import { Accordion, AccordionTab } from 'primereact/accordion'
import ButtonBack from '@/components/Default/ButtonBack'

export const ProgramaEntrenamiento = () => {
  return (
    <div>
      {/* IMG */}
      <img src={img} alt='img not found' className='w-full object-cover h-80' />
      <div className='container mx-auto flex flex-col gap-6 pt-10 px-10'>
        {/* TITULO */}
        <h1 className='text-[#4B0984] font-extrabold text-2xl lg:text-3xl'>PROGRAMA DE ENTRENAMIENTO PARA EL TRABAJO</h1>
        {/* TEXT */}
        <section className='font-semibold text-[#3E3E3E] text-sm lg:text-[1.1rem] flex flex-col gap-2'>
          <p>El programa de entrenamiento para el trabajo (EPT) tiene como objetivo brindar incentivos económicos para formar, capacitar y entrenar aprendices en puestos laborales.</p>
          <div className='card'>
            <Accordion activeIndex={0} className='pt-4'>
              <AccordionTab className='text-[#8A43EF] text-[1.1rem] lg:text-[1.4rem] pb-4 lg:pb-10' header='Quienes pueden accerder al programa'>
                <div className='text-sm lg:text-base text-slate-900 pl-2'>
                  <li>Jóvenes que tengan entre 18 y hasta 24 años </li>
                  <li>Micro, Pequeñas, Medianas y Grandes Empresas.</li>
                </div>
                <h1 className='text-black text-lg'>Duracion</h1>
                <p className='m-0 text-slate-800 text-sm lg:text-base'>Tiene una duración de 4 a 6 meses dependiendo de la actividad.</p>
                <h1 className='text-black text-lg'>Montos</h1>
                <p className='m-0 text-slate-800 text-sm lg:text-base'>Los trabajadores recibirán una suma de $45.000 mensuales a cargo del Ministerio de Trabajo, Empleo y Seguridad Social (MTEySS) o en forma conjunta con la empresa.</p>
                <h1 className='text-black text-lg'>Entre sus objetivos:</h1>
                <div className='text-sm text-slate-900 pl-2 lg:text-base'>
                  <li>Mejorar las condiciones de empleabilidad de trabajadores desocupados</li>
                  <li>Contribuir al fortalecimiento de la productividad y competitividad de empresas</li>
                  <li>Formar trabajadores capacitados de acuerdo a necesidades empresariales</li>
                </div>
              </AccordionTab>
              <AccordionTab className='text-[#8A43EF] text-[1.1rem] pb-4 lg:pb-10 lg:text-[1.4rem]' header='Acciones de Entrenamiento para el Trabajo'>
                <h1 className='text-black text-lg'>Características de los proyectos</h1>
                <div className='text-sm text-slate-900 pl-2 lg:text-base'>
                  <li>Los/as aprendices llevan a cabo acciones de formación teórica y práctica en un puesto de trabajo que les permiten mejorar su empleabilidad.</li>
                  <li>Durante el período de entrenamiento, no hay relación laboral entre el/a trabajador/a y la empresa.</li>
                  <li>Formar trabajadores capacitados de acuerdo a necesidades empresariales</li>
                </div>
                <h1 className='text-black text-lg'>Jornada y duración de las acciones</h1>
                <div className='text-sm text-slate-900 pl-2 lg:text-base'>
                  <li>Las acciones podrán tener una carga horaria de hasta 20 horas semanales.</li>
                  <li>Lunes a viernes, en una sola franja horaria, entre las 05:00 a 22:00hs y en días hábiles.</li>
                  <li>Hasta 6 meses.</li>
                </div>
              </AccordionTab>
              <AccordionTab className='text-[#8A43EF] text-[1.1rem] pb-4 lg:pb-10 lg:text-[1.4rem]' header='Responsabilidades de la empresa'>
                <div className='text-sm text-slate-900 pl-2 lg:text-base'>
                  <li>Designar la cantidad de tutores que corresponda ,según dotación y cantidad de participantes.</li>
                  <li>Entregar un certificado a los/as participantes luego de concluido el proyecto.</li>
                  <li>Garantizar una cobertura de riesgos de trabajo y de salud para los/as participantes.</li>
                  <li>Firmar un Acuerdo de Entrenamiento con los/as participantes.</li>
                  <li>Según su tamaño, abonar a los/as aprendices el monto que corresponda.</li>
                  <li>Brindar la infraestructura, equipamiento, insumos, herramientas y ropa de trabajo necesarios para el desarrollo de las actividades.</li>
                  <li>Informar a los/as participantes todos los derechos, obligaciones y requisitos derivados de su participación en las acciones que componen el proyecto.</li>
                  <li>Garantizar a los/as participantes un contexto de aprendizaje libre de violencia de género y acoso en cumplimiento de las Leyes N°26.485, N°26.743, y N°27.580.</li>
                </div>
              </AccordionTab>

              <AccordionTab className='text-[#8A43EF] text-[1.1rem] pb-4 lg:pb-10 lg:text-[1.4rem]' header='Cupo máximo de participantes y cantidad de tutores'>
                <div className='items-center justify-center flex'>
                  <img src={img2} alt='img not found' className='w-[32rem] h-[32rem] object-cover' />
                </div>
              </AccordionTab>

              <AccordionTab className='text-[#8A43EF] text-[1.1rem] pb-4 lg:pb-10 lg:text-[1.4rem]' header='Incentivos económicos'>
                <div className='items-center justify-center flex'>
                  <img src={img3} alt='img not found' className='w-[32rem] h-[32rem] object-cover' />
                </div>
                <section className='text-black text-sm lg:text-base'>
                  <p>*Este monto aplica para las acciones a partir de marzo 2023 y para participantes incluidos/as en los grupos poblacionales con tratamiento especial del PROGRAMA FOMENTAR EMPLEO. Para el resto de las poblaciones destinatarias, la ayuda económica es de $39.000.</p>
                  <h1>Normativa</h1>
                  <div className='pl-2 lg:text-base'>
                    <li>Resolución MTEySS N°708/10</li>
                    <li>Resolución SE N°905/10 y sus modificatorias</li>
                  </div>
                </section>
              </AccordionTab>
            </Accordion>
          </div>
        </section>
        <div className='flex flex-col gap-2'>
          <button className='text-white bg-[#4B0984] rounded-3xl h-10 lg:w-[40rem] lg:text-[1.2rem] lg:h-14'>Quiero entrenarme en una empresa</button>
        </div>
        <div className=' container mx-auto flex items-center justify-center xl:block'>
          <ButtonBack />
        </div>
      </div>
    </div>
  )
}
