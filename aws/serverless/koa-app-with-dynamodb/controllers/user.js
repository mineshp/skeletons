const { retrieveUser, saveUser } = require('../db/user');

const getUser = async (ctx) => {
  const { userId } = ctx.params;

  const payload = {
    TableName: process.env.USERS_TABLE,
    userId
  };

  ctx.body = await retrieveUser(payload);
};

const addUser = async (ctx) => {
  const { userId, name } = ctx.request.body;

  const payload = {
    TableName: process.env.USERS_TABLE,
    userId,
    name
  };

  ctx.body = await saveUser(payload);
};

module.exports = {
  getUser,
  addUser
};

