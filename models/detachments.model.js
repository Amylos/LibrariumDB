const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detachmentSchema = new Schema({
  name: {
    type: String,
    unique:true,
    required: true
  },
  faction: {
    type: String,
    required: true
  },
  army:{
    type:String,
    required:true,
    lowercase:true
  },
  rules: [
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
  ],
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
});

module.exports = mongoose.model('detachment', detachmentSchema);



