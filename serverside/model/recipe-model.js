const { ServerDescription } = require('mongodb');
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const recipeSchema = new schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  ingredients: [{
    name : String,
    amount : String
    }],
  steps : [{
    step : String,
    instruction : String
    }],
  author: String
},{ collection: 'Recipe'});

const sRecipe  = mongoose.model('Recipe', recipeSchema);
module.exports = {sRecipe};