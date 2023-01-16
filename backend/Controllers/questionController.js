const questionModel=require('../Models/questionModel');
require('dotenv').config();
const jwt=require('jsonwebtoken')
module.exports.allQuestions=async(req,res,next)=>{
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
    try {
        let decodedtoken=jwt.verify(token,process.env.privatekey);
        req.user=decodedtoken;
        await questionModel.find({}).then((data)=>{
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
        let token=req.header("x-auth-token");
        if(!token) return res.status(401).send({
            ok:false,
            error:"access denied . No token Provided"
        })
        try {
            let decodedtoken=jwt.verify(token,process.env.privatekey);
            req.user=decodedtoken;
            await questionModel.create(req.body).then((data)=>{
                res.send(data)
            }).then((e)=>{
                console.log(e)
            })
        } catch (error) {
            res.status(401).send({
                ok:false,
                error:"access denied . No token Provided"
            })
        }
        
    
    }
}

module.exports.modifyQuestion=(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    if(!token) return res.status(401).send({
        ok:false,
        error:"access denied . No token Provided"
    })
    else{
        try {
            let decodedtoken=jwt.verify(token,process.env.privatekey);
            req.user=decodedtoken;
            questionModel.findByIdAndUpdate({_id:req.params.id},req.body).then((data)=>{
                res.send(data);
            }).catch((e)=>{
                console.log(e);
            });
            next();

        } catch (error) {
            return res.status(401).send({
                ok:false,
                error:"access denied . No token Provided"
            })
        }

        
    }
    
}

module.exports.deleteQuestion=(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    if(!token) return res.status(401).send({
        ok:false,
        error:"access denied . No token Provided"
    })
    else{
        
        try {
            let decodedtoken=jwt.verify(token,process.env.privatekey);
            req.user=decodedtoken;
            questionModel.findByIdAndDelete(req.params.id).then(()=>{
                console.log(req.params.id+" is deleted succesfully");
            }).catch((e)=>{
                console.log(e);
            })
        } catch (error) {
            return res.status(401).send({
                ok:false,
                error:"access denied . No token Provided"
            })
        }
    }
    
}
