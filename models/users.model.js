const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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


usersSchema.pre('save', async function(){
    if(this.isModified('password')) this.password = await bcrypt.hash(this.password, 8);
});



module.exports = mongoose.model('users',usersSchema);















