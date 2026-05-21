const {body}= require('express-validator');
const crearUsuarioValidator = [
    body('nombre')
    .notEmpty()
    .withMessage('Nombre requerido'),
    body('apellido')
    .notEmpty()
    .withMessage('apellido requerido'),
    body('correo')
    .isEmail()
    .withMessage('correo invalido'),
    body('password')
    .isLength({min:6})
    .withMessage('password minimo 6 caracteres')

];

module.exports = {
    crearUsuarioValidator
};
