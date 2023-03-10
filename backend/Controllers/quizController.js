const quizModel =require('../Models/quizModel');

module.exports.allQuizes=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    let token=req.header("x-auth-token");
    if(!token) return res.status(401).send({
        ok:false,
        error:"access denied . No token Provided"
    })
    else{
        try {
            let decodedtoken=jwt.verify(token,process.env.privatekey);
            req.user=decodedtoken;
            await quizModel.find({}).then((data)=>{
                res.send(data);
                console.log(data)
            }).catch((e)=>{
                console.log(e)
            })
            next();
        } catch (error) {
            return res.status(401).send({
                ok:false,
                error:"access denied . No token Provided"
            })
        }
    }
    
}
module.exports.addQuiz=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    let token=req.header("x-auth-token");
    if(!token) return res.status(401).send({
        ok:false,
        error:"access denied . No token Provided"
    })
    else{
        try {
            let decodedtoken=jwt.verify(token,process.env.privatekey);
            req.user=decodedtoken;
            await quizModel.create(req.body).then((data)=>{
                res.send(data);
            }).catch((e)=>{
                console.log(e);
            });
        } catch (error) {
            res.status(401).send({
                ok:false,
                error:"access denied . No token Provided"
            })
        }
    }
    
}

module.exports.quizesByUserId=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    let array=[];
    let token=req.header("x-auth-token");
    if(!token) return res.status(401).send({
        ok:false,
        error:"access denied . No token Provided"
    });
    else{
        try {
            let decodedtoken=jwt.verify(token,process.env.privatekey);
            req.user=decodedtoken;
            await quizModel.find({}).then((data)=>{
                data.map((quiz)=>{
                    if(quiz.auteur==req.params.user || quiz.listesetudiant.includes(req.params.user)){
                        array.push(quiz)
                    }
                })
                res.send(array)
            })
            next();
        } catch (error) {
            return res.status(401).send({
                ok:false,
                error:"access denied . No token Provided"
            })
        }
    }
    
}

module.exports.modifyQuiz=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    if(!token) return res.status(401).send({
        ok:false,
        error:"access denied . No token Provided"
    });
    else{
        try {
            let decodedtoken=jwt.verify(token,process.env.privatekey);
            req.user=decodedtoken;
            await quizModel.findByIdAndUpdate({_id:req.params.id},req.body).then((data)=>{
                res.send(data)
            }).catch((e)=>{
                console.log(e)
            })
            next();
        } catch (error) {
            return res.status(401).send({
                ok:false,
                error:"access denied . No token Provided"
            });
        }
    }
    
}

module.exports.deleteQuiz=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    let token=req.header("x-auth-token");
    if(!token) return res.status(401).send({
        ok:false,
        error:"access denied . No token Provided"
    })
    else{
        try {
            let decodedtoken=jwt.verify(token,process.env.privatekey);
            req.user=decodedtoken;
            await quizModel.findByIdAndDelete(req.params.id).then(()=>{
                console.log(req.params.id+" succesfully deleted");
            }).catch((e)=>{
                console.log(e);
            })
            next();
        } catch (error) {
            return res.status(401).send({
                ok:false,
                error:"access denied . No token Provided"
            })
        }
    }
    
}
module.exports.addTentatives=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    // let array=[]
    let token=req.header("x-auth-token");
    if(!token) return res.status(401).send({
        ok:false,
        error:"access denied . No token Provided"
    })
    else{
        try {
            let decodedtoken=jwt.verify(token,process.env.privatekey);
            req.user=decodedtoken;
            quizModel.findById(req.params.id).then(async(data)=>{
                // array=data.lalistesdestentative;
                data.lalistesdestentative.push({
                    etudiant:req.body.etudiant,
                    tentatives:req.body.tentatives
                });
                await quizModel.findByIdAndUpdate({_id:req.params.id},data).then(()=>{
                    console.log(req.params.id+" is updated")
                })
            })  
        } catch (error) {
            return res.status(401).send({
                ok:false,
                error:"access denied . No token Provided"
            })
        }
    }
    
}