const express=require('express');
const {addUser,modifyUser,deleteUser,LoginUser}=require('../Controllers/userController');
const router=express.Router();

router.post('/user',addUser) //post user

router.put('/user/:id',modifyUser) //modify user

router.delete('/user/:id',deleteUser) //delete user

router.post('/auth',LoginUser);

module.exports=router;