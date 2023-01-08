const express=require('express');
const {addUser,modifyUser,deleteUser}=require('../Controllers/userController');
const router=express.Router();

router.post('/user',addUser) //post user

router.put('/user/:id',modifyUser) //modify user

router.delete('/user/:id',deleteUser) //delete user


module.exports=router;