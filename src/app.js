const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('ok -- API Funcionando correctamente');

}
);

//puerto por defecto 3000

const PORT=3000;
app.listen(PORT,()=>{
    console.log("Servidor Activo");
});


