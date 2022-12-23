
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const routers = require('./routes')
const routes = require('./routes')

const app = express()

mongoose.Promise= global.Promise

mongoose.connect(
    //'mongodb://127.0.0.1:27017/deportes',
    'mongodb+srv://DPS:b7ssXGrTmX7EOKHf@cluster0.5m777ac.mongodb.net/deportes',
    
    //'mongodb+srv://DPS:frAkgigc8gSqj7zA@cluster0.zooanwq.mongodb.net/ATLAS',
    {useNewUrlParser:true}
    )

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.use('/api',routes())
//app.use('/',routes())
//app.get('/',(req,res)=>{
  //  res.send('ni mongo prueba 2025')
//})

app.listen(9000,()=>{
    console.log('Servidor escuchando en el 9000')

})

