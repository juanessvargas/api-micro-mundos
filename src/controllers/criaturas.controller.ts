import { Request, Response, NextFunction } from "express";
import * as criaturasService from "../services/criaturas.service";
import { Emocion } from "../tipos";
import { ApiError } from "../apiError";

export function listar(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const emocion = req.query.emocion as Emocion | undefined;

    const resultado = criaturasService.listarCriaturas(emocion);

    res.json({
      total: resultado.length,
      criaturas: resultado,
      requestId: req.id
    });
  } catch (error) {
    next(error);
  }
}

export function obtenerPorId(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      throw new ApiError(
        400,
        `"${req.params.id}" no es un id válido`
      );
    }

    const criatura = criaturasService.obtenerCriaturaPorId(id);

    res.json({
      criatura,
      requestId: req.id
    });
  } catch (error) {
    next(error);
  }
}

export function crear(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const nuevaCriatura =
      criaturasService.crearCriatura(req.body);

    res.status(201).json({
      criatura: nuevaCriatura,
      requestId: req.id
    });
  } catch (error) {
    next(error);
  }
}

export function actualizar(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      throw new ApiError(
        400,
        `"${req.params.id}" no es un id válido`
      );
    }

    const actualizada =
      criaturasService.actualizarCriatura(id, req.body);

    res.json({
      criatura: actualizada,
      requestId: req.id
    });
  } catch (error) {
    next(error);
  }
}

export function eliminar(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      throw new ApiError(
        400,
        `"${req.params.id}" no es un id válido`
      );
    }

    criaturasService.eliminarCriatura(id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
}