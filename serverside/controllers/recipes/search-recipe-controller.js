const mongoose = require('mongoose');
const {sRecipe} = require('../../model/recipe-model.js');
const {errorHandler} = require('../errorHandler');

const getRecipeByID = async (req,res) =>{
    const ids = req.body._ids;

    const validIds = ids.filter(id => mongoose.Types.ObjectId.isValid(id)); 
    console.log("file: search-recipe-controller.js:8 ~ getRecipeByID ~ validIds:", validIds)
    const invalidIds = ids.filter((id) => !mongoose.Types.ObjectId.isValid(id));
    console.warn("file: search-recipe-controller.js:9 ~ getRecipeByID ~ invalidIds:", invalidIds)

    sRecipe.find({ _id: { $in: validIds } })
    .then(recipes => {
        if (recipes.length === 0) {
            return res.status(404).json({"error" : 'No Recipes were found with the IDs', ids})    
        }else{
            return res.status(200).json(recipes);
        }
        
    })
    .catch(error => {
        errorHandler(error,res);
    });
}
const getRecipeByName = async (req,res) => {
    const name = req.body.name;
    const regex = new RegExp(name, 'i');
    sRecipe.find({name : regex})
    .then(recipes => {
        if (recipes.length === 0) {
            return  res.status(404).json({"error" : `No Recipes with the Name : ${name} were found`})    
        } else{
            return res.status(200).json(recipes)
        }
    })
    .catch(error => {
        errorHandler(error,res)
    })
}
const getRecipeByAuthor = async (req,res) => {
    const author = req.body.name;
    sRecipe.find({author : author})
    .then(recipes => {
        if (recipes.length === 0) {
            return  res.status(404).json({"error" : `No Recipes with the Name : ${name} were found`})    
        } else{
            return res.status(200).json(recipes)
        }
    })
    .catch(error => {
        errorHandler(error,res)
    })
}




module.exports = {
    getRecipeByName,
    getRecipeByAuthor,
    getRecipeByID
}
