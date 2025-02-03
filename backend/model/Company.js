const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const {Schema} = mongoose;

const CompanySchema = new Schema({
    company_id:{
        type:Number 
    },
    user_id:{
        type:Number 
    },
    company_name:{
        type:String,
        required:false,
    },
    company_email:{
        type:String,
        required:false,
    },
    contact_number:{
        type:String,
        required:false,
    },
    role:{
        type: String,
        enum: ['Employer', 'Candidate'],
        default:'Employer'
    },
    company_short_desc:{
        type:String,
        required:false,
    },
    company_desc:{
        type:String,
        required:false,
    },
    copany_logo:{
        type:String,
        required:false,
    },
    website_url:{
        type:String,
        required:false
    },
    employer_count:{
        type:Number,
        required:false
    },
    city:{
        type:String,
        required:false
    },
    state:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:false
    },
    pincode:{
        type:String,
        required:false
    }, 
    status:{
        type:String,
        enum: ['Active','In-Active'],
        required: false,
        default:'Active'
    }
});

CompanySchema.plugin(AutoIncrement, { inc_field: 'company_id' });

module.exports = mongoose.model("company",CompanySchema);