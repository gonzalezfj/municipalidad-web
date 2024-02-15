
import img2 from '../../assets/gia_tramites_turnos_obleas/guíadeTramitesMobile_iconoRentas.svg'
import ButtonBack from '../Default/ButtonBack'
import img5 from '../../assets/Libre Deuda/LibreDeuda_fondo.svg'

export const EximicionPago = () => {
    return (
        <div className='w-full'>
            <div className='mx-auto gap-8 flex flex-col'>
                {/* TITLE */}
                <div className='hidden lg:block lg:absolute lg:top-0 lg:w-0 lg:h-0 lg:border-t-[75px] lg:border-t-[#FFC14F] lg:border-l-[75px] lg:border-l-[#FFC14F] lg:border-b-[75px] lg:border-b-transparent lg:border-r-[75px] lg:border-r-transparent' />
                <div className='bg-purple-700 h-44 lg:h-48 px-10 lg:w-full'>
                    <div className='pt-24 flex flex-col-2 gap-2 w-full items-center justify-center lg:items-center lg:justify-center lg:flex lg:pt-28'>
                        <div className='w-14'>
                            <img src={img2} alt="img not found" className='object-cover w-full' />
                        </div>
                        <h1 className='text-1xl font-extrabold text-white lg:items-center lg:justify-center lg:flex lg:w-1/3 lg:text-3xl'>EXIMICIÓN DE PAGO</h1>
                    </div>
                </div>
                {/* TEXT AND TITLE*/}
                <div className='lg:px-96 px-8 gap-4 flex flex-col text-[#3E3E3E]'>
                    <p className='text-[#3E3E3E] lg:text-[1rem] lg:w-3/5'>
                        Para ser eximido de pago de la contribución de inmuebles.
                        Los requisitos para solicitar la exención de la tasa sobre inmuebles son:
                    </p>
                    <h2 className='font-bold text-1xl'>Para jubilados/as que cobren la minima</h2>
                    <ul>
                        <li>1. Declaracion Jurada.</li>
                        <li>2. Fotocopia del DNI del titular o usufructuario</li>
                        <li>3. Datos del cónyuge: fotocopia del DNI y partida de matrimonio y/o defunción autenticada.</li>
                        <li>4. Informe del Registro de la Propiedad.</li>
                        <li>5. Fotocopia de recibo de sueldo del solicitante y su cónyuge (mes inmediato anterior a solicitud).</li>
                        <li>6. Fotocopia de 1 boleta de servicio (luz, gas, agua, teléfono).</li>
                        <li>7. Fotocopia de la escritura del inmueble o usufructo legal.</li>
                    </ul>
                    <h2 className='font-bold text-1xl'>Para instituciones</h2>
                    <ul>
                        <li>1. Nota dirigida al Intendente.</li>
                        <li>2. Fotocopia de DNI del firmante de la nota (autoridad vigente).</li>
                        <li>3. Estatuto social.</li>
                        <li>4. Certificado de personería jurídica vigente.</li>
                        <li>5. Acta designación de autoridades vigentes.</li>
                        <li>6. Informe del registro de la propiedad sobre: Titularidad del inmueble o usufructo legalmente constituido, nombre del solicitante.</li>
                        <li>7. Certificado de dirección de asociaciones sindicales.</li>
                        <li>8. Inscripción en el registro de mutualidades.</li>
                        <li>9. Inscripción para el registro de cultos.</li>
                    </ul>
                    <div className='relative z-0'>
                        <svg className='h-48 w-48 lg:h-60 lg:w-60 absolute lg:-right-64 -right-6 -top-[10px] lg:-top-[90px] rotate-180 scale-y-[-1]'>
                            <image href={img5} alt="img not found" className='w-auto lg:w-96 lg:h-full' />
                        </svg>
                    </div>
                </div>
                {/* BTN BACK */}
                <div className='lg:px-96 px-8 py-4 lg:-left-20'>
                    <div className='pt-10'>
                        <ButtonBack />
                    </div>
                </div>
            </div>
        </div>
    )
}


