const usersModel = require('../models/users.model');
const UsersModel = require('../models/users.model');




module.exports.getUsers = async(req,res)=>{
    console.log(req.body);
    const users = await usersModel.find();
    res.status(200).json(users);
};


module.exports.setUser = async(req,res)=>{
    console.log(req.body);
    if(req.body){
        const user = await usersModel.create({
            pseudo: req.body.pseudo,
            password: req.body.password
        });
        res.status(200).json(user);
    }
    else{
        res.status(400).json({message: "body is missing"})
    }
};


module.exports.editUser = async(req,res) =>{
    console.log(req.body);
    const user = await usersModel.findById(req.params.id);

    if(!user){
        res.status(400).json("This user does not exits");
    }

    const updateUser = await usersModel.findByIdAndUpdate(
        user,
        req.body,
        {new: true}
    )

    res.status(200).json(user);
}




