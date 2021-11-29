const Proveedor = require ('../Models/Proveedores')


const RecuperarProveedores = (req, res) => {
    //const proveedores = await Proveedor.find();
    Proveedor.find(function(err, proveedores) {
        let lista = proveedores.map(p => {return {
            id: p.id,
            nombre: p.razon_social, 
            email: p.email,
            direccion : p.direccion
        }})
        console.log(lista);
        res.render("../proveedores", {lista : lista })
    });
    
}

module.exports = RecuperarProveedores