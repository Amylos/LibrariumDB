const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema(
    {
        mail:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        password:{
            type:String,
            required:true
        },
        pseudo:{
            type:String,
            required:true
        },
        role:{
            type:String,
        },
        authTokens:[{
            authToken:{
                type:String,
                required:true
            }
        }]
    },
    {
        timestamps:true,
    }
)




userSchema.methods.toJSON = function() {
    const user = this.toObject();
    delete user.password;
    // delete user.authTokens;
    delete user.__v;
    return user;
};


userSchema.methods.generateAuthTokenAndSaveUser = async function(){
    const authToken = jwt.sign({_id: this._id.toString()},"token" );
    this.authTokens.push({authToken});
    try {
        await this.save(); // Essaie de sauvegarder le document
    } catch (error) {
        console.error("Erreur lors de la sauvegarde :", error);
        throw new Error("Erreur lors de la sauvegarde du token");
    }
    return authToken;
}



userSchema.pre('save', async function(){
    if(this.isModified('password')) this.password = await bcrypt.hash(this.password, 8);
});




userSchema.statics.findUser = async (mail, password) => {
    const user = await mongoose.model('users').findOne({ mail }); // Utilise 'await' pour obtenir l'utilisateur
    if (!user) {
        throw new Error('Erreur : impossible de se connecter, utilisateur non trouvé');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password); // Utiliser 'await'

    if (!isPasswordValid) {
        throw new Error('Erreur : mot de passe invalide');
    }

    return user; // Retourner l'utilisateur si les informations sont correctes
};



module.exports = mongoose.model('users',userSchema);















