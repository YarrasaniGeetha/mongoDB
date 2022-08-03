const express=require('express')
const mongoose=require('mongoose')
const url ='mongodb://localhost/employeedata'
const app=express()
const bodyParser = require('body-parser')
mongoose.connect('mongodb+srv://Geetha:Geetha@cluster0.0s12eki.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('Mongodb Connected')
    }
    else if(err){
        console.log(err)
    }
});

const con=mongoose.connection
con.on('open',()=>{
    console.log('connected.........')
})
app.use(express.json())//middle ware used to convert the client request into Json formate
app.use(bodyParser.urlencoded({extended: false}))
const empRouter=require('./routers/employee')
app.use('/employeedata',empRouter);//middle ware
app.listen(9000,()=>{
    console.log("server started...")
})