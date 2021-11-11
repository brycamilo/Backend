const mongoose =require ('mongoose')
const {Schema}= mongoose

const ProductoSchema = new Schema({ 
    titulo:String,
    descripcion:String,
    precio:Number,
    disponible:Boolean,
})

module.exports=mongoose.model ('producto',ProductoSchema)
