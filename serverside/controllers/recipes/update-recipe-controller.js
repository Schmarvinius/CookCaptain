const mongoose = require('mongoose');
const {sRecipe} = require('../../model/recipe-model.js');
const {errorHandler} = require('../errorHandler');


const updateRecipe = async (req,res) => {
    const { recipeID, ...updateData } = req.body;
    console.log(recipeID);
    console.log(updateData);
    await sRecipe.findByIdAndUpdate({_id: recipeID}, updateData, { new: true })
    .then((updatedRecipe) => {
        if (updatedRecipe) {
            console.log('Recipe updated:', updatedRecipe);
            res.status(200).json(updatedRecipe);
          } else {
            console.log('Recipe not found.');
            res.status(404).json({ error: 'Recipe not found' });
          }
    })
    .catch((err) => {
        errorHandler(err,res);
    });
}
module.exports = {
    updateRecipe
}
