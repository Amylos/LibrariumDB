const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const listSchema = new Schema({
    author: {
        type: String,
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
        trim: true,
    },
    army: {
        type: String,
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
    detachments: {
        name: {
          type: String,
          required: true
        },
        faction: {
          type: String,
          required: true
        },
        army:{
          type:String,
        },
        rules:
          {
            rule_name: {
              type: String,
              required: true
            },
            description: {
              type: String,
              required: true
            }
          }
        ,
        optimisations: [
          {
            option_name: {
              type: String,
              required: true
            },
            description: {
              type: String,
              required: true
            },
            cost: {
              type: Number, // Coût en points
              required: true
            }
          }
        ],
        stratagems: [
          {
            stratagem_name: {
              type: String,
              required: true
            },
            cost: {
              type: Number,
              required: true
            },
            description: {
              type: String,
              required: true
            }
          }
        ]
      },
    units: [
        {
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
        }
    ]
}, { versionKey: false });

module.exports = mongoose.model('lists', listSchema);




