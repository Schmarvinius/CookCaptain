const express = require('express');
const { addRecipe } = require('../controllers/recipe-controller.js');

const router = express.Router();
router.post('/',addRecipe)


module.exports = router;
