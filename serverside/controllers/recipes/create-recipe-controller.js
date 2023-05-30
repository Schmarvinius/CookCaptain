const {sRecipe} = require('../../model/recipe-model.js');
const {errorHandler} = require('../errorHandler');

const addRecipe = async (req,res) => {
    const newRecipe = new sRecipe(req.body);
    newRecipe.save()
    .then((newRecipe) => {
      console.log('Document saved successfully:', newRecipe);
      return res.status(200).json(newRecipe);
    })
    .catch((error)=>  {
        errorHandler(error, res); 
    });
}


module.exports = {
    addRecipe,
  };