const mongoose=require('mongoose');

const quiz=new mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
    quetions:{
        type:Array,
        required:true
    },
    datedemmarage:{
        type:Date,
        required:true
    },
    datearret:{
        type:Date,
        required:true
    },
    listesetudiant:{
        type:Array
    },
    lalistesdestentative:{
        type:Array
    }
})

const quizModel=mongoose.model("quiz",quiz)
module.exports=quizModel;