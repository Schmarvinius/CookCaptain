const express = require('express');
const router = require('../routes/recipe-route.js')
function createApp() {
  const app = express();
  const port = 3000;


  //Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/addRecipe', router)

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
