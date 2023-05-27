const {sRecipe} = require('../model/recipe-model.js');

const addRecipe = async (req,res) => {
    const newRecipe = new sRecipe(req.body);
    newRecipe.save()
    .then((newRecipe) => {
      console.log('Document saved successfully:', newRecipe);
      return res.status(200).json(newRecipe);
    })
    .catch((error)=>  {
        errorHandler(error, res); 
    });
}
const errorHandler = (error, res) => {
    if (error instanceof mongoose.Error.ValidationError) {
      //! Handle validation errors
      const errorMessage = Object.values(error.errors).map(err => err.message).join(', ');
      res.status(422).json({ error: errorMessage });
    } else if (error instanceof mongoose.Error.CastError) {
      //! Handle CastErrors (invalid ObjectId)
      res.status(400).json({ error: 'Invalid parameter value' });
    } else if (error.code === 11000) {
      //! Handle duplicate key errors (MongoDB unique constraint)
      const field = error.message.split(':')[2].split('_')[0].trim();
      res.status(409).json({ error: `Duplicate key error: ${field} already exists` });
    } else {
      //! Handle other types of errors
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }




//! Querry for IDs
// { "$or": [{ "_id": ObjectId("6470a946c38f12fec02ff3f6") }, { "_id": ObjectId("6470aa7c7fd9bf1db9fb5d2f") }] }

module.exports = {
    addRecipe
  };