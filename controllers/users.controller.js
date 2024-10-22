const usersModel = require('../models/users.model');


//Log in User
module.exports.loginUser = async(req,res)=>{
    const {mail,password} = req.body;
    try{
        const user = await usersModel.findUser(mail,password);
        const authToken = await user.generateAuthTokenAndSaveUser();

        if(user){
            res.status(200).json({user});
        }
        else{
            res.status(400).json("User not find");
        }
    }
    catch(err){
        res.status(400).json("Mail or password incorrect.");
    }
}


//Log out User
module.exports.logoutUser = async(req,res)=>{
    try{
        req.user.authTokens = req.user.authTokens.filter((authToken)=>{
            return authToken.authToken !== req.authToken;
        });
        await req.user.save();
        res.status(200).send(req.user.authTokens);

    }
    catch(err){
        res.status(500).send(err);
    }
}

// Create User
module.exports.createUser = async(req,res)=>{
    const {pseudo,password,mail} = req.body;
    try{
        if(req.body){
            const user = await usersModel.create({
                pseudo: pseudo,
                password: password,
                mail: mail,
            });
            // const authToken = await user.generateAuthTokenAndSaveUser();

            res.status(200).json(user);
        }
        else{
            res.status(400).json({message: "body is missing"});
        }
    }
    catch(err){
        res.status(400).json(err);

    }
};

// Edit User
module.exports.editUser = async (req, res) => {
    try {
        // Trouver l'utilisateur par ID
        const user = await usersModel.findById(req.params.id);

        // Vérifier si l'utilisateur existe
        if (!user) {
            return res.status(404).json("This user does not exist");
        }

        // Mettre à jour l'utilisateur avec les nouvelles données
        const updatedUser = await usersModel.findByIdAndUpdate(
            req.params.id, // Utiliser l'ID de l'utilisateur ici
            req.body,
            { new: true } // Retourner l'utilisateur mis à jour
        );

        res.status(200).json(updatedUser); // Renvoie l'utilisateur mis à jour
    } catch (err) {
        res.status(400).json(err); // Renvoie l'erreur en cas d'échec
    }
}




module.exports.logoutUserAll = async(req,res)=>{
    try{
        req.user.authTokens = []
        await req.user.save();
        res.status(200).send(req.user.authTokens);

    }
    catch(err){
        res.status(500).send(err);
    }
}


module.exports.getUserMe = async(req,res)=>{
    res.send(req.user);
};




module.exports.getUsers = async(req,res)=>{
    try{
        const users = await usersModel.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(400).json(err);

    }
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









module.exports.deleteUser = async(req,res)=>{
    try {
        // Vérifie si l'utilisateur est bien défini dans req.user
        if (!req.user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Supprime l'utilisateur authentifié
        await req.user.deleteOne({_id:req.user._id});

        res.status(200).json({ message: "User deleted successfully", user: req.user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


module.exports.patchUser = async(req,res)=>{
    const updatedInfo = Object.keys(req.body);
    try{
        updatedInfo.forEach(update => req.user[update] = req.body[update]);
        await req.user.save();
        res.send(req.user);
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

