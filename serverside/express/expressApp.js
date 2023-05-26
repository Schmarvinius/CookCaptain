const express = require('express');
function createApp() {
  const app = express();
  const port = 3000;

  // Add your middlewares here
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Add your routes here
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
