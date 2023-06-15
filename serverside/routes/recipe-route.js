const express = require('express');
const { addRecipe} = require('../controllers/recipes/create-recipe-controller.js');
const { getRecipeByID , getRecipeByName, getRecipeByAuthor } = require('../controllers/recipes/search-recipe-controller.js');
const { deleteRecipe } = require('../controllers/recipes/delete-recipe-controller.js');
const { updateRecipe } = require('../controllers/recipes/update-recipe-controller.js');
const { likeRecipe } = require('../controllers/recipes/like-recipe-controller.js');
const { getRecommendation }  = require('../controllers/recipes/recommendations-controller.js');

const router = express.Router();
router.post('/create',addRecipe)
router.post('/Id',getRecipeByID);
router.get('/Name',getRecipeByName);
router.get('/Author',getRecipeByAuthor);
router.get('/recommendation', getRecommendation);
router.delete('/',deleteRecipe);
router.put('/update',updateRecipe);
router.patch('/like',likeRecipe);


module.exports = router;
