const Job = require('../model/Jobs');

const getAllJobs = async (req, res, next) => {
    try{
        const jobs = await Job.find();
        return res.status(200).json({success:true , data:jobs});
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}


const getJobById = async (req, res, next) => {
    try{
        let job_id = req.params.id;
        console.log("Job ID : ",job_id);
        let job_details = await Job.aggregate([
            {
                $match:{
                    job_id:Number(job_id)
                }
            },
            {
                $lookup: {
                    from: "categories",
                    localField:"category_id",
                    foreignField:"category_id",
                    as: "categoryDetails"
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
        // console.log("Job Details : ",job_details);
        if(!job_details){
            return res.status(400).json({success:false,message:"Job details not found"});
        }

        return res.status(200).json({success:true,message:"Job details found successfully",data:job_details});
    }
    catch(err){
        console.log(err);
        return res.status(400).json(err);
    }
}

const addJobs = async (req, res, next) => {
    try{ 
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
            publish_on:Date.now(),
            is_publish:req.body.is_publish,
            start_date:Date.now(),
            end_date: Date.now() + (5 * 24 * 60 * 60 * 1000),
            created_on:Date.now(),
            created_by:req.body.created_by,


        }).then(res.json({success:true}))
        // res.status(200).json({add_job});
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}
const getJobsByCompanyId = async (req,res,next) => {
    try{
        const company_id = req.params.id;
        const jobList = await Job.find({company_id:company_id,status:"Active"});
        if(!jobList){
            return res.status(400).json({success:false,message:"No data found"})
        }

        return res.status(200).json({success:true,message:"Job Details get Successfully",data:jobList});
    }
    catch(err){
        console.log(err);
        return res.status(200).json({success:false,error:err});
    }
}
const deleteJob = async (req,res,next) => {
    try{
        const job_id = req.body.job_id;
        const job_details = await Job.findOne({job_id:job_id});

        if(!job_details){
            return res.status(400).json({success:false,message:"Job not found!!"});
        }

        job_details.status = 'Closed';
        job_details.deleted_by = req.body.user_id;
        job_details.deleted_on = Date.now();
        await job_details.save();

        return res.status(200).json({success:true,message:"Job Deleted!!"});
        
    }
    catch(err){
        console.log(err)
        return res.status(400).json({err});
    }
}
const updateJobBYId = async (req, res, next) => {
    try{
        console.log("JobId :- ",req.params.id);
        console.log("JobPost :- ",req.body);
        const job_id = req.params.id;
        const job_details = await Job.findOne({job_id:job_id});
        
        if(!job_details){
            return res.status(400).json({success:false,message:"Failed to update"});
        }

        job_details.company_id = req.body.company_id;
        job_details.category_id = req.body.category_id;
        job_details.job_title = req.body.job_title;
        job_details.job_short_desc = req.body.job_short_desc;
        job_details.job_desc = req.body.job_desc;
        job_details.job_type = req.body.job_type;
        job_details.number_of_openings = req.body.number_of_openings;
        job_details.location = req.body.location;
        job_details.qualification = req.body.qualification;
        job_details.experience = req.body.experience;
        job_details.salary = req.body.salary;
        job_details.pay_type = req.body.pay_type;
        job_details.skills = req.body.skills;  
        await job_details.save();
        return res.status(200).json({success:true,message:"Job updated succesfully"});
    }
    catch(err){
        console.log(err);
        return res.status(400).json({err});
    }
}

module.exports = {getAllJobs,addJobs,getJobById,getJobsByCompanyId,deleteJob,updateJobBYId};

