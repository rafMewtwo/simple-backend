const connection = require('./connection');

const collectionName = 'users';

const findNameByEmail = async (email) => {
  const db = await connection();
  return db.collection(collectionName).findOne({
    email,
  });
};

module.exports = {
  findNameByEmail
}
