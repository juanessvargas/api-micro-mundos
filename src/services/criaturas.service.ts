import { criaturas } from "../data/criaturas";
import { ActualizarCriatura, Criatura, NuevaCriatura } from "../tipos";

export function listarCriaturas(): Criatura[] {
  return criaturas;
}

export function obtenerCriaturaPorId(id: number): Criatura | undefined {
  return criaturas.find((criatura) => criatura.id === id);
}

export function crearCriatura(datos: NuevaCriatura): Criatura {
  const nuevoId =
    criaturas.length > 0
      ? Math.max(...criaturas.map((criatura) => criatura.id)) + 1
      : 1;

  const nuevaCriatura: Criatura = {
    id: nuevoId,
    ...datos
  };

  criaturas.push(nuevaCriatura);

  return nuevaCriatura;
}

export function actualizarCriatura(
  id: number,
  datos: ActualizarCriatura
): Criatura | undefined {
  const criatura = criaturas.find((criatura) => criatura.id === id);

  if (!criatura) {
    return undefined;
  }

  Object.assign(criatura, datos);

  return criatura;
}

export function eliminarCriatura(id: number): boolean {
  const indice = criaturas.findIndex((criatura) => criatura.id === id);

  if (indice === -1) {
    return false;
  }

  criaturas.splice(indice, 1);

  return true;
}