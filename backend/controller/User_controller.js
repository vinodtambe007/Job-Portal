const User = require('../model/User');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const Candidate = require('../model/Candidate');
const Company = require('../model/Company');

const SECRET_KEY = 'vindoChiItem';

const loginUser = async (req, res, next) => {
    //Validation in express
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Extract specific error messages 
        return res.status(400).json({error:errors.array()});
    }
    let email = req.body.email;
    try{
        //get user data
        let userdata = await User.find({email});

        // return res.status(200).json({data:userdata});
        if(userdata.length == 0){
            return res.status(400).json({error:'User not found'});
        }

        //Compare password
        const pwd_compare = await bcrypt.compare(req.body.password,userdata[0].pass);
        if(!pwd_compare){
            return res.status(400).json({error:'Incorrect password'});
        }
        console.log(userdata[0].role)
        const data = {
            user: {
                id:userdata[0]._id,
                email:userdata[0].email,
                user_id:userdata[0].user_id,
                role:userdata[0].role,// Access email from the first element of userdata array
            }
        }
        const auth_token = jwt.sign(data,SECRET_KEY);
        return res.status(200).json({success:true,auth_token:auth_token,user_data:data});

    }
    catch(err){
        console.log(err);
        return res.status(400).json({success:false,error:err.message});
    }
}
//
const getUserByCompanyId = async (req, res, next) => {
    try{
        let company_id = req.params.id;
        console.log("Company ID : ",company_id);
        let user_details = await User.aggregate([
            {
                $match:{
                    company_id:Number(company_id)
                }
            },
            {
                $lookup: {
                    from: "companies",
                    localField:"company_id",
                    foreignField:"company_id",
                    as: "companyDetails"
                }
            }
        ]);
        console.log("User Details : ",user_details);
        if(!user_details){
            return res.status(400).json({success:false,message:"User details not found"});
        }

        return res.status(200).json({success:true,message:"Job details found successfully",data:user_details});
    }
    catch(err){
        console.log(err);
        return res.status(400).json(err);
    }
}

//

const getAllUsers = async (req, res, next) => {
    try{
        //Get Query
        const users = await User.find();
        return res.status(200).json({users});
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

const addUser = async (req, res, next) => {
    try{
        // console.log(req.body)
        // return res.status(200).json({success:true,data:req.body});
        //Validation in express
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // Extract specific error messages
            const errorMessages = errors.array().map(error => error.msg);
            return res.status(400).json({success:false, errors: errorMessages });
        }

        const user_email = req.body.email;
        const exist_email = await User.find({email:user_email});
        // console.log(exist_email);

        if(exist_email.length > 0){
            return res.status(400).json({success:false,message:"Email already exists"});
        }

        //To incrypt the password
        const salt = await bcrypt.genSalt(10);
        const secure_pass = await bcrypt.hashSync(req.body.password, salt);

        //Add query
       
        const add_user = await User.create({
            full_name:req.body.full_name, 
            role:req.body.role, 
            email:req.body.email,
            pass:secure_pass
        })
        console.log(add_user);
        if(add_user){
            if(req.body.role=='Candidate'){
                const add_candidate = await Candidate.create({
                    user_id: add_user.user_id,
                    full_name: add_user.full_name, 
                    role: add_user.role,
                    email: add_user.email,
                })
                if(!add_candidate){
                    await Candidate.deleteOne({user_id:add_user.user_id});
                    return res.status(400).json({success:false,message:"Failed to registered!"});    
                }
            }
            if(req.body.role=='Employer'){
                const add_company = await Company.create({
                    user_id: add_user.user_id, 
                    company_name: add_user.full_name,
                    role: add_user.role,
                    company_email: add_user.email,
                })
                if(!add_company){
                    await Company.deleteOne({user_id:add_user.user_id});
                    return res.status(400).json({success:false,message:"Failed to registered!"});    
                }
            }
        }          
                  
        return res.status(200).json({success:true,message:"User registered successfully!",data:add_user});
        
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

module.exports = {getAllUsers,addUser,loginUser,getUserByCompanyId}