const ProductosCtrl = {}
const Producto = require("../models/Producto.model")

ProductosCtrl.crear = async (req, res) => {
    const { titulo,descripcion,precio, disponible} = req.body;
    const NuevoProducto = new Producto({ titulo,descripcion, precio, disponible})

    const respuesta = await NuevoProducto.save()
    res.json({
        mensaje: "Producto creado",
        descripcion: NuevoProducto.descripcion,
        valorunitario: NuevoProducto.valorunitario,
        estado: NuevoProducto.estado,
        respuesta
    })
}


ProductosCtrl.productosdeunjefe = async (req, res) => {
    const id = req.params.id
    const respuesta = await producto.find({ jefe: id })
    res.json(respuesta)
}

ProductosCtrl.eliminar = async (req, res) => {
    const id = req.params.id
    await Producto.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: "Producto eliminado",
        descripcion: Titulo.descripcion,
        valorunitario:Precio.precio,
        estado: Disponible.disponible

    })

ProductosCtrl.listar = async (req, res) => {
        const respuesta = await producto.find()
        res.json(respuesta)
    }
    

}

ProductosCtrl.actualizar = async(req,res)=>{
    const id=req.params.id
    await Producto.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: "Producto Actualizado",
        descripcion: producto.descripcion,
        valorunitario: producto.valorunitario,
        estado: producto.estado

    })


}
ProductosCtrl.buscarproducto =async (req,res)=>{
    const {descripcion} =req.params
    const respuesta = await producto.find({descripcion: { $regex: ".*" + descripcion + ".*" }});

    res.json(respuesta)

}


module.exports = ProductosCtrl