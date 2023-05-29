const mongoose = require('mongoose');
const {sRecipe} = require('../../model/recipe-model.js');
const {errorHandler} = require('../errorHandler');

const deleteRecipe = (req,res) =>{
    recipeID = req.body.recipeID
    console.log(recipeID);
    sRecipe.findByIdAndRemove(recipeID)
    .then((deletedRecipe) => {
    if (deletedRecipe) {
      return res.status(200).send(`Recipe with the ID: ${recipeID} was deleted`);
    } else {
      return res.status(404).send(`No Recipe with the ID: ${recipeID} was found`)
    }
    })
    .catch((err) => {
    errorHandler(err,res)
    });

} 

module.exports = {
    deleteRecipe
}