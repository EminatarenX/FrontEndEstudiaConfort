export function obtenerFecha (date) {
    const fecha = new Date(date)
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
      ];

    const dia = fecha.getDate()
    const mes = fecha.getMonth()
    const anio = fecha.getFullYear()

    return dia + ' de ' + meses[mes] + ' del ' + anio
}

export function obtenerNombreMes(numeroMes) {
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  return meses[numeroMes];
}

export function listaMeses() {
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
      ];
    
    return meses
}

export function obtenerUniversidades () {
  const universidades = [
    "Asociación Culinaria de México, A.C., Capítulo Suroeste",
    "Colegio Euro-mexicano de Chef y Sommelier",
    "Instituto Amado Nervo",
    "Instituto de Estudios Universitarios",
    "Instituto Tecnológico de Tuxtla Gutiérrez",
    "Maniquie",
    "Universidad Autónoma de Chiapas (UNACH)",
    "Universidad Autónoma de Guadalajara",
    "Universidad de Ciencias y Artes de Chiapas (UNICACH)",
    "Universidad del Sur",
    "Universidad del Valle de México (UVM)",
    "Universidad Pablo Guardado Chávez",
    "Universidad Pedagógica Nacional (UPN)",
    "Universidad Politécnica de Chiapas",
    "Universidad Salazar"
  ];
  

  return universidades
}