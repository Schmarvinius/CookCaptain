const {sRecipe} = require('../../model/recipe-model.js');
const { sUser } = require('../../model/user-model.js');
const {errorHandler} = require('../errorHandler');

const addRecipe = async (req,res) => {
    const newRecipe = new sRecipe(req.body);
    newRecipe.save()
    .then(async (newRecipe) => {
      await sUser.findOneAndUpdate({ email: newRecipe._doc.author },{ $addToSet: {createdRecipes: newRecipe.id}})
                .then((updatedUser) => {
                    if (updatedUser) {
                      console.log('Document saved successfully:', newRecipe);
                      return res.status(200).json(newRecipe);
                    } else {
                        console.log('User not found.');
                        res.status(404).json({ error: 'User not found' });
                    }
                })
                .catch((err) => {
                    errorHandler(err,res);
                })
      
    })
    .catch((error)=>  {
        errorHandler(error, res); 
    });
}


module.exports = {
    addRecipe,
  };