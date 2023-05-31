const express = require('express');
const recipeRouter = require('../routes/recipe-route.js');
const userRouter = require('../routes/user-route.js');
function createApp() {
  const app = express();
  const port = 3000;


  //Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/addRecipe', recipeRouter)
  app.use('/api/getRecipe', recipeRouter)
  app.use('/api/deleteRecipe',recipeRouter)
  app.use('/api/updateRecipe',recipeRouter)

  app.use('/api/addUser', userRouter)
  app.use('/api/getUserById', userRouter)
  app.use('/api/getUserByEmail', userRouter)
  app.use('/api/deleteUser', userRouter)
  app.use('/api/updateUser', userRouter)

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
