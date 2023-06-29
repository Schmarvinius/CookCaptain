const { sUser } = require('../../model/user-model');
const { sRecipe } = require('../../model/recipe-model');
const { errorHandler, bodyerror } = require('../errorHandler');
const { updateUser } = require('../user/update-user-controller');

const addlikeRecipe = async (req,res) => { 
    if (!bodyerror(["email", "recipeId"],req.body)) {
        return res.status(400).send(`Some required data wasn't passed`);
    }

    const { email, recipeId, ...updateData } = req.body;
    
// Successfull response responds with old data ???
// Recipe ID isnt displayed in the response but exists in user

    await sRecipe.find({_id: recipeId})
        .then(async (fetchedRecipe) => {
            if (fetchedRecipe) {
                await sUser.findOneAndUpdate({ email: email },{ $addToSet: {likedRecipes: recipeId}})
                .then((updatedUser) => {
                    if (updatedUser) {
                        console.log('User updated:', updatedUser);
                        res.status(200).json(updatedUser);
                    } else {
                        console.log('User not found.');
                        res.status(404).json({ error: 'User not found' });
                    }
                })
                .catch((err) => {
                    errorHandler(err,res);
                })
            } else {
                console.log('Recipe not found.');
                res.status(404).json({ error: 'Recipe not found' });
            }
        })
        .catch((err) => {
            errorHandler(err,res);
        });
}
const unlikeRecipe = async (req, res) => {
    if (!bodyerror(['email', 'recipeId'], req.body)) {
      return res.status(400).send(`Some required data wasn't passed`);
    }
  
    const { email, recipeId, ...updateData } = req.body;
  
    await sRecipe
      .find({ _id: recipeId })
      .then(async (fetchedRecipe) => {
        if (fetchedRecipe) {
          await sUser
            .findOneAndUpdate({ email: email }, { $pull: { likedRecipes: recipeId } })
            .then((updatedUser) => {
              if (updatedUser) {
                console.log('User updated:', updatedUser);
                // Omitting the recipeId from the response
                const { likedRecipes, ...userWithoutRecipeId } = updatedUser.toObject();
                res.status(200).json(userWithoutRecipeId);
              } else {
                console.log('User not found.');
                res.status(404).json({ error: 'User not found' });
              }
            })
            .catch((err) => {
              errorHandler(err, res);
            });
        } else {
          console.log('Recipe not found.');
          res.status(404).json({ error: 'Recipe not found' });
        }
      })
      .catch((err) => {
        errorHandler(err, res);
      });
  };

module.exports = {
    addlikeRecipe,
    unlikeRecipe,
}