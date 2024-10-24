const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    faction: String,
    unite: {
        type: String,
        unique: true
    },
    type: String,
    points: [Number], // Tableau des valeurs de points
    figurines: [Number], // Tableau des options de figurines
    stats: {
        mouvement: Number,
        endurance: Number,
        sauvegarde: [String], // Ex: "3+", "4+"
        points_de_vie: Number,
        commandement: Number,
        controle_objectif: Number,
    },
    armes: {
        type: Map, // Pour stocker des armes avec leurs caractéristiques
        of: new Schema({
            selected: Boolean,
            portee: Number,
            attaque: Number,
            force: Number,
            C_T: Number, // Capacité de toucher
            PA: Number,
            degats: Number,
            capacites: [String] // Ex: ["A", "D3"]
        })
    },
    aptidudes: Map, // Pour stocker les aptitudes personnalisées
    aptidudes_base: Map, // Aptitudes de base
    mots_cles: [String], // Mots-clés pour l'unité
});

module.exports = mongoose.model('units', unitSchema);
