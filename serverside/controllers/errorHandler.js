const mongoose = require('mongoose');

const handleUndefinedPropertyError = (error, res) => {
  const undefinedPropertyRegex = /Cannot read properties of undefined \(reading '(\w+)'\)/;
  const matches = error.message.match(undefinedPropertyRegex);

  if (matches && matches.length > 1) {
    const propertyName = matches[1];
    res.status(400).json({ error: `Invalid request. ${propertyName} is missing or undefined.` });
    return true;
  }

  return false;
};

const bodyerror = (elements, body) => {

  console.log(elements.every(key => Object.keys(body).includes(key)))

  return check;
}


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
    } 
    else if (handleUndefinedPropertyError(error, res)) {
      // Handled "Cannot read properties of undefined" error
      // The handleUndefinedPropertyError function returns true if the error is handled
      return
    } else {
      //? Handle other types of errors
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
}

module.exports = {
    errorHandler,
    bodyerror
}
