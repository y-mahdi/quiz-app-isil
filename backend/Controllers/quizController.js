const quizModel =require('../Models/quizModel');

module.exports.allQuizes=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    await quizModel.find({}).then((data)=>{
        res.send(data);
        console.log(data)
    }).catch((e)=>{
        console.log(e)
    })
    next();
}
module.exports.addQuiz=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    await quizModel.create(req.body).then((data)=>{
        res.send(data);
    }).catch((e)=>{
        console.log(e);
    });
}

module.exports.quizesByUserId=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    let array=[];
    await quizModel.find({}).then((data)=>{
        data.map((quiz)=>{
            if(quiz.auteur==req.params.user || quiz.listesetudiant.includes(req.params.user)){
                array.push(quiz)
            }
        })
        res.send(array)
    })
    next();
}

module.exports.modifyQuiz=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    await quizModel.findByIdAndUpdate({_id:req.params.id},req.body).then((data)=>{
        res.send(data)
    }).catch((e)=>{
        console.log(e)
    })
    next();
}

module.exports.deleteQuiz=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    await quizModel.findByIdAndDelete(req.params.id).then(()=>{
        console.log(req.params.id+" succesfully deleted");
    }).catch((e)=>{
        console.log(e);
    })
    next();
}
module.exports.addTentatives=async()=>{
    quizModel.findById(req.params.id).then(async(data)=>{
        data.lalistesdestentative.push({
            etudiant:req.body.student,
            tentatives:req.body.tentatives
        });
        await quizModel.findByIdAndUpdate({_id:req.params.id},data).then(()=>{
            console.log(req.params.id+" is updated")
        })
    })
}