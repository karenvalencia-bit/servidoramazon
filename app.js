require ( 'dotenv' ) . config ( )
 
let servidorModelo=require('./models/servidorModelo.js');

let servidor=new servidorModelo();
servidor.levantarServidor();