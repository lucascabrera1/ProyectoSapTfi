const proveedoresCtrl = {}
const Proveedor = require ('../Models/Proveedor.js')

proveedoresCtrl.RecuperarProveedores = async (req, res) => {
    const proveedores = await Proveedor.find()
    .lean()
    res.render('proveedores.hbs', {proveedores})
}