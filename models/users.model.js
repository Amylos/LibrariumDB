const mongoose = require('mongoose');


const usersSchema = mongoose.Schema(
    {
        pseudo:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true,
        },
        mail:{
            type:String,
            required:true
        },
        role:{
            type:String,
        }
    },
    {
        timestamps:true,
    }
)


module.exports = mongoose.model('users',usersSchema);















