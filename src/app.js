const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./routes/auth.routers');

const usuarioRoutes = require('./routes/usuario.routes');

const app = express();
const limiter = rateLimit({windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Middlewares
app.use(express.json());
app.use('/api/auth',authRoutes);

// Rutas
app.use('/api/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
    res.send('ok -- API Funcionando correctamente');
});


module.exports = app;