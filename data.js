
const cursos = {
  "I": [
    { id: "BIO-002", nombre: "Biología Celular", requisitos: [] },
    { id: "QUI-001", nombre: "Química General", requisitos: [] },
    { id: "MAT-015", nombre: "Principios Matemáticos", requisitos: [] },
    { id: "ENF-079", nombre: "Persona y Sentido", requisitos: [] }
  ],
  "II": [
    { id: "QUI-002", nombre: "Química Orgánica", requisitos: ["QUI-001"] },
    { id: "FIS-002", nombre: "Biofísica", requisitos: ["MAT-015"] },
    { id: "TME-068", nombre: "Tecnología Médica Introducción", requisitos: [] }
  ],
  "III": [
    { id: "BIO-003", nombre: "Fisiología", requisitos: ["BIO-002"] },
    { id: "TME-143", nombre: "Inmunología Básica", requisitos: ["BIO-002"] },
    { id: "TME-064", nombre: "Bioseguridad", requisitos: [] }
  ]
  // Continúa en desarrollo
};
