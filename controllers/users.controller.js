const UsersModel = require('../models/users.model');




module.exports.setUsers = async(req,res)=>{

    if(req.body.message){
        res.json({message:"setUsers"});
    }
    else{
        res.status(400).json({message: "Il manque un message"})
    }

}