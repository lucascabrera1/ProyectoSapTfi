const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost:27017/miprimerdbenmongodb', {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useFindAndModify: false
})
.then(db => console.log('Conectado exitosamente a la base de datos'))
.catch((err) => console.error("El error fue que "+ err))