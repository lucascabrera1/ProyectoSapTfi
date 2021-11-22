const Proveedor = require ('../Models/Proveedores')


const RecuperarProveedores = (req, res) => {
    //const proveedores = await Proveedor.find();
    Proveedor.find(function(err, proveedores) {
        let lista = proveedores.map(p => {return {nombre: p.razon_social, email: p.email}})
        console.log(lista);
        res.render("../proveedores", {valor : "holaa", lista : lista })
    });
    
}

module.exports = RecuperarProveedores