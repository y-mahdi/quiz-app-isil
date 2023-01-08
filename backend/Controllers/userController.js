const EtudiantModel=require('../Models/EtudiantModel');
const ProfessorModel=require('../Models/professorModel');

module.exports.addUser=(req,res,next)=>{
    if(req.body.type=='professor'){
        ProfessorModel.create({
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
        EtudiantModel.create({
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
module.exports.deleteUser=(req,res,next)=>{
    if(req.body.type=='professor'){
        ProfessorModel.findByIdAndDelete(req.params.id).then(()=>{
            console.log(req.params.id+" deleted")
        }).catch((e)=>{
            console.log(e);
        })
    }
}
