const express = require('express')
var coc = require ('../controllers/ControladoraOC')
const router = express()

router.get('/', (req, res) => {
    res.render('./main')
})


router.get('/compras', (req, res)=>{
    res.render('./compras')
})

//proveedores
router.get('/proveedores', coc.RecuperarProveedores)
router.post('/proveedores/save', coc.guardarProveedor)
router.get('/proveedores/agregar', coc.agregarProveedor)

//productos
router.get('/productos/agregar', coc.AgregarProducto)
router.get('/productos/editar', coc.EditarProducto)
router.post('/productos/save', coc.guardarProducto)
router.get('/productos', coc.RecuperarProductos)


module.exports = router;