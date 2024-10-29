const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    faction: String,
    army: String,
    unite: {
        type:String,
    },
    type: String,
    points: [Number], // Tableau des valeurs de points
    figurines: [{
        count: { type: Number, required: true },  // Nombre de figurines
        selected: { type: Boolean, default: false } // Indique si cette quantité est sélectionnée
    }], // Tableau des options de figurines
    stats: {
        mouvement: Number,
        endurance: Number,
        sauvegarde: [String], // Ex: "3+", "4+"
        points_de_vie: Number,
        commandement: Number,
        controle_objectif: Number,
    },
    armes: [
        {
            name: {
                type: String,
            },
            selected: {
                type: Boolean,
                default: false,
            },
            portee:{
                type: Number,
            },
            attaque: {
                type: Number,
            },
            force: {
                type: Number,
            },
            C_T: { // Capacité de toucher
                type: Number,
            },
            PA: {
                type: Number,
            },
            degats: {
                type: Number,
            },
            capacites: {
                type: [String], // Ex: ["A", "D3"]
            }
        }
    ],
    aptitudes: [
        {
            name: {
                type: String,
            },
            description: String
        }
    ],
    aptitudes_base: [
        {
            name: {
                type: String,
            },
            description: String
        }
    ],
    mots_cles: [String],
});


module.exports = mongoose.model('units',unitSchema);
