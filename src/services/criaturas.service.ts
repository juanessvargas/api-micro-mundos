import { criaturas } from "../data/criaturas";
import {
  ActualizarCriatura,
  Criatura,
  Emocion,
  NuevaCriatura
} from "../tipos";
import { ApiError } from "../apiError";

let siguienteId = criaturas.length + 1;

export function listarCriaturas(emocion?: Emocion): Criatura[] {
  if (!emocion) return criaturas;

  return criaturas.filter(
    (criatura) => criatura.emocion === emocion
  );
}

export function obtenerCriaturaPorId(id: number): Criatura {
  const criatura = criaturas.find(
    (criatura) => criatura.id === id
  );

  if (!criatura) {
    throw new ApiError(
      404,
      `Criatura con id ${id} no encontrada`
    );
  }

  return criatura;
}

export function crearCriatura(datos: NuevaCriatura): Criatura {
  if (
    !datos.nombre ||
    !datos.emocion ||
    !datos.descripcion ||
    !datos.habitat ||
    !datos.estado
  ) {
    throw new ApiError(
      400,
      "nombre, emocion, descripcion, habitat y estado son obligatorios"
    );
  }

  const nuevaCriatura: Criatura = {
    id: siguienteId,
    ...datos
  };

  siguienteId += 1;

  criaturas.push(nuevaCriatura);

  return nuevaCriatura;
}

export function actualizarCriatura(
  id: number,
  cambios: ActualizarCriatura
): Criatura {
  const criatura = obtenerCriaturaPorId(id);

  const actualizada: Criatura = {
    ...criatura,
    ...cambios,
    id: criatura.id
  };

  const indice = criaturas.findIndex(
    (criatura) => criatura.id === id
  );

  criaturas[indice] = actualizada;

  return actualizada;
}

export function eliminarCriatura(id: number): void {
  const indice = criaturas.findIndex(
    (criatura) => criatura.id === id
  );

  if (indice === -1) {
    throw new ApiError(
      404,
      `Criatura con id ${id} no encontrada`
    );
  }

  criaturas.splice(indice, 1);
}