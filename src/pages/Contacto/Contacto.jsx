import React from 'react'
// import { DataTable } from 'primereact/datatable'
// import { Column } from 'primereact/column'
// import { FilterMatchMode } from 'primereact/api'
// import { InputText } from 'primereact/inputtext'

const Contacto = () => {
//   //   const [loading, setLoading] = useState(false)
//   const [customers, setCustomers] = useState(null)
//   const [filters, setFilters] = useState({
//     global: { value: null, matchMode: FilterMatchMode.CONTAINS },
//     name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
//     'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
//     representative: { value: null, matchMode: FilterMatchMode.IN },
//     status: { value: null, matchMode: FilterMatchMode.EQUALS },
//     verified: { value: null, matchMode: FilterMatchMode.EQUALS }
//   })
//   const [globalFilterValue, setGlobalFilterValue] = useState('')

  //   const onGlobalFilterChange = (e) => {
  //     const value = e.target.value
  //     const _filters = { ...filters }

  //     _filters.global.value = value

  //     setFilters(_filters)
  //     setGlobalFilterValue(value)
  //   }

  //   const renderHeader = () => {
  //     return (
  //       <div className='flex justify-content-end'>
  //         <span className='p-input-icon-left'>
  //           <i className='pi pi-search' />
  //           <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder='Keyword Search' />
  //         </span>
  //       </div>
  //     )
  //   }

  //   const countryBodyTemplate = (rowData) => {
  //     return (
  //       <div className='flex align-items-center gap-2'>
  //         <img alt='flag' src='https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png' className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
  //         <span>{rowData.country.name}</span>
  //       </div>
  //     )
  //   }

  //   const representativeBodyTemplate = (rowData) => {
  //     const representative = rowData.representative

  //     return (
  //       <div className='flex align-items-center gap-2'>
  //         {/* <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width='32' /> */}
  //         <span>{representative.name}</span>
  //       </div>
  //     )
  //   }

  //   const header = renderHeader()
  //   useEffect(() => {
  //     setCustomers([
  //       {
  //         name: 'fede',
  //         country: {
  //           name: 'Argentina'
  //         },
  //         company: 'Municipalidad',
  //         representative: {
  //           name: 'Federico Saul Valdez'
  //         }
  //       },
  //       {
  //         name: 'Nahuel',
  //         country: {
  //           name: 'Brazil'
  //         },
  //         company: 'Municipalidad',
  //         representative: {
  //           name: 'Federico Saul Valdez'
  //         }
  //       },
  //       {
  //         name: 'Facundo',
  //         country: {
  //           name: 'Camerun'
  //         },
  //         company: 'Municipalidad',
  //         representative: {
  //           name: 'Federico Saul Valdez'
  //         }
  //       }
  //     ])
  //   }, [])

  return (
    <div>
      <div className='container mx-auto pt-32 w-[20rem] lg:w-full flex flex-col gap-4 lg:gap-3'>
        {/* TITULO */}
        <h1 className='text-[#D85B35] font-extrabold text-3xl'>CONTACTO</h1>
        <p className='font-semibold'>Queremos brindarte la mejor atención, podés elegir distintos canales para comunicarte con nosotros.
          Atendemos las 24 hs. via WhatsApp y con operadores municipales en todos los canales todos los días de 07:00 a 00:00 hs, viernes y sábados hasta las 02:00 y los domingos a las 00:30
        </p>
        {/* WSP */}
        <h2 className='font-bold lg:text-2xl'>WhatsApp</h2>
        <p className='font-semibold'>Nuestro número de atención es 2645260000 . Por ahora solo atendemos por escrito, no llamadas ni audios. Escribir ahora </p>
        <h2 className='font-bold lg:text-2xl'>Linea telefónica 147</h2>
        <p className='font-semibold'>Gratis para teléfonos fijos y móviles desde adentro de Capital. Llamar ahora.</p>
        {/* SECCION INFO  CONTACTO */}
        <div className='grid grid-cols- md:flex-col lg:grid-cols-2 gap-6 '>
          <div className='bg-gray-100 p-4 rounded-md'>
            <h1 className='font-extrabold h-12 lg:text-2xl'>Alumbrado Público</h1>
            <p className='text-sm'>Por alumbrado público las 24 horas a Nacusi Construcciones S.R.L. al teléfono gratuito 0800 222 5866 o bien al 428 3337 o 428 3767</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-md'>
            <h1 className='font-extrabold h-12 lg:text-2xl'>Playa de Remoción de Vehículos</h1>
            <p className='text-sm'>Para saber si un vehículo fue removido, puedes comunicarte al teléfono 4309642 / 4274441.</p>
          </div>
        </div>
        {/* TABLA
        <h1 className='text-[#8A43EF] font-extrabold text-[1rem]'>BUSCADOR TELEFÓNICO MUNICIPAL</h1>
        <div className='card'>
          <DataTable
            value={customers} paginator rows={10} dataKey='id' filters={filters} filterDisplay='row' // loading={loading}
            globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage='No customers found.'
          >
            <Column field='name' header='Name' filterPlaceholder='Search by name' style={{ minWidth: '12rem' }} />
            <Column header='Country' filterField='country.name' style={{ minWidth: '12rem' }} body={countryBodyTemplate} filterPlaceholder='Search by country' />
            <Column header='Agent' filterField='representative' showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }} body={representativeBodyTemplate} />
          </DataTable>
        </div> */}
      </div>
    </div>
  )
}

export default Contacto
