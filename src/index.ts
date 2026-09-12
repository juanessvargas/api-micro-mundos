import "dotenv/config";
import { crearApp } from "./app";

const PUERTO = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = crearApp();

app.listen(PUERTO, () => {
  console.log(`API de criaturas escuchando en http://localhost:${PUERTO}`);
  console.log(`Prueba: curl http://localhost:${PUERTO}/api/criaturas`);
});