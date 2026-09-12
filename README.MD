# API de Micro-Mundos Creativos

## Oráculo de Criaturas Emocionales

API REST desarrollada con Node.js, Express y TypeScript.

El proyecto representa un pequeño universo de criaturas asociadas a diferentes emociones. Cada criatura tiene características como nombre, emoción, descripción, intensidad, hábitat y estado.

La API permite listar, buscar, crear, actualizar y eliminar criaturas mediante peticiones HTTP.

---

## Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- dotenv
- Thunder Client
- Git y GitHub

---

## Estructura del proyecto

src/
├── controllers/
│   └── criaturas.controller.ts
├── data/
│   └── criaturas.ts
├── middlewares/
│   ├── errorHandler.ts
│   ├── logger.ts
│   └── requestId.ts
├── routes/
│   └── criaturas.routes.ts
├── services/
│   └── criaturas.service.ts
├── apiError.ts
├── app.ts
├── index.ts
└── tipos.ts

---

## Instalación

Clonar el repositorio e instalar las dependencias:

npm install

---

## Ejecutar el proyecto en desarrollo

npm run dev

El servidor se ejecuta por defecto en:

http://localhost:3000

---

## Compilar TypeScript

npm run build

Este comando compila los archivos TypeScript y genera la carpeta dist.

---

## Ejecutar la versión compilada

npm start

---

## Endpoints

### Estado del servidor

GET /api/salud

Permite comprobar que la API se encuentra funcionando.

---

### Listar criaturas

GET /api/criaturas

Devuelve todas las criaturas almacenadas en memoria.

También es posible filtrar por emoción utilizando un query parameter.

Ejemplo:

GET /api/criaturas?emocion=miedo

---

### Obtener criatura por ID

GET /api/criaturas/:id

Ejemplo:

GET /api/criaturas/1

---

### Crear criatura

POST /api/criaturas

Ejemplo de body:

{
  "nombre": "Eco",
  "emocion": "miedo",
  "descripcion": "Aparece cuando una preocupación vuelve una y otra vez.",
  "nivelIntensidad": 5,
  "habitat": "pasillos vacios",
  "estado": "oculta"
}

Código de respuesta esperado:

201 Created

---

### Actualizar criatura

PUT /api/criaturas/:id

Ejemplo:

PUT /api/criaturas/1

Body:

{
  "estado": "dormida",
  "nivelIntensidad": 3
}

Código de respuesta esperado:

200 OK

---

### Eliminar criatura

DELETE /api/criaturas/:id

Ejemplo:

DELETE /api/criaturas/1

Código de respuesta esperado:

204 No Content

---

## Middlewares

La API utiliza middlewares para separar responsabilidades.

### requestId

Genera un identificador único para cada petición y lo agrega al header X-Request-Id.

### logger

Registra en la terminal información de cada petición, como método, ruta, código de estado, requestId y duración.

### errorHandler

Centraliza el manejo de errores de la API y devuelve respuestas HTTP comprensibles.

---

## Manejo de errores

La API utiliza una clase ApiError para manejar errores controlados.

Algunos ejemplos:

- 400 Bad Request: datos de entrada incorrectos.
- 404 Not Found: criatura o ruta inexistente.
- 500 Internal Server Error: error inesperado del servidor.

---

## Pruebas manuales

Las pruebas manuales fueron realizadas utilizando Thunder Client.

Los ejemplos de GET, POST, PUT y DELETE se encuentran documentados en:

requests.md

---

## Persistencia

La API utiliza un arreglo en memoria.

Esto significa que los cambios realizados mediante POST, PUT o DELETE se mantienen mientras el servidor esté ejecutándose, pero se reinician cuando se vuelve a iniciar la aplicación.