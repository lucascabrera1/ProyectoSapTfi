const Proveedor = require ('../Models/Proveedores')
const Producto = require ('../Models/Productos')

const AgregarProducto = (req, res) => {
    
}

const agregarProveedor = (req, res) => {
    res.render("./proveedor", {title : "Alta de Proveedor"});
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

const validateProveedor = (body) => {
    if (body.razon_social == null || body.razon_social == '')
        return "Razón Social es requerida";
}

const guardarProveedor = async (req, res) => {
    let msg = validateProveedor(req.body);
    if (msg) {
        res.status(400).send(msg);
    } else {
        let proveedor = new Proveedor({
            razon_social: req.body.razon_social,
            direccion: req.body.direccion,
            email: req.body.email 
        });
        let prov = await proveedor.save();
        //if (err)
        //  res.status(500).send(err);
        console.log(`Se dio de alta el proveedor: ${prov}`);
        res.status(200).send(prov);
        
    }
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


module.exports = {RecuperarProveedores, RecuperarProductos, agregarProveedor, guardarProveedor}