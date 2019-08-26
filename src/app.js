// Librerias de node
const express = require('express');
const mongoose = require('mongoose');


// Inicialización

const app = express();

// Conexión a la base de datos

mongoose.connection.openUri('mongodb://localhost:27017/hospital', (err, res) => {
    if (err) throw err;

    console.log("Base de datos: \x1b[32m%s\x1b[0m", 'Online');

});

// Rutas

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: true,
        msg: 'Petición realizada correctamente'
    });
});



// Montar servidor

app.listen(3000, () => {
    console.log("Express en el puerto 3000: \x1b[32m%s\x1b[0m", 'Online');
});