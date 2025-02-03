const express = require('express');
const {body} = require('express-validator');
const {getAllUsers,addUser,loginUser,getUserByCompanyId} =require('../controller/User_controller');
const router = express.Router();

//Login
router.post('/login',[
    body('email','it should be email').isEmail(), 
    body('password','password must be least 5 lenth').isLength({min:5})
],loginUser);

//Get Users List
router.get('/',getAllUsers);

//Add User
router.post('/add',[
    body('email','it should be email').isEmail(),
    body('full_name','first name validation error').isLength({min:2}), 
    body('password','password must be least 5 lenth').isLength({min:5}),
    body('role')
],addUser);
//get user by company id    
 router.get("/:id",getUserByCompanyId)   

    

module.exports = router;