const express = require('express');
const conectarBD = require('../config/db');
const loginCollection = require('../models/loginCollection')
const cors = require('cors');


//creamos nuestro servidor
const app = express();
const port =  process.env.PORT || 7000;

//conexion bases de datos
conectarBD();
app.use(cors());
app.use(express.json());

//ruta para consumir la api cliente
app.use('/api/clientes', require('../routes/rutasCliente'));
app.use('/api/productos', require('../routes/rutasProducto'));
app.use('/api/usuarios', require('../routes/rutasUsuario'));



//ruta para verificar el servidor


//servidor modulosEl




//ruta de nuestro servidor local
app.listen(port,() =>{
    console.log('El servidor esta conectado http://localhost:5000');
})