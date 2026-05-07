#  Estructura Profesional de un Api en Node.js

api-node
    |-src **Aqui vive todo el codigo real del proyecto**
            |-config : **Configuracion globales**
                |database.js
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

## instalar otras dependencias en api.node
```npm install dotenv sequelize mysql2 pg pg-hstore```

## probar app.js
lo ejecutamos en la terminal
```node app.js ```
```en elnavegador http://localhost:3000```
```terminar ejecuccion del servidor  **ctrl+c**```

|.gitignore


`cambios en el package json`
```{
  "name": "api-node",
  "version": "1.0.0",
  "description": "",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "mysql2": "^3.22.2",
    "pg": "^8.20.0",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.37.8"
  }
}```

`se puede ejecutar ya con npm start`

`modelo(entidad usuario)`
```ruta--> src/models/usuarios.model.js```

```services(logica negocio)```
```ruta src/service.usuario```

```Controlador```
```ruta=> src/usuario.contoller.js```

# rutas
``src/routes/usuarios.routes.js``


