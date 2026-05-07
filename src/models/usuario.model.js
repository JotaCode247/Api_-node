const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Verifica que este archivo exista

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true // Validación extra de Sequelize
        }
    },
    // añadir campo password
}, {
    tableName: 'usuarios',
    timestamps: false,
});

module.exports = Usuario;