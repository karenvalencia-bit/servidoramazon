const { model, Schema } = require('mongoose');

const FacturaModelo=Schema({

    producto:{
        type:String,
        required:true
    },
    cantidad:{
        type:Number,
        required:true

    },
    precio:{
        type:Number,
        required:true

    },
    peso:{
        type:String,
        required:true

    },
    foto:{
        type:String,
        required:true

    }


});

module.exports = model('Factura', FacturaModelo);
