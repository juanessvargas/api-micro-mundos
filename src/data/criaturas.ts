import { Criatura } from "../tipos";

export const criaturas: Criatura[] = [
  {
    id: 1,
    nombre: "Nimbo",
    emocion: "tristeza",
    descripcion: "Aparece cuando alguien guarda demasiado lo que siente.",
    nivelIntensidad: 7,
    habitat: "dias lluviosos",
    estado: "activa"
  },
  {
    id: 2,
    nombre: "Brasa",
    emocion: "ira",
    descripcion: "Crece cuando una persona acumula enojo sin expresarlo.",
    nivelIntensidad: 9,
    habitat: "lugares calurosos",
    estado: "activa"
  },
  {
    id: 3,
    nombre: "Luma",
    emocion: "alegria",
    descripcion: "Aparece en momentos pequeños que se sienten enormes.",
    nivelIntensidad: 8,
    habitat: "lugares luminosos",
    estado: "activa"
  },
  {
    id: 4,
    nombre: "Sombra",
    emocion: "miedo",
    descripcion: "Se esconde cerca cuando alguien teme enfrentarse a algo.",
    nivelIntensidad: 6,
    habitat: "rincones oscuros",
    estado: "oculta"
  },
  {
    id: 5,
    nombre: "Marea",
    emocion: "calma",
    descripcion: "Aparece cuando todo vuelve poco a poco a su equilibrio.",
    nivelIntensidad: 4,
    habitat: "lugares silenciosos",
    estado: "dormida"
  }
];