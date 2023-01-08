const express=require('express');
const app=express();
const path=require('path')
//routes 
const routerUser=require('./Routes/userRoutes');
const routerQuiz=require('./Routes/quizRoutes');
const routerQuestion =require('./Routes/questionRoutes');

//Middlewear 
//  use Routes
app.use(routerQuiz);
app.use(routerQuestion);
app.use(routerUser);
 // Express static and json

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

//Exports app

module.exports=app;