const formatDate = (fechaHoraISO) => {
  const options = {
    weekday: 'long', // Nombre completo del día de la semana
    year: 'numeric', // Año en formato numérico
    month: 'long', // Nombre completo del mes
    day: 'numeric', // Día del mes en formato numérico
    hour: '2-digit', // Hora en formato de 2 dígitos
    minute: '2-digit' // Minutos en formato de 2 dígitos
  }

  const dateObject = new Date(fechaHoraISO)
  const formatedDate = dateObject.toLocaleDateString('es-ES', options)

  return `${capitalizeFirstLetter(formatedDate)}`
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default formatDate
