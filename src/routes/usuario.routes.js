const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const {validarJWT} = require('../Middlewares/auth.Middleware');
const {esAdminRole} = require('../Middlewares/role.Middleware');
const {validarCampos} = require ('../Middlewares/validate.middleware');
const {crearUsuarioValidator} = require ('../validators/usuarios.validator');

// Rutas para el recurso de Usuarios
router.post('/', [
    validarJWT,
    esAdminRole,
    crearUsuarioValidator,
    validarCampos], 
    usuarioController.crear);
router.get('/',[
    validarJWT,
    esAdminRole
], usuarioController.listar);

module.exports = router;