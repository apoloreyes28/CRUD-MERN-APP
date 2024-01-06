const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const UserModel = require('./models/Users')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud");
// cadena de conexión (string connection)   nombre de la BdeD


// creamos los datos
app.post("/createUser", (req, res) => {
    /*
    la solicitud (request) son los datos que estamos enviando desde el Front-end (página web)
    "es lo que pedimos" y la respuesta (response) es lo que enviamos de regreso al Front-end
    "es lo que nos devuelve (regresa)".
    */
    
        // usamos el modelo
        UserModel.create(req.body)
        // especificamos el cuerpo solicitado (los datos que estoy enviando) 
        // desde el Front-end, se adjuntarán con esta solicitud
    
        .then(users => res.json(users))
        .catch(err => res.json(err))
    });

// ejecutar el servidor
app.listen(3001, () => {
    console.log('Server is running')
});