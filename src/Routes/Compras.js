const express = require('express')
const router = express.Router()
const app = express()

const Proveedor = require('../Models/Proveedores.js')

router.get('/', async (req, res) => {
    try{
        const arrayProveedoresDB = await Proveedor.find()
        console.log(arrayProveedoresDB)
        res.render('proveedores', {
            arrayProveedores: arrayProveedoresDB
        })
    }
    catch(error){
        console.log(error)
    }
    
})





app.set('port', 3000)

module.exports = router;