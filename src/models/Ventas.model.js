const mongoose = require('mongoose')
const {Schema} = mongoose

const VentasSchemma = mongoose.Schema({
    fecha_Venta: String, 
    producto:  String,
    referencia:  Number, 
    precio:  Number,
    total:Number,
    descripcion:  String,
    vendedor:  String,
    estado_venta: String
})
  
module.exports = mongoose.model("Usuario", UsuarioSchemma);