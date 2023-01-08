const mongoose=require('mongoose');

const Etudiant=new mongoose.Schema({
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

const EtudiantModel=mongoose.model("etudiant",Etudiant);
module.exports=EtudiantModel;