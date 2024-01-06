const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const UserModel = require('./models/Users')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud");
// cadena de conexión (string connection)   nombre de la BdeD


// ejecutar el servidor
app.listen(3001, () => {
    console.log('Server is running')
});