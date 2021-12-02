const express = require('express')
const path = require ('path')
const exphbs = require('express-handlebars')
const methodOverride = require ('method-override')
const session = require ('express-session')
//initializing

const app = express()
const db = require('./database')

db.once('open', function() {
    main();
});

function main() {
    //settings
    app.set('port', process.env.port || 3000)
    //app.set('views', path.join(__dirname, 'views'))
    app.set('views', path.join(__dirname, 'views'))
    app.engine('.hbs', exphbs({
        defaultLayout: "index",
        layoutsDir: path.join(app.get('views'), "layouts"),
        partialsDir: path.join(app.get('views'), "partials"),
        extname: '.hbs'
    }))
    app.set('view engine', '.hbs')
    //Serves static files (we need it to import a css file)
    app.use(express.static('../public'));



    //Middlewares: funciones que se ejecutan antes de que llegan al servidor
    app.use(express.urlencoded({extended: false}))
    app.use(methodOverride('_method'))
    app.use(session({
        secret: 'My secret app',
        resave: true,
        saveUninitialized: true
    }))




    //variables globales






    //routes

    app.use(require('./Routes/index.js'))
    app.use(require('./Routes/OrdenesDeCompra.js'))
    app.use(require('./Routes/Compras.js'))







    //static files
    app.use(express.static(path.join(__dirname, 'public')))









    //server listening
    app.listen(app.get('port'), () => {
            console.log('Server on port ', app.get('port'))
        }
    )
}





