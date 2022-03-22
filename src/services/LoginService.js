const { findNameByEmail } = require('../models/Users');

const { SUCCESS, ERROR } = require('../utils/values');

const loginUser = async (email) => {
  const userWithoutPassword = await findNameByEmail(email);

  if(userWithoutPassword === null) {
    return { status: 400, message: 'deu tudo errado amigao'}
  } else {
    return {
      status: SUCCESS,
      message: 'deu tudo certo amigao'
    }
  }

}

module.exports = loginUser;
