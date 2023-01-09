const mongoose=require('mongoose');

const question=mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    difficulte:{
        type:String,
        required:true
    },
    bonnereponse:{
        type:Array,
        required:true
    },
    reponseerronne:{
        type:Array,
        required:true
    }
})

const questionModel=mongoose.model("question",question);
module.exports=questionModel;