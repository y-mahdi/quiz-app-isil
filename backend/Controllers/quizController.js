const quizModel =require('../Models/quizModel');

module.exports.allQuizes=(req,res,next)=>{
    quizModel.find({}).then((data)=>{
        res.send(data);
    });
    next();
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
    
}