const jwt = require('jsonwebtoken');
const usersModel = require('../models/users.model');



const authentification = async (req, res, next) => {
    try {
        // Récupère et vérifie le token d'authentification dans le header Authorization
        const authToken = req.header('Authorization').replace('Bearer ', '');

        // Vérifie et décode le token avec ta clé secrète "token"
        const decodedToken = jwt.verify(authToken, "token");

        // Trouve l'utilisateur en fonction du _id du token décodé et du token d'authentification
        const user = await usersModel.findOne({ _id: decodedToken._id, 'authTokens.authToken': authToken });

        // Si aucun utilisateur n'est trouvé, lance une erreur
        if (!user) throw new Error();

        // Ajoute l'utilisateur et le token à l'objet req pour que les prochains middlewares puissent y accéder
        req.user = user;
        // req.token = authToken;
        req.authToken = authToken;

        // Passe au middleware suivant ou à la route suivante
        next();
    } catch (err) {
        // Si une erreur survient, renvoie une réponse 401 Unauthorized
        res.status(401).send("You need to authenticate.");
    }
};




module.exports = authentification;