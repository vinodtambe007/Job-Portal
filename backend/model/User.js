const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose); 

const {Schema} = mongoose;

const UserSchema = new Schema({
    user_id:{
        type:Number 
    },
    full_name:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true,
        unique: [true,'Email should be unique']
    },
    role: {
        type: String,
        enum: ['Employer', 'Candidate'] 
    },
    mobile_number:{
        type:String,
        required:false
    },
    dob:{
        type:Date,
        required:false
    },
    pass:{
        type:String,
        required:true
    }
})

UserSchema.plugin(AutoIncrement, { inc_field: 'user_id' });

module.exports = mongoose.model("user",UserSchema);