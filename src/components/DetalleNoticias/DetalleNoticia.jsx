import React from 'react'
import { NoticiasRelacionadas } from './NoticiasRelacionadas'
import img from '../../assets/home_seccion4_noticiaPirotecnia.jpg'

export const DetalleNoticia = () => {
    return (
        <div className='container'>
            <div className='p-8 rounded-t-lg'>
                <img className='rounded-t-lg pb-2' src={img} alt="" />
                <h5 className=''>Jueves 21 Diciembre 2024</h5>
                <h1 className='font-bold text-2xl text-roommn '>Pirotecnia Cero en la Ciudad de San Juan</h1>
                <p className=''>
                    En un esfuerzo por garantizar la seguridad y el bienestar de los residentes de la Ciudad de San Juan, el gobierno municipal ha anunciado que la ordenanza que prohíbe la venta de pirotecnia continúa vigente. <br />Esta medida tiene como objetivo principal resguardar la salud de las personas con autismo y de las queridas mascotas durante las festividades de fin de año y otras ocasiones especiales.
                    La ordenanza, establece una serie de medidas estrictas para disuadir la venta y el uso de productos pirotécnicos en el área urbana de la Ciudad San Juan. El incumplimiento de estas disposiciones resultará en severas sanciones para los infractores.
                    <br />
                    Una de las medidas más destacadas de la ordenanza es la imposición de multas significativas a quienes violan la prohibición. Los infractores se enfrentarán a multas que oscilan entre trescientos (300) y seiscientos (600) litros de nafta, lo que refleja la gravedad con la que el municipio se toma esta cuestión.
                    <br />
                    Además de las multas económicas, la ordenanza también establece el decomiso del material de pirotecnia en manos de infractores, lo que busca eliminar cualquier incentivo para el incumplimiento de la ley.
                    <br />
                    Para garantizar un cumplimiento efectivo, se contempla la inhabilitación automática de los establecimientos que vendan pirotecnia ilegal y la clausura temporal o definitiva de los locales infractores.
                    <br />
                    Para asegurarse de que la ordenanza se cumpla a cabalidad, el municipio ha anunciado un aumento en las operaciones de control y vigilancia durante la temporada de festividades. Equipos de inspectores municipales serán los encargados de monitorear la venta y el uso de pirotecnia, y tomarán medidas inmediatas contra aquellos que la utilicen de manera indebida.
                </p>
            </div>
            {/* BUSCAR NOTICIAS*/}
            <div className='p-4'>
                <label className=''>Buscar Noticias</label>
                <input className='bg-fifth rounded-lg' type="text" />
            </div>
            <div className=''>
                <h2 className=''>NOTICIAS RELACIONADAS</h2>
                {/* COMPONENTE */}
                <NoticiasRelacionadas />
            </div>
        </div>
    )
}
