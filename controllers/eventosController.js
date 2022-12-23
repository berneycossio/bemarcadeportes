const eventos = require ('../models/eventos')

exports.list = async (req,res)=>{
    try{
    const colEventos = await eventos.find({})
    res.json(colEventos)
    }catch(error){
        console.log(error)
        res.send(error)
        next()
    }
}

exports.add = async (req,res)=>{
    const evento = new eventos(req.body)
    try{
    await evento.save()
    res.json(
        {
            message:'nuevo evento adiccionado'
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
    const evento = await eventos.findById(req.params.id)
    if(!evento){
        res.status(404).json({
            message:'El evento no existe'
        })
    }

    res.json(evento)
    }catch(error){
        res.status(400).json({
            message:'error al procesar la solicitud'
        })
    }
}

exports.update = async (req,res, next)=>{
    
    try{
    const evento = await eventos.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true}

    )
    res.json(
        {
            message:'evento actualizado'
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
        await eventos.findByIdAndDelete({_id: id})
    res.json(
        {
            message:'Evento eliminado'
        }
    )
    }catch(error){
        res.status(400).json({
            message:'error al procesar la solicitud'

    })
}

}