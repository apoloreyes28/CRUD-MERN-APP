const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const UserModel = require('./models/Users')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud");
// cadena de conexión (string connection)   nombre de la BdeD


// mostramos los datos
app.get('/', (req, res) => {

    // usamos el modelo
    UserModel.find({})
        // este método nos permite buscar en la matriz de resultados (usuarios)

        .then(users => res.json(users))
        .catch(err => res.json(err))
});


// obtenemos los datos
app.get("/getUser/:id", (req, res) => {

    // obtenemos el ID
    const id = req.params.id;

    // usamos el modelo para buscar y seleccionar el registro (usuario) a modificar 
    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})


// actualizmos los datos
app.put('/updateUser/:id', (req, res) => {

    // obtenemos el ID
    const id = req.params.id;

    // usamos el modelo
    UserModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })

        .then(users => res.json(users))
        .catch(err => res.json(err))
});


// eliminamos los datos
app.delete('/deleteUser/:id', (req, res) => {

    // obtenemos el ID
    const id = req.params.id;

    // usamos el modelo
    UserModel.findByIdAndDelete({ _id: id })
        .then(res => res.json(res))
        .catch(err => res.json(err))
});


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