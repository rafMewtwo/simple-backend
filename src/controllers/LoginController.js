const { Router } = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const { SUCCESS } = require('../utils/values');

const LoginRouter = Router();

LoginRouter.use(bodyParser.json());

const LoginService = require('../services/LoginService');

const LoginUser = async (req, res) => {
  const { email } = req.body;

  const resp = await LoginService(email);

  return res.status(resp.status).json({message: resp.message});
}

LoginRouter.post('/', rescue(LoginUser));

module.exports = LoginRouter;
