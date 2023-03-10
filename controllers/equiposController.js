const equipos = require ('../models/equipos')

exports.list = async (req,res)=>{
    try{
    const colEquipos = await equipos.find({})
    res.json(colEquipos)
    }catch(error){
        console.log(error)
        res.send(error)
        next()
    }
}

exports.add = async (req,res)=>{
    const equipo = new equipos(req.body)
    try{
    await equipo.save()
    res.json(
        {
            message:'nuevo equipo adiccionado'
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
    const equipo = await equipos.findById(req.params.id)
    if(!equipo){
        res.status(404).json({
            message:'El equipo no existe'
        })
    }

    res.json(equipo)
    }catch(error){
        res.status(400).json({
            message:'error al procesar la solicitud'
        })
    }
}

exports.update = async (req,res, next)=>{
    
    try{
    const equipo = await equipos.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true}

    )
    res.json(
        {
            message:'equipo actualizado'
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
        await equipos.findByIdAndDelete({_id: id})
    res.json(
        {
            message:'equipo eliminado'
        }
    )
    }catch(error){
        res.status(400).json({
            message:'error al procesar la solicitud'

    })
}

}