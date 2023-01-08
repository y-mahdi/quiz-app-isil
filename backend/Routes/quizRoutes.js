const express=require('express');
const {allQuizes,quizesByUserId,modifyQuiz,deleteQuiz} =require('../Controllers/quizController');
const router=express.Router();

router.get('/'); //all quizes

router.get('/quiz/:user') // quiz invited to or created by a user

router.post('/quiz');  //post a quiz

router.put('/quiz/:id');  //Modify a quiz   

router.delete('/quiz/:id');  //delete a quiz   