export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

export const data = [
  {
    fecha: "2023-11-30",
    personalDisponible: [
      {
        nombre: "Silvia Biana",
        horario: ["8:00- 12:00", "14:00 - 18:00"],
        id: "1",
      },
      {
        nombre: "Leanne Graham",
        horario: ["8:00- 12:00"],
        id: "2",
      },
      {
        nombre: "Ervin Howell",
        horario: ["12:00- 16:00"],
        id: "3",
      },
    ],
  },
  {
    fecha: "2023-12-01",
    personalDisponible: [
      {
        nombre: "Clementine Bauch",
        horario: ["8:00- 11:00"],
        id: "4",
      },
      {
        nombre: "Patricia Lebsack",
        horario: ["14:00 - 18:00"],
        id: "5",
      },
      {
        nombre: "Chelsey Dietrich",
        horario: ["12:00- 16:00"],
        id: "6",
      },
    ],
  },
];
