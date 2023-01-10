const quizModel =require('../Models/quizModel');

module.exports.allQuizes=(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    quizModel.find({}).then((data)=>{
        res.send(data);
    });
    next();
}
module.exports.addQuiz=(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    quizModel.create(req.body).then((data)=>{
        res.send(data);
    }).catch((e)=>{
        console.log(e);
    });
}

module.exports.quizesByUserId=(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
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
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    quizModel.findByIdAndUpdate({_id:req.params.id},req.body).then((data)=>{
        res.send(data)
    }).catch((e)=>{
        console.log(e)
    })
    next();
}

module.exports.deleteQuiz=(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    quizModel.findByIdAndDelete(req.params.id).then(()=>{
        console.log(req.params.id+" succesfully deleted");
    }).catch((e)=>{
        console.log(e);
    })
    next();
}