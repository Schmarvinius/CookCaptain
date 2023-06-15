const mongoose = require('mongoose');
const random = require('mongoose-random');
const {sRecipe} = require('../../model/recipe-model.js');
const {errorHandler} = require('../errorHandler.js');

const getRecommendation = async (req,res) =>{

  try {
    const documents = await sRecipe.aggregate([{$sample: {size: 5}}]);
    res.json(documents);
  }
  catch (err) {
    errorHandler(err,res);
  }
  
}

module.exports = {
    getRecommendation
}