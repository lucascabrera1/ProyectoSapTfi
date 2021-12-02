const mongoose = require ('mongoose')
const Schema = mongoose.Schema

var productosSchema = new Schema ({
    id: {type: Number},
    descripcion: {type: String},
    categoria: {type: String},
    preciodecompra: {type: Number},
    preciodeventa: {type: Number},
    puntopedido: {type: Number},
    stock: {type: Number},
    marca: {type: String},
    proveedor: {type: String}
})

var Producto = mongoose.model("productos", productosSchema)
module.exports = Producto