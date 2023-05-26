const { MongoClient } = require('mongodb');
const passwort = 'OVJigPqPN3S626vL';
const username = 'admin';

const uri = `mongodb+srv://${username}:${passwort}@cookcaptain.978poqd.mongodb.net/?retryWrites=true&w=majority`;
const dbName = 'CookCaptain';

let db; // Declare the variable to hold the database object
let client;

async function connectDB() {
  try {
    client = await MongoClient.connect(uri);
    db = client.db(dbName);
    console.log('Connected to the database');
  } catch (error) {
    console.log('Error connecting to the database:', error);
  }
}

function getDB() {
  return db;
}
function getClient(){
  return client;
}

module.exports = {
  getClient,
  connectDB,
  getDB
};
