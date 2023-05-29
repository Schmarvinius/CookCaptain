const express = require('express');
const { addRecipe} = require('../controllers/recipes/create-recipe-controller.js');
const { getRecipeByID , getRecipeByName, getRecipeByAuthor } = require('../controllers/recipes/search-recipe-controller.js');
const { deleteRecipe } = require('../controllers/recipes/delete-recipe-controller.js');

const router = express.Router();
router.post('/',addRecipe)
router.get('/Id',getRecipeByID);
router.get('/Name',getRecipeByName);
router.get('/Author',getRecipeByAuthor);
router.delete('/',deleteRecipe);


module.exports = router;
