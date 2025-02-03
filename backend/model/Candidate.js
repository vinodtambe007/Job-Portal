const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const {Schema} = mongoose;

const CandidateSchema = new Schema({
    candidate_id:{
        type:Number
    },
    user_id:{
        type:Number
    },
    full_name:{
        type:String,
        required:false
    }, 
    email:{
        type:String,
        required:false,
        unique: [true,'Email should be unique']
    },
    role: {
        type: String,
        enum: ['Employer', 'Candidate'],
        default:'Candidate'
    },
    profile_pic:{
        type:String,
        required:false
    },
    resume:{
        type:String,
        required:false
    },
    linkedIn_url:{
        type:String,
        required:false
    },
    github_url:{
        type:String,
        required:false
    },
    mobile_number:{
        type:String,
        required:false
    },
    experience:{
        type:String,
        enum:['Fresher','Experienced'],
        required:false
    },
    address:{
        type:String,
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
    status:{
        type:String,
        enum:['Active','In-Active'],
        default:'Active'
    },
    years_of_experience:{
        type:String,
        require:false
    },

})



CandidateSchema.plugin(AutoIncrement, {inc_field: 'candidate_id'});

module.exports = mongoose.model("candidate",CandidateSchema);