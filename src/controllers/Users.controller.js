
const User = require('../models/Usuario.model')

exports.crear=async(req,res)=>{
    const{nombreApellido,_documento,correo}=req.body
    const NuevoUser=new User({
        nombreApellido,_documento,correo
    })
    const documentoUsuario=await User.findOne({documento:_documento})
    if(documentoUsuario){
        res.json({
            mensaje:'El documento ya existe'
        })
    }else
    {
    const respuesta = await NuevoUser.save()
    res.json({
        msg:'Usuario creado'
        
    })
}
}
exports.listar=async(req,res)=>{
    const resepuesta =await User.find()
    res.json(respuesta)   
}
exports.listarid=async(req,res)=>{
    const id=req.params.id
    const respuesta=await User.findById({_id:id})

exports.eliminar=async(req,res)=>{
    const id =req.param.id
    await User.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Usuario Eliminado'
    })
}
exports.actualizar=async(req,res)=>{
    const id=req.params.id
    await users.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje:'Usuario actualizado'
    })
}
}