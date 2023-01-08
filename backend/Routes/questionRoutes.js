const express=require('express');
const {allQuestions,postQuestion,modifyQuestion,deleteQuestion}=require('../Controllers/questionController');
const router=express.Router();

router.get('/question',allQuestions); //get All questions

router.post('/question',postQuestion); //add a question

router.put('/question/:id',modifyQuestion); //modify a question

router.delete('/question/:id',deleteQuestion); //delete a question

module.exports=router;