const express = require ('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')

const ventasRoutes = require("./routes/Ventas.routes");

app.set('Port',4000)

app.use(morgan('dev'))
app.use(bodyparser.urlencoded(
{extended:true}))
app.use (bodyparser.json())
app.use (cors({origen:"*"}))

//Rutas
app.use('/usuario',require('./routes/Usuario.routes'))
//app.use('/users',require('./routes/Usuario.routes'))
app.use("/api/ventas", ventasRoutes);


app.listen(app.get('Port'),()=>{
    console.log('servidor escuchando por el puertooo',app.get('Port'))
})
