const express = require('express')
const cors = require('cors')


class Server{
    constructor(){
        this.app  = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        //Middlewares = acciones que siempre se haran al correr el server
        this.middlewares();
        
        //Rutas de la app
        this.routes();
    }
    
    middlewares(){
        //Cors
        this.app.use(cors());

        //Analiza las solicitudes entrantes con cargas JSON y se basa en body-parser .
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'))

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }
}

module.exports = Server;