const express = require('express');
const usuarioRoutes = require('./routes/usuario.routes');

const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
    res.send('ok -- API Funcionando correctamente');
});

// Exportar para que server.js lo use
module.exports = app;