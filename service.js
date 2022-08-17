'use strict';
const express = require('express');
// Constants
const PORT = 3000;
const HOST = 0.0.0.0;
const app = express();
app.get('/', (req, res) => {
  res.send(<h2 style="color:Purple"> Docker and Nodejs appdemp </h2>');
});
app.listen(PORT, HOST);
console.log(`Running on ${PORT}`);
