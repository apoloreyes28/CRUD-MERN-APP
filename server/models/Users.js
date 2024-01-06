// creamos el modelo en el cual vamos a especificar 
// los datos (campos de entrada) para la tabla de usuarios

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const UserModel = mongoose.model("users", UserSchema)
//               nombre de la colección y esquema

module.exports = UserModel;