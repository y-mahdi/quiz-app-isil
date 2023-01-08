const express=require('express');

const router=express.Router();

router.post('/user') //post user

router.put('/user/:id') //modify user

router.delete('/user/:id') //delete user
