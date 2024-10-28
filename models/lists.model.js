const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const listSchema = new Schema({
    author: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    faction: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    army: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    armyRules:{
        type: String,
        required:true
    },
    points: {
        type: Number,
        required: true,
    },
    unitsNumber: {
        type: Number,
        required: true,
    },
    figurinesNumber: {
        type: Number,
        required: true,
    },
    detachments: [
        {
            name: {
                type: String,
            },
            faction: {
                type: String,
            },
            army: {
                type: String,
                lowercase: true,
                trim: true
            },
            rules: {
                type: String
            },
            optimisations: [
                {
                    option_name: {
                        type: String,
                    },
                    description: {
                        type: String,
                    },
                    cost: {
                        type: Number,
                    }
                }
            ],
            stratagems: [
                {
                    stratagem_name: {
                        type: String,
                    },
                    cost: {
                        type: Number,
                    },
                    description: {
                        type: String,
                    }
                }
            ]
        }
    ],
    units: [
        {
            faction: {
                type: String,
            },
            army: {
                type: String,
            },
        
            unite: {
                type: String,
            },
            type: {
                type: String,
            },
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
            armes:[ {
                type: Map,
                of: new Schema({
                    name: String,
                    selected: { type: Boolean, default: false },
                    portee: Number,
                    attaque: Number,
                    force: Number,
                    C_T: Number,
                    PA: Number,
                    degats: Number,
                    capacites: [String]
                })
            }],
            aptidudes: [
                {
                    name: {
                        type: String,
                    },
                    description: String
                }
            ],
            aptidudes_base: [
                {
                    name: {
                        type: String,
                    },
                    description: String
                }
            ],
            mots_cles: [String], // Mots-clés pour l'unité
        }
    ]
});

module.exports = mongoose.model('lists', listSchema);




