const Proveedor = require ('../Models/Proveedores')
const Producto = require ('../Models/Productos')
const Categoria = require ('../Models/Categorias')
<<<<<<< HEAD
const Marca = require ('../Models/Marcas')
=======
>>>>>>> 54a0bbc554511fd475ab21514063c3f98d44d4ab

//PROVEEDOR
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

//PRODUCTO

const AgregarProducto = async (req, res) => {
    const proveedores = await Proveedor.find();
    const categorias_db = await Categoria.find();
    const lista = proveedores.map(prov => {return {
        id: prov._id,
        nombre: prov.razon_social, 
        email: prov.email,
        direccion : prov.direccion
    }})
<<<<<<< HEAD
    const categorias = await Categoria.find();
    const listacategorias = categorias.map(cat => { return {
        id: cat._id,
        name: cat.name
    }})
    const marcas = await Marca.find();
    const listamarcas = marcas.map(mar => {return {
        id: mar._id,
        nombre:mar.nombre
    }})
    res.render("./producto", {
        title: "Alta de Producto",
        lista: lista,
        categorias: listacategorias,
        marcas: listamarcas
=======
    const categorias = categorias_db.map(cat => {
        return {
            id: cat._id,
            nombre: cat.nombre
        }
    });
    res.render("./producto", {
        title: "Alta de Producto",
        lista: lista,
        categorias: categorias
>>>>>>> 54a0bbc554511fd475ab21514063c3f98d44d4ab
    })
}

const ValidarProducto = (body) => {
    if (body.descripcion == '' || body.descripcion == null){
        return "La descripción del producto no puede ser nula";
    }
    else if (body.preciodecompra == '' || body.preciodecompra == null){
        return "el precio de compra no puede ser nulo";
    }
    else if (body.preciodeventa == '' || body.preciodeventa == null){
        return "el precio de venta no puede ser nulo";
    }
    else if (body.puntopedido == '' || body.puntopedido == null){
        return "el punto de pedido no puede ser nulo";
    }
}

const guardarProducto = async (req, res) => {
    let msg = ValidarProducto(req.body)
    if (msg){
        res.status(400).send(msg)
    }else{
        let producto = new Producto({
            descripcion : req.body.descripcion,
            preciodecompra : req.body.preciodecompra,
            preciodeventa : req.body.preciodeventa,
            puntopedido : req.body.puntopedido,
            marca : req.body.marca,
            proveedor : req.body.proveedor,
            categoria : req.body.categoria
        });
        let prod = await producto.save()
        console.log(`se dio de alta el producto ${prod}`)
        res.status(200).send(prod)
    }
}

const RecuperarProductos = (req, res) => {
    Producto.find({})
        .populate("proveedor")
        .populate("categoria")
        .then(function(productos) {
            let lista = productos.map(prod=> {return {
                id: prod._id,
                descripcion: prod.descripcion,
                preciodecompra: prod.preciodecompra,
                preciodeventa: prod.preciodeventa,
                puntopedido : prod.puntopedido,
                stock: prod.stock,
                marca: prod.marca,
                proveedor: prod.proveedor==null?'Sin asignar':prod.proveedor.razon_social,
                categoria: prod.categoria==null?'Sin asignar':prod.categoria.nombre
            }})
            res.render("./productos", {lista: lista});
        })
        .catch(function(err) {
            console.log(err);
            res.render("./productos", {lista: []});
        });
}


module.exports = {RecuperarProveedores, RecuperarProductos, 
    agregarProveedor, guardarProveedor,
    AgregarProducto, guardarProducto
}