const express = require("express");
const {
  addRecipe,
} = require("../controllers/recipes/create-recipe-controller.js");
const {
  getRecipeByID,
  getRecipeByName,
  getRecipeByAuthor,
  preLoadRecipes,
} = require("../controllers/recipes/search-recipe-controller.js");
const {
  deleteRecipe,
} = require("../controllers/recipes/delete-recipe-controller.js");
const {
  updateRecipe,
} = require("../controllers/recipes/update-recipe-controller.js");
const {
  addlikeRecipe,
  unlikeRecipe,
} = require("../controllers/recipes/like-recipe-controller.js");
const {
  getRecommendation,
} = require("../controllers/recipes/recommendations-controller.js");
const {
  getLikedRecipe,
  getCreatedRecipe,
} = require("../controllers/profile/sl-recipes-controller.js");
const verifyToken = require("../controllers/auth");

const router = express.Router();
router.post("/create", verifyToken, addRecipe);
router.post("/id", getRecipeByID);
router.get("/pre", preLoadRecipes);
router.get("/name", getRecipeByName);
router.get("/author", getRecipeByAuthor);
router.get("/likes", verifyToken, getLikedRecipe);
router.get("/created", verifyToken, getCreatedRecipe);
router.get("/recommendation", getRecommendation);
router.delete("/", verifyToken, deleteRecipe);
router.put("/update", updateRecipe);
router.patch("/like", verifyToken, addlikeRecipe);
router.delete("/like", verifyToken, unlikeRecipe);

module.exports = router;
