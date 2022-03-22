const express = require('express');
const rescue = require('express-rescue');
const { PORT, ERROR } = require('./src/utils/values.js')

const LoginController = require('./src/controllers/LoginController');

const app = express();

app.use('/login', LoginController);

app.use((error, req, res, _next) => {
  console.log({error});
  return res.status(ERROR).json({message: 'Error interno!'});
});

app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}`));
