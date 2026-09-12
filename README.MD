# API de Micro-Mundos Creativos

## Oráculo de Criaturas Emocionales

API REST desarrollada con Node.js, Express y TypeScript.

El proyecto representa un pequeño universo de criaturas asociadas a diferentes emociones. Cada criatura tiene características como nombre, emoción, descripción, nivel de intensidad, hábitat y estado.

La API permite listar, buscar, crear, actualizar y eliminar criaturas mediante peticiones HTTP.

---

## Repositorio

GitHub:

https://github.com/juanessvargas/api-micro-mundos

---

## Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- dotenv
- Thunder Client
- Git
- GitHub

---

## Estructura del proyecto

```text
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
```

---

## Instalación

Instalar las dependencias del proyecto:

```bash
npm install
```

---

## Ejecutar el proyecto en desarrollo

```bash
npm run dev
```

El servidor se ejecuta por defecto en:

http://localhost:3000

---

## URL de la API

Con el servidor ejecutándose mediante `npm run dev`, se puede consultar la API desde:

### Ver todas las criaturas

http://localhost:3000/api/criaturas

### Ver una criatura por ID

Ejemplo:

http://localhost:3000/api/criaturas/1

### Verificar que el servidor está funcionando

http://localhost:3000/api/salud

Estas URLs funcionan localmente mientras el servidor se encuentre ejecutándose.

---

## Compilar TypeScript

```bash
npm run build
```

Este comando compila los archivos TypeScript y genera los archivos JavaScript dentro de la carpeta `dist`.

---

## Ejecutar la versión compilada

```bash
npm start
```

---

# Endpoints

## Estado del servidor

### GET /api/salud

Permite comprobar que la API se encuentra funcionando.

Ejemplo:

```text
GET http://localhost:3000/api/salud
```

Código de estado esperado:

```text
200 OK
```

---

## Listar todas las criaturas

### GET /api/criaturas

Devuelve todas las criaturas almacenadas en memoria.

Ejemplo:

```text
GET http://localhost:3000/api/criaturas
```

Código de estado esperado:

```text
200 OK
```

También es posible filtrar las criaturas por emoción utilizando un query parameter.

Ejemplo:

```text
GET http://localhost:3000/api/criaturas?emocion=miedo
```

---

## Obtener una criatura por ID

### GET /api/criaturas/:id

Ejemplo:

```text
GET http://localhost:3000/api/criaturas/1
```

Código de estado esperado:

```text
200 OK
```

Si la criatura no existe, la API responde:

```text
404 Not Found
```

---

## Crear una criatura

### POST /api/criaturas

Ejemplo:

```text
POST http://localhost:3000/api/criaturas
```

Body JSON:

```json
{
  "nombre": "Eco",
  "emocion": "miedo",
  "descripcion": "Aparece cuando una preocupación vuelve una y otra vez.",
  "nivelIntensidad": 5,
  "habitat": "pasillos vacios",
  "estado": "oculta"
}
```

Código de estado esperado:

```text
201 Created
```

El ID de la nueva criatura es generado automáticamente por la API.

---

## Actualizar una criatura

### PUT /api/criaturas/:id

Ejemplo:

```text
PUT http://localhost:3000/api/criaturas/1
```

Body JSON:

```json
{
  "estado": "dormida",
  "nivelIntensidad": 3
}
```

Código de estado esperado:

```text
200 OK
```

---

## Eliminar una criatura

### DELETE /api/criaturas/:id

Ejemplo:

```text
DELETE http://localhost:3000/api/criaturas/1
```

Código de estado esperado:

```text
204 No Content
```

---

# Middlewares

La API utiliza middlewares para separar responsabilidades dentro del servidor.

## requestId

Genera un identificador único para cada petición.

También agrega el identificador al header:

```text
X-Request-Id
```

---

## logger

Registra en la terminal información de cada petición realizada a la API.

Incluye información como:

- método HTTP
- ruta
- código de estado
- requestId
- duración de la petición

---

## errorHandler

Centraliza el manejo de errores de la aplicación y devuelve respuestas HTTP comprensibles.

---

# Manejo de errores

La API utiliza una clase `ApiError` para manejar errores controlados.

Algunos códigos utilizados son:

```text
400 Bad Request
```

Se utiliza cuando los datos enviados no cumplen con la información requerida.

```text
404 Not Found
```

Se utiliza cuando una criatura o una ruta no existe.

```text
500 Internal Server Error
```

Se utiliza para errores inesperados del servidor.

---

# Validación de entrada

Antes de crear una criatura, la API comprueba que existan los campos obligatorios.

Por ejemplo, una petición incompleta puede recibir:

```json
{
  "error": "nombre, emocion, descripcion, habitat y estado son obligatorios"
}
```

con código:

```text
400 Bad Request
```

---

# Pruebas manuales

Las pruebas de la API fueron realizadas manualmente utilizando Thunder Client.

Se probaron las operaciones:

```text
GET
POST
PUT
DELETE
```

También se comprobaron respuestas de error `400` y `404`.

Todos los ejemplos de request y response se encuentran documentados en:

```text
requests.md
```

---

# Persistencia

La API utiliza un arreglo en memoria y no utiliza una base de datos.

Esto significa que las operaciones realizadas mediante `POST`, `PUT` o `DELETE` se mantienen mientras el servidor se encuentre ejecutándose.

Cuando el servidor se reinicia, los datos vuelven a su estado inicial.