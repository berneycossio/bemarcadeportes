const mongoose = require('mongoose')
const Schema = mongoose.Schema

const equiposSchema = new Schema({
    //usu_fecha:{type:String,Trim:true,unique:true,lowercase:true},
    usu_ide: {type:String,require:true,Trim:true},
    usu_deporte:{type:String,require:true,Trim:true},
   
    
})

module.exports = mongoose.model('equipos',equiposSchema) 