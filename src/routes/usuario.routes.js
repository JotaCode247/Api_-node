const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

// Rutas para el recurso de Usuarios
router.post('/', usuarioController.crear);
router.get('/', usuarioController.listar);

module.exports = router;