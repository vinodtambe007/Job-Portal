const Category = require('../model/Category');

const CategoryController = {
    //Get all categories 
    getAllCategory : async (req, res, next) => {
        try{
            const categories = await Category.find({});
            return res.status(200).json({success:true,data:categories});
            // console.log([categories])
            // return res.status(200).json([categories]);


        }
        catch(err){
            console.log(err);
            return res.status(400).json({err});
        }
    },

    //get categories by limit and sort asc or desc
    getCategoryByLimit : async (req, res, next) => {
        try{
            const limit = req.params.limit; 
            const categories = await Category.find({}).sort({created_on: -1 }).limit(limit);
            return res.status(200).json({success:true,data:categories});
        }
        catch(err){
            console.log(err);
            return res.status(400).json({err});
        }
    },

    //add category
    addCategory : async (req, res, next) => {
        try{
            const add_category = await Category.create({
                category_name:req.body.category_name, 
                icon:req.body.icon, 
                job_count:req.body.job_count, 
                created_by:1,  
                created_on:Date.now(),
            })
            return res.status(200).json({success:true,message:"Category added successfully"});
        }
        catch(err){
            console.log(err);
            return res.status(400).json({err});
        }
    },


    //get category by id
    getCategoryById : async (req, res,next) => {
        try{
            let category_id = req.params.id;
            let category_details = await Category.findOne({category_id:category_id});
            return res.status(200).json({success:true,data:category_details});
        }
        catch(err){
            console.log(err)
            return res.status(200).json(err);
        }
    },

    //update category
    updateCategory : async (req, res, next) => {
        try{
            let category_id = req.params.id;
            let category_details = await Category.findOne({category_id:category_id});
            // console.log("Category :- ",category_details);

            if(!category_details){
                return res.status(404).json({success:false,message:"Category not found"});
            }

            category_details.category_name = req.body.category_name;
            category_details.updated_by = 1;
            category_details.updated_on = Date.now();
            await category_details.save();

            return res.status(200).json({ success: true, message: 'Category updated successfully', data: category_details });
        }
        catch(err){
            console.log(err);
            return res.status(400).json(err);
        }
    },

    //delete category
    deleteCategoryById : async (req, res, next) => {
        try{
            await Category.deleteOne({category_id:req.params.id});
            return res.status(200).json({success:true,message:"Deleted successfully"});
        }
        catch(err){
            console.log(err);
            return res.status(400).json(err);
        }
    }

}


module.exports = {CategoryController}