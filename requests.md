# Pruebas manuales — API de Micro-Mundos Creativos

Las siguientes pruebas fueron realizadas manualmente utilizando Thunder Client.

---

## 1. Verificar estado del servidor

Método: GET

Endpoint:

http://localhost:3000/api/salud

Respuesta:

{
  "estado": "ok",
  "requestId": "id-generado-automaticamente"
}

Código de estado:

200 OK

---

## 2. Listar todas las criaturas

Método: GET

Endpoint:

http://localhost:3000/api/criaturas

Código de estado:

200 OK

La respuesta devuelve el total de criaturas, el arreglo de criaturas y el requestId.

---

## 3. Obtener una criatura por ID

Método: GET

Endpoint:

http://localhost:3000/api/criaturas/1

Código de estado:

200 OK

La respuesta devuelve únicamente la criatura correspondiente al ID solicitado.

---

## 4. Buscar una criatura inexistente

Método: GET

Endpoint:

http://localhost:3000/api/criaturas/999

Respuesta:

{
  "error": "Criatura con id 999 no encontrada"
}

Código de estado:

404 Not Found

---

## 5. Crear una criatura

Método: POST

Endpoint:

http://localhost:3000/api/criaturas

Body JSON:

{
  "nombre": "Eco",
  "emocion": "miedo",
  "descripcion": "Aparece cuando una preocupación vuelve una y otra vez.",
  "nivelIntensidad": 5,
  "habitat": "pasillos vacios",
  "estado": "oculta"
}

Código de estado:

201 Created

La API genera automáticamente el ID de la nueva criatura.

---

## 6. Probar validación de entrada

Método: POST

Endpoint:

http://localhost:3000/api/criaturas

Body JSON:

{
  "nombre": "Criatura incompleta"
}

Respuesta:

{
  "error": "nombre, emocion, descripcion, habitat y estado son obligatorios"
}

Código de estado:

400 Bad Request

---

## 7. Actualizar una criatura

Método: PUT

Endpoint:

http://localhost:3000/api/criaturas/1

Body JSON:

{
  "estado": "dormida",
  "nivelIntensidad": 3
}

Código de estado:

200 OK

La respuesta devuelve la criatura con los campos actualizados.

---

## 8. Eliminar una criatura

Método: DELETE

Endpoint:

http://localhost:3000/api/criaturas/1

Código de estado:

204 No Content

La respuesta no contiene body.

Después se comprobó la eliminación realizando:

GET http://localhost:3000/api/criaturas/1

Respuesta:

{
  "error": "Criatura con id 1 no encontrada"
}

Código de estado:

404 Not Found