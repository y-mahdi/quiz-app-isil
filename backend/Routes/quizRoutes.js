const express=require('express');
const {allQuizes,addQuiz,quizesByUserId,modifyQuiz,deleteQuiz,addTentatives} =require('../Controllers/quizController');
const router=express.Router();

router.get('/',allQuizes); //all quizes

router.get('/quiz/:user',quizesByUserId) // quiz invited to or created by a user

router.post('/quiz',addQuiz);  //post a quiz

router.put('/quiz/:id',modifyQuiz);  //Modify a quiz   

router.delete('/quiz/:id',deleteQuiz);  //delete a quiz  

router.put('/tentatives/:id',addTentatives);

module.exports=router;