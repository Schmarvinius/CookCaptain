const { connectDB } = require('./db/database.js');
const createApp = require('./express/expressApp.js');

// const MyClass = require('./myClass');

//! Connect to the database
connectDB();
//! Connect with Port (Express)
const app = createApp();

// await client.close();
// // Instantiate your class
// const myClass = new MyClass();
// myClass.methodUsingDb();