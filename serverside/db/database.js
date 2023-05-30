const mongoose = require('mongoose');

const password = 'OVJigPqPN3S626vL';
const username = 'admin';
const dbName = 'CookCaptain';

// MongoDB connection URI
const uri = `mongodb+srv://${username}:${password}@cookcaptain.978poqd.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Connect to the MongoDB database using Mongoose
async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
    const client = mongoose.connection;
  } catch (error) {
    console.log('Error connecting to the database:', error);
  }
}

// Get the Mongoose connection object
function getClient() {
  return mongoose.connection;
}

module.exports = {
  getClient,
  connectDB,
};
