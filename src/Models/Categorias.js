const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategoriasSchema = new Schema({
    nombre:{type: String, required: true}
})

const Categorias = mongoose.model('categorias', CategoriasSchema)
module.exports = Categorias
