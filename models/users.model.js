const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')


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
            required:true,
            validate: {
                validator: function(v) {
                    return v.length >= 6 && v.length <= 30; // Validation de la longueur
                },
                message: props => `${props.value} is not a valid password !`
            }
        },
        pseudo:{
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















