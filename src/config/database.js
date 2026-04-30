const { Sequelize } = require('sequelize'); // Cambia sequelize por Sequelize
require('dotenv').config();

const sequelize = new Sequelize( // Ahora sí puedes usar sequelize aquí
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    }
);

module.exports = sequelize;