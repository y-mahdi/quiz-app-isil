require('dotenv').config()
const jwt=require('jsonwebtoken');
module.exports.AuthApi=async(req,res,next)=>{
    console.log(process.env.passwordApiAdmin)
    if(req.body.user==process.env.userApiAdmin && req.body.pwd==process.env.passwordApiAdmin){
        const token=jwt.sign({
            id:req.body.user,
            roles:"admin"
        },process.env.privatekey,{expiresIn:"5m"})
        res.send({
            ok:true,
            token:token
        })
    }
    else{
        res.send({
            "message":"not found"
        })
    }
}