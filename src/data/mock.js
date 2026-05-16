export const usuario = {
  nombre: "Carlos",
  apellido: "Mendoza",
  programa: "Ciencia de Datos",
  objetivo: "Transición de Análisis Financiero a Data Science",
  experiencia: "4 años en análisis financiero en BBVA",
  progreso: 12,
  racha: 5,
  siguienteModulo: "Fundamentos de Python para Analistas",
  tiempoEstimado: "18 min",
  fechaInicio: "16 de mayo, 2026",
  ruta: [
    { id: 1, titulo: "Fundamentos de Python", duracion: "3h en 2 semanas", completado: false, activo: true },
    { id: 2, titulo: "Estadística Aplicada", duracion: "4h en 2 semanas", completado: false, activo: false },
    { id: 3, titulo: "Visualización de Datos", duracion: "3h en 2 semanas", completado: false, activo: false },
    { id: 4, titulo: "Machine Learning Básico", duracion: "5h en 3 semanas", completado: false, activo: false },
    { id: 5, titulo: "SQL para Ciencia de Datos", duracion: "3h en 2 semanas", completado: false, activo: false },
    { id: 6, titulo: "Proyecto Final Integrador", duracion: "6h en 3 semanas", completado: false, activo: false },
  ],
  aristotelesIntro: [
    {
      tipo: "agente",
      texto: "Carlos, ya leí tu perfil.",
      delay: 0,
    },
    {
      tipo: "agente",
      texto: "Tienes 4 años en análisis financiero en BBVA y quieres moverte a Data Science. No empezamos desde cero — empezamos desde donde ya estás.",
      delay: 800,
    },
    {
      tipo: "agente",
      texto: "Tu ruta tiene 6 módulos. El primero te toma 3 horas distribuidas en 2 semanas. Micro-bloques de 15 a 20 minutos, cuando tú puedas.",
      delay: 1800,
    },
    {
      tipo: "agente",
      texto: "¿Cómo quieres arrancar?",
      delay: 2800,
    },
  ],
  respuestasRapidas: [
    "Empezamos ahora mismo",
    "Agendo mi primer bloque para mañana",
    "Cuéntame más sobre la ruta",
  ],
}

export const microBloque = {
  modulo: "Fundamentos de Python para Analistas",
  numero: 1,
  tiempoTotal: "18 min",
  pasos: [
    {
      tipo: "lectura",
      titulo: "¿Por qué Python y no Excel?",
      contenido: "Ya sabes analizar datos. Ya sabes qué pregunta hacerle a un dataset. Lo que Python te da es escala y velocidad — lo que en Excel tarda 40 minutos de fórmulas anidadas, en Python son 3 líneas.\n\nNo vas a reemplazar tu intuición financiera. La vas a potenciar.",
    },
    {
      tipo: "lectura",
      titulo: "Tu primer concepto: variables",
      contenido: "En Excel, una celda guarda un valor. En Python, una variable hace lo mismo — pero la puedes nombrar, reutilizar y operar con ella en cualquier parte del código.\n\nPiénsalo así:\n\n    ingresos = 150000\n    costos = 92000\n    margen = ingresos - costos\n\nLo que antes era =A1-B1, ahora tiene nombre. Eso cambia todo cuando el modelo crece.",
    },
    {
      tipo: "quiz",
      pregunta: "En el ejemplo anterior, ¿cuánto vale la variable 'margen'?",
      opciones: ["58,000", "242,000", "92,000"],
      correcta: 0,
      explicacion: "Correcto. 150,000 − 92,000 = 58,000. Tu intuición financiera ya funciona en Python.",
    },
  ],
}
