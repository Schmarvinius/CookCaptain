const {sRecipe} = require('../model/recipe-model.js');

const addRecipe = async (req,res) => {
    const newRecipe = new sRecipe(req.body);
    newRecipe.save()
    .then((newRecipe) => {
      console.log('Document saved successfully:', newRecipe);
      return res.status(200).json(newRecipe);
    })
    .catch((error) => {
      console.error('Error saving document:', error);
      return res.status(500).json(error);
    });
}
//! Querry for IDs
// { "$or": [{ "_id": ObjectId("6470a946c38f12fec02ff3f6") }, { "_id": ObjectId("6470aa7c7fd9bf1db9fb5d2f") }] }

module.exports = {
    addRecipe
  };