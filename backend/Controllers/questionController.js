const questionModel=require('../Models/questionModel');

module.exports.allQuestions=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    await questionModel.find({}).then((data)=>{
        res.send(data);
        console.log(data)
    }).catch((e)=>{
        console.log(e)
    })
    next();
}
module.exports.postQuestion=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    // req.body={"question":"Who create javascript","type":"multichoix","difficulte":"facile","bonnereponse":["Founder"],"reponseerronne":["creator of java"]}{question:req.body.question,type:req.body.type,difficulte:req.body.difficulte,bonnereponse:req.body.bonnereponse,reponseerronne:req.body.reponseerronne}
    console.log(req.body)
    if(!req.body){
        res.send({body:null})
    }
    else{
        await questionModel.create(req.body).then((data)=>{
            res.send(data)
        }).then((e)=>{
            console.log(e)
        })
    
    }
}

module.exports.modifyQuestion=(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    questionModel.findByIdAndUpdate({_id:req.params.id},req.body).then((data)=>{
        res.send(data);
    }).catch((e)=>{
        console.log(e);
    });
    next();
}

module.exports.deleteQuestion=(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    questionModel.findByIdAndDelete(req.params.id).then(()=>{
        console.log(req.params.id+" is deleted succesfully");
    }).catch((e)=>{
        console.log(e);
    })
}
