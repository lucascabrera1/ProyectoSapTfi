const express = require('express')
const router = express.Router()

import { RecuperarProveedores} from 'ControladoraOc.js'

router.get('/', (req, res) => {
    res.render('main')
})


router.get('/compras', (req, res)=>{
    res.render('compras')
})

router.get('/proveedores', (req, res) => {
    res.render('proveedores', RecuperarProveedores())
})

module.exports = router;