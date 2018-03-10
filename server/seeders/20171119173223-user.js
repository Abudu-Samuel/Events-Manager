const bcrypt = require('bcrypt');

require('dotenv').config();

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('users', [{
      firstname: 'David',
      lastname: 'Blind',
      username: 'admin',
      email: 'david@gmail.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Brian',
      lastname: 'Pett',
      username: 'user',
      email: 'pet@gmail.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], { individualHooks: true });
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
