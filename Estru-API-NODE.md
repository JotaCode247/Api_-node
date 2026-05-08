# 🚀 Estructura Profesional de una API en Node.js

Guía base para crear una API REST profesional usando:

- Node.js
- Express
- Sequelize
- MySQL/PostgreSQL
- JWT
- Middlewares de seguridad

---

# 📁 Estructura Profesional del Proyecto

```txt
api-node/
│
├── src/                                # Aquí vive todo el código real del proyecto
│
│   ├── config/                         # Configuraciones globales
│   │   └── database.js
│   │
│   ├── controllers/                   # Controla las peticiones HTTP
│   │
│   ├── middlewares/                   # Seguridad, validaciones e interceptores
│   │
│   ├── models/                        # Representa las tablas de la BD
│   │
│   ├── routes/                        # Define las URLs/endpoints
│   │
│   ├── services/                      # Lógica del negocio
│   │
│   ├── utils/                         # Funciones reutilizables
│   │
│   ├── app.js                         # Configuración principal de Express
│   │
│   └── server.js                      # Punto de arranque del servidor
│
├── .env                               # Variables de entorno
│
├── .gitignore
│
├── package.json
│
└── README.md
```

---

# ⚙️ Inicializar el Proyecto

## Crear proyecto Node.js

```bash
npm init -y
```

Esto genera automáticamente el archivo:

```txt
package.json
```

---

# 📦 Instalar Express

```bash
npm install express
```

---

# 🗄️ Instalar Dependencias Principales

```bash
npm install dotenv sequelize mysql2 pg pg-hstore
```

---

# 📚 ¿Para Qué Sirve Cada Dependencia?

| Dependencia | Función |
|---|---|
| express | Framework backend para Node.js |
| dotenv | Manejo de variables de entorno |
| sequelize | ORM para bases de datos |
| mysql2 | Driver para MySQL |
| pg | Driver para PostgreSQL |
| pg-hstore | Soporte PostgreSQL para Sequelize |

---

# ▶️ Ejecutar la Aplicación

## Probar `app.js`

```bash
node app.js
```

## Abrir en el navegador

```txt
http://localhost:3000
```

## Detener el servidor

```txt
CTRL + C
```

---

# 📄 Configuración Recomendada de package.json

```json
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  },
{
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
}
```

---

# 🚀 Ejecutar el Proyecto

Después de configurar el script `"start"`:

```bash
npm start
npm run dev
```

---

#  Arquitectura por Capas

---

## 📌 Models

Representan las tablas de la base de datos.

### Ejemplo de ruta

```txt
src/models/usuarios.model.js
```

### Responsabilidades

- Estructura de tablas
- Tipos de datos
- Relaciones
- Validaciones básicas

---

## Services

Contienen la lógica del negocio.

### Ejemplo de ruta

```txt
src/services/usuarios.service.js
```

### Responsabilidades

- Procesos internos
- Reglas del sistema
- Validaciones complejas
- Consultas
- Transformación de datos

---

## 📌 Controllers

Reciben las peticiones HTTP y devuelven respuestas.

### Ejemplo de ruta

```txt
src/controllers/usuarios.controller.js
```

### Responsabilidades

- Recibir `req`
- Procesar parámetros
- Llamar services
- Retornar `res.json()`

---

## 📌 Routes

Definen las rutas/endpoints de la API.

### Ejemplo de ruta

```txt
src/routes/usuarios.routes.js
```

### Ejemplo

```txt
GET     /usuarios
POST    /usuarios
PUT     /usuarios/:id
DELETE  /usuarios/:id
```

---

#  Seguridad y Middlewares

## Crear carpeta de middlewares

```txt
src/middlewares/
```
---
## Credenciales
```txt
JWT_SECRET=mi_clave
SUPERADMIN_EMAIL=juanMoreno@education.com
SUPERADMIN_PASSWORD=Admin123*
```

---

# Dependencias de Seguridad

```bash
npm install bcryptjs jsonwebtoken cors helmet morgan express-validator express-rate-limit
```

---
# dependencias de desarrollo:
```txt
  npm install -D nodemon
```


---

# ¿Para Qué Sirve Cada Librería?

| Librería | Función |
|---|---|
| bcryptjs | Encriptar contraseñas |
| jsonwebtoken | Autenticación JWT |
| cors | Permitir conexiones externas |
| helmet | Cabeceras de seguridad |
| morgan | Logs HTTP |
| express-validator | Validar datos |
| express-rate-limit | Limitar peticiones |

---

# 🔄 Flujo Profesional de una API

```txt
Cliente
   ↓
Routes
   ↓
Middlewares
   ↓
Controllers
   ↓
Services
   ↓
Models
   ↓
Base de Datos
```

---

# 🧩 Ejemplo de Flujo Real

## Endpoint

```http
POST /usuarios
```

## Flujo

```txt
1. Route recibe la petición
2. Middleware valida seguridad/datos
3. Controller recibe req.body
4. Service aplica lógica
5. Model interactúa con la BD
6. Response retorna datos
```

---

# 🔑 Variables de Entorno (.env)

## Ejemplo

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=123456
DB_NAME=api_db

JWT_SECRET=mi_clave_super_secreta
```

---

# 🚫 .gitignore Recomendado

```gitignore
node_modules/
.env
```

---

# 🏗️ Estructura Profesional Recomendada (Resumen)

```txt
src/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
├── app.js
└── server.js
```

---

# 💡 Tecnologías Más Usadas en APIs Node.js

| Tecnología | Uso |
|---|---|
| Node.js | Runtime backend |
| Express | Framework backend |
| Sequelize | ORM |
| MySQL | Base de datos |
| PostgreSQL | Base de datos |
| JWT | Autenticación |
| bcrypt | Hash de contraseñas |
| dotenv | Variables de entorno |

---

# 📦 Instalación Completa Inicial

```bash
npm init -y

npm install express dotenv sequelize mysql2 pg pg-hstore

npm install bcryptjs jsonwebtoken cors helmet morgan express-validator express-rate-limit
```

---

# ✅ Buenas Prácticas Profesionales

- Separar responsabilidades por capas
- Nunca poner lógica compleja en routes
- Nunca conectar la BD directamente desde controllers
- Usar variables de entorno
- Encriptar contraseñas
- Validar siempre los datos de entrada
- Manejar errores centralizadamente
- Usar middlewares de autenticación
- Mantener código modular y escalable

---

# 🎯 Resultado Final

Con esta estructura tendrás una API:

✅ Escalable  
✅ Modular  
✅ Fácil de mantener  
✅ Profesional  
✅ Lista para proyectos reales
