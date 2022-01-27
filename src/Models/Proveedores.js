const mongoose = require('mongoose')
const Schema = mongoose.Schema

var proveedoresSchema = new Schema({
    _id: {type: mongoose.SchemaTypes.ObjectId, required: true},
    razon_social: {type: String, required: true},
    direccion: {type: String},
    email: {type: String}
});

proveedoresSchema.virtual('nombre').get(function() {
    return this.razon_social;
});

var Proveedor = mongoose.model("proveedores", proveedoresSchema);

module.exports = Proveedor
