import React from 'react'

export const KinesiologiaInfo = () => {
  return (
    <div>
      <div className='container flex flex-col h-full px-8 gap-2 border border-purple-800 rounded-3xl shadow-2xl p-10'>
        <h1 className='text-[#4B0984] font-extrabold text-[2rem]'>Kinesiología</h1>
        <button className='bg-[#FFC14F] text-white w-[10rem] py-1 mt-2 mb-2 rounded-xl'>Pedir turnos</button>
        <h1 className='text-[#4B0984] font-bold text-2xl'>Atención turno mañana</h1>
        <p className='font-semibold'>
          Lunes a jueves de 8 a 12hs,
          solo con turno.
          Anexo Mitre. Mitre 655 este.
        </p>
        <p className='text-[#9C9C9C] font-bold'>
          Se atiende personas adultas (mayores
          de 18 años), con patologías traumato-
          lógicas. Debe tener indicación médica
          para acceder a este servicio.
        </p>
        <h1 className='text-[#D85B35] font-extrabold text-2xl'>Lic. Gimena Costa</h1>
        <h1 className='text-[#4B0984] font-extrabold text-2xl'>Atención turno tarde</h1>
        <p className='font-semibold'>
          Lunes a viernes de 13 a 17hs,
          solo con turno.
          Anexo Mitre. Mitre 655 este.
        </p>
        <p className='text-[#9C9C9C] font-semibold'>
          Se atienden niños/as a partir de los
          5 años y personas adultas con patolo-
          gías traumatológicas. Debe tener indi-
          cación medica para acceder a este
          servicio.
        </p>
        <div>
          <h1 className='text-[#D85B35] font-extrabold text-2xl'>Lic. Gustavo Barrozo</h1>
          <h4 className='text-[#D85B35] font-extrabold text-base'>Matrícula N.º: 947</h4>
        </div>
      </div>
    </div>
  )
}
