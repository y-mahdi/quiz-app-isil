const express=require('express');

const router=express.Router();

router.get('/question'); //get All questions

router.post('/question'); //add a question

router.put('/question/:id'); //modify a question

router.delete('/question/:id'); //delete a question
