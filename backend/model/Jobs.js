const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose); 

const {Schema} = mongoose;

// const categorySchema = new Schema({
//     category_name: String,
//     // Other fields of category
//     category_id: Number // Custom category_id field
//   });

const JobsSchema = new Schema({
    job_id:{
        type:Number
    },
    company_id:{
        type:Number,
        required:false,
    },
    category_id: {
        type: Number,
        required: false,
        // ref: 'Category' // Use the correct model name here
    },
    job_title:{
        type:String,
        required:false,
    },
    job_short_desc:{
        type:String,
        required:false
    },
    job_desc:{
        type:String,
        required:false
    },
    job_type: {
        type: String,
        enum: ['Remote', 'On-Site'],
        required: [false, 'Job Type must be required']
    },
    number_of_openings: {
        type: String, 
        required: false
    },
    location:{
        type:String,
        required:false
    },
    qualification:{
        type:String,
        required:false
    },
    experience:{
        type:String,
        required:false
    },
    salary:{
        type:String,
        required:false
    },
    pay_type:{
        type:String,
        enum:['Hourly','Monthly','Yearly'],
        required:false
    },
    skills:{
        type:String,
        required:false
    },
    date:{
        type:Date,
        default: Date.now
    },
    publish_on:{
        type:Date,
        default: Date.now
    },
    is_publish:{
        type:String,
        enum:['Yes','No'],
        required:false
    },
    start_date:{
        type:Date,
        default: Date.now
    },
    end_date:{
        type:Date,
        default: Date.now
    },
    status:{
        type:String,
        enum:['Active','In-Active','Closed'],
        default: 'Active',
        required:false
    },
    created_on:{
        type:Date 
    },
    created_by:{
        type:Number
    },
    updated_on:{
        type:Date 
    },
    updated_by:{
        type:Number
    },
    deleted_on:{
        type:Date 
    },
    deleted_by:{
        type:Number
    }

})

JobsSchema.plugin(AutoIncrement, { inc_field: 'job_id' });

// const Category = mongoose.model('Category', categorySchema);
module.exports = mongoose.model("job",JobsSchema);