/*const http = require('http')
const fs = require('fs')
const { prototype } = require('events')

const paginaprincipal = fs.readFileSync('index.html')
const paginaventas = fs.readFileSync('ventas.html')
const paginareparaciones = fs.readFileSync('reparaciones.html')
const paginacompras = fs.readFileSync('compras.html')
const paginaremitos = fs.readFileSync('remitos.html')
const imagenilustrativa = fs.readFileSync('imagenilustrativa.jpg')


const server = http.createServer((req, res) =>{
        if (req.url === '/'){
            return res.end(paginaprincipal)
        }
        else if(req.url === '/ventas'){
            return res.end(paginaventas)
        }
        else if (req.url === '/reparaciones'){
            //return res.end("Bienvenido a la sección de reparaciones")
            return res.end(paginareparaciones)
        }
        else if (req.url === '/compras'){
            //return res.end ("Bienvenido a la sección de órdenes de compra")
            return res.end(paginacompras)
            
        }
        else if (req.url === '/remitos'){
            //return res.end ("Bienvenido a la sección de remitos")
            return res.end(paginaremitos)
        }
        else if (req.url === '/imagenilustrativa'){
            return res.end(imagenilustrativa)
        }
        else {
            res.writeHead(404) 
            res.end("no se encontro la sección buscada")
        }
    }
)*/
//server.listen(3000)