const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventosSchema = new Schema({
    //usu_fecha:{type:String,Trim:true,unique:true,lowercase:true},
    usu_fecha: {type:String,require:true,Trim:true},
    usu_deporte:{type:String,require:true,Trim:true},
    usu_equipo1:{type:String,require:true,Trim:true},
    usu_equipo2:{type:String,require:true,Trim:true},
    usu_resultados_equipo1:{type:String,require:true,Trim:true},
    usu_resultados_equipo2:{type:String,require:true,Trim:true} 
    
})

module.exports = mongoose.model('eventos',eventosSchema) 