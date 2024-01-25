import React from 'react'

const TextPlaya = () => {
  return (
    <div className='text-[#3E3E3E] container mx-auto p-7'>
      <p className='text-justify mt-2'>Si su vehículo fue remolcado por la Grúa Municipal deberá comunicarse a nuestro teléfono (<strong className='text-[#4B0984]'>0264) - <a href='tel:4274441'>4274441</a></strong> o dirigirse a la Playa de Remoción de la Municipalidad de la Ciudad de San Juan <strong className='text-[#4B0984]'>ubicada en calle Rivadavia 855 (este) entre Av. Rawson y Patricias Sanjuaninas.</strong></p>
      <p className='text-justify'>El horario de funcionamiento es de 07:00 a 22:00 hs. de lunes a viernes y de 08:00 a 22:00 hs. los días sábado.</p>
      <p className='text-justify mt-3'><strong className='text-[#4B0984]'>Aunque el Sistema ECO no esté en su horario de funcionamiento las grúas pueden remover un vehículo que esté en infracción.</strong></p>
      <p className='text-justify mt-3'>En caso de intervención del Juzgado de Faltas Municipal, el responsable podrá retirar el vehículo con una orden -Oficio- del Juzgado correspondiente.</p>
      <h3 className='text-justify font-bold mt-3'>Tarifas Playa de Remoción:</h3>
      <ul className='list-inside list-disc mt-3'>
        <li>Importe por Remoción de Vehículo: $1000</li>
        <li>Importe por Acta de Infracción: $9292.50</li>
        <li>Importe de estadía en Playa: $56 por hora</li>
        <li>Descuento del Acta de Infracción: $4646.25 (el descuento es del %50 dentro de los 20 días hábiles que se presenta voluntariamente el imputado, después de esos días se cobra la totalidad)</li>
      </ul>
    </div>
  )
}

export default TextPlaya
