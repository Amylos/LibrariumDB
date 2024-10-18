const mongoose = require('mongoose');
require('dotenv').config();
const mongoDB = process.env.MONGO_DB_DATABASE;


const connectDB = async ()=>{
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(mongoDB);
    }
    catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;




