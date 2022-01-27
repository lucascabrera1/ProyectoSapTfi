const mongoose = require ('mongoose')
const Schema = mongoose.Schema

var productosSchema = new Schema ({
    id: {type: Number},
    descripcion: {type: String},
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'categorias'
    },
    preciodecompra: {type: Number},
    preciodeventa: {type: Number},
    puntopedido: {type: Number},
    stock: {type: Number},
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'marcas'
    },
    proveedor: {
        type: Schema.Types.ObjectId,
        ref: 'proveedores'
    }
})

var Producto = mongoose.model("productos", productosSchema)
module.exports = Producto