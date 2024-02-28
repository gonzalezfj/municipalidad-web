const slugify = (str) => {
  return String(str)
    .normalize('NFKD') // Divide los caracteres acentuados en sus caracteres base y marcas diacríticas
    .replace(/[^\w\s-]/g, '') // Elimina caracteres no alfanuméricos excepto espacios y guiones
    .trim() // Elimina espacios en blanco al principio y al final
    .toLowerCase() // Convierte a minúsculas
    .replace(/\s+/g, '-') // Reemplaza espacios con guiones
    .replace(/-+/g, '-') // Elimina guiones consecutivos
}

export default slugify
