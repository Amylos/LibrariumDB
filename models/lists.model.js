const mongoose = require('mongoose');
const validator = require('validator');



const listSchema = mongoose.Schema(
    {
        author:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
        },
        userId:{
            type:String,
            required:true,
        },
        faction:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
        },
        army:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
        },
        detachments:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
        },
        points:{
            type:Number ,
            required:true,
            lowercase:true,
            trim:true,
        },
        unitsNumber:{
            type:Number ,
            required:true,
            lowercase:true,
            trim:true,
        },
        figurinesNumber:{
            type:Number ,
            required:true,
            lowercase:true,
            trim:true,
        },
        units:[{
            unit:{

            }
        }]
    }
);

module.exports = mongoose.model('lists',listSchema);

