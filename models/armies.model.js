const mongoose = require('mongoose');

const armySchema = mongoose.Schema(
    {
        faction:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model('armies',armySchema);

