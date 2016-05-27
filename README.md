# Backend Cases

La aplicación requiere las siguientes adecuaciones para su segunda actualización

## Server

**Develop**
- Implementar un log de actividad en el servidor, que contenga: "Fecha","Referrer", "estado" y "método"
- Crear connexión con una base de datos **mongoose** local
- Optimizar servidor para compresion de archivos
- Implementar algun método de **seguridad HTTP**

## Database

**Develop**
- Antes de guardar el nuevo usuario la **contraseña debe ser encriptada.**
- Antes de guardar el nuevo usuario agregar un método personalizado para comparar las contraseñas

## APIs

**Develop**

- Generar **Middleware** que capture y haga un **log de la actividad de usuarios**
- Enlazar y usar **comparar password**(método personalizado) en API Login
- Generar un **método de autentificación**, ya sea token o cookie, el interesado podra usar cualquier metodo 
- API /product?example=genre&order=desc generar parametros dinamicos y responder con el parametro y orden

###### Contiene algunos errores
