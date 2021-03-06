const express = require('express')
var cors = require('cors')
const { conectarBD }=require('../database/conexion.js')
const facturaModelo=require('../models/facturaModelo.js')

class ServidorModelo{


    constructor(){

        
        this.app = express()// config de express(get,post,put,delete)
        this.levantarBD();
        this.auxiliares();
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

    auxiliares(){
      this.app.use(express.json())
      this.app.use(cors())
    }

    llamarRutas(){

        this.app.get('/Facturas', async function (req, res) {
            try{
              let facturas= await facturaModelo.find()
              res.status(200).json({
                respuesta: "exito",
                datos: facturas
            })

            }
            catch(error){
              res.status(400).json({
                respuesta:"error",
                datos:error
              })

            }
          })
          
          this.app.post('/Facturas/nuevo', async function (req, res) {
           let datosFactura=req.body;
           try{
            let factura=new facturaModelo(datosFactura);
            await factura.save();
            res.status(200).json({
              respuesta:"exito",
              datos:factura
            })

           }catch(error){
            res.status(400).json({
              respuesta:"error",
              datos:error
            })
           }
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