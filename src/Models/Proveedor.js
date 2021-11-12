const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProveedorSchema = new Schema({
    razonSocial: {type: String, required: true},
    telefono: {type: String, required: true},
    direccion: {type: String, required: true},
    cuit: {type: String, required: true},
    localidad:{type: String, required: true},
    email:{type: String, required: true}
})

const Proveedor = mongoose.model('proveedor', ProveedorSchema)
module.exports = Proveedor
