import React from 'react'
import img from '@assets/mobilEmpleo/empleoMobile_ProgramaCursosyCapacitacionLaboral.jpg'
export const CapacitacionLaboral = () => {
  return (
    <div>
      {/* IMG */}
      <img src={img} alt='img not found' className='w-full object-cover h-80' />
      <div className='container mx-auto flex flex-col gap-4 pt-10 px-10'>
        {/* TITULO */}
        <h1 className='text-[#4B0984] font-extrabold text-2xl lg:text-3xl'>PROGRAMAS Y CURSOS DE CAPACITACIÓN LABORAL</h1>
        {/* TEXT */}
        <p className='text-[#3E3E3E]'>El Municipio de la Capital brinda la posibilidad para todos los vecinos de Capital de participar en distintos cursos y capacitaciones.</p>
        <h1 className='text-[#8A43EF] font-extrabold text-1xl lg:text-2xl'>Programas y Cursos de Capacitación dictados por la Direccion de Empleo y Desarrollo Productivo</h1>
        <section>
          <ul className='list-decimal pl-4'>
            <li>Diseñador Gráfico.</li>
            <li>Community Manager.</li>
            <li>Desarrolladores de páginas web y software en PHP y NODEJS</li>
            <li>Introducción al Pensamiento Lógico para programar</li>
            <li>Marketing digital inicial</li>
            <li>Desarrollo Web</li>
            <li>Introducción al Pensamiento Lógico para programar</li>
            <li>Marketing digital inicial</li>
            <li>Introducción al desarrollo de Videojuegos. Para mayores de 18 años.</li>
            <li>Modelado 3D para aspirantes de 14 a 18 años.</li>
            <li>Introducción al desarrollo de Videojuegos.</li>
            <li>Modelado 3D para aspirantes de 14 a 18 años.</li>
            <li>Cuidadores domiciliarios</li>
            <li>Cajero</li>
            <li>Capacitación virtual y gratuita en el marco de Proyecto “Trabajo + Tecnología” (T.TEC)</li>
            <li>Cursos de formación laboral en construcción junto a la UOCRA, donde ya egreso la 2º camada de alumnos (240 egresados).</li>
            <li>a) Construcción en seco</li>
            <li>b) Construcción húmeda</li>
            <li>c) Soldador</li>
            <li>d) Montador sanitarista</li>
            <li>e) Montador electricista</li>
            <li>f) Computación</li>
            <li>g) Inglés</li>
          </ul>
          <p>Estos cursos de capacitación se dictaron con instituciones privadas, centros de formación profesional y por el municipio. Un total de 2700 personas se inscribieron y egresaron a los diversos cursos de formación. Tengamos en cuenta que la demanda de formación y capacitación es muy alta y no estamos cubriendo la necesidad de la población de nuestra ciudad.</p>
        </section>
        <section className='flex flex-col gap-4'>
          <h2 className='text-1xl lg:text-2xl font-extrabold'>A QUIEN ESTÁ DIRIGIO:</h2>
          <li>Personas mayores de entre 18 años.</li>
          <h2 className='text-1xl lg:text-2xl font-extrabold'>REQUISITOS:</h2>
          <li>Los vecinos que quieran participar deberán informarce de los cursos vigentes de manera presencial en la Dirección de Empleo.</li>
          <li>Residir en Capital, que el domicilio figure en el DNI.</li>
        </section>
      </div>
    </div>
  )
}
