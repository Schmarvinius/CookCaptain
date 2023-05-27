const express = require('express');
const { addRecipe, getRecipe } = require('../controllers/recipe-controller.js');

const router = express.Router();
router.post('/',addRecipe)
router.get('/',getRecipe);


module.exports = router;
