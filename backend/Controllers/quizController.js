const quizModel =require('../Models/quizModel');

module.exports.allQuizes=(req,res,next)=>{
    quizModel.find({}).then((data)=>{
        res.send(data);
    });
    next();
}´
module.exports.addQuiz=(req,res,next)=>{
    quizModel.create(req.body).then((data)=>{
        res.send(data);
    }).catch((e)=>{
        console.log(e);
    });
}

module.exports.quizesByUserId=(req,res,next)=>{
    let array=[];
    quizModel.find({}).then((data)=>{
        data.map((quiz)=>{
            if(quiz.auteur==req.params.user || quiz.listesetudiant.includes(req.params.user)){
                array.push(quiz)
            }
        })
        res.send(array)
    })
    next();
}

module.exports.modifyQuiz=(req,res,next)=>{
    quizModel.findByIdAndUpdate({_id:req.params.id},req.body).then((data)=>{
        res.send(data)
    }).catch((e)=>{
        console.log(e)
    })
    next();
}

module.exports.deleteQuiz=(req,res,next)=>{
    quizModel.findByIdAndDelete(req.params.id).then(()=>{
        console.log(req.params.id+" succesfully deleted");
    }).catch((e)=>{
        console.log(e);
    })
    next();
}