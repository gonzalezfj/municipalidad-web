import React from 'react'
import img1 from '@assets/intendente/intendente_fotoIntendente.jpg'
export const IntendenciaPage = () => {
  return (
    <div className='w-full'>
      {/* IMG */}
      <div className='w-full h-full'>
        <img src={img1} alt='img not found' className='w-full object-cover h-96' />
      </div>
      {/* TITLE */}
      <div className='text-[#4B0984]'>
        <h1 className=''>Dra. Susana Laciar</h1>
        <h4>Intendente</h4>
      </div>
      {/* REDES */}
      <div>
        <img src='' alt='' />
        <img src='' alt='' />
        <img src='' alt='' />
      </div>
      {/* TEXT */}
      <section>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat rerum eos sit minus doloremque quaerat dolores repellat deserunt suscipit laboriosam nesciunt voluptatibus non, qui libero odit voluptates aliquam corporis possimus.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio eum, accusamus maiores aliquam ratione, earum saepe odio esse, necessitatibus aut laudantium adipisci! Quae quia distinctio saepe provident nam, non nihil!</p>
      </section>
      <h3>Palacio Municipal Ciudad de San Juan - Primer piso.</h3>
      {/* FORM */}
      <div>
        <img src='' alt='img not found' />
        {/* RECURSO */}
        <img src='' alt='img not found' />
      </div>
    </div>
  )
}
