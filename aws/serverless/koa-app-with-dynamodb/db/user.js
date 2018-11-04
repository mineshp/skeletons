const { dbClient } = require('./dbClient');

const saveUser = async ({ TableName, userId, name }) => {
  const params = {
    TableName,
    Item: {
      userId: userId,
      name: name,
    },
  };

  try {
    (await dbClient.put(params).promise()).Item;
    return JSON.stringify({ userId, name });
  } catch (error) {
    return { error: `AWS - ${error.message}` };
  }
};

const retrieveUser = async ({ TableName, userId }) => {
  const params = {
    TableName,
    Key: {
      userId
    }
  };

  try {
    return (await dbClient.get(params).promise()).Item;
  } catch (error) {
    return { error: `AWS - ${error.message}` };
  }
};

module.exports = {
  retrieveUser,
  saveUser
};
