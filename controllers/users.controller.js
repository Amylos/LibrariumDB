const usersModel = require('../models/users.model');
const UsersModel = require('../models/users.model');




module.exports.setUsers = async(req,res)=>{
    console.log(req.body)
    if(!req.body.message){
        // res.status(400).json({message: "Messages is missing"})
    }

    const user = await usersModel.create({
        pseudo: req.body.pseudo,
        password: req.body.password
    });
    res.status(200).json(user);
};




