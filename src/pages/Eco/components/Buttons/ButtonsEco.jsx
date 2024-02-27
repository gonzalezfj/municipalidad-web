const ButtonsEco = () => {
  return (
    <div className='container'>
      <div className='p-7 text-[#616161]'>
        <h1 className='text-xl font-bold'>Gestionar Obleas de Estacionamiento</h1>
        <p className='mt-2'> </p>
        <a href='/obleas' className='mt-2 p-2 font-bold bg-[#FFC14F] rounded-xl'>OBLEAS</a>
      </div>
      <div className='p-7 text-[#616161]'>
        <h1 className='text-xl font-bold mt-2'>Remoción por grúa</h1>
        <p className='mt-2 mb-2'>¿Tu vehículo fue removido por nuestras grúas?</p>
        <a href='/playaderemocion' className='mt-2 p-2 font-bold bg-[#FFC14F] rounded-xl'>PLAYA DE REMOCIÓN</a>
      </div>
      <div className='p-7 text-[#616161]'>
        <h1 className='text-xl font-bold'>Descargo por infracciones</h1>
        <p className='mt-2 mb-2'>En caso de que desees efectuar descargos de infracciones de tránsito en línea.
          Para efectuar el descargo en línea deberá contar con el número de dominio de su vehículo (la patente) y una cuenta de correo electrónico. Es conveniente que cuente con el número de acta y la fecha.
        </p>
        <a href='https://municipiosanjuan.gob.ar/descargoweb-transito' target='_blank' className='mt-2 p-2 font-bold bg-[#FFC14F] rounded-xl' rel='noreferrer'>EFECTUAR DESCARGO</a>
      </div>
    </div>
  )
}

export default ButtonsEco
