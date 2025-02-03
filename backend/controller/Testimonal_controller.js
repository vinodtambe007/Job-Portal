const Testimonal = require("../model/Testimonal")

const getTestimonal = async (req,res) =>{
    try {
        const data = await Testimonal.find()
        if(!data){
            return res.status(400).json({status:false,message:"no data found"})
        }
        return res.status(200).json({success:true,data:data})
    } catch (error) {
        return res.status(400).json({error:error})
    }
}

const addTestimonal = async (req,res) =>{
    try {
        const addTest = await Testimonal.create({
            name : req.body.name,
            position : req.body.position,
            reviews : req.body.reviews,
            image : req.body.image
        });
        
        if(!addTest){
            return res.status(400).json({success:false,message:"Testimonal Not added succesfully"})
        }
        return res.status(200).json({success:true,message:"Testimonal added successfully", data :addTest});
        
    } catch (error) {
        return res.status(400).json({success:false,error:error})
    }
   
}

module.exports = {addTestimonal , getTestimonal}