const questionModel=require('../Models/questionModel');

module.exports.allQuestions=(req,res,next)=>{
    questionModel.find({}).then((data)=>{
        res.send(data);
    })
    next();
}
module.exports.postQuestion=(req,res,next)=>{
    questionModel.create(req.body).then((data)=>{
        res.send(data)
    }).then((e)=>{
        console.log(e)
    })

}

module.exports.modifyQuestion=(req,res,next)=>{
    questionModel.findByIdAndUpdate({_id:req.params.id},req.body).then((data)=>{
        res.send(data);
    }).catch((e)=>{
        console.log(e);
    });
    next();
}

module.exports.deleteQuestion=(req,res,next)=>{
    questionModel.findByIdAndDelete(req.params.id).then(()=>{
        console.log(req.params.id+" is deleted succesfully");
    }).catch((e)=>{
        console.log(e);
    })
}
