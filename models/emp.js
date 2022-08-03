const mongoose=require('mongoose');

const empSchema=new mongoose.Schema({
   
    Fname:{
        type:String,
        required:true
    },

    Lname:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Emp',empSchema)