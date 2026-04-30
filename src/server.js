const app = require('./app');
const sequelize = require('./config/database'); // Esta es tu instancia configurada

const PORT = process.env.PORT || 3000;

// Usa la "s" minúscula porque es el objeto que exportaste arriba
sequelize.sync().then(() => {
    console.log('Base de datos conectada');
    app.listen(PORT, () =>
        console.log(`Servidor corriendo en http://localhost:${PORT}`)
    );
})
.catch(err => console.error('Error DB', err)); // Corregido .catch