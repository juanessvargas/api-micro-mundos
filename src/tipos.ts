export type Emocion =
  | "alegria"
  | "tristeza"
  | "miedo"
  | "ira"
  | "calma";

export type EstadoCriatura =
  | "activa"
  | "dormida"
  | "oculta";

export interface Criatura {
  id: number;
  nombre: string;
  emocion: Emocion;
  descripcion: string;
  nivelIntensidad: number;
  habitat: string;
  estado: EstadoCriatura;
}

export type NuevaCriatura = Omit<Criatura, "id">;

export type ActualizarCriatura = Partial<NuevaCriatura>;