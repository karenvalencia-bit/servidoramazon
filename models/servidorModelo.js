const express = require('express')
const { conectarBD }=require('../database/conexion.js')

class ServidorModelo{


    constructor(){

        
        this.app = express()// config de express(get,post,put,delete)
        this.levantarBD();
        this.llamarRutas();
    
    
    }

    levantarServidor(){

        this.app.listen(process.env.PUERTO,function(){
            console.log("Servidor encendido en el puerto: "+process.env.PUERTO);
        })

    }

    levantarBD(){
      conectarBD();
    }

    llamarRutas(){

        this.app.get('/Facturas', function (req, res) {
            res.send('wenas karencita')
          })
          
          this.app.post('/Facturas/nuevo', function (req, res) {
            res.send('wenas karencita')
          })
          
          this.app.put('/Facturas/cambiar', function (req, res) {
            res.send('wenas karencita')
          })
          
          this.app.delete('/Facturas/borrar', function (req, res) {
            res.send('wenas karencita')
          })
    }

}

module.exports=ServidorModelo