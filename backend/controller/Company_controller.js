const Company = require('../model/Company');

const getAllCompanies = async (req, res, next) => {
    try{
        const companies = await Company.find();
        return res.status(200).json({companies});
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

const getCompanyById = async (req, res, next) => {
    try{
        console.log(req.params.id)
        const companyData = await Company.find({user_id:req.params.id})
        console.log("Company Data :- ",companyData)
        if(!companyData){
            return res.status(400).json({success:false,message:"Company details not found"});
        }
        return res.status(200).json({success:true,message:"Company details found successfully!", data : companyData});
    }
    catch(err){
        console.log(err)
        return res.status(400).json({err});
    }

}

const addCompany = async (req, res, next) => {
    try{
        const add_company = await Company.create({
            copany_name:req.body.company_name,
            employer_count:req.body.employer_count,
            city:req.body.city,
            address:req.body.address,
            pincode:req.body.pincode,
            website_url:req.body.website_url 
        })
        return res.status(200).json({success:true,message:"Company added successfully"});
        
    }
    catch(err){
        console.log(err);
        return res.status(400).json({err});
    }
}
//Update Company
const updateCompany = async (req,res,next) => {
    try{
        let company_id = req.params.id;
        let company_details = await Company.findOne({user_id:company_id});

        if(!company_details){
            return res.status(400).json({success:false,message:"Company not found"})
        }

        company_details.company_name = req.body.company_name;
        company_details.company_email = req.body.company_email;
        company_details.company_short_desc = req.body.company_short_desc;
        company_details.company_desc = req.body.company_desc;
        company_details.contact_number = req.body.contact_number;
        company_details.website_url = req.body.website_url;
        company_details.city = req.body.city;
        company_details.state = req.body.state;
        company_details.address = req.body.address;
        company_details.pincode = req.body.pincode; 
        await company_details.save();

        return res.status(200).json({success:true,message:"Company added successfully",data:company_details});
    }
    catch(err){
        console.log(err)
        return Result.status(400).json({err});
    }
}
const addJobs = async (req, res, next) => {
    try{ 
        console.log(req.body.job_title);
        const add_job = await Job.create({
            company_id:req.body.company_id,
            category_id:req.body.category_id,
            job_title:req.body.job_title,
            job_short_desc:req.body.job_short_desc,
            job_desc:req.body.job_desc,
            job_type:req.body.job_type,
            number_of_openings:req.body.number_of_openings,
            location:req.body.location,
            qualification:req.body.qualification,
            experience:req.body.experience,
            salary:req.body.salary,
            pay_type:req.body.pay_type,
            skills:req.body.skills,
            date:Date.now(),
            // publish_on:Date.now(),
            // is_publish:req.body.is_publish,
            // start_date:Date.now(),
            // end_date: Date.now() + (5 * 24 * 60 * 60 * 1000),
            created_on:Date.now(),
            created_by:req.body.created_by,


        }) 
        res.status(200).json({add_job});
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}



module.exports = {getAllCompanies,addCompany,getCompanyById,updateCompany,addJobs};