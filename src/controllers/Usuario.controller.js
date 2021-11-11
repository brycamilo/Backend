/* //const UsuarioCtrl1 ={}
const Usuario = require('../models/Usuario.model')
const bcrypt = require ('bcryptjs')
const jwt = require('jsonwebtoken')


exports.crearUsuario = async(req,res)=>
{
    const {nombreApellido,correo,contrasena}=req.body
    const NuevoUsuario = new Usuario({
        nombreApellido,correo,contrasena
    })
    const correousuario=await Usuario.findOne({correo:correo})
    if(correousuario){
        res.json({
            mensaje:'El correo ya existe'
        })
    }else{
        NuevoUsuario.contrasena=await bcrypt.hash(contrasena,10)
        const token = jwt.sign({_id:NuevoUsuario._id},'secreta')
        await NuevoUsuario.save()
        res.json({
            mensaje:"Bienvenido",
            id:NuevoUsuario._id,
            nombre:NuevoUsuario.nombreApellido,
            token
            
        })
    }
}



/* e.createOne = async(req,res)=>
{
    try
    {
        var usuarioData = req.body;
        console.log(usuarioData);
        var usuario = new Usuario(usuarioData);
    
        await usuario.save();

     res.json({msg:" Product created"})

    }
    catch(err)
    {
        console.log(err);
        return res.json(err);
    } 
 

}
 */
/* exports.login=async(req,res)=>{
    const{correo,contrasena}=req.body
    const usuario =await Usuario.findOne({correo:correo})
    if (!usuario){
        return res.json({
            mensaje:'correo incorrecto'
        })
    }
    const match = await bcrypt.compare(contrasena,usuario.contrasena)
    if(match){
        const token =jwt.sign({_id:usuario._id},'secreta')
        res.json({
            mensajae:'Bienvenido',
            id:usuario._id,
            nombre:usuario.nombreApellido,
            token

        })

    }else{
        res.json({
            mensaje:'Contraseña incorrecta'
        })
    }
} 
 */
//module.exports = UsuarioCtrl1