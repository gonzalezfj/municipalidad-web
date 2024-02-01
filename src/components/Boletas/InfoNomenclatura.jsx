import ButtonAtras from '../Default/ButtonAtras'

const InfoNomenclatura = () => {
  return (
    <div className='bg-[#9747FF] relative w-full h-auto text-white lg:text-xl'>
      <div className='bg-white w-full h-20 rounded-br-full' />
      <div className='p-6 lg:container lg:mx-auto lg:flex lg:flex-col lg:py-20'>
        <h1 className='font-bold mb-2'>¿Dónde consigo la Nomenclatura Catastral?</h1>
        <p className='text-sm mb-2'>La nomenclatura catastral es una serie de números que se encuentra impreso en el margen superior de la boleta de tasa municipal.</p>
        <h1 className='font-bold mb-2'>Vencimiento de Boletas</h1>
        <p className='text-sm mb-2'>Son 12 (doce) boletas que deben pagarse al año, sean de inmueble o comercio. Las formas de pago pueden ser:
          <ul className='list-inside list-disc'>
            <li>Anual o semestral.</li>
            <li>Pago anual y primer semestre vencen en el mes de marzo.</li>
            <li>Pago del segundo semestre vence en el mes de julio.</li>
            <li>Mensual. El pago vence el último día hábil de cada mes.</li>
          </ul>
        </p>
      </div>
      <div className='bg-[#9747FF] absolute -bottom-30 w-full h-20 rounded-br-full lg:flex lg:items-center lg:justify-center'>
        <div className='container mx-auto'>
          <ButtonAtras />
        </div>
      </div>
    </div>
  )
}

export default InfoNomenclatura
