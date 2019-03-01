#Endpoints

##Create {#create}
{% api "create", method="POST", url="/test" %}

### Parameters:
All you need
### Response:
**Para ver respuesta de errores ver los [codigos link](./codigos.md)**
#### 200:OK
```json
{
    "test": {
        "ALL YOU NEED":{
          "ALL YOU NEED"
        }
    },
    "code": 200,
    "message": "Petición exitosa.",
    "description": "Estamos trabajando..."
}
```
{% endapi %}
##Read {#read}
{% api "create", method="GET", url="/test" %}
### Parameters:
QUERY Parameters
### Response:
**Para ver respuesta de errores ver los [codigos link](./codigos.md)**
#### 200:OK
```json
{
    "test": {
        "ALL YOU NEED":{
          "ALL YOU NEED"
        }
    },
    "code": 200,
    "message": "Petición exitosa.",
    "description": "Estamos trabajando..."
}
```
{% endapi %}
##update {#update}
{% api "create", method="PATCH", url="/test/:pathParam" %}


### Parameters:
| Nombre          | Tipo    | Descripción                                         |
| :---------      | :------ | :-------------------------------------------------- |
| pathParam       | String  |  **requerido/required**   to test                   |
### Response:
**Para ver respuesta de errores ver los [codigos link](./codigos.md)**
#### 200:OK
```json
{
    "test": {
        "name": "name"
    },
    "pathParam": "823982398293",
    "code": 200,
    "message": "Petición exitosa.",
    "description": "Estamos trabajando..."
}
```
{% endapi %}
