const express = require('express');
const recipeRouter = require('../routes/recipe-route.js');
const userRouter = require('../routes/user-route.js');
function createApp() {
  const app = express();
  const port = 3000;


  //Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/Recipe', recipeRouter)
  app.use('/api/user', userRouter)


  //Routes 
  app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  return app;
}

module.exports = createApp;
