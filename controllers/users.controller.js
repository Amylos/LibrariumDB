const usersModel = require('../models/users.model');
const UsersModel = require('../models/users.model');




module.exports.getUsers = async(req,res)=>{
    const users = await usersModel.find();
    res.status(200).json(users);
};



module.exports.getUser = async (req, res) => {
    const { id } = req.params;

    // Vérifie si l'ID est un ObjectId valide
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid user ID format" });
    }

    try {
        const user = await usersModel.findById(id);

        if (!user) {
            // Renvoie 404 si l'utilisateur n'est pas trouvé
            return res.status(404).json({ message: "User not found" });
        }

        // Renvoie les données de l'utilisateur si trouvé
        res.status(200).json(user);
    } catch (error) {
        // Gère les erreurs liées à la base de données ou autres
        console.error("Database error:", error);
        res.status(500).json({ message: "An error occurred while fetching the user" });
    }
};



module.exports.setUser = async(req,res)=>{
    if(req.body){
        const user = await usersModel.create({
            pseudo: req.body.pseudo,
            password: req.body.password,
            mail: req.body.mail
        });
        res.status(200).json(user);
    }
    else{
        res.status(400).json({message: "body is missing"})
    }
};


module.exports.editUser = async(req,res) =>{
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


module.exports.deleteUser = async(req,res)=>{
    const userId = req.params.id

    try{
        const user = await usersModel.deleteOne(userId);
        if(user){
            res.status(200).json(req.body);
        }
        else{
            res.status(400).json('User not find');
        }
    }
    catch(err){
        res.status(400).json(err);
    }
}


module.exports.changeUser = async(req,res)=>{
    try{
        const user = await usersModel.findByIdAndUpdate(
            req.params.id
        )
        if(user){
            req.status(200).json(user);
        }
        else{
            req.status(400).json("User not find");
        }
    }
    catch(err){
        res.status(400).json(err);
    }
}



// deleteOne()
// deleteMany()
// findOne()
// findByIdAndUpdate()
// findOneAndDelete()
// countDocuments()

