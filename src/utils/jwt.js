const jwt = require('jsonwebtoken');
const generarJWT= (usuario)=>{
    return jwt.sign(
        {
            uid: Usuario.id,
            rol: Usuario.rol
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '8h'
        }
    );
};

module.exports ={
    generarJWT
};