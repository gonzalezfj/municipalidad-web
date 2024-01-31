import React from 'react'
import ButtonAtras from '../components/Default/ButtonAtras'

export const Obleas = () => {
    return (
        <div className='w-full'>
            <div className='container flex flex-col gap-2'>
                <h1 className='font-bold text-2xl text-purple-800'>OBLEAS DE ESTACIONAMIENTO</h1>
                <p className='font-semibold text-neutral-600 text-xl'>Destinadas a personas con discapacidad, medios de prensa y carga y descarga de mercadería.</p>
                <h1 className='text-2xl text-purple-800'>MEDIOS DE PRENSA</h1>
                <p className='font-semibold text-orange-500'>Obleas destinadas a facilitar la labor de los medios de prensa en la Ciudad de San Juan.</p>
                <hr />
                <h1 className='text-2xl font-bold text-purple-800'>PERSONAS CON DISCAPACIDAD</h1>
                <p className='font-semibold text-orange-500'>Obleas de estacionamiento para personas con Certificado Único de Discapacidad.</p>
                <hr />
                <h1 className='text-2xl text-purple-800'>CARGA Y DESCARGA DE MERCADERÍA</h1>
                <p className='font-semibold text-orange-500'>Solicitud de habilitación de oblea de carga y descarga de mercadería. </p>
                <p className='font-semibold text-purple-500'>Es necesario contar con un permiso previamente gestionado en el edificio municipal</p>
                <div className='p-2 items-center justify-center'>
                    <ButtonAtras />
                </div>
            </div>
        </div>
    )
}
