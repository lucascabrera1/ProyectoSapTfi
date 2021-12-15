const express = require('express')
var coc = require ('../controllers/ControladoraOC')
const router = express()

router.get('/', (req, res) => {
    res.render('./main')
})


router.get('/compras', (req, res)=>{
    res.render('./compras')
})

router.get('/proveedores', coc.RecuperarProveedores)
router.post('/proveedores/save', coc.guardarProveedor)
router.get('/proveedores/agregar', coc.agregarProveedor)

router.get('/productos', coc.RecuperarProductos)


module.exports = router;