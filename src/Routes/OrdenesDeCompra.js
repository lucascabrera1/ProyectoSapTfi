const express = require('express')
const router = express.Router()

router.get('/Users/signin', (req, res) => {
    res.render('main.hbs')
})

router.get('/signup', (req, res) => {
    res.send('formulario de autenticación')
})

module.exports = router;