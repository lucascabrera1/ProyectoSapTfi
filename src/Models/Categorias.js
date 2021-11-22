const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategoriasSchema = new Schema({
    name:{type: String, required: true}
})

const Categorias = mongoose.model('Categorias', CategoriasSchema)
module.exports = Categorias
