const express = require('express');
const app= express();
const bodyParser =  require('body-parser');
const mongoose= require("mongoose");
const cors = require("cors");
const rout= require("./routes/route")
const routAuth = require("./routes/routeAuth")
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors());
//mongodb
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/treinos',
{useNewUrlParser: true, useUnifiedTopology: true})

//rotas

app.use('/api',rout)
app.use('/auth',routAuth)

app.use((req,res,next)=>{
    res.status(404).send('not found')
})
app.listen(42000, ()=>{
    console.log("Conectado ao webservice")
})