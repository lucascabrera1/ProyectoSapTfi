const Proveedor = require ('../Models/Proveedores')
const Producto = require ('../Models/Productos')
const Categoria = require ('../Models/Categorias')
const Marca = require ('../Models/Marcas')

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

const EditarProducto = async (req, res) => {
    const id = req.query.id;
    const producto_db = await Producto.findById(id);
    //if (producto_db!=null) {
        const producto = {
            id: producto_db._id,
            descripcion: producto_db.descripcion,
            preciodecompra: producto_db.preciodecompra,
            preciodeventa: producto_db.preciodeventa,
            puntopedido: producto_db.puntopedido,
            marca: producto_db.marca,
            proveedor: producto_db.proveedor,
            categoria: producto_db.categoria
        }
        const listas = await ListasAsociadasProducto();
        res.render("./producto", {
            title: "Edición de Producto",
            producto: producto,
            lista: listas.proveedores,
            categorias: listas.categorias,
            marcas: listas.marcas
        })
    //}
}

const ListasAsociadasProducto = async () => {
    const proveedores = await Proveedor.find();
    const categorias_db = await Categoria.find();
    const lista = proveedores.map(prov => {return {
        id: prov._id,
        nombre: prov.razon_social, 
        email: prov.email,
        direccion : prov.direccion
    }})
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
    return {
        marcas: listamarcas,
        proveedores: lista,
        categorias: listacategorias
    }
}

const AgregarProducto = async (req, res) => {
    const listas = await ListasAsociadasProducto();
    const producto = {
        descripcion:""
    }
    res.render("./producto", {
        title: "Alta de Producto",
        producto: producto,
        lista: listas.proveedores,
        categorias: listas.categorias,
        marcas: listas.marcas
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
    else if (body.marca == '' || body.marca == null){
        return "debe seleccionar una marca";
    }
    else if (body.categoria == '' || body.categoria == null){
        return "debe seleccionar una categoría";
    }
    else if (body.proveedor == '' || body.proveedor == null){
        return "debe seleccionar un proveedor";
    }
}

const guardarProducto = async (req, res) => {
    let msg = ValidarProducto(req.body)
    if (msg){
        res.status(400).send(msg)
    }else{
        let producto;
        let id = req.body.id;
        if (id!=null && id!='') {
            producto = await Producto.findById(id);
            producto.descripcion = req.body.descripcion;
            producto.preciodecompra = req.body.preciodecompra;
            producto.preciodeventa = req.body.preciodeventa;
            producto.puntopedido = req.body.puntopedido;
            producto.marca = req.body.marca!=""?req.body.marca:null;
            producto.proveedor = req.body.proveedor!=""?req.body.proveedor:null;
            producto.categoria = req.body.categoria!=""?req.body.categoria:null;
        } else {
            producto = new Producto({
                descripcion : req.body.descripcion,
                preciodecompra : req.body.preciodecompra,
                preciodeventa : req.body.preciodeventa,
                puntopedido : req.body.puntopedido,
                marca : req.body.marca!=""?req.body.marca:null,
                proveedor : req.body.proveedor!=""?req.body.proveedor:null,
                categoria : req.body.categoria!=""?req.body.categoria:null
            });
        }
        let prod = await producto.save()
        console.log(`se dio de alta o actualizó el producto ${prod}`)
        res.status(200).send(prod)
    }
}

const RecuperarProductos = (req, res) => {
    Producto.find({})
        .populate("proveedor")
        .populate("categoria")
        .populate("marca")
        .then(function(productos) {
            let lista = productos.map(prod=> {return {
                id: prod._id,
                descripcion: prod.descripcion,
                preciodecompra: prod.preciodecompra,
                preciodeventa: prod.preciodeventa,
                puntopedido : prod.puntopedido,
                stock: prod.stock,
                marca: prod.marca==null?'Sin asignar': prod.marca.nombre,
                proveedor: prod.proveedor==null?'Sin asignar':prod.proveedor.razon_social,
                categoria: prod.categoria==null?'Sin asignar':prod.categoria.name
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
    AgregarProducto, guardarProducto,
    EditarProducto
}