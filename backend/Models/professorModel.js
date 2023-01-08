const mongoose=require('mongoose');

const Professor=new mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const ProfessorModel=mongoose.model("professor",Professor);
module.exports=Professor;