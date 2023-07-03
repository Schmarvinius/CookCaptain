const { errorHandler, bodyerror } = require('../errorHandler.js');
const mongoose = require('mongoose');

const { sRecipe } = require('../../model/recipe-model.js');
const { sUser } = require('../../model/user-model.js');

const getLikedRecipe = async (req,res) => { 
    if (!req.user.email) {
        return res.status(400).send(`Some required data wasn't passed`);
    }

    email = req.user.email;
    sUser.find({email: email})
    .then(async (fetchedUser) => {
        if (fetchedUser) {
            var recipes = new Array();
            for (recipe of fetchedUser[0].likedRecipes) {
                await sRecipe.find({_id: recipe})
                .then((fetchedRecipe) => {
                    if (fetchedRecipe && fetchedRecipe.length > 0) {
                        recipes.push(fetchedRecipe[0]);
                    }
                })
                .catch((err) => {
                    errorHandler(err,res);
                })
            }
            
            return res.status(200).send(recipes);
        } else {
            return res.status(404).send(`User with ID: ${email} doesn't exist`);
        }
    })
    .catch((err) => {
        errorHandler(err,res);
    })
}

const getCreatedRecipe = async (req,res) => {
    if (!req.user.email) {
        return res.status(400).send(`Some required data wasn't passed`);
    }

    email = req.user.email;
    sUser.find({email: email})
    .then(async (fetchedUser) => {
        if (fetchedUser) {
            //check if isArray else crash
            var recipes = new Array();
            for (recipe of fetchedUser[0].createdRecipes) {
                if (mongoose.Types.ObjectId.isValid(recipe)) {
                    await sRecipe.find({_id: recipe})
                    .then((fetchedRecipe) => {
                        if (fetchedRecipe && fetchedRecipe.length > 0) {
                            recipes.push(fetchedRecipe[0]);
                        }
                    })
                    .catch((err) => {
                        errorHandler(err,res);
                    })
                }
                
            }
            return res.status(200).send(recipes);
        } else {
            return res.status(404).send(`User with ID: ${email} doesn't exist`);
        }
    })
    .catch((err) => {
        errorHandler(err,res);
    })
}

module.exports = {
    getCreatedRecipe,
    getLikedRecipe
}