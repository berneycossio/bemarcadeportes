const usuarios = require ('../models/usuarios')

exports.list = async (req,res)=>{
    try{
    const colUsuarios = await usuarios.find({})
    res.json(colUsuarios)
    }catch(error){
        console.log(error)
        res.send(error)
        next()
    }
}

exports.add = async (req,res)=>{
    const usuario = new usuarios(req.body)
    try{
    await usuario.save()
    res.json(
        {
            message:'nuevo usuario adiccionado'
        }
    )
    }catch(error){
        console.log(error)
        res.send(error)
        next()
    }
}

exports.show = async (req,res,next)=>{
    try{
    const usuario = await usuarios.findById(req.params.id)
    if(!usuario){
        res.status(404).json({
            message:'El usuario no existe'
        })
    }

    res.json(usuario)
    }catch(error){
        res.status(400).json({ 
            message:'error al procesar la solicitud'
        })
    }
}

exports.update = async (req,res, next)=>{
    
    try{
    const usuario = await usuarios.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true}

    )
    res.json(
        {
            message:'usuario actualizado'
        }
    )
    }catch(error){
        res.status(400).json({
            message:'error al procesar la solicitud'
    })
}

}

exports.delete = async (req,res)=>{
    const id = req.params.id
    try{
        await usuarios.findByIdAndDelete({_id: id})
    res.json(
        {
            message:'Usuario eliminado'
        }
    )
    }catch(error){
        res.status(400).json({
            message:'error al procesar la solicitud'

    })
}

}