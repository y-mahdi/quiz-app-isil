
const express=require('express');
const {AuthApi}=require('../Controllers/authController');
const router=express.Router();

router.post('/api/auth',AuthApi);


module.exports=router;