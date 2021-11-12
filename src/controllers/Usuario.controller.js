//const UsuarioCtrl ={}
const Usuario = require("../models/Usuario.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.crearUsuario = async (req, res) => {
    const { nombres, rol, correo, contrasena, estado } = req.body;
    const NuevoUsuario = new Usuario({ nombres, rol, correo, contrasena, estado })
    const correoUsuario = await Usuario.findOne({ correo: correo })
    if (correoUsuario){
        res.json({ mensaje: "El correo ya existe"
        }) 
    }else{
        NuevoUsuario.contrasena = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({ _id: NuevoUsuario._id }, "secreta")
        await NuevoUsuario.save()
        res.json({
            mensaje: "Bienvenido",
            id: NuevoUsuario.id,
            nombres: NuevoUsuario.nombres,
            rol: rol,
            correo: correo,
            estado: estado,
            token
        })
    }


}


exports.login = async (req, res) => {
    const {correo,contrasena} = req.body;
    const usuario = await usuario.findOne({correo:correo})
    if (!usuario) {
        return res.json({
            mensaje: "correo incorrecto"
        })
    }
    const match = await bcrypt.compare(contrasena, usuario.contrasena)
    if (match) {
        const token = jwt.sign({ _id: usuario._id }, "secreta")
        res.json({
            mensaje: "Bienvenido",
            id: usuario._id,
            nombres: usuario.nombres,
            correo: usuario.correo,
            contrasena: usuario.contrasena,
            token

        })
    } else {
        res.json({
            mensaje: "contrasena incorrecta"
        })
    }
}

exports.eliminar = async (req, res) => {
    const id = req.params.id
    await usuario.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: "Usuario eliminado",
        

    })
}



exports.listar = async (req, res) => {
    const respuesta = await usuario.find()
    res.json(respuesta)
}

exports.listarid = async (req, res) => {
    const id = req.params.id
    const respuesta = await usuario.findById({ _id: id })
    res.json(respuesta)
}


exports.actualizar = async (req, res) => {
    const id = req.params.id
    await Usuario.findByIdAndUpdate({ _id: id }, req.body)
    res.json({
        mensaje: "Usuario actualizado",



    })


}
exports.buscarusuario = async (req, res) => {
    const correo = req.params.correo
    const respuesta = await Usuario.find({ correo: { $regex: ".*" + correo + ".*" } });

    res.json(respuesta)

}

module.exports = exports