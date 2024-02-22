import ButtonBack from '@components/Default/ButtonBack'
import Markdown from 'react-markdown'

const DestacadoBoletas = ({ BoletasData }) => {
  return (
    <div className='bg-[#9747FF] relative w-full h-auto text-white lg:text-xl'>
      <div className='bg-white w-full h-20 rounded-br-full' />
      <div className='p-6 lg:container lg:mx-auto lg:flex lg:flex-col lg:py-20'>
        <Markdown className='prose text-white'>{BoletasData?.Destacado}</Markdown>
        {/* <style>{
          `.prose h1,
          .prose h2,
          .prose h3,
          .prose h4,
          .prose h5,
          .prose h6 {
            color: #FFFF;
          }`
        }
        </style> */}
        {/* <h1 className='font-bold mb-2'>¿Dónde consigo la Nomenclatura Catastral?</h1>
        <p className='text-sm mb-2'>La nomenclatura catastral es una serie de números que se encuentra impreso en el margen superior de la boleta de tasa municipal.</p>
        <h1 className='font-bold mb-2'>Vencimiento de Boletas</h1>
        <p className='text-sm mb-2'>Son 12 (doce) boletas que deben pagarse al año, sean de inmueble o comercio. Las formas de pago pueden ser:
          <ul className='list-inside list-disc'>
            <li>Anual o semestral.</li>
            <li>Pago anual y primer semestre vencen en el mes de marzo.</li>
            <li>Pago del segundo semestre vence en el mes de julio.</li>
            <li>Mensual. El pago vence el último día hábil de cada mes.</li>
          </ul>
        </p> */}
      </div>
      <div className='bg-[#9747FF] absolute -bottom-30 w-full h-20 rounded-br-full lg:flex lg:items-center lg:justify-center'>
        <div className='container mx-auto'>
          <ButtonBack />
        </div>
      </div>
    </div>
  )
}

export default DestacadoBoletas
