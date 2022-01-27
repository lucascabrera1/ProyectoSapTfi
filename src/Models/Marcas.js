const mongoose = require('mongoose')
const schema = mongoose.Schema

var marcasSchema = new schema ({
    _id: {type: mongoose.SchemaTypes.ObjectId},
    nombre: {type: String} 
})

var Marca = mongoose.model("marcas", marcasSchema)
module.exports = Marca