require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/mongodb');
const app = express();
const port = process.env.PORT;


/// A enlever en prod
app.use(cors({
    origin: 'http://localhost:3000', // Permet uniquement les requêtes de cette origine
    methods: ['GET', 'POST','DELETE','PATCH', 'PUT'], // Méthodes autorisées
}));

// Connexion à la base de donnée mongoDB
connectDB();


// Middleware qui permet de traiter les données de la requête
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// Redirection vers les routes
app.use("/users",require("./routes/users.routes"));
app.use("/units",require("./routes/units.routes"));
app.use("/detachments",require('./routes/detachments.routes'));
app.use("/lists", require("./routes/lists.routes"));


// Ecoute sur le port
app.listen(port,()=>{
    console.log('Server is running on port ',port);
})
