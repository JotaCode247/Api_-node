const usuarioService = require('../services/usuario.service');

const crear = async (req, res) => {
    try {
        // Corregido: req.body para obtener los datos del formulario/JSON
        const usuario = await usuarioService.crearUsuario(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listar = async (req, res) => {
    try {
        const usuarios = await usuarioService.listarUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

module.exports = {
    crear,
    listar
};