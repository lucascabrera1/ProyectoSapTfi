const Proveedor = require ('../Models/Proveedores')
const Producto = require ('../Models/Productos')

const AgregarProducto = (req, res) => {
    
}

const RecuperarProveedores = (req, res) => {
    //const proveedores = await Proveedor.find();
    Proveedor.find(function(err, proveedores) {
        let lista = proveedores.map(prov => {return {
            id: prov.id,
            nombre: prov.razon_social, 
            email: prov.email,
            direccion : prov.direccion
        }})
        console.log(lista);
        res.render("./proveedores", {lista : lista })
    });
}

const RecuperarProductos = (req, res) => {
    Producto.find(function(err, productos){
        let lista = productos.map(prod=> {return {
            id: prod.id,
            descripcion: prod.descripcion,
            preciodecompra: prod.preciodecompra,
            preciodeventa: prod.preciodeventa,
            puntopedido : prod.puntopedido,
            stock: prod.stock,
            marca: prod.marca,
            proveedor: prod.proveedor,
            categoria: prod.categoria
        }})
        console.log(lista[1])
        res.render("./productos", {lista: lista})
    })
}


module.exports = {RecuperarProveedores, RecuperarProductos}