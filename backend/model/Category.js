const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const {Schema} = mongoose;

const CategorySchema = new Schema({
    category_id:{
        type:Number,
    },
    category_name:{
        type:String,
        required:true,
    }, 
    icon:{
        type:String,
        required:true,
    },
    job_count:{
        type:Number,
        required:true,
    },
    is_featured:{
        type:String,
        enum:['Yes','No'],
        default:'No',
        required:true,
    },
    status:{
        type:String,
        enum:['Active','In-Active'],
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

});

CategorySchema.plugin(AutoIncrement, { inc_field: 'category_id' });

module.exports = mongoose.model("category",CategorySchema);