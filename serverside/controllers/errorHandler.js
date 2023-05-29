const mongoose = require('mongoose');

const errorHandler = (error, res) => {
    if (error instanceof mongoose.Error.ValidationError) {
      //? Handle validation errors
      const errorMessage = Object.values(error.errors).map(err => err.message).join(', ');
      res.status(422).json({ error: errorMessage });
    } else if (error instanceof mongoose.Error.CastError) {
      //? Handle CastErrors (invalid ObjectId)
      res.status(400).json({ error: 'Invalid parameter value' });
    } else if (error.code === 11000) {
      //? Handle duplicate key errors 
      const field = error.message.split(':')[2].split('_')[0].trim();
      res.status(409).json({ error: `Duplicate key error: ${field} already exists` });
    } else {
      //? Handle other types of errors
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
}

module.exports = {
    errorHandler
}
