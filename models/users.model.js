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
        }
    },
    {
        timesstamps:true,
    }
)


module.exports = mongoose.model('users',usersSchema);















