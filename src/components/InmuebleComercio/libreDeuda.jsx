import React from 'react'
import img1 from '../../assets/img temporal/img prueba video.jpg'
export const libreDeuda = () => {
    return (
        <div className='w-full'>
            <div className='container flex flex-col'>
                {/* TITULO */}
                <div className='bg-purple-700'>
                    <h1 className='text-2xl font-extrabold'>LIBRE DEUDA INMUEBLE Y COMERCIO</h1>
                </div>
                {/* TEXT Y IMG */}
                <div className=''>
                    <p>Para generar tu libre deuda de comercio o inmueble debés buscar en el generador de boletas si tenés deuda y en caso de que no tengas tendrás la opción de descargar el certificado.</p>
                    <div className=''>
                        <img src={img1} alt="" className='' />
                    </div>
                </div>
                {/* TEXT Y BUTTON */}
                <div className=''>
                    <h2 className='font-extrabold text-1xl'>Para obtener tus certificados de libre deuda de comercios o inmuebles.</h2>
                    <div className='grid grid-rows-2 gap-2'>
                        <button className=''>BTN 1 </button>
                        <button className=''>BTN 2</button>
                    </div>
                </div>
                {/* FINAL */}
                <div>
                    <p>Asimismo, podés consultar la autenticidad de los certificados de libre deuda municipal que recibes a través del siguiente enlace.</p>
                    <button>Autenticidad libre deuda</button>
                    <img src="" alt="" className='' />
                </div>
                {/* BUTTON BACK */}
                <div className=''>
                    <button className=''>BTN FINAL</button>
                </div>
            </div>
        </div>
    )
}
