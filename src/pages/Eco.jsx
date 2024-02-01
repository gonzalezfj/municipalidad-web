import React from 'react'
import logoEco from '../assets/Eco-Icono-Blanco.svg'
import imgPlaystore from '../assets/ecoMobile_seccion2_botonPlaystore.svg'
import imgApplestore from '../assets/ecoMobile_seccion2_botonApplestore.svg'
import buttonAtras from '../assets/guiaDeTramitesMobile_botonAtras.svg'
import { useNavigate } from 'react-router'

const Eco = () => {
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0) // Esto debería llevar la vista al inicio de la página
  }
  return (
    <div className='top-0'>
      <div className='absolute px-5 flex items-center top-0 w-full h-64 bg-[#8A43EF] rounded-br-3xl'>
        <div className='container mx-auto flex'>
          <svg className='relative w-48 h-30'>
            <image className='w-[200px] lg:w-[210px] xl:w-[210px] 2xl:w-[210px]' href={logoEco} />
          </svg>
          <div className='w-46 flex flex-col mt-14 justify-center'>
            <div className='text-white md:text-xl font-extrabold'>ECO</div>
            <div className='text-white text-sm lg:text-base'>Estacionamiento Controlado</div>
          </div>
        </div>
      </div>
      <div className='flex lg:justify-center w-full h-96 text-center p-4 md:p-10 lg:p-7 xl:p-9 text-base lg:text-xl text-white items-end bg-[#D85B35] rounded-bl-3xl'>
        <p className='lg:px-40'>El centro de la Ciudad de San Juan cuenta con un servicio de estacionamiento controlado,
          denominado ECO, que regula el estacionamiento en el área de mayor flujo vehicular.
        </p>
      </div>
      <div className='lg:flex-col lg:flex lg:items-center'>
        <div className='lg:container'>
          <div className='p-7 text-[#616161]'>
            <h1 className='text-xl font-bold'>Descarga la app</h1>
            <p className='mt-2'>Puedes pagar a través de nuestra app para IOs y Android. La puedes descargar gratis desde las tiendas oficiales o bien haciendo clic acá:</p>
            <div className='flex gap-5 mt-3'>
              <svg className='bg-[#D85B35] rounded-full w-24 h-24'>
                <image className='w-24 h-24' href={imgPlaystore} />
              </svg>
              <svg className='bg-[#D85B35] rounded-full w-24 h-24'>
                <image className='w-24 h-24' href={imgApplestore} />
              </svg>
            </div>
          </div>
          <div className='p-7 text-[#616161]'>
            <h1 className='text-xl font-bold'>Horarios</h1>
            <p className='mt-2'>El Estacionamiento Controlado en la Ciudad de San Juan actualmente funciona de lunes
              a viernes de 07:00 a 13.00 hs y 17.00 a 21.00 hs, mientras que los sábados de 9.00 a 13.00 hs.
            </p>
          </div>
          <div className='p-7 text-[#616161]'>
            <h1 className='text-xl font-bold mb-2'>Zonas</h1>
            <p className='bg-[#FFBDAB] p-1'>Zona 1: $140 por hora ($112 por la aplicación)</p>
            <p className='bg-[#9EC0B5] p-1'>Zona 2: $105 por hora ($84 por la aplicación) </p>
            <p className='bg-[#EBD983] p-1'>Zona 3: $70 por hora ($56 por la aplicación)</p>
            <div className='flex items-center justify-center'>
              <iframe className='w-full h-80 lg:h-[60vh] lg:w-[60vw] mt-2' src='https://www.google.com/maps/d/embed?mid=1vMRbLNy00DMVwnFeR64NihzBEQ-Ky1ep&ehbc=2E312F' />
            </div>
          </div>
        </div>
        <div className='bg-[#8A43EF] p-7 lg:p-24 lg:px-52 text-white'>
          <h1 className='text-xl font-bold'>Turistas</h1>
          <p className='mt-2'>Los turistas que visiten nuestra provincia pueden solicitar una oblea para estacionamiento, ya sea en el hotel donde se hospeden (adherido a la cámara hotelera de San Juan), oficinas de ECO (Rivadavia 788 Este y la sede de Las Heras y Central) y Puntos de atención de Recargas y tarjetas recargables.
            Esta oblea le permitirá al turista estacionar sin costo alguno durante 48 horas, luego de las cuales deberá
            abonar normalmente el estacionamiento.
          </p>
          <h1 className='text-xl font-bold mt-2'>Pago anticipado de infracción por
            estacionamiento vencido
          </h1>
          <p className='mt-2'>Dentro de las 72 horas de labrada el acta, el usuario podrá pagar la multa de $1000 con el celular, aplicando el beneficio por pago anticipado.
            Si el inspector te dejó una advertencia de estacionamiento vencido puedes ingresar a la aplicación "Eco San Juan" (la misma que utilizas para estacionar) dentro de las 72 horas de labrada la multa, poder ingresar a la sección "Infracciones" donde vas a poder abonar digitalmente la infracción.
            Obtendrás un descuento de más del 50% sobre el precio de la infracción que luego deberás abonar en el juzgado.
          </p>
        </div>
        <div className='container'>
          <div className='p-7 text-[#616161]'>
            <h1 className='text-xl font-bold mt-2'>Remoción por grúa</h1>
            <p className='mt-2'>¿Tu vehículo fue removido por nuestras grúas?</p>
            <button onClick={() => handleClick('/playaderemocion')} className='mt-2 p-2 font-bold bg-[#FFC14F] rounded-xl'>PLAYA DE REMOCIÓN</button>
          </div>
          <div className='p-7 text-[#616161]'>
            <h1 className='text-xl font-bold'>Descargo por infracciones</h1>
            <p className='mt-2'>En caso de que desees efectuar descargos de infracciones de tránsito en línea.
              Para efectuar el descargo en línea deberá contar con el número de dominio de su vehículo (la patente) y una cuenta de correo electrónico. Es conveniente que cuente con el número de acta y la fecha.
            </p>
            <button className='mt-2 p-2 font-bold bg-[#FFC14F] rounded-xl'>EFECTUAR DESCARGO</button>
          </div>
        </div>
        <div className='p-7'>
          <button onClick={() => handleClick('/')}>
            <svg className='w-16 h-16'>
              <image className='w-full' href={buttonAtras} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Eco
