import React from 'react'
import img2 from '@assets/imgCementerio/cementerio_fondo_Mesa de trabajo 1.svg'
import img from '@assets/mobilEmpleo/empleoMobile_ProgramaEntrenamientoParaElTrabajo.jpg'
export const LimpiezaUrbana = () => {
  return (
    <div>
      {/* FALTA EL RECURSO IMAGEN DE ESTA SECCION */}
      <img src={img} alt='imagen de camion de basura' className='w-full object-cover h-80' />
      <div className='container mx-auto px-8 lg:px-36 flex flex-col gap-4'>
        <h1 className='font-extrabold text-2xl text-[#4B0984] pt-10'>LIMPIEZA URBANA</h1>
        <div className='flex flex-col gap-4'>
          <p>Con el objetivo de contribuir a tener una ciudad más limpia y ordenada, la Municipalidad de Capital informa horarios de recolección de residuos y brinda a los vecinos algunas sugerencias para que la recolección sea más efectiva.</p>
          <h3 className='text-[#8A43EF] font-bold text-2xl'>Horarios</h3>
          <p>A fin de contribuir a mantener una ciudad limpia y ordenada en todos sus distritos, la Secretaría de Ambiente y Servicios de Capital comunica a los vecinos la planificación prevista para recolección de residuos domiciliarios y recolección diferenciada de verdes (ramas, hojas, césped).
            En los días determinados, los vecinos deberán sacar al frente de sus domicilios los residuos verdes debidamente embolsados o reducidos.
            A fin de hacer más eficiente las tareas, se zonificó la ciudad en dos tomando como línea divisoria Avenida Libertador General San Martín.
            A continuación detallamos días y horarios de las zonas mencionadas.
          </p>
          <h3 className='text-[#8A43EF] font-bold text-2xl'>Zona Norte</h3>
          <p>Desde Avenida Libertador hasta el límite con Chimbas:</p>
          <div>
            <li>Residuos verdes: miércoles y viernes</li>
            <li>Residuos domiciliarios a partir de las 5 am.</li>
          </div>
          <h3 className='text-[#8A43EF] font-bold text-2xl'>Zona Sur</h3>
          <p>Desde Avenida Libertador hasta el límite con el departamento Rawson:</p>
          <div>
            <li>Residuos verdes: martes y jueves</li>
            <li>Residuos domiciliarios a partir de las 14 hs. </li>
          </div>
          {/* MAPA */}
          <div>
            <iframe allowFullScreen width='350' height='450' src='https://www.google.com/maps/d/u/0/embed?mid=1Vqq3nG_jabiKnqs8uYpx-80cbOXcWMUj' frameBorder='0' />
          </div>
        </div>
      </div>
      {/* CUERPO DE TEXTOS */}
      <div className='flex flex-col gap-4 container px-8 lg:px-44 pt-2'>
        <h1 className='text-[#D85B35] font-bold text-2xl'>SISTEMA AUTOMATIZADO DE RECOLECCIÓN</h1>
        <p>Novedoso sistema de recolección a través de contendores, herméticamente cerrados, que permite una recolección sencilla, ágil y segura. Gracias a su implementación se solucionó una de los grandes inconvenientes, la recolección a cielo abierto. Lo que contribuye al cuidado y protección del Ambiente.</p>
        <h1 className='text-[#D85B35] font-bold text-2xl'>PUNTO LIMPIO</h1>
        <p>Dentro del trabajo Ambiental, la municipalidad puso en marcha el programa “Punto Limpio”, que consiste en la clasificación y separación de residuos de acuerdo a su origen: orgánico, inorgánico y vidrios, identificando los contenedores con los colores verdes, amarillos y azules respectivamente.</p>
        <h4 className='font-extrabold text-1xl'>Recomendaciones</h4>
        <p>Con el objetivo de contribuir a tener una ciudad más limpia y ordenada, la Municipalidad de la Capital brinda a los/as vecinos/as algunas sugerencias para que la recolección de residuos se más efectiva.</p>
        <div>
          <li>Cartones: Deberán abrirse las cajas, ser apiladas y atadas en fardos</li>
          <li>Telgopor: También deberá estar atado</li>
          <li>Bolsas/papeles: Deberán depositarse en bolsas de residuos</li>
          <li>Barrido: No deje la basura en el cordón de la vereda y no la tire dentro de la cuneta. Deposite los residuos donde corresponda.
            Respete los horarios de recolección de residuos
          </li>
        </div>
        <h1 className='text-[#D85B35] font-bold text-1xl'>SISTEMA DE AUTORECOLECCIÒN AUTOMATIZADO EASY(Contenedores)</h1>
        <p>Llevar la bolsa de residuos a estos contenedores en horario de 19 a 21.</p>
        <h3 className='text-[#D85B35] font-bold'>Para tener en cuenta</h3>
        <p className='font-bold'>Si está por sacar más basura de lo habitual (ramas, jardín, lavarropas, cocinas, colchones en desuso, etc), envíe un WhatsApp al 2645260000, o llame al 147, para coordinar con el retiro de los mismos.</p>
        <h3 className='text-[#D85B35] font-bold'>Uso indebido de los contenedores del sistema automatizado de recolección de residuos</h3>
        <p>Los vecinos de Capital deberán tener en cuenta los siguientes artículos, según la Ordenanza Nº 10.125</p>
        <div className='text-[#3E3E3E] list-decimal'>
          <li>Artículo 5º: Se penalizará a toda persona que haga disposición de líquidos, animales muertos, muebles, enseres, vehículos, residuos industriales y agrícolas, de construcción, demolición, obras menores y reparación domiciliaria, en los contenedores pertenecientes al Sistema Automatizado de Recolección de Residuos.</li>
          <li>Artículo 3º: NO ARROJAR O DEPOSITAR RESIDUOS: Queda prohibido arrojar o depositar en la vía pública, baldío, sitio común, propio o ajeno, cauces de la red de riego, drenes y desagües, red vial y zonas adyacentes, residuos de cualquier origen, desechos, escombros, animales muertos, cosas y sustancias sólidas o líquidas o cualquier elemento que ensucie, moleste o afecte a personas o al medio ambiente.</li>
        </div>
        <h4 className='font-bold text-[#4B0984] italic'>Recuerde que entre todos/as hacemos una Ciudad más limpia.</h4>
      </div>
      <div className='lg:w-96 -z-2 lg:-z-0 mt-8'>
        <img src={img2} alt='img not found' className='w-full object-cover' />
      </div>
    </div>
  )
}
