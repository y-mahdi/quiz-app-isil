const EtudiantModel=require('../Models/EtudiantModel');
const ProfessorModel=require('../Models/professorModel');

module.exports.addUser=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    if(req.body.type=='professor'){
            
            await ProfessorModel.create({
                nom:req.body.nom,
                email:req.body.email,
                password:req.body.password
            }).then((data)=>{
                res.send(data)  
            }).catch((e)=>{
                console.log(e);
            })
        
        
    }
    else if(req.body.type=='etudiant'){
            console.log(req.body)
            await EtudiantModel.create({
                nom:req.body.nom,
                email:req.body.email,
                password:req.body.password
            }).then((data)=>{
                res.send(data)
            }).catch((e)=>{     
                console.log(e);
            })
        
        
    }
    next();
}
module.exports.modifyUser=(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    let object={}
    if(req.body.type=='professor'){
        if(req.body.nom){
            object.nom=req.body.nom;
        }
        else if(req.body.email){
            object.email=req.body.email;
        }
        else if(req.body.password){
            object.password=req.body.password;
        }
        ProfessorModel.findByIdAndUpdate({_id:req.params.id},object).then((data)=>{
            res.send(data);
        }).catch(e=>{
            console.log(e);
        })
    }
    else if(req.body.type=='etudiant'){
        if(req.body.nom){
            object.nom=req.body.nom;
        }
        else if(req.body.email){
            object.email=req.body.email;
        }
        else if(req.body.password){
            object.password=req.body.password;
        }
        EtudiantModel.findByIdAndUpdate({_id:req.params.id},object).then((data)=>{
            res.send(data);
        }).catch(e=>{
            console.log(e);
        })
    }
    next();
}
module.exports.deleteUser=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    if(req.body.type=='professor'){
        ProfessorModel.findByIdAndDelete(req.params.id).then(()=>{
            console.log(req.params.id+" deleted")
        }).catch((e)=>{
            console.log(e);
        })
    }
    else if(req.body.type=='etudiant'){
        ProfessorModel.findByIdAndDelete(req.params.id).then(()=>{
            console.log(req.params.id+" deleted")
        }).catch((e)=>{
            console.log(e);
        })
    }
}
module.exports.LoginUser=async(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    if(req.body.type=='professor'){
        await ProfessorModel.findOne({email:req.body.email}).then((data)=>{
            console.log(req.body)
            if(data.password==req.body.password){
                res.send({"info":true,data:data})
                console.log("correct infos")
            }
            else{
                console.log("not correct"+data.password)
                res.send({
                    "info":false
                }) 
            }
        }).catch((e)=>{
            res.send({
                "info":false
            }) 
        })
    }
    else if(req.body.type=='etudiant'){
            
            await EtudiantModel.findOne({email:req.body.email}).then((data)=>{
                console.log(req.body)
                if(data.password==req.body.password){
                    res.send({"info":true,data:data})
                    console.log("correct infos")
                }
                else{
                    console.log("not correct"+data.password)
                    res.send({
                        "info":false
                    }) 
                }
            }).catch((e)=>{
                res.send({
                    "info":false
                }) 
            })
        
    }   
}