const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const path=require('path')
//routes 
const routerUser=require('./Routes/userRoutes');
const routerQuiz=require('./Routes/quizRoutes');
const routerQuestion =require('./Routes/questionRoutes');
const AuthRouter=require('./Routes/auth');
//Middlewear 
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));

//Api Key

//  use Routes
const cors = require('cors');
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions)); 
app.use(routerQuiz);
app.use(routerQuestion);
app.use(routerUser);
app.use(AuthRouter)

 // Express static and json


//Exports app

module.exports=app;