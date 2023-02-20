const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4200;

app
  .use('./static', express.static(path.resolve(__dirname, 'app', 'static')))
  .get('/*', (req, res) => res.sendFile(path.resolve('app', 'index.html')))
  .listen(port, () => console.log(`Server running at http://localhost:${port}/`));
