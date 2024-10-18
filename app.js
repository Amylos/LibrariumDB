require('dotenv').config();
const express = require('express');
const connectDB = require('./config/mongodb');
const app = express();
const port = process.env.PORT;

// Connexion à la base de donnée mongoDB
connectDB();


// Middleware qui permet de traiter les données de la requête
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// Redirection vers les routes
app.use("/users",require("./routes/users.routes"));


// Ecoute sur le port
app.listen(port,()=>{
    console.log('Server is running on port ',port);
})











