import { ErrorRequestHandler } from "express";
import { ApiError } from "../apiError";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ApiError) {
    res.status(error.statusCode).json({
      error: error.message
    });
    return;
  }

  console.error(error);

  res.status(500).json({
    error: "Error interno del servidor"
  });
};