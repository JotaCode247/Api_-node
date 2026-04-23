#  Estructura Profesional de un Api en Node.js

api-node
    |-src **Aqui vive todo el codigo real del proyecto**
            |-config : **Configuracion globales**
            |-controllers : **Controla las peticiones HTTP**
            |-Middlewares **Intermedarios de seguridad y validaciones**
            |models : **Representa las tablas de la base de datos**
            |-routes : **Define las URL de la API**
            |Services : **Logica del negocio**
            |utils: **Funciones reutilizables**
            |app.js : **Configuracion de la aplicacion**
            |server.js : **Punto de arranque**
    |-.env **variables de entorno**


## Inicializar  un Proyecto

```npm init -y```

## Instalar express :
```npm install express ```

## probar app.js
lo ejecutamos en la terminal
```node app.js ```
```en elnavegador http://localhost:3000```
```terminar ejecuccion del servidor  **ctrl+c**```




