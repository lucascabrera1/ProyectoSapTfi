const express = require('express')
const RecuperarProveedores = require ('../controllers/ControladoraOC')
const router = express()

router.get('/', (req, res) => {
    res.render('../main')
})


router.get('/compras', (req, res)=>{
    res.render('../compras')
})

router.get('/proveedores', RecuperarProveedores)

module.exports = router;