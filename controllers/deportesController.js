const deportes = require ('../models/deportes')

exports.list = async (req,res)=>{
    try{
    const colDeportes = await deportes.find({})
    res.json(colDeportes)
    }catch(error){
        console.log(error)
        res.send(error)
        next()
    }
}

exports.add = async (req,res)=>{
    const deporte = new deportes(req.body)
    try{
    await deporte.save()
    res.json(
        {
            message:'nuevo deporte adiccionado'
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
    const deporte = await deportes.findById(req.params.id)
    if(!deporte){
        res.status(404).json({
            message:'El deporte no existe'
        })
    }

    res.json(deporte)
    }catch(error){
        res.status(400).json({
            message:'error al procesar la solicitud'
        })
    }
}

exports.update = async (req,res, next)=>{
    
    try{
    const deporte = await deportes.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true}

    )
    res.json(
        {
            message:'deporte actualizado'
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
        await deportes.findByIdAndDelete({_id: id})
    res.json(
        {
            message:'Deporte eliminado'
        }
    )
    }catch(error){
        res.status(400).json({
            message:'error al procesar la solicitud'

    })
}

}