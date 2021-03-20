const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    nome:  {type: String, required: true, trim: true, unique: true},
    email: {type: String, required: true, trim: true, unique: true},
    senha: {type: String, required: true, trim: true},
    dataNascimento:{type: String},
    endereco:{type: String, required: true, trim: true},
    altura:{type: Number, required: true, trim: true},
    peso: { type: Number, required: true, trim: true}
})

module.exports = mongoose.model('user', UserSchema)