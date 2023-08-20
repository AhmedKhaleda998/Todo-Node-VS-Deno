const express = require('express');
const bodyParser = require('body-parser');

const todoRoutes = require('./routes/todos');

const app = express();

const PORT = 5200;

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('Some middleware!');
  next();
});

app.use(todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port`, PORT);
});