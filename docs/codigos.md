# Código de respuesta de la api
Las respuestas puede traer más parámetros extras, como información del usuario.
## Codigo sin errores.
#### 200: OK
No hubo ningún problema.
```json
{
	"code": 200,
	"message": "Petición exitosa.",
  "description":"Mensaje extra"
}
```
#### 302: Found
No hubo ningún problema.
```json
{
	"code": 200,
	"message": "Encontrado: Se encontraron los recursos solicitados",
  "description":"Mensaje extra",
}
```
## Codigo con errores.
#### 400: Bad Request
**Error** tipo 400.
```json
{
	"code": 400,
	"message": "Petición incorrecta: Error interno",
  "description":"Mensaje extra",
}
```
#### 401: Unauthorized
**Error** No se tiene permiso de acceso
```json
{
	"code": 401,
	"message": "Sin autorización: Usted no tiene permisos para realizar la acción.",
  "description":"Mensaje extra."
}
```
#### 404: Not Found
**Error** No se encontró o no existe.
```json
{
	"code": 404,
	"message": "No encontrado: El recurso solicitado no fue encontrado.",
  "description":"Mensaje extra."
}
```
#### 406: Not Acceptable
**Error**, algo salió mal con validaciones o parámetros ingresados, ejemplo:
```json
{
	"code": 406,
	"message": "No aceptables: Los Parámetros enviados no son correctos o inválidos.",
  "description":"Mensaje extra."
}
```
#### 500: Internal Server Error
**Error**, error interno
```json
{
	"code": 406,
	"message": "Error interno del servidor.",
  "description":"Mensaje extra."
}
```
