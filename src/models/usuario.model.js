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
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true // Validación extra de Sequelize
    }
  },
  password: { // añadir campo password
    type: DataTypes.STRING,
    allowNull: false,

  },
  rol: {
    type: DataTypes.ENUM('ADMIN', 'DOCENTE', 'ESTUDIANTE'),
    defaultValue: 'ESTUDIANTE'
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }

}, {
  tableName: 'usuarios',
  timestamps: true
});
//hey 
module.exports = Usuario;
